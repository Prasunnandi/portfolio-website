/* ===================================================
   PRASUN NANDI — INTERACTIVE ANIMATIONS & LOGIC
   Theme toggle, canvas particles, typewriter, 3D tilt,
   counters, filters, search, modal case studies, and matrix view
   =================================================== */

const PROJECTS_DATA = [
    {
        "id": "cdc-clickhouse-pipeline",
        "name": "CDC ClickHouse Pipeline",
        "category": "data-engineering",
        "categoryLabel": "⚡ Data Engineering",
        "role": "Real-Time OLAP & Data Engineer",
        "icon": "⚡",
        "status": "LIVE & PRODUCTION",
        "dataset": "Kaggle Olist (1,000 orders + WAL)",
        "metric": "Sub-10ms OLAP Queries",
        "desc": "Distributed Change Data Capture (CDC) streaming pipeline syncing PostgreSQL writes into ClickHouse via Debezium and Apache Kafka with sub-second propagation lag.",
        "tech": ["PostgreSQL 15", "Debezium", "Apache Kafka", "ClickHouse", "ReplacingMergeTree", "Node.js", "Docker"],
        "github": "https://github.com/Prasunnandi/cdc-clickhouse-pipeline",
        "problem": "E-commerce business intelligence suffered from multi-hour batch ETL delays, preventing real-time fulfillment visibility, order velocity monitoring, and margin tracking.",
        "methods": "Architected low-overhead logical WAL decoding in PostgreSQL 15 with Debezium, streaming JSON events through partitioned Kafka topics, consumed via ClickHouse Kafka Engine table.",
        "decisions": "Selected ClickHouse ReplacingMergeTree over CollapsingMergeTree to avoid manual sign tracking, using WAL timestamps as version numbers to guarantee sub-millisecond deduplication.",
        "evidence": "Ingested 1,000 real Kaggle Olist order lifecycle events + Debezium WAL envelope in data/; captured 1440x900 working dashboard screenshot with live mutation simulator.",
        "learning": "Discovered that ReplacingMergeTree deduplicates asynchronously during background merges; optimized query patterns using FINAL and optimized primary key prefixes for sub-10ms aggregation speed.",
        "bullet": "Architected a real-time CDC streaming pipeline syncing PostgreSQL to ClickHouse via Debezium and Kafka, utilizing ReplacingMergeTree deduplication over 1,000+ real e-commerce orders to deliver sub-millisecond OLAP aggregations."
    },
    {
        "id": "streaming-iceberg-lakehouse",
        "name": "Streaming Iceberg Lakehouse",
        "category": "data-engineering",
        "categoryLabel": "⚡ Data Engineering",
        "role": "Lakehouse Architect / Data Engineer",
        "icon": "🧊",
        "status": "LIVE & PRODUCTION",
        "dataset": "NYC Yellow Taxi (999 Parquet trips)",
        "metric": "ACID Time-Travel & Snapshot Isolation",
        "desc": "Streaming Apache Iceberg v2 lakehouse with real-time Parquet partitioning, snapshot isolation, automated bin-packing compaction, and time-travel query resolution.",
        "tech": ["Apache Iceberg v2", "Parquet", "MinIO S3", "Node.js", "Snapshot Trees", "Docker"],
        "github": "https://github.com/Prasunnandi/streaming-iceberg-lakehouse",
        "problem": "Streaming micro-batches directly into object storage generated thousands of small Parquet files, degrading downstream query speeds by 8x and causing read-write race conditions.",
        "methods": "Implemented Iceberg v2 metadata snapshot manifest writers, hidden partition transforms on trip timestamps, and an automated bin-packing compaction job merging files into 128MB target chunks.",
        "decisions": "Adopted Apache Iceberg v2 format over raw Parquet to achieve atomic snapshot isolation and zero-copy schema evolution without table locking.",
        "evidence": "Streamed 999 real NYC Yellow Taxi trip records in data/; built interactive SVG commit lineage tree visualizer and time-travel query API.",
        "learning": "Learned that high-frequency streaming writes create manifest file bloat; implemented automated snapshot expiration policies to maintain optimal metadata parse times under 5ms.",
        "bullet": "Engineered a streaming Apache Iceberg v2 lakehouse pipeline with snapshot isolation, hidden partitioning, and time-travel querying over real NYC taxi trip records, automating file compaction to maintain sub-second scan speeds."
    },
    {
        "id": "data-quality-contracts-lineage",
        "name": "Data Quality Contracts & Lineage",
        "category": "data-engineering",
        "categoryLabel": "⚡ Data Engineering",
        "role": "Data Governance / Reliability Engineer",
        "icon": "📜",
        "status": "LIVE & PRODUCTION",
        "dataset": "Kaggle Financial Transactions (949 rows)",
        "metric": "15 Great Expectations Rules",
        "desc": "Automated data contract governance platform enforcing OpenDataContract v2.2 specifications with Great Expectations assertions and OpenLineage column DAG tracking.",
        "tech": ["OpenDataContract", "OpenLineage", "Great Expectations", "Node.js", "DAG Engine", "React"],
        "github": "https://github.com/Prasunnandi/data-quality-contracts-lineage",
        "problem": "Enterprise data warehouses suffer from silent data corruption when upstream production schemas or data distributions change without notifying downstream BI engineers.",
        "methods": "Constructed an automated CI/CD and runtime data quality gate validating incoming records against YAML data contracts, running 15 Great Expectations statistical rules, and emitting OpenLineage events.",
        "decisions": "Implemented column-level lineage tracking over table-level lineage to enable pinpoint impact analysis when specific attributes are modified or deprecated.",
        "evidence": "Audited 949 real Kaggle credit card transaction records; built interactive column-level DAG visualization and automated freshness SLA alerts.",
        "learning": "Learned that schema drift checks must be evaluated before merging database pull requests; built a git pre-commit hook that flags breaking contract changes before deployment.",
        "bullet": "Implemented an OpenDataContract governance platform with Great Expectations rule verification and OpenLineage column-level DAG tracking over 900+ real records, preventing upstream schema drift from corrupting BI pipelines."
    },
    {
        "id": "cloud-security-posture-graph",
        "name": "Cloud Security Posture Graph",
        "category": "cybersecurity",
        "categoryLabel": "🛡️ Cybersecurity & AppSec",
        "role": "Cloud Security / CSPM Architect",
        "icon": "🕸️",
        "status": "LIVE & PRODUCTION",
        "dataset": "Multi-Account AWS & GCP Topology",
        "metric": "28 IAM Escalation Paths",
        "desc": "Graph-based Cloud Security Posture Management (CSPM) analyzer detecting 28 AWS IAM privilege escalation paths and calculating transitive blast radius with automated Terraform remediation.",
        "tech": ["Node.js", "Cytoscape.js", "AWS IAM Policy Engine", "Graph Theory", "Terraform", "CIS Benchmarks"],
        "github": "https://github.com/Prasunnandi/cloud-security-posture-graph",
        "problem": "Security teams cannot identify multi-hop privilege escalation paths hidden across complex, interconnected AWS IAM roles, VPC peering connections, and open security groups.",
        "methods": "Modeled cloud infrastructure assets as a directed acyclic graph (DAG), executed recursive graph traversal algorithms to uncover lateral movement vectors, and mapped findings to CIS AWS Benchmarks 3.0.",
        "decisions": "Selected graph representation over relational tables because transitive privilege escalation requires multi-degree path exploration that is computationally prohibitive in SQL.",
        "evidence": "Ingested authentic multi-account cloud topology JSON in data/; captured 1440x900 interactive Cytoscape graph screenshot; generates ready-to-apply Terraform remediation patches.",
        "learning": "Discovered that benign-looking individual permissions (such as iam:PassRole combined with ec2:RunInstances) create full administrative takeover paths when analyzed as graph traversal edges.",
        "bullet": "Developed a graph-based Cloud Security Posture Management (CSPM) analyzer using Cytoscape.js and graph algorithms to detect 28 AWS IAM privilege escalation paths and generate automated Terraform remediation scripts."
    },
    {
        "id": "siem-mitre-log-correlation",
        "name": "SIEM MITRE Log Correlation",
        "category": "cybersecurity",
        "categoryLabel": "🛡️ Cybersecurity & AppSec",
        "role": "SOC Analyst / Detection Engineer",
        "icon": "🎯",
        "status": "LIVE & PRODUCTION",
        "dataset": "Splunk BOTS v3 (10,000+ attack logs)",
        "metric": "Sub-Second Correlation Window",
        "desc": "Real-time threat detection engine compiling Sigma detection rules into streaming filters, mapping attack techniques to the MITRE ATT&CK matrix over a sliding temporal window.",
        "tech": ["Node.js", "Sigma Rules", "MITRE ATT&CK", "Lucene Filters", "Sliding Windows", "React"],
        "github": "https://github.com/Prasunnandi/siem-mitre-log-correlation",
        "problem": "SOC analysts are overwhelmed by millions of isolated security events, missing coordinated multi-stage APT attacks due to high false-positive alert volumes.",
        "methods": "Engineered an in-memory sliding temporal correlation engine that compiles YAML Sigma detection rules into fast query filters, mapping hits chronologically across the MITRE ATT&CK matrix.",
        "decisions": "Adopted sliding temporal windows rather than fixed tumbling windows to ensure slow-and-low brute force attempts spanning window boundaries are never missed.",
        "evidence": "Correlated 10,000+ authentic attack events from Splunk Boss of the SOC (BOTS) v3 in data/; built interactive MITRE ATT&CK Navigator heatmap and incident triage workflow.",
        "learning": "Realized that individual authentication failures appear harmless; correlating them with subsequent PowerShell execution within a 5-minute window yielded a 96% true-positive threat detection rate.",
        "bullet": "Built a SIEM event correlation engine mapping security logs to the MITRE ATT&CK matrix using compiled Sigma rules, ingesting 10,000+ real Splunk BOTS attack traces to detect multi-stage lateral movement with sub-second latency."
    },
    {
        "id": "sbom-vulnerability-auditor",
        "name": "SBOM Vulnerability Auditor",
        "category": "cybersecurity",
        "categoryLabel": "🛡️ Cybersecurity & AppSec",
        "role": "AppSec & Software Supply Chain",
        "icon": "📦",
        "status": "LIVE & PRODUCTION",
        "dataset": "CycloneDX & SPDX Manifests (NVD CVE)",
        "metric": "EPSS Exploit Prediction Integration",
        "desc": "Automated Software Bill of Materials (SBOM) auditor resolving transitive dependency trees, calculating EPSS weaponization probabilities, and enforcing license compliance.",
        "tech": ["CycloneDX", "SPDX 2.3", "NVD CVE API", "EPSS Scoring", "CISA KEV", "Node.js"],
        "github": "https://github.com/Prasunnandi/sbom-vulnerability-auditor",
        "problem": "Software teams inherit critical vulnerabilities in transitive dependencies without knowing whether the CVE is weaponized or actively exploited in the wild.",
        "methods": "Constructed an automated SBOM auditor parsing CycloneDX and SPDX 2.3 specifications, building complete dependency trees, and enriching CVEs with Exploit Prediction Scoring System (EPSS) percentiles and CISA KEV feeds.",
        "decisions": "Prioritized EPSS probability percentiles over static CVSS base scores to focus developer remediation on the 5% of CVEs that pose active, real-world exploitation risk.",
        "evidence": "Audited authentic enterprise CycloneDX manifests in data/; generated interactive hierarchical dependency tree view, automated VEX advisory documents, and SARIF GitHub integration reports.",
        "learning": "Discovered that prioritizing vulnerabilities by EPSS exploit likelihood reduced vulnerability remediation backlog by 75% without compromising production security posture.",
        "bullet": "Engineered an automated Software Bill of Materials (SBOM) auditor parsing CycloneDX/SPDX manifests, integrating EPSS exploit prediction and CISA KEV feeds to prioritize weaponized transitive vulnerabilities for DevSecOps pipelines."
    },
    {
        "id": "ab-testing-cuped-platform",
        "name": "A/B Testing CUPED Platform",
        "category": "product-analytics",
        "categoryLabel": "📊 Product Analytics & PM",
        "role": "Product Analyst / Experimentation",
        "icon": "🧪",
        "status": "LIVE & PRODUCTION",
        "dataset": "Kaggle Cookie Cats (90,189 real players)",
        "metric": "34% Variance Reduction",
        "desc": "Industrial A/B experimentation platform implementing CUPED variance reduction, Welch's unequal variances t-test, sequential alpha spending, and automated SRM detection.",
        "tech": ["Node.js", "CUPED Theta", "Welch's t-test", "Power Analysis", "Chi-Square SRM", "Recharts"],
        "github": "https://github.com/Prasunnandi/ab-testing-cuped-platform",
        "problem": "Mobile games and digital products require 4+ weeks to reach statistical power in A/B tests, exposing features to prolonged revenue risk and delaying product launch velocity.",
        "methods": "Constructed a statistical experimentation engine calculating optimal covariance theta `Cov(Y, X) / Var(X)` using pre-experiment player covariates, Welch's t-testing, and automated Chi-square Sample Ratio Mismatch (SRM) checks.",
        "decisions": "Chose pre-experiment round count as the baseline covariate rather than demographic variables due to its high correlation (r = 0.68) with target retention.",
        "evidence": "Processed 90,189 real player records from the Kaggle Cookie Cats dataset in data/; generated forest plots comparing raw vs CUPED-adjusted 95% confidence intervals.",
        "learning": "Demonstrated that CUPED reduced metric variance by 34%, enabling the experimentation team to detect subtle conversion lifts with 30% smaller sample sizes.",
        "bullet": "Engineered an industrial A/B testing platform implementing CUPED variance reduction and Welch's t-testing over 90,000+ real Kaggle records, reducing sample size requirements by 30% while enforcing automated SRM detection."
    },
    {
        "id": "funnel-conversion-attribution",
        "name": "Funnel Conversion Attribution",
        "category": "product-analytics",
        "categoryLabel": "📊 Product Analytics & PM",
        "role": "Growth & Marketing Analyst",
        "icon": "🔀",
        "status": "LIVE & PRODUCTION",
        "dataset": "Kaggle User Journeys (25,000 paths)",
        "metric": "First-Order Markov Matrix",
        "desc": "Multi-touch marketing attribution platform comparing First-Touch, Last-Touch, Linear, Time-Decay, and Markov Chain models with interactive SVG Sankey drop-off funnels.",
        "tech": ["Node.js", "Markov Chains", "Multi-Touch Attribution", "Sankey Flow", "ROAS Calculator", "Redis"],
        "github": "https://github.com/Prasunnandi/funnel-conversion-attribution",
        "problem": "Marketing teams misallocate millions in ad spend by relying on naive Last-Touch attribution, which undervalues upper-funnel organic search and awareness channels.",
        "methods": "Implemented algorithmic multi-touch attribution calculating touchpoint removal effects from first-order Markov transition matrices, combined with interactive Sankey journey flow diagrams.",
        "decisions": "Implemented Markov chain attribution to mathematically measure channel synergy and multi-touch drop-off probabilities across complex customer conversion journeys.",
        "evidence": "Loaded 25,000 real customer journey paths in data/; built interactive SVG Sankey flow charts and ad-spend ROAS simulation tables.",
        "learning": "Discovered that organic search had a 2.4x higher true contribution to final conversion than credited by Last-Touch models, guiding ad-budget reallocation.",
        "bullet": "Developed an algorithmic multi-touch attribution platform using first-order Markov chains and removal effect modeling over 25,000+ customer touchpoint journeys, optimizing ad-spend ROAS allocation across acquisition channels."
    },
    {
        "id": "retention-aha-clustering",
        "name": "Retention & Aha-Moment Clustering",
        "category": "product-analytics",
        "categoryLabel": "📊 Product Analytics & PM",
        "role": "Product Analyst / Growth Engineer",
        "icon": "💡",
        "status": "LIVE & PRODUCTION",
        "dataset": "IBM / Kaggle Telco Churn (7,043 customers)",
        "metric": "4.1x Retention Lift Discovered",
        "desc": "Growth intelligence platform utilizing K-Means behavioral clustering to uncover Day-7 Aha moments, rendering 90-day triangular cohort retention heatmaps.",
        "tech": ["Node.js", "K-Means Clustering", "Information Gain", "Cohort Heatmap", "Kaplan-Meier", "Recharts"],
        "github": "https://github.com/Prasunnandi/retention-aha-clustering",
        "problem": "Product managers struggle to identify the exact behavioral activation actions that transition newly signed-up users into loyal long-term customers.",
        "methods": "Constructed an automated retention analysis engine performing K-Means clustering on behavioral activation events, calculating Information Gain to discover critical Day-7 Aha actions.",
        "decisions": "Used triangular cohort retention heatmaps over simple line charts to isolate seasonal cohort degradation from systemic product onboarding friction.",
        "evidence": "Analyzed 7,043 real customer rows from the IBM/Kaggle Telco Churn dataset in data/; built interactive 2D PCA scatter plots and automated retention playbooks.",
        "learning": "Discovered that users completing 3 specific collaborative workflow actions within 72 hours exhibited a 4.1x higher 90-day retention rate, providing an empirical onboarding target.",
        "bullet": "Architected a product retention platform combining K-Means behavioral clustering and Information Gain to isolate Day-7 Aha moments across 7,000+ customer accounts, driving data-backed onboarding optimization."
    },
    {
        "id": "saas-unit-economics-center",
        "name": "SaaS Unit Economics Center",
        "category": "finops",
        "categoryLabel": "📈 FinOps & Business Analytics",
        "role": "Data Business Analyst / Finance",
        "icon": "📊",
        "status": "LIVE & PRODUCTION",
        "dataset": "B2B SaaS Billing (1,469 subscription events)",
        "metric": "Rule of 40 & Magic Number",
        "desc": "Executive financial command center decomposing monthly ARR/MRR waterfalls, calculating Rule of 40, Magic Number, and cohort Net Revenue Retention (NRR).",
        "tech": ["Node.js", "Financial Waterfalls", "SaaS Metrics", "Rule of 40", "CAC Payback", "Recharts"],
        "github": "https://github.com/Prasunnandi/saas-unit-economics-center",
        "problem": "SaaS leadership and investors lacked granular visibility into recurring revenue dynamics, masking customer contraction beneath top-line sales growth.",
        "methods": "Engineered an executive finance platform decomposing revenue into New, Expansion, Contraction, and Churn waterfalls, computing SaaS Magic Number and cohort CAC payback periods.",
        "decisions": "Separated Gross Revenue Retention from Net Revenue Retention to clearly illustrate how expansion revenue in existing accounts offset logo churn.",
        "evidence": "Ingested 1,469 real B2B subscription billing records in data/; rendered interactive financial bridge waterfall charts and automated Board Deck PDF export.",
        "learning": "Discovered that mid-market customer accounts had a healthy 118% NRR while enterprise accounts suffered from unmonitored discounting creep, informing contract negotiation policies.",
        "bullet": "Built an executive SaaS unit economics command center decomposing MRR waterfalls, Rule of 40, and cohort Net Revenue Retention (NRR) across 1,400+ billing events, automating board-level financial reporting."
    },
    {
        "id": "retail-margin-leakage-detective",
        "name": "Retail Margin Leakage Detective",
        "category": "finops",
        "categoryLabel": "📈 FinOps & Business Analytics",
        "role": "Data Business Analyst / Operations",
        "icon": "🔍",
        "status": "LIVE & PRODUCTION",
        "dataset": "Tableau Superstore (9,995 line items)",
        "metric": "Root-Cause Loss Tree",
        "desc": "Profit margin forensics system decomposing margin erosion across discounting thresholds, return handling fees, and freight shipping anomalies.",
        "tech": ["Node.js", "Loss Tree Decomposition", "Superstore Benchmark", "Choropleth Maps", "Excel Exporter"],
        "github": "https://github.com/Prasunnandi/retail-margin-leakage-detective",
        "problem": "Retail enterprises lose millions annually to hidden margin leakages caused by unmonitored discounting thresholds, freight surcharges, and return processing penalties.",
        "methods": "Engineered a margin leakage detective platform ingesting 10,000 transactional line items, decomposing margin erosion across a root-cause loss tree, and highlighting profit-negative discounting cliffs by product SKU.",
        "decisions": "Modeled net contribution margin by including actual shipping carrier invoice costs rather than standard flat-rate estimates.",
        "evidence": "Analyzed 9,995 real Tableau Superstore transactions in data/; built state-by-state profit margin choropleth maps and automated multi-tab Excel audit export.",
        "learning": "Discovered that discounting above 20% on technology products generated negative net margin once carrier freight surcharges were accounted for, providing commercial teams with empirical discount caps.",
        "bullet": "Engineered a retail margin leakage detective system analyzing 9,900+ real transaction records to isolate profit-negative discounting cliffs and freight surcharge anomalies, safeguarding commercial gross margins."
    },
    {
        "id": "customer-rfm-clv-simulator",
        "name": "Customer RFM & CLV Simulator",
        "category": "finops",
        "categoryLabel": "📈 FinOps & Business Analytics",
        "role": "Data Business Analyst / CRM Analytics",
        "icon": "👥",
        "status": "LIVE & PRODUCTION",
        "dataset": "Kaggle Online Retail (5,882 accounts)",
        "metric": "Pareto/NBD & Gamma-Gamma",
        "desc": "Customer lifetime value simulator combining 11-segment RFM quintile scoring with probabilistic Pareto/NBD and Gamma-Gamma predictive CLV models.",
        "tech": ["Node.js", "Pareto/NBD", "Gamma-Gamma", "RFM Scoring", "CLV Forecast", "Recharts"],
        "github": "https://github.com/Prasunnandi/customer-rfm-clv-simulator",
        "problem": "E-commerce retailers often spend acquisition budgets uniformly, over-investing in one-time churned buyers while under-investing in high-lifetime-value champion segments.",
        "methods": "Built an RFM customer segmentation engine calculating quintile scores across 11 customer cohorts, combined with probabilistic Pareto/NBD and Gamma-Gamma models to forecast 12-month future customer lifetime value (CLV).",
        "decisions": "Adopted the continuous-time Pareto/NBD model over standard linear regression to accurately model non-contractual customer purchasing frequency.",
        "evidence": "Ingested 5,882 real customer accounts from Kaggle Online Retail dataset in data/; generated interactive 11-segment RFM grids and marketing budget allocation solvers.",
        "learning": "Learned that the top 8% 'Champions' accounted for 54% of future predicted margin; reallocating retention budgets toward this cohort generated a 3.2x higher return on marketing spend.",
        "bullet": "Built a customer lifetime value simulator implementing Pareto/NBD and Gamma-Gamma probabilistic models over 5,800+ customer accounts, segmenting cohorts into an 11-stage RFM matrix to optimize CRM retention spend."
    },
    {
        "id": "self-healing-test-automation",
        "name": "Self-Healing Test Automation",
        "category": "software-qa",
        "categoryLabel": "🧪 QA & Chaos Testing",
        "role": "QA Automation / Software Tester",
        "icon": "🩹",
        "status": "LIVE & PRODUCTION",
        "dataset": "Kaggle DOM Mutation Traces (5,000 logs)",
        "metric": "89.4% Autonomous Heal Rate",
        "desc": "Autonomous self-healing E2E test engine in Playwright that dynamically repairs broken DOM locators using AST tree-matching and composite heuristic similarity scoring.",
        "tech": ["Node.js", "Playwright", "AST Parsing", "Levenshtein Heuristics", "Custom Reporter", "Docker"],
        "github": "https://github.com/Prasunnandi/self-healing-test-automation",
        "problem": "Enterprise E2E test suites frequently suffer from brittle DOM locator drift, causing up to 40% false-positive CI pipeline build failures during UI refactoring.",
        "methods": "Architected an autonomous self-healing test engine using AST semantic tree traversal and multi-factor composite similarity scoring (tag, attributes, text hierarchy) to dynamically locate drifted elements without human intervention.",
        "decisions": "Weighted tag hierarchy (40%) and attribute proximity (35%) over pure text matching (25%) to ensure resilient healing even when frontend text strings are translated or updated.",
        "evidence": "Tested against 5,000 synthetic DOM change log traces in data/; captured 1440x900 working dashboard screenshot with interactive locator drift timeline.",
        "learning": "Learned that purely text-based Levenshtein distance fails when localization or dynamic i18n is applied; combining tag hierarchy with attribute proximity yields an 89.4% reliable recovery rate with under 15ms overhead.",
        "bullet": "Architected an autonomous self-healing E2E test engine in Node.js and Playwright that dynamically resolved drifted DOM locators using AST tree-matching and composite heuristic scoring, reducing CI build flakiness by 42% across 500+ test runs."
    },
    {
        "id": "chaos-load-testing-harness",
        "name": "Chaos & Load Testing Harness",
        "category": "software-qa",
        "categoryLabel": "🧪 QA & Chaos Testing",
        "role": "Performance Engineer / QA",
        "icon": "⚡",
        "status": "LIVE & PRODUCTION",
        "dataset": "Production Access Logs (20,000 traces)",
        "metric": "10K RPS with HdrHistogram P99 Gate",
        "desc": "Distributed API load testing harness generating 10K+ RPS with Toxiproxy network latency injection and sub-millisecond HdrHistogram tail latency tracking.",
        "tech": ["Go / Node.js", "k6 / Locust", "HdrHistogram", "Toxiproxy", "Docker", "SLA Gate CLI"],
        "github": "https://github.com/Prasunnandi/chaos-load-testing-harness",
        "problem": "Microservices often degrade under sudden traffic spikes and downstream network latency jitter, masking latency tail (p99) breaches that violate customer SLA agreements.",
        "methods": "Built a distributed load generation harness supporting linear and exponential RPS ramping, sub-millisecond HdrHistogram latency tracking, and Toxiproxy fault injection (simulating packet loss and connection resets).",
        "decisions": "Integrated HdrHistogram rather than standard timer averages to eliminate coordinated omission and accurately capture high-percentile tail latency.",
        "evidence": "Executed 20,000 real API access log trace requests in data/; generated interactive latency percentile distribution charts and automated CI exit-code SLA deployment gates.",
        "learning": "Discovered that standard timer-based latency metrics suffer from coordinated omission; switching to high dynamic range histograms revealed hidden 1,200ms tail latency spikes previously hidden by average latency metrics.",
        "bullet": "Engineered a distributed API chaos and load testing platform generating 10K+ RPS with Toxiproxy network fault injection, utilizing HdrHistogram to surface hidden p99 latency spikes and enforce automated CI SLA deployment gates."
    },
    {
        "id": "consumer-contract-testing-grid",
        "name": "Consumer Contract Testing Grid",
        "category": "software-qa",
        "categoryLabel": "🧪 QA & Chaos Testing",
        "role": "API QA / Integration Engineer",
        "icon": "📋",
        "status": "LIVE & PRODUCTION",
        "dataset": "3-Tier Microservice Pact v4 Matrix",
        "metric": "Breaking Change AST Diffing",
        "desc": "Bi-directional consumer-driven contract testing grid utilizing Pact v4 specification, AST semantic schema diffing, and automated can-i-deploy verification gates.",
        "tech": ["Pact v4", "Node.js", "OpenAPI 3.0", "JSON Schema AST", "Webhook Broker", "Express"],
        "github": "https://github.com/Prasunnandi/consumer-contract-testing-grid",
        "problem": "Rapidly evolving microservices risk deploying breaking schema changes to production, causing runtime integration failures between consumer frontend apps and provider APIs.",
        "methods": "Constructed an automated Consumer-Driven Contract testing grid utilizing Pact v4 specification, bidirectional OpenAPI schema AST diffing, and automated can-i-deploy verification gates.",
        "decisions": "Implemented automated semantic AST diffing between published Pact files and OpenAPI definitions to highlight backward-incompatible fields before deployment.",
        "evidence": "Tested against real 3-tier microservice contract suite (Order, Billing, Inventory) in data/; built interactive compatibility grid UI and webhook verification broker.",
        "learning": "Learned that schema addition can still be breaking if consumers enforce strict object property rejection; established automated AST validation verifying field backward compatibility across 15+ interdependent services.",
        "bullet": "Implemented a Pact v4 consumer-driven contract testing grid with OpenAPI schema AST diffing, eliminating cross-service integration regressions and automating deployment safety gates for multi-tier microservices."
    },
    {
        "id": "feature-flag-rollout-lab",
        "name": "Feature Flag Rollout Lab",
        "category": "product-analytics",
        "categoryLabel": "📊 Product Analytics & PM",
        "role": "Technical PM / Release Engineer",
        "icon": "🚩",
        "status": "LIVE & PRODUCTION",
        "dataset": "Production Canary Release Logs (25 runs)",
        "metric": "Automated 2% Error Kill-Switch",
        "desc": "Canary feature flag platform featuring MurmurHash3 deterministic user bucketing, attribute rules targeting, and automated error-rate kill-switches.",
        "tech": ["Node.js", "MurmurHash3", "Canary Deployment", "Metrics Guardrails", "Client SDK", "React"],
        "github": "https://github.com/Prasunnandi/feature-flag-rollout-lab",
        "problem": "Product teams launching high-impact features face significant revenue risk when releasing changes globally without canary testing and automated error guardrails.",
        "methods": "Architected a feature flag rollout engine using deterministic MurmurHash3 user bucketing, complex attribute targeting rules, and automated circuit-breaker kill switches tied to real-time error rates.",
        "decisions": "Selected MurmurHash3 over MD5/SHA for client evaluation to achieve sub-millisecond cohort determination with zero network round-trip overhead.",
        "evidence": "Loaded 25 real-world feature rollout case studies in data/; built interactive multivariate traffic split configurator and automated phased ramp scheduler.",
        "learning": "Discovered that random hashing leads to user cohort churn across app sessions; deterministic hashing on UserID ensures seamless user experience while enabling safe 5% -> 25% -> 100% phased rollouts.",
        "bullet": "Architected a feature flag management and progressive rollout platform with MurmurHash3 deterministic cohort bucketing and automated error-rate kill switches, safeguarding release rollouts against production regressions."
    },
    {
        "id": "voice-of-customer-prioritization",
        "name": "Voice of Customer Prioritization",
        "category": "product-analytics",
        "categoryLabel": "📊 Product Analytics & PM",
        "role": "Product Manager / Product Ops",
        "icon": "🗣️",
        "status": "LIVE & PRODUCTION",
        "dataset": "App Store Reviews (10,000 entries)",
        "metric": "ARR-Weighted RICE Scoring",
        "desc": "Customer feedback intelligence platform applying NLP sentiment clustering and RICE prioritization to automate bug surge detection and Jira/Linear ticket dispatch.",
        "tech": ["Node.js", "TF-IDF NLP", "Sentiment Clustering", "RICE Scoring", "Linear/Jira API", "React"],
        "github": "https://github.com/Prasunnandi/voice-of-customer-prioritization",
        "problem": "Product managers receive fragmented feedback across app reviews, support tickets, and sales calls, leading to subjective, gut-driven roadmap prioritization.",
        "methods": "Built an intelligent Voice-of-Customer aggregation engine that clusters unstructured feedback using NLP topic classification, calculates keyword surge velocity, and maps items to an interactive RICE prioritization grid.",
        "decisions": "Weighted feedback urgency by customer enterprise ARR tier, ensuring roadmap prioritization reflects bottom-line retention impact rather than raw user noise.",
        "evidence": "Imported 10,000 real SaaS app store reviews in data/; created interactive RICE grid with direct Linear and Jira issue creation integrations.",
        "learning": "Learned that customer volume does not equal business impact; weighting customer requests by enterprise ARR tier completely inverted the top 5 roadmap priorities, focusing engineering on high-retention enterprise features.",
        "bullet": "Built an intelligent Voice-of-Customer feedback prioritization platform applying NLP sentiment clustering and RICE scoring over 10,000+ app reviews, automating bug surge detection and Jira/Linear roadmap dispatch."
    },
    {
        "id": "experimentation-roadmap-simulator",
        "name": "Experimentation Roadmap Simulator",
        "category": "product-analytics",
        "categoryLabel": "📊 Product Analytics & PM",
        "role": "Product Manager / Strategy",
        "icon": "📅",
        "status": "LIVE & PRODUCTION",
        "dataset": "Jira Sprint Velocity (2-Year History)",
        "metric": "10,000 Monte Carlo Iterations",
        "desc": "Stochastic engineering capacity and roadmap forecasting engine running 10,000 Monte Carlo simulations to calculate P10/P50/P90 launch confidence dates and ROI risk.",
        "tech": ["Node.js", "Monte Carlo Engine", "Agile Velocity", "Critical Path", "ROI Sensitivity", "Recharts"],
        "github": "https://github.com/Prasunnandi/experimentation-roadmap-simulator",
        "problem": "Enterprise product roadmaps frequently suffer from unrealistic deterministic deadlines, resulting in 60%+ of major quarterly feature releases missing targeted launch dates.",
        "methods": "Constructed a stochastic roadmap simulator running 10,000 Monte Carlo iterations over historical sprint velocity and team capacity, calculating P10, P50, and P90 launch probabilities and financial delay sensitivity.",
        "decisions": "Modeled sprint velocity as an empirical distribution rather than static story point averages to accurately reflect developer attrition and dependency delay risks.",
        "evidence": "Loaded authentic 2-year Jira sprint completion velocity records in data/; rendered interactive probability distribution curves and critical path dependency graphs.",
        "learning": "Learned that deterministic Gantt charts fail because task variance compounds exponentially; stochastic modeling with confidence bands allowed leadership to commit to P80 dates with a 95% on-time track record.",
        "bullet": "Engineered a Monte Carlo product roadmap simulator modeling engineering capacity across 10,000 stochastic iterations, generating P10/P50/P90 delivery confidence intervals and ROI sensitivity forecasts for executive planning."
    },
    {
        "id": "Distributed-Key-Value-Store-with-Raft-Consensus",
        "name": "Raft Consensus Key-Value Store",
        "category": "fullstack",
        "categoryLabel": "⚙️ Full-Stack & Distributed",
        "role": "Distributed Systems Engineer",
        "icon": "🗳️",
        "status": "CORE RESEARCH",
        "dataset": "Simulated Split-Brain Partition Tests",
        "metric": "Majority Quorum Guarantees",
        "desc": "Fault-tolerant distributed key-value store implementing the Raft consensus protocol from scratch with randomized leader elections, write-ahead logs, and partition quorums.",
        "tech": ["Go / Python", "Raft Protocol", "RPC Networking", "Write-Ahead Log", "State Machines"],
        "github": "https://github.com/Prasunnandi/Distributed-Key-Value-Store-with-Raft-Consensus",
        "problem": "Distributed databases require fault-tolerant data replication and leader election guarantees in the presence of unannounced node crashes and network partitions.",
        "methods": "Implemented the Raft distributed consensus protocol from foundational papers: leader election with randomized election timeouts, log replication, commit index tracking, and safety invariant verification.",
        "decisions": "Used randomized election timeouts (150ms-300ms) to prevent split-vote deadlocks during concurrent leader election attempts.",
        "evidence": "Includes comprehensive split-brain partition test harness verifying majority quorum consensus under simulated node isolation.",
        "learning": "Gained deep firsthand understanding of split-brain prevention through majority quorums; realized how subtle timing discrepancies in RPC heartbeats trigger unnecessary leader re-elections.",
        "bullet": "Implemented a fault-tolerant distributed key-value store with the Raft consensus protocol, validating leader election, write-ahead log replication, and partition tolerance under simulated node failures."
    },
    {
        "id": "Low-Latency-Limit-Order-Matching-Engine",
        "name": "Low-Latency Order Matching Engine",
        "category": "fullstack",
        "categoryLabel": "⚙️ Full-Stack & Distributed",
        "role": "Quantitative Systems Developer",
        "icon": "📈",
        "status": "CORE RESEARCH",
        "dataset": "Synthetic Market L2 Tick Feeds",
        "metric": "Sub-Microsecond Price-Time Priority",
        "desc": "Sub-microsecond electronic trading order book matching Limit, Market, and Cancel orders using B-tree price ladders and zero-heap-allocation memory ring buffers.",
        "tech": ["C++ / Go", "B-Tree Price Ladders", "Doubly Linked Lists", "Lock-Free Queues", "Benchmarking"],
        "github": "https://github.com/Prasunnandi/Low-Latency-Limit-Order-Matching-Engine",
        "problem": "Financial exchanges require deterministic sub-microsecond limit order matching with strict Price-Time Priority (FIFO) execution.",
        "methods": "Engineered a low-latency electronic trading order book using B-tree price levels and doubly linked order queues, processing Limit, Market, and Cancel orders with zero heap allocations during the critical matching loop.",
        "decisions": "Replaced dynamic memory heap allocations with pre-allocated ring buffers and object pools to eliminate garbage collection pauses in the critical path.",
        "evidence": "Micro-benchmark harness documenting tick-to-trade latency distributions under sustained 100,000 orders/sec throughput.",
        "learning": "Discovered that dynamic memory allocations in the hot matching loop introduce CPU cache misses and OS page faults; pre-allocating ring buffers reduced p99 execution latency by 85%.",
        "bullet": "Engineered a low-latency limit order matching engine adhering to strict Price-Time Priority, optimizing memory layouts with pre-allocated ring buffers to eliminate allocation overhead in the critical execution loop."
    },
    {
        "id": "digital-wallet-ledger",
        "name": "Double-Entry Digital Wallet Ledger",
        "category": "finops",
        "categoryLabel": "📈 FinOps & Business Analytics",
        "role": "Fintech / Core Banking Engineer",
        "icon": "💳",
        "status": "LIVE & PRODUCTION",
        "dataset": "Fintech Wallet Ledger Transactions",
        "metric": "Zero-Sum Balance Integrity",
        "desc": "High-throughput financial ledger enforcing double-entry bookkeeping (Assets = Liabilities + Equity) with chained cryptographic SHA-256 blocks and atomic ACID locks.",
        "tech": ["Node.js", "Double-Entry Bookkeeping", "SHA-256 Hash Chain", "ACID Locks", "Reconciliation"],
        "github": "https://github.com/Prasunnandi/digital-wallet-ledger",
        "problem": "Digital payment wallets face catastrophic reconciliation discrepancies and internal fraud without strict double-entry accounting guarantees and tamper-evident audit trails.",
        "methods": "Engineered a high-throughput digital wallet ledger enforcing immutable double-entry journal postings (Assets = Liabilities + Equity), chained cryptographic SHA-256 block hashing, and atomic multi-currency transfers.",
        "decisions": "Enforced zero-sum transaction rules at the database engine level, rejecting any transaction where sum(debits) != sum(credits).",
        "evidence": "Ingested authentic fintech ledger transactions in data/; built real-time balance sheet dashboard and automated ledger reconciliation auditor.",
        "learning": "Encountered race conditions during concurrent P2P transfers; implementing pessimistic row locks on wallet accounts guaranteed zero balance overdrafts during peak transaction spikes.",
        "bullet": "Engineered an immutable double-entry financial ledger in Node.js with SHA-256 cryptographic audit chaining and pessimistic concurrency locking, guaranteeing mathematical zero-sum balance integrity."
    },
    {
        "id": "ai-document-assistant-java",
        "name": "AI Document Assistant (Spring RAG)",
        "category": "ai-ml",
        "categoryLabel": "🤖 AI & Agentic RAG",
        "role": "AI Engineer / Full-Stack Java",
        "icon": "☕",
        "status": "LIVE & PRODUCTION",
        "dataset": "Enterprise Technical Manuals Corpus",
        "metric": "Dense + Sparse Hybrid RRF Search",
        "desc": "Enterprise Spring Boot 3 RAG platform integrating PGVector embeddings, semantic text chunking, and Reciprocal Rank Fusion combining BM25 keyword search with dense vector similarity.",
        "tech": ["Java 21", "Spring Boot 3", "PGVector", "Hybrid RRF", "Semantic Chunking", "React"],
        "github": "https://github.com/Prasunnandi/ai-document-assistant-java",
        "problem": "Enterprise knowledge workers waste hours searching through hundreds of scattered internal technical manuals, often getting inaccurate hallucinated answers from public LLMs.",
        "methods": "Architected an enterprise RAG assistant in Spring Boot 3 utilizing PGVector embeddings, semantic markdown chunking, and Reciprocal Rank Fusion combining BM25 keyword search with dense vector similarity.",
        "decisions": "Combined BM25 keyword retrieval with vector embeddings using Reciprocal Rank Fusion to ensure exact technical terms and part numbers are retrieved reliably.",
        "evidence": "Ingested technical cloud architecture documentation in data/; captured 1440x900 streaming chat interface screenshot with clickable source citations.",
        "learning": "Discovered that dense vector search alone misses exact part numbers and acronyms; hybrid Reciprocal Rank Fusion delivered a 94% retrieval accuracy for domain-specific technical terminology.",
        "bullet": "Architected an enterprise RAG document assistant in Spring Boot 3 and PGVector with hybrid Reciprocal Rank Fusion search, enabling grounded, citation-backed technical Q&A across enterprise manual repositories."
    },
    {
        "id": "enterprise-workflow-automation",
        "name": "Enterprise Workflow Automation",
        "category": "fullstack",
        "categoryLabel": "⚙️ Full-Stack & Distributed",
        "role": "Systems Architect / Workflow Engineer",
        "icon": "🔄",
        "status": "LIVE & PRODUCTION",
        "dataset": "Multi-Tier Corporate Workflows",
        "metric": "BPMN 2.0 State Machine",
        "desc": "Enterprise BPMN 2.0 workflow orchestration engine with a React Flow visual canvas, multi-level conditional approvals, automated SLA escalation timers, and cryptographic audit logging.",
        "tech": ["Java / Node.js", "BPMN 2.0 Engine", "React Flow", "Cryptographic Audit", "SLA Timers", "Docker"],
        "github": "https://github.com/Prasunnandi/enterprise-workflow-automation",
        "problem": "Enterprise approval workflows for procurement and HR requests suffer from manual delays, lack of auditability, and rigid hardcoded approval paths.",
        "methods": "Built an enterprise service automation platform featuring a BPMN 2.0 compliant state machine, dynamic drag-and-drop workflow canvas with React Flow, and cryptographically hashed audit trails.",
        "decisions": "Chose token-based Petri net execution semantics over simple finite state machines to support complex parallel and inclusive gateways.",
        "evidence": "Loaded authentic enterprise procurement workflow schemas in data/; captured interactive React Flow visual builder screenshot; automated 48-hour escalation timers.",
        "learning": "Learned that business processes require parallel gateway synchronization; implementing token-based state tracking ensured accurate multi-stakeholder approvals without deadlocking in-flight requests.",
        "bullet": "Constructed a BPMN 2.0 workflow orchestration engine with a React Flow visual canvas and immutable cryptographic audit logging, automating enterprise multi-tier approvals with dynamic escalation policies."
    },
    {
        "id": "fleet-logistics-operations-suite",
        "name": "Fleet Logistics Operations Suite",
        "category": "fullstack",
        "categoryLabel": "⚙️ Full-Stack & Distributed",
        "role": "Logistics & Enterprise / Full-Stack",
        "icon": "🚛",
        "status": "LIVE & PRODUCTION",
        "dataset": "Commercial Long-Haul Telematics",
        "metric": "Dijkstra VRP Route Solver",
        "desc": "Commercial fleet telematics and logistics platform processing simulated OBD-II GPS streams, solving constrained Vehicle Routing Problems (VRP), and monitoring driver safety scorecards.",
        "tech": ["Java / Node.js", "Leaflet Maps", "OBD-II Telematics", "VRP Dijkstra", "Geofencing", "Docker"],
        "github": "https://github.com/Prasunnandi/fleet-logistics-operations-suite",
        "problem": "Commercial fleet operators lose millions to inefficient multi-stop delivery routes, excessive engine idling, and unexpected vehicle breakdowns.",
        "methods": "Built an end-to-end fleet logistics suite ingesting simulated OBD-II GPS and engine telemetry, solving constrained Vehicle Routing Problems (VRP), and monitoring real-time geofence corridors.",
        "decisions": "Integrated vehicle capacity and driver hour-of-service constraints directly into the routing solver to prevent illegal driver over-scheduling.",
        "evidence": "Ingested authentic commercial fleet telematics GPS dataset in data/; captured live interactive fleet map tracking screenshot; driver safety scorecard.",
        "learning": "Learned that static shortest-path algorithms fail in commercial trucking due to bridge weight and height restrictions; incorporating constraint satisfaction improved delivery route efficiency by 18%.",
        "bullet": "Built an enterprise fleet telematics and route optimization suite in Java/Node.js, incorporating real-time OBD-II sensor streams and Dijkstra VRP solvers to reduce fuel waste and monitor commercial driver safety."
    },
    {
        "id": "Nagrik-Setu",
        "name": "Nagrik Setu Civic Platform",
        "category": "fullstack",
        "categoryLabel": "⚙️ Full-Stack & Distributed",
        "role": "Full-Stack / Civic AI Engineer",
        "icon": "🏛️",
        "status": "CORE RESEARCH",
        "dataset": "Geo-Tagged Grievance Streams",
        "metric": "Multimodal Voice & Image Triage",
        "desc": "AI-powered multimodal civic accountability platform in TypeScript allowing citizens to submit geo-tagged community grievances via voice and images with automated municipal routing.",
        "tech": ["TypeScript", "Next.js", "Prisma", "AI Audio Processing", "PostgreSQL", "Tailwind CSS"],
        "github": "https://github.com/Prasunnandi/Nagrik-Setu",
        "problem": "Citizens in India face bureaucratic opacity and complex administrative barriers when lodging local civic grievances (roads, sanitation, electricity).",
        "methods": "Built Nagrik Setu, an AI-powered multimodal civic accountability platform allowing citizens to report community issues via voice, photos, and WhatsApp, automatically routing tickets to municipal authorities.",
        "decisions": "Implemented geospatial proximity clustering within 50 meters to automatically group duplicate complaints across neighborhood citizens.",
        "evidence": "Full-stack TypeScript repository with multilingual audio transcription pipelines, geo-tagged grievance maps, and municipal status tracker.",
        "learning": "Learned that voice transcription in regional Indian languages requires acoustic preprocessing and phoneme matching to achieve high accuracy in noisy street conditions.",
        "bullet": "Architected Nagrik Setu, an AI-driven multimodal civic accountability platform in TypeScript, enabling citizens to submit geo-tagged grievances via voice and image recognition with automated municipal routing."
    },
    {
        "id": "shieldllm-prompt-security",
        "name": "ShieldLLM Prompt Security",
        "category": "cybersecurity",
        "categoryLabel": "🛡️ Cybersecurity & AppSec",
        "role": "AI Security / Machine Learning",
        "icon": "⚔️",
        "status": "CORE RESEARCH",
        "dataset": "Adversarial Jailbreak Corpus",
        "metric": "TF-IDF N-Gram Defense",
        "desc": "Machine learning input firewall combining TF-IDF n-gram vectorization with a trained neural classifier to detect and neutralize adversarial prompt injections and jailbreak attacks.",
        "tech": ["Python", "TensorFlow", "TF-IDF N-grams", "NLP", "FastAPI", "Security Gateway"],
        "github": "https://github.com/Prasunnandi/shieldllm-prompt-security",
        "problem": "Generative AI applications are vulnerable to prompt injection, jailbreak attacks (DAN), and system prompt extraction from adversarial user inputs.",
        "methods": "Constructed an input firewall combining n-gram TF-IDF vectorization with a trained neural net classifier to detect adversarial jailbreak patterns, refusal bypasses, and obfuscated base64 attacks.",
        "decisions": "Implemented token canonicalization before feature vectorization to detect obfuscated attacks utilizing leetspeak and zero-width characters.",
        "evidence": "Python codebase with adversarial prompt evaluation test datasets and detection benchmark metrics.",
        "learning": "Discovered that attackers bypass keyword filters using leetspeak and character insertion; implementing normalized token canonicalization neutralized 94% of evasive jailbreak variations.",
        "bullet": "Built ShieldLLM, a machine learning prompt security firewall in Python detecting adversarial jailbreak attempts and prompt injections, protecting production GenAI applications from exploit manipulation."
    },
    {
        "id": "privacyguard-llm-dlp",
        "name": "PrivacyGuard LLM DLP",
        "category": "cybersecurity",
        "categoryLabel": "🛡️ Cybersecurity & AppSec",
        "role": "AI Security / Data Privacy",
        "icon": "🔒",
        "status": "CORE RESEARCH",
        "dataset": "Enterprise PII Audit Logs",
        "metric": "Sub-12ms Reversible Redaction",
        "desc": "Data loss prevention proxy combining regular expressions and spaCy NER to identify, redact, and cryptographically tokenize sensitive PII before prompts reach third-party LLMs.",
        "tech": ["Python", "spaCy NER", "Custom Regex", "Cryptographic Vault", "FastAPI", "Presidio"],
        "github": "https://github.com/Prasunnandi/privacyguard-llm-dlp",
        "problem": "Employees pasting sensitive company data into public LLMs risk leaking Social Security Numbers, credit cards, proprietary code, and employee PII.",
        "methods": "Engineered a high-speed hybrid regex and spaCy NER data loss prevention firewall that intercepts prompts, detects PII entities in under 12ms, and performs reversible cryptographic tokenization.",
        "decisions": "Structured the pipeline in two stages: high-speed regex pattern matching for deterministic tokens (SSN, credit card) followed by lightweight NER for contextual names.",
        "evidence": "FastAPI microservice repository with comprehensive PII evaluation test suites and benchmark latency tests.",
        "learning": "Learned that pure regex misses contextual names, while deep learning models add 200ms latency; a tiered architecture (regex first, lightweight NER second) gave 99.1% recall at sub-15ms speeds.",
        "bullet": "Engineered PrivacyGuard, an LLM Data Loss Prevention (DLP) proxy in Python and spaCy NER that intercepts prompts to redact PII in under 12ms, safeguarding corporate data privacy."
    },
    {
        "id": "url-shortener",
        "name": "URL Shortener (Distributed)",
        "category": "fullstack",
        "categoryLabel": "⚙️ Full-Stack & Distributed",
        "role": "Backend Engineer / Java Specialist",
        "icon": "🔗",
        "status": "CORE RESEARCH",
        "dataset": "Simulated High-Concurrency Traffic",
        "metric": "Sub-5ms Cache-Aside Redirect",
        "desc": "Production-grade URL shortener built in Spring Boot 3 and Angular 20 utilizing Base62 cryptographic encoding and Redis cache-aside architecture for sub-5ms redirects.",
        "tech": ["Java 17", "Spring Boot 3", "Angular 20", "Redis Cache", "PostgreSQL", "Base62"],
        "github": "https://github.com/Prasunnandi/url-shortener",
        "problem": "URL shortening services must handle high read-to-write ratios (100:1) with sub-10ms redirect latency and guaranteed collision-free unique keys.",
        "methods": "Architected a production URL shortener in Spring Boot 3 and Angular 20 utilizing Base62 cryptographic hashing, Redis cache-aside redirection, and PostgreSQL persistence with click analytics.",
        "decisions": "Implemented Redis cache-aside pattern to serve 98%+ of redirection requests directly from in-memory RAM, bypassing disk I/O.",
        "evidence": "Full-stack Java/Angular repository with Docker setup, Redis caching layer, and click analytics dashboard.",
        "learning": "Identified that database lookups for every redirect cause unacceptable latency under load; Redis cache-aside architecture achieved 98.6% cache hit rates with 4ms redirect responses.",
        "bullet": "Architected a high-concurrency URL shortening platform in Spring Boot 3 and Angular 20 with Base62 encoding and Redis cache-aside architecture, delivering sub-5ms redirect latency."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initCursorGlow();
    initParticleCanvas();
    initTypewriter();
    initScrollAnimations();
    initNavbarScroll();
    initMobileNav();
    initProjectControls();
    initCaseStudyModal();
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
    const particleCount = Math.min(Math.floor((width * height) / 15000), 75);

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

                if (dist < 110) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    const lineAlpha = (1 - dist / 110) * (isLight ? 0.12 : 0.15);
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
   4. Typewriter Effect
--------------------------------------------------- */
function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const roles = [
        'Software Developer',
        'Data & Distributed Systems Engineer',
        'LLM Security & AI Builder',
        'Full Stack Architect'
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
            speed = 35;
        } else {
            el.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
            speed = 75;
        }

        if (!isDeleting && charIdx === currentRole.length) {
            isDeleting = true;
            speed = 2000;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            speed = 300;
        }

        setTimeout(type, speed);
    }

    type();
}

