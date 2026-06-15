import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SEO, articleSchema } from "@/components/SEO";

// ─── Helper components ────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-14 text-2xl font-semibold text-foreground">{children}</h2>;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-8 text-lg font-semibold text-foreground">{children}</h3>;
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  );
}

function CodeBlock({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <div className="relative mt-6 rounded-lg overflow-hidden border border-border/50">
      <div className="flex items-center bg-[#161b22] px-4 py-2 border-b border-border/50">
        <span className="text-xs font-mono text-[#8b949e]">{lang}</span>
      </div>
      <pre className="overflow-x-auto bg-[#0d1117] p-4 text-sm text-[#e6edf3] font-mono leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Callout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{label}</p>
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

// ─── Tables ───────────────────────────────────────────────────────────────────

function BatchPollingTable() {
  const rows = [
    { config: "single-poll (baseline)", msgs: "50,000", active: "4.33s", total: "5.61s", throughput: "12,339/s", highlight: false },
    { config: "batch-100", msgs: "50,000", active: "2.02s", total: "3.30s", throughput: "26,531/s", highlight: true },
    { config: "batch-500", msgs: "50,000", active: "2.08s", total: "3.48s", throughput: "24,058/s", highlight: false },
    { config: "batch-500 + deser×4", msgs: "50,000", active: "2.07s", total: "3.36s", throughput: "25,161/s", highlight: false },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Configuration</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Messages</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Active time</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Total duration</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Throughput</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                row.highlight
                  ? "bg-primary/5 font-medium text-foreground"
                  : i % 2 === 0
                  ? "bg-card text-muted-foreground"
                  : "bg-muted/30 text-muted-foreground"
              }
            >
              <td className="px-4 py-3 font-mono text-xs">{row.config}</td>
              <td className="px-4 py-3 font-mono">{row.msgs}</td>
              <td className="px-4 py-3 font-mono">{row.active}</td>
              <td className="px-4 py-3 font-mono">{row.total}</td>
              <td className="px-4 py-3 font-mono">
                {row.highlight ? (
                  <span className="text-primary font-semibold">{row.throughput}</span>
                ) : (
                  row.throughput
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CommitStrategyTable() {
  const rows = [
    { strategy: "per-event (sync, baseline)", msgs: "50,000", active: "2.11s", total: "3.36s", throughput: "25,175/s" },
    { strategy: "1s interval", msgs: "50,000", active: "1.96s", total: "3.28s", throughput: "26,183/s" },
    { strategy: "5s interval", msgs: "50,000", active: "2.01s", total: "3.33s", throughput: "25,590/s" },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Commit strategy</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Messages</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Active time</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Total duration</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Throughput</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}
            >
              <td className="px-4 py-3 font-mono text-xs">{row.strategy}</td>
              <td className="px-4 py-3 font-mono">{row.msgs}</td>
              <td className="px-4 py-3 font-mono">{row.active}</td>
              <td className="px-4 py-3 font-mono">{row.total}</td>
              <td className="px-4 py-3 font-mono">{row.throughput}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SummaryTable() {
  const rows = [
    { metric: "Throughput (100K msgs, 8 partitions)", baseline: "14,968 msg/s", highThroughput: "38,647 msg/s", improvement: "2.6×", highlight: true },
    { metric: "Active processing time (100K, 8P)", baseline: "7.13s", highThroughput: "2.69s", improvement: "2.7×", highlight: true },
    { metric: "Throughput (50K msgs, 4 partitions)", baseline: "12,339 msg/s", highThroughput: "26,531 msg/s", improvement: "2.1×", highlight: false },
    { metric: "Backpressure queue depth (slow sink)", baseline: "N/A", highThroughput: "≤ 101 messages", improvement: "Verified", highlight: false },
    { metric: "Unit tests", baseline: "317 passing", highThroughput: "317 passing", improvement: "No regressions", highlight: false },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Metric</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Default config</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">High-throughput config</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Improvement</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                row.highlight
                  ? "bg-primary/5 text-foreground"
                  : i % 2 === 0
                  ? "bg-card text-muted-foreground"
                  : "bg-muted/30 text-muted-foreground"
              }
            >
              <td className="px-4 py-3">{row.metric}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.baseline}</td>
              <td className="px-4 py-3 font-mono text-xs">
                {row.highlight ? (
                  <span className="text-primary font-semibold">{row.highThroughput}</span>
                ) : (
                  row.highThroughput
                )}
              </td>
              <td className="px-4 py-3 font-mono text-xs font-semibold">{row.improvement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CDCPlatform() {
  return (
    <Layout>
      <SEO
        title="Building a High-Throughput CDC Platform | Baselyne Systems Blog"
        description="How we built a modular Python CDC platform achieving 38,647 msg/s - with config-driven tuning, exactly-once delivery, and Iceberg lakehouse support."
        keywords="change data capture, CDC platform, Debezium, Kafka, Apache Iceberg, Python asyncio, open source data pipeline"
        canonical="https://baselynesystems.com/blog/cdc-platform"
        noIndex
        ogType="article"
        publishedTime="2026-02-01"
        author="Achyuth Samudrala"
        structuredData={articleSchema({
          title: "Building a High-Throughput CDC Platform",
          description: "How we built a modular Python CDC platform achieving 38,647 msg/s - with config-driven tuning, exactly-once delivery, and Iceberg lakehouse support.",
          url: "https://baselynesystems.com/blog/cdc-platform",
          datePublished: "2026-02-01",
          keywords: ["change data capture", "CDC platform", "Debezium", "Kafka", "Apache Iceberg", "Python asyncio", "open source data pipeline"],
        })}
      />

      <article className="bg-layer-1 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">

            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Blog
            </Link>

            {/* Post header */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                <Tag>Case Study</Tag>
                <Tag>Open Source</Tag>
              </div>
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Building a High-Throughput CDC Platform
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                From database change to lakehouse in milliseconds - 38,647 msg/s with config alone
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="text-sm text-muted-foreground">February 2026</span>
                <a
                  href="https://github.com/Baselyne-Systems/cdc-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  Baselyne-Systems/cdc-platform
                </a>
              </div>
              <div className="mt-8 border-t border-border" />
            </div>

            {/* ── Why we built this ── */}
            <SectionHeading>Why we built this</SectionHeading>
            <Prose>
              <p>
                Change Data Capture sounds simple. Read the write-ahead log, stream every insert, update,
                and delete as an event, deliver it somewhere useful. The hard parts are invisible until
                you operate it: schema changes break consumers, sinks fail mid-batch, Kafka rebalances
                corrupt offsets, and Iceberg small-file accumulation silently degrades query performance
                over weeks.
              </p>
              <p>
                We built the Baselyne CDC Platform as an open-source reference implementation that takes
                responsibility for the full pipeline - source database to sink destination. Not a connector
                framework, not a thin wrapper around Debezium. An end-to-end system that handles
                provisioning, consumption, delivery guarantees, schema monitoring, error routing, and
                lakehouse maintenance.
              </p>
              <p>
                This post covers the architecture, the six-phase performance optimization that got us to
                38,647 msg/s, and the design decisions that make it production-grade.
              </p>
            </Prose>

            <Callout label="Key results">
              <strong>38,647 msg/s</strong> sustained throughput in high-throughput mode ·{" "}
              <strong>2.6× improvement</strong> over default config · achieved entirely through config
              changes, zero code modifications · 317 unit tests, no regressions ·
              exactly-once delivery with min-watermark offset commits
            </Callout>

            {/* ── Architecture ── */}
            <SectionHeading>Architecture</SectionHeading>
            <Prose>
              <p>
                The platform owns the full pipeline. It provisions transport resources (Kafka topics,
                Debezium connector), manages consumer groups and offset lifecycle, monitors schemas,
                and routes events to configurable sinks - webhooks, PostgreSQL replicas, and Apache
                Iceberg lakehouse tables.
              </p>
              <p>
                The core design principle is <strong>transport-agnostic architecture</strong>. Protocol
                abstractions (<code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">EventSource</code>,{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">Provisioner</code>,{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">ErrorRouter</code>,{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">SourceMonitor</code>)
                decouple the pipeline from any specific event transport. Kafka is the default backend
                (with MSK IAM and GCP Managed Kafka auth built-in), with{" "}
                <strong>Google Pub/Sub</strong> and <strong>Amazon Kinesis</strong> as additional
                supported transports. Non-Kafka transports use a direct PostgreSQL WAL reader in
                place of Debezium - no Connect cluster required.
              </p>
            </Prose>

            <CodeBlock lang="ascii - platform architecture">
{` ┌─────────────────── CDC Platform ──────────────────────────────┐
 │                                                               │
 │  ┌─────────────┐   ┌──────────────────────────────┐           │
 │  │ Provisioner │──▸│   EventSource (transport)    │           │
 │  │ (topics +   │   │  ┌────────────────────────┐  │           │
 │  │  connector) │   │  │ Kafka/Pub/Sub/Kinesis  │  │           │
 │  └─────────────┘   │  └────────────┬───────────┘  │           │
 │                    └───────────────┼──────────────┘           │
 │                         SourceEvent stream                    │
 │                              │                                │
 │              ┌───────────────┼───────────────┐                │
 │              ▼               ▼               ▼                │
 │         Queue(p0)       Queue(p1)       Queue(p2)             │
 │              │               │               │                │
 │         Worker(p0)      Worker(p1)      Worker(p2)──▸ sinks   │
 │                                                               │
 │    SourceMonitor (schema + lag)          table maintenance    │
 │    ErrorRouter (DLQ)                                          │
 └───────────────────────────────────────────────────────────────┘
         ▲                                     │
    source DB                          sink destinations:
  Postgres · MySQL                  Webhook, Postgres, Iceberg
  MongoDB · SQL Server`}
            </CodeBlock>

            <Prose>
              <p>
                Per-partition async workers process events independently within a single Python asyncio
                process. Bounded queues between the consumer and the workers enforce backpressure - when
                sinks are slow, the queue fills and the poll loop naturally slows down. No message loss,
                no unbounded memory growth.
              </p>
              <p>
                Supported sources: <strong>PostgreSQL</strong> (logical replication via pgoutput),{" "}
                <strong>MySQL</strong> (binlog), <strong>MongoDB</strong> (change streams), and{" "}
                <strong>SQL Server</strong> (CDC tables). All four are configured with a single{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">source_type</code>{" "}
                field - the platform handles connector deployment, topic naming, and snapshot behavior
                automatically.
              </p>
            </Prose>

            {/* ── Config-driven pipeline ── */}
            <SectionHeading>A config-first pipeline</SectionHeading>
            <Prose>
              <p>
                The platform separates pipeline config (what to capture) from platform config (how to
                run it). A minimal PostgreSQL-to-Iceberg pipeline looks like this:
              </p>
            </Prose>

            <CodeBlock lang="yaml - pipeline.yaml">
{`pipeline_id: orders-cdc
topic_prefix: cdc

source:
  source_type: postgres
  host: \${CDC_SOURCE_HOST}
  database: \${CDC_SOURCE_DB}
  username: \${CDC_SOURCE_USER}
  password: \${CDC_SOURCE_PASSWORD}
  tables:
    - public.orders
    - public.order_items
  slot_name: orders_cdc_slot     # unique per pipeline
  publication_name: orders_pub
  snapshot_mode: initial         # initial | never | when_needed

sinks:
  - sink_id: iceberg-lake
    sink_type: iceberg
    enabled: true
    iceberg:
      catalog_uri: \${ICEBERG_CATALOG_URI}
      warehouse: \${ICEBERG_WAREHOUSE}
      table_name: orders_cdc
      write_mode: upsert          # idempotent on replay
      batch_size: 5000
      maintenance:
        enabled: true
        compaction_interval_seconds: 3600`}
            </CodeBlock>

            <Prose>
              <p>
                Platform config (<code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">platform.yaml</code>)
                controls transport settings, consumer tuning, retry behaviour, and health probes. Most
                fields have safe defaults - you only override what differs from your environment.
              </p>
            </Prose>

            <CodeBlock lang="bash - CLI">
{`# Validate config
cdc validate pipeline.yaml

# Provision transport resources (topics + Debezium connector)
cdc deploy pipeline.yaml --platform-config platform.yaml

# Run the pipeline
cdc run pipeline.yaml --platform-config platform.yaml

# Check platform health
cdc health --platform-config platform.yaml

# Debug: consume raw events from the configured transport
cdc consume pipeline.yaml`}
            </CodeBlock>

            {/* ── Exactly-once delivery ── */}
            <SectionHeading>Exactly-once delivery</SectionHeading>
            <Prose>
              <p>
                Exactly-once in a distributed CDC pipeline is achieved through two mechanisms working
                together, not one.
              </p>
            </Prose>

            <SubHeading>Min-watermark offset commits</SubHeading>
            <Prose>
              <p>
                The platform tracks the highest offset each sink has durably flushed. Offsets are
                committed to Kafka only at the <em>minimum</em> across all sinks per partition. If
                the Iceberg sink flushes partition 0 at offset 1000 but the webhook sink has only
                confirmed offset 950, the committed offset stays at 950.
              </p>
              <p>
                This means a crash and replay will redeliver events that some sinks already saw - which
                is why idempotent sinks matter.
              </p>
            </Prose>

            <SubHeading>Idempotent sink writes</SubHeading>
            <Prose>
              <p>
                Both the PostgreSQL sink (
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">ON CONFLICT DO UPDATE</code>
                ) and the Iceberg sink (upsert mode) handle redelivered events transparently. A replayed
                event that was already written produces an identical row - no duplicates, no errors.
              </p>
              <p>
                For non-idempotent sinks (webhooks), keep{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">commit_interval_seconds</code>{" "}
                at its default of <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">0.0</code>{" "}
                (per-event sync commit) to minimise the redelivery window.
              </p>
            </Prose>

            <Callout label="DLQ - dead letter routing">
              Per-sink failures are routed to a dead-letter topic with full diagnostic headers - pipeline
              ID, sink ID, error message, original partition and offset. Failed events don't block the
              pipeline; they're quarantined for inspection and replay once the underlying issue is resolved.
            </Callout>

            {/* ── Performance ── */}
            <SectionHeading>The optimization story: six phases</SectionHeading>
            <Prose>
              <p>
                The platform shipped with safe, correct defaults: single-message polling, synchronous
                Avro deserialization, per-event offset commits, blocking sink writes. This is the right
                starting point - easy to reason about, easy to debug. The question was how much headroom
                we could unlock purely through configuration.
              </p>
              <p>
                The benchmark suite runs in process-isolated Python subprocesses (C-extensions like
                fastavro and confluent-kafka are not safe to tear down and reinitialize in a single
                process). Most tests use direct Kafka production - bypassing Debezium - for precise
                control over input rate and data shape. The end-to-end throughput test exercises the
                full path: PostgreSQL INSERTs → Debezium → Kafka → Consumer → Sink.
              </p>
            </Prose>

            <SubHeading>Phase 1 - Batch polling</SubHeading>
            <Prose>
              <p>
                The default consumer fetches one message per poll call. Each poll is a round-trip to
                the Kafka broker. At high message rates, poll overhead dominates. Increasing{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">poll_batch_size</code>{" "}
                to 100 amortises that cost across more messages per round-trip.
              </p>
            </Prose>

            <BatchPollingTable />

            <Callout label="Finding">
              Batch polling delivers a <strong>2.1× throughput improvement</strong> over single-poll.
              Moving from batch-100 to batch-500 shows diminishing returns - the poll overhead is
              already amortised. Parallel deserialization (4 threads) provides a modest gain on top
              of batching; the bigger benefit is expected with complex Avro schemas.
            </Callout>

            <SubHeading>Phase 2 - Periodic offset commits</SubHeading>
            <Prose>
              <p>
                Per-event synchronous commits add a small but consistent overhead - each commit is a
                blocking call to the Kafka broker. Switching to interval-based commits (
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">commit_interval_seconds: 5.0</code>
                ) batches this work.
              </p>
            </Prose>

            <CommitStrategyTable />

            <Callout label="Finding">
              Periodic commits show marginal improvement at this scale - commit overhead is small
              relative to poll/deser savings in a local Docker environment. The larger benefit
              materialises under heavier partition counts and real broker network latency.
              The tradeoff: events since the last commit may be redelivered on crash. At 5s interval,
              that's a bounded redelivery window - acceptable for idempotent sinks.
            </Callout>

            <SubHeading>Phase 3 - Iceberg write executor offloading</SubHeading>
            <Prose>
              <p>
                Iceberg writes - Arrow conversion, Parquet encoding, S3 upload - are blocking I/O
                that stalls the asyncio event loop. Setting{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">write_executor_threads: 4</code>{" "}
                offloads this work to a thread pool. Active processing time improved from 0.78s to
                0.43s (1.8× faster), while overall throughput is dominated by teardown time in the
                test environment.
              </p>
              <p>
                At production scale, with persistent connections and no teardown overhead, the
                executor effect is more significant - it prevents sink writes from blocking the
                consumer loop during high-volume bursts.
              </p>
            </Prose>

            <SubHeading>Phase 4 - Combined at scale</SubHeading>
            <Prose>
              <p>
                The final test ran default config vs. high-throughput config head-to-head at 100,000
                messages across 8 partitions - a production-representative scale.
              </p>
            </Prose>

            <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Configuration</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Messages</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Active time</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Total duration</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Throughput</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card text-muted-foreground">
                    <td className="px-4 py-3 font-mono text-xs">default</td>
                    <td className="px-4 py-3 font-mono">100,000</td>
                    <td className="px-4 py-3 font-mono">7.13s</td>
                    <td className="px-4 py-3 font-mono">10.28s</td>
                    <td className="px-4 py-3 font-mono">14,968/s</td>
                  </tr>
                  <tr className="bg-primary/5 font-medium text-foreground">
                    <td className="px-4 py-3 font-mono text-xs">high-throughput</td>
                    <td className="px-4 py-3 font-mono">100,000</td>
                    <td className="px-4 py-3 font-mono">2.69s</td>
                    <td className="px-4 py-3 font-mono">5.04s</td>
                    <td className="px-4 py-3 font-mono text-primary font-semibold">38,647/s</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout label="2.6× improvement - config only">
              All gains from batch polling, parallel deserialization, periodic commits, and Iceberg
              write offloading. Default config values preserve existing behaviour - operators opt in
              to high-throughput mode by setting config values. No code changes, no deployment
              disruption.
            </Callout>

            {/* ── High-throughput profile ── */}
            <SectionHeading>The high-throughput profile</SectionHeading>
            <Prose>
              <p>
                A pre-built profile ships with the platform at{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">
                  src/cdc_platform/config/defaults/platform-high-throughput.yaml
                </code>
                :
              </p>
            </Prose>

            <CodeBlock lang="yaml - platform-high-throughput.yaml">
{`kafka:
  topic_num_partitions: 64
  topic_replication_factor: 3
  fetch_min_bytes: 1024
  poll_batch_size: 500
  deser_pool_size: 4
  commit_interval_seconds: 5.0

dlq:
  flush_interval_seconds: 5.0

max_buffered_messages: 10000
lag_monitor_interval_seconds: 30.0`}
            </CodeBlock>

            <CodeBlock lang="bash">
{`cdc run pipeline.yaml --platform-config src/cdc_platform/config/defaults/platform-high-throughput.yaml`}
            </CodeBlock>

            {/* ── Backpressure ── */}
            <SectionHeading>Backpressure and memory bounds</SectionHeading>
            <Prose>
              <p>
                Throughput numbers mean little if the pipeline explodes memory when a sink falls
                behind. Each partition has a bounded queue (
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">max_buffered_messages</code>
                ). When the queue is full, the consumer loop stops polling - backpressure propagates
                naturally from sink to queue to poll loop, with no special handling required.
              </p>
            </Prose>

            <Callout label="Backpressure test result">
              With a slow sink (1ms delay per message) and{" "}
              <code className="font-mono text-xs">max_buffered_messages=100</code>, queue depth
              never exceeded 101. Throughput correctly throttled to ≈ 1,000 msg/s (matching the
              sink's capacity). No message loss or overflow under sustained load.
            </Callout>

            {/* ── Summary table ── */}
            <SectionHeading>Benchmark summary</SectionHeading>
            <SummaryTable />

            {/* ── Lakehouse features ── */}
            <SectionHeading>Lakehouse features: beyond the write</SectionHeading>
            <Prose>
              <p>
                CDC pipelines produce frequent micro-batches. Left unchecked, this creates two problems
                for Iceberg tables:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Small-file accumulation</strong> - each batch
                  append creates new Parquet files. Hundreds of tiny files degrade query performance.
                </li>
                <li>
                  <strong className="text-foreground">Unbounded metadata growth</strong> - every write
                  creates a new snapshot. Without expiry, the metadata layer grows indefinitely.
                </li>
              </ul>
            </Prose>

            <SubHeading>Background table maintenance</SubHeading>
            <Prose>
              <p>
                The <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">TableMaintenanceMonitor</code>{" "}
                is a background async service that runs two independent poll loops alongside the CDC
                pipeline. It compacts small files and expires old snapshots on configurable intervals -
                no external scheduler required.
              </p>
              <p>
                Compaction is partition-scoped and memory-bounded. For partitions exceeding the{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">compaction_max_rows_per_batch</code>{" "}
                safety limit (default: 500K rows), the service logs a warning and skips - a signal
                to use Spark or Trino for that partition instead.
              </p>
            </Prose>

            <SubHeading>Time travel and rollback</SubHeading>
            <Prose>
              <p>
                The CLI provides first-class time-travel operations. A bad write is recoverable:
              </p>
            </Prose>

            <CodeBlock lang="bash - lakehouse CLI">
{`# List all snapshots with IDs, timestamps, and operation summaries
cdc lakehouse snapshots pipeline.yaml

# Query data as it existed at a specific snapshot
cdc lakehouse query pipeline.yaml --snapshot-id 1234567890 --limit 50

# Roll back to a previous snapshot (changes visible state for all readers)
cdc lakehouse rollback pipeline.yaml --snapshot-id 1234567890 --yes`}
            </CodeBlock>

            {/* ── Deployment ── */}
            <SectionHeading>Kubernetes deployment</SectionHeading>
            <Prose>
              <p>
                The platform uses a two-phase deployment model: shared infrastructure (Kafka, Schema
                Registry, Kafka Connect with Debezium plugins) deployed via Helm, and independent
                pipeline workers - one Kubernetes Deployment per pipeline.
              </p>
            </Prose>

            <SubHeading>Why <code className="text-base font-mono">strategy: Recreate</code></SubHeading>
            <Prose>
              <p>
                This is the most important Kubernetes detail for CDC deployments. RollingUpdate creates
                a new pod before terminating the old one. Both pods join the same Kafka consumer group
                simultaneously, causing a <em>rebalance storm</em> - partitions are assigned, revoked,
                and reassigned repeatedly until the old pod dies. During the storm, no messages are
                processed.
              </p>
              <p>
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">strategy: Recreate</code>{" "}
                terminates the old pod fully before starting the new one. One clean rebalance, then
                processing resumes.
              </p>
            </Prose>

            <CodeBlock lang="yaml - pipeline Kubernetes Deployment (excerpt)">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: orders-cdc
spec:
  replicas: 1
  strategy:
    type: Recreate    # NOT RollingUpdate - avoids consumer group rebalance storms
  template:
    spec:
      containers:
        - name: pipeline
          image: ghcr.io/baselyne-systems/cdc-platform:latest
          ports:
            - containerPort: 8080
              name: health
          envFrom:
            - secretRef:
                name: orders-cdc-secrets
          livenessProbe:
            httpGet:
              path: /healthz
              port: health
          readinessProbe:
            httpGet:
              path: /readyz
              port: health
            initialDelaySeconds: 30
          resources:
            requests:
              cpu: 250m
              memory: 256Mi
            limits:
              cpu: "1"
              memory: 512Mi`}
            </CodeBlock>

            <Prose>
              <p>
                Each pipeline exposes <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">/healthz</code>{" "}
                (liveness) and <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">/readyz</code>{" "}
                (readiness) endpoints. The readiness check queries the Debezium connector state via
                the Kafka Connect REST API and polls each sink's connection status. If any component
                reports an error, the probe returns 503 - Kubernetes stops routing traffic to the pod
                before it can corrupt data.
              </p>
            </Prose>

            {/* ── Getting started ── */}
            <SectionHeading>Getting started</SectionHeading>

            <CodeBlock lang="bash">
{`# Clone and install
git clone https://github.com/Baselyne-Systems/cdc-platform
cd cdc-platform
uv sync --extra dev

# Start the full local stack
# (PostgreSQL, Kafka KRaft, Schema Registry, Debezium Connect, Kafka UI)
make up

# Verify platform health
cdc health

# Run the demo pipeline
cdc run examples/demo-config.yaml

# In another terminal: insert test data
psql -h localhost -U cdc_user -d cdc_demo -c \\
  "INSERT INTO public.customers (name, email) VALUES ('test', 'test@example.com');"`}
            </CodeBlock>

            <Prose>
              <p>
                The full benchmark suite is included in the repo. Run it to validate performance in
                your environment:
              </p>
            </Prose>

            <CodeBlock lang="bash">
{`make bench`}
            </CodeBlock>

            <Prose>
              <p>
                This starts Docker, runs each benchmark module in process isolation (backpressure,
                latency, partitions, end-to-end throughput), and shuts down. Results are printed as
                a consolidated table at the end.
              </p>
            </Prose>

            {/* ── Divider ── */}
            <div className="mt-16 border-t border-border" />

            {/* ── Footer CTA ── */}
            <div className="mt-12 rounded-lg bg-layer-2 px-8 py-10 text-center border border-border/50">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">Work with us</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                Interested in CDC infrastructure for your stack?
              </h2>
              <p className="mt-3 text-muted-foreground">
                We design and implement production-grade data pipelines - from WAL replication to
                lakehouse. Book a 30-minute call to talk through your setup.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <a
                    href="https://calendly.com/achyuthsamudrala/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Book a Call
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <a
                  href="https://github.com/Baselyne-Systems/cdc-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
