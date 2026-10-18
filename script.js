/* ===================================================
   PRASUN NANDI — INTERACTIVE ANIMATIONS & LOGIC
   Theme toggle, canvas particles, typewriter, 3D tilt,
   counters, filters, and scroll reveal
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initCursorGlow();
    initParticleCanvas();
    initTypewriter();
    initScrollAnimations();
    initNavbarScroll();
    initMobileNav();
    initProjectFilters();
    init3DTilt();
    initStatsCounter();
});

/* ---------------------------------------------------
   1. Theme Toggle (Dark / Light Mode)
--------------------------------------------------- */
function initThemeToggle() {
    const desktopToggle = document.getElementById('themeToggle');
    const mobileToggle = document.getElementById('mobileThemeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const mobileIcon = mobileToggle ? mobileToggle.querySelector('i') : null;

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    applyTheme(initialTheme);

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        const isLight = theme === 'light';
        const iconClass = isLight ? 'fa-moon' : 'fa-sun';

        if (themeIcon) {
            themeIcon.className = `fas ${iconClass}`;
        }
        if (mobileIcon) {
            mobileIcon.className = `fas ${iconClass}`;
        }

        // Trigger redraw on particle canvas with appropriate colors
        if (window.updateParticleColors) {
            window.updateParticleColors(isLight);
        }
    }

    function toggle() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    }

    if (desktopToggle) desktopToggle.addEventListener('click', toggle);
    if (mobileToggle) mobileToggle.addEventListener('click', toggle);
}

/* ---------------------------------------------------
   2. Interactive Cursor Glow
--------------------------------------------------- */
function initCursorGlow() {
    const glow = document.getElementById('cursorGlow');
    if (!glow) return;

    window.addEventListener('mousemove', (e) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    });
}

/* ---------------------------------------------------
   3. Particle Network Canvas (Theme-Aware)
--------------------------------------------------- */
function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let isLight = document.documentElement.getAttribute('data-theme') === 'light';

    window.updateParticleColors = (lightMode) => {
        isLight = lightMode;
    };

    let particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 15000), 70);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.35;
            this.vy = (Math.random() - 0.5) * 0.35;
            this.radius = Math.random() * 1.5 + 0.8;
            this.type = Math.random() > 0.5 ? 1 : 2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0) this.x = width;
            else if (this.x > width) this.x = 0;

            if (this.y < 0) this.y = height;
            else if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

            if (isLight) {
                ctx.fillStyle = this.type === 1 ? 'rgba(99, 102, 241, 0.45)' : 'rgba(2, 132, 199, 0.45)';
            } else {
                ctx.fillStyle = this.type === 1 ? 'rgba(108, 92, 231, 0.5)' : 'rgba(0, 206, 201, 0.5)';
            }
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 105) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    const lineAlpha = (1 - dist / 105) * (isLight ? 0.12 : 0.15);
                    ctx.strokeStyle = isLight
                        ? `rgba(99, 102, 241, ${lineAlpha})`
                        : `rgba(108, 92, 231, ${lineAlpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

/* ---------------------------------------------------
   4. Typewriter Effect (Friendly, grounded titles)
--------------------------------------------------- */
function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    // Approchable, authentic titles — avoiding overly corporate claims
    const roles = [
        'Software Developer',
        'Full Stack Developer',
        'Generative AI Enthusiast',
        'Java & Python Builder'
    ];

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let speed = 80;

    function type() {
        const currentRole = roles[roleIdx];

        if (isDeleting) {
            el.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
            speed = 40;
        } else {
            el.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
            speed = 85;
        }

        if (!isDeleting && charIdx === currentRole.length) {
            isDeleting = true;
            speed = 1800; // Pause at end of text
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            speed = 350; // Pause before typing next word
        }

        setTimeout(type, speed);
    }

    type();
}

/* ---------------------------------------------------
   5. Scroll Reveal Animations (IntersectionObserver)
--------------------------------------------------- */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

/* ---------------------------------------------------
   6. Dynamic Navbar on Scroll
--------------------------------------------------- */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ---------------------------------------------------
   7. Mobile Navigation Menu
--------------------------------------------------- */
function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('open');
    });

    links.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('open');
        });
    });
}

/* ---------------------------------------------------
   8. Project Category Filter
--------------------------------------------------- */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px) scale(0.96)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ---------------------------------------------------
   9. Subtle 3D Card Tilt on Mouse Move
--------------------------------------------------- */
function init3DTilt() {
    const tiltElements = document.querySelectorAll('[data-tilt]');

    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            el.style.transform = `perspective(1000px) rotateX(${-deltaY * 5}deg) rotateY(${deltaX * 5}deg) translateY(-4px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });
}

/* ---------------------------------------------------
   10. Animated Stats Counter
--------------------------------------------------- */
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    if (!stats.length) return;

    let hasRun = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasRun) {
                hasRun = true;
                stats.forEach(stat => {
                    const target = parseInt(stat.dataset.target, 10);
                    let count = 0;
                    const duration = 1400;
                    const stepTime = Math.max(Math.floor(duration / target), 30);

                    const timer = setInterval(() => {
                        count++;
                        stat.textContent = count;
                        if (count >= target) {
                            stat.textContent = target;
                            clearInterval(timer);
                        }
                    }, stepTime);
                });
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) observer.observe(heroStats);
}