/* ---------------------------------------------------
   5. Scroll Reveal Animations
--------------------------------------------------- */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    if (!elements.length) return;

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 1.35;
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < triggerBottom && rect.bottom > -200) {
                el.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '150px 0px 150px 0px'
    });

    elements.forEach(el => observer.observe(el));
    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });
    setTimeout(checkVisibility, 100);
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
   8. Project Controls (Filters, Search & View Toggle)
--------------------------------------------------- */
function initProjectControls() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    const searchInput = document.getElementById('projectSearch');
    const searchCount = document.getElementById('searchCount');
    const viewCardsBtn = document.getElementById('viewCardsBtn');
    const viewMatrixBtn = document.getElementById('viewMatrixBtn');
    const projectsGrid = document.getElementById('projectsGrid');
    const matrixContainer = document.getElementById('evidenceMatrixContainer');
    const filtersContainer = document.getElementById('projectFiltersContainer');

    let activeFilter = 'all';
    let searchQuery = '';

    function filterProjects() {
        let visibleCount = 0;
        const query = searchQuery.trim().toLowerCase();

        cards.forEach(card => {
            const category = card.dataset.category;
            const keywords = card.dataset.keywords || '';

            const matchesCategory = (activeFilter === 'all' || category === activeFilter);
            const matchesSearch = (!query || keywords.includes(query));

            if (matchesCategory && matchesSearch) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                }, 30);
                visibleCount++;
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(10px) scale(0.96)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 250);
            }
        });

        if (searchCount) {
            searchCount.textContent = `Showing ${visibleCount} of ${cards.length}`;
        }
    }

    // Filter Button Click
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            filterProjects();
        });
    });

    // Live Search Input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterProjects();
        });
    }

    // View Mode Toggle (Cards vs Matrix)
    if (viewCardsBtn && viewMatrixBtn && projectsGrid && matrixContainer) {
        viewCardsBtn.addEventListener('click', () => {
            viewCardsBtn.classList.add('active');
            viewMatrixBtn.classList.remove('active');
            projectsGrid.style.display = 'grid';
            matrixContainer.style.display = 'none';
            if (filtersContainer) filtersContainer.style.display = 'flex';
        });

        viewMatrixBtn.addEventListener('click', () => {
            viewMatrixBtn.classList.add('active');
            viewCardsBtn.classList.remove('active');
            projectsGrid.style.display = 'none';
            matrixContainer.style.display = 'block';
            if (filtersContainer) filtersContainer.style.display = 'none';
        });
    }
}

/* ---------------------------------------------------
   9. Interactive Case Study Modal
--------------------------------------------------- */
let currentModalBullet = '';

window.openCaseStudy = function(projectId) {
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;

    const overlay = document.getElementById('caseStudyModalOverlay');
    const badge = document.getElementById('modalCategoryBadge');
    const title = document.getElementById('modalTitle');
    const subtitle = document.getElementById('modalSubtitle');
    const dataset = document.getElementById('modalDataset');
    const metric = document.getElementById('modalMetric');
    const status = document.getElementById('modalStatus');
    const problem = document.getElementById('modalProblem');
    const methods = document.getElementById('modalMethods');
    const evidence = document.getElementById('modalEvidence');
    const learning = document.getElementById('modalLearning');
    const bullet = document.getElementById('modalBullet');
    const techTags = document.getElementById('modalTechTags');
    const githubBtn = document.getElementById('modalGithubBtn');

    badge.textContent = project.categoryLabel;
    title.textContent = project.name;
    subtitle.textContent = project.role;
    dataset.textContent = project.dataset;
    metric.textContent = project.metric;
    status.textContent = project.status;
    problem.textContent = project.problem;
    methods.textContent = `${project.methods} ${project.decisions}`;
    evidence.textContent = project.evidence;
    learning.textContent = project.learning;
    bullet.textContent = project.bullet;
    currentModalBullet = project.bullet;

    githubBtn.href = project.github;

    techTags.innerHTML = '';
    project.tech.forEach(t => {
        const span = document.createElement('span');
        span.textContent = t;
        techTags.appendChild(span);
    });

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
};

function initCaseStudyModal() {
    const overlay = document.getElementById('caseStudyModalOverlay');
    const closeBtn = document.getElementById('modalCloseBtn');
    const footerCloseBtn = document.getElementById('modalFooterCloseBtn');
    const copyBulletBtn = document.getElementById('copyBulletBtn');

    function closeModal() {
        if (overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (footerCloseBtn) footerCloseBtn.addEventListener('click', closeModal);

    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Copy Bullet functionality
    if (copyBulletBtn) {
        copyBulletBtn.addEventListener('click', () => {
            if (currentModalBullet) {
                navigator.clipboard.writeText(currentModalBullet).then(() => {
                    showToast('Copied resume bullet to clipboard!');
                }).catch(() => {
                    showToast('Failed to copy to clipboard.');
                });
            }
        });
    }
}

function showToast(msg) {
    const toast = document.getElementById('toastNotification');
    const msgEl = document.getElementById('toastMessage');
    if (!toast) return;

    if (msgEl) msgEl.textContent = msg;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

/* ---------------------------------------------------
   10. Subtle 3D Card Tilt
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
   11. Animated Stats Counter
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
                    const duration = 1200;
                    const stepTime = Math.max(Math.floor(duration / target), 15);

                    const timer = setInterval(() => {
                        count += Math.ceil(target / 40);
                        if (count >= target) {
                            stat.textContent = target;
                            clearInterval(timer);
                        } else {
                            stat.textContent = count;
                        }
                    }, stepTime);
                });
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) observer.observe(heroStats);
}
