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

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">{children}</code>
  );
}

// ─── Tables ──────────────────────────────────────────────────────────────────

function IngestionTable() {
  const rows = [
    { dataset: "LeRobot pusht", format: "lerobot", robot: "pusht_2dof", episodes: "206", observations: "51,300", time: "0.2s", highlight: false },
    { dataset: "RoboMimic Can (MG dense)", format: "hdf5", robot: "franka_panda", episodes: "3,900", observations: "1,170,000", time: "174s", highlight: true },
    { dataset: "RoboMimic Lift", format: "hdf5", robot: "franka_panda", episodes: "200", observations: "19,332", time: "2.9s", highlight: false },
    { dataset: "LeRobot xarm_lift", format: "lerobot", robot: "xarm_6dof", episodes: "800", observations: "69,350", time: "0.6s", highlight: false },
    { dataset: "Synthetic fleet (5 robots)", format: "mcap", robot: "franka_panda", episodes: "15", observations: "3,750,000", time: "471s", highlight: false },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Dataset</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Format</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Robot</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Episodes</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Observations</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Ingest time</th>
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
              <td className="px-4 py-3 text-xs">{row.dataset}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.format}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.robot}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.episodes}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.observations}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SchemaTable() {
  const rows = [
    { table: "recordings", purpose: "One row per ingested file/dataset", partition: "source_format, robot_type" },
    { table: "episodes", purpose: "One row per task attempt", partition: "task_category, success" },
    { table: "scalar_observations", purpose: "Joint states, IMU, forces, actions", partition: "topic" },
    { table: "images", purpose: "Image metadata + URI references to source files", partition: "topic" },
    { table: "point_clouds", purpose: "Point cloud metadata + URI references", partition: "topic" },
    { table: "transforms", purpose: "Coordinate frame transforms (TF tree)", partition: "recording_id" },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Table</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Purpose</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Partition keys</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}
            >
              <td className="px-4 py-3 font-mono text-xs">{row.table}</td>
              <td className="px-4 py-3 text-xs">{row.purpose}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.partition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DurationTable() {
  const rows = [
    { format: "hdf5", episodes: "4,100", min: "1.8s", avg: "7.3s", max: "7.5s", total: "8.3h" },
    { format: "lerobot", episodes: "1,006", min: "1.7s", avg: "3.9s", max: "24.6s", total: "1.1h" },
    { format: "mcap", episodes: "15", min: "0.0s", avg: "1,667s", max: "2,500s", total: "6.9h" },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Format</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Episodes</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Min</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Avg</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Max</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Total</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}
            >
              <td className="px-4 py-3 font-mono text-xs">{row.format}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.episodes}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.min}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.avg}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.max}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RobotDataLake() {
  return (
    <Layout>
      <SEO
        title="The Robot Data Lake: A Format-Agnostic Data Lake for Physical AI | Baselyne Systems"
        description="How we built a format-agnostic data lake for physical AI - ingesting RLDS, LeRobot, MCAP, and HDF5 into Apache Iceberg tables, making 5,121 episodes across 3 formats queryable via SQL."
        keywords="robot data lake, physical AI data infrastructure, Apache Iceberg robotics, MCAP data pipeline, RLDS ingestion, LeRobot dataset, robot episode storage, open source robot data"
        canonical="https://baselynesystems.com/blog/robot-data-lake"
        noIndex
        ogType="article"
        publishedTime="2026-04-02"
        author="Achyuth Samudrala"
        structuredData={articleSchema({
          title: "The Robot Data Lake: A Format-Agnostic Data Lake for Physical AI",
          description: "How we built a format-agnostic data lake for physical AI - ingesting RLDS, LeRobot, MCAP, and HDF5 into Apache Iceberg tables queryable via SQL.",
          url: "https://baselynesystems.com/blog/robot-data-lake",
          datePublished: "2026-04-02",
          keywords: ["robot data lake", "physical AI", "Apache Iceberg", "MCAP", "RLDS", "LeRobot", "robot data infrastructure"],
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
                <Tag>Physical AI</Tag>
              </div>
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The Robot Data Lake
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                A format-agnostic data lake for physical AI - 5,121 episodes across RLDS, LeRobot, MCAP, and HDF5 in one queryable schema
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="text-sm text-muted-foreground">April 2026</span>
              </div>
              <div className="mt-8 border-t border-border" />
            </div>

            {/* ── Why we built this ── */}
            <SectionHeading>Why we built this</SectionHeading>
            <Prose>
              <p>
                A physical AI team has recordings from dozens of robots across months of
                operation. The data is in four different formats - RLDS from Open X-Embodiment,
                LeRobot from HuggingFace, MCAP from their ROS 2 fleet, HDF5 from ALOHA and
                RoboMimic. They need to answer one question:
              </p>
              <p>
                <em>"Give me every failed grasp episode from the last 30 days where the robot was
                in warehouse B."</em>
              </p>
              <p>
                Without a unified data layer, this means writing custom scripts for each format,
                manually tracking which files contain what, and hoping nothing is missed. Every
                team we've talked to builds this from scratch - a collection of format-specific
                parsers, ad hoc metadata CSVs, and Jupyter notebooks that break when the file
                layout changes.
              </p>
              <p>
                We built robot-data-lake to solve this. It ingests recordings from any supported
                format into Apache Iceberg tables, making them queryable at scale via DuckDB. One
                schema, one query language, regardless of whether the data came from a ROS 2 bag
                file or an RLDS TFRecord.
              </p>
            </Prose>

            <Callout label="Key results">
              <strong>5,121 episodes</strong> across 3 formats and 3 robot types in one queryable lake ·{" "}
              <strong>5.1M scalar observations</strong> and <strong>60K images</strong> indexed ·{" "}
              <strong>16.3 hours</strong> of robot data ·{" "}
              Cross-format queries in <strong>4–74ms</strong> ·{" "}
              Training shard export: 200 episodes → 19,596 samples in 2 WebDataset shards
            </Callout>

            {/* ── Architecture ── */}
            <SectionHeading>Architecture</SectionHeading>
            <Prose>
              <p>
                The system has three phases: <strong>ingest</strong> (catalog and index
                recordings), <strong>curate</strong> (query and select episodes),
                and <strong>export</strong> (materialize training data). Each phase is
                independently useful - you can ingest and query without ever exporting, or
                re-export from the same lake with different selection criteria.
              </p>
            </Prose>

            <CodeBlock lang="ascii - three-phase architecture">
{`Source Formats               Apache Iceberg Tables         Training Formats
─────────────               ─────────────────────         ────────────────

RLDS/TFRecord ─┐            recordings │ episodes        PyTorch Dataset
LeRobot        ├─ Ingest ─► scalar_obs │ images    ─► ── WebDataset shards
MCAP           │            point_clouds│ transforms      LeRobot format
HDF5         ──┘                                          DataFrame
                             ▲
                             │ DuckDB
                         Query Layer
                      SQL │ Python builder`}
            </CodeBlock>

            <Prose>
              <p>
                Four design decisions drive the architecture:
              </p>
              <p>
                <strong>Format-agnostic schema.</strong> Every recording maps into the same six
                Iceberg tables regardless of source format. A query for "all failed grasps"
                returns results from DROID (RLDS), ALOHA (HDF5), and ROS 2 robots (MCAP) in a
                single result set. No format-specific code paths at query time.
              </p>
              <p>
                <strong>Episode-centric.</strong> Episodes - bounded task attempts - are first-class
                entities, not derived views. This lets us partition and filter by success/failure,
                task type, and time range, which are the three most common training data selection
                criteria.
              </p>
              <p>
                <strong>Modality separation.</strong> Scalars, images, point clouds, and transforms
                live in separate tables with modality-specific partitioning. A joint-state query
                never scans image metadata. This avoids the "wide table" problem where a single
                schema must accommodate every sensor configuration.
              </p>
              <p>
                <strong>Reference-based images.</strong> Image and point cloud data is cataloged as
                URI references back to source files - not copied. Ingest is lightweight (metadata
                only), and a separate export step materializes training shards on demand. Metadata
                queries stay fast even over terabytes of image data.
              </p>
            </Prose>

            {/* ── Schema ── */}
            <SectionHeading>The six-table schema</SectionHeading>
            <Prose>
              <p>
                The schema is the core of the project. Every design decision here affects query
                performance, ingestion cost, and training data quality downstream.
              </p>
            </Prose>

            <SchemaTable />

            <SubHeading>Why episodes are first-class</SubHeading>
            <Prose>
              <p>
                Robot ML trains on episodes, not individual timesteps. An episode is a contiguous
                sequence where a robot attempts a task - a grasp, a navigation run, a manipulation
                sequence. The most common query in imitation learning is "give me only successful
                demonstrations." The most common query in failure analysis is "give me every
                episode where the robot failed and the episode lasted more than 5 seconds."
              </p>
              <p>
                Making episodes a dedicated table with <InlineCode>success</InlineCode> and{" "}
                <InlineCode>task_category</InlineCode> as partition keys means these queries hit
                only the relevant partitions. No scanning the full observation table to reconstruct
                episode boundaries.
              </p>
            </Prose>

            <SubHeading>Episode boundaries are best-effort</SubHeading>
            <Prose>
              <p>
                This was one of the first things we learned building this system. Different formats
                define episode boundaries differently - RLDS has explicit{" "}
                <InlineCode>is_first</InlineCode>/<InlineCode>is_last</InlineCode> markers, LeRobot
                has an <InlineCode>episode_index</InlineCode> column, but MCAP files from ROS 2
                often have no episode markers at all. For those, we fall back to gap-based
                heuristics: if there's a gap longer than N seconds between consecutive messages,
                assume an episode boundary.
              </p>
              <p>
                The schema tracks this honestly. Every episode has a{" "}
                <InlineCode>detection_method</InlineCode> field ("marker", "gap_heuristic",
                "manual") and a <InlineCode>label_confidence</InlineCode> score. A marker-based
                episode from RLDS has crisp boundaries with confidence 1.0. A gap-heuristic
                episode from MCAP may include setup or teardown motion - the confidence is lower,
                and downstream consumers can filter accordingly.
              </p>
            </Prose>

            <SubHeading>Why scalars are stored as maps, not typed columns</SubHeading>
            <Prose>
              <p>
                Robot sensor configurations vary wildly. A Franka has 7 joint positions; a mobile
                manipulator has 2 wheels plus 6 arm joints plus a gripper. RLDS{" "}
                <InlineCode>observation.state</InlineCode> might be a flat 14-dim vector; MCAP{" "}
                <InlineCode>JointState</InlineCode> has named fields. A fixed-column schema would
                need constant migration as new robot types are added.
              </p>
              <p>
                Instead, scalar observations use a{" "}
                <InlineCode>{"Map<String, Double>"}</InlineCode> column. Any sensor writes any fields
                without schema changes. DuckDB can still query individual fields
                via <InlineCode>{"map_extract(data, 'joint_position_0')"}</InlineCode>. The tradeoff
                is query convenience - you lose typed columns and autocomplete. In practice, training
                pipelines access scalars by episode and topic, not by individual field names, so the
                map approach fits the access pattern.
              </p>
            </Prose>

            {/* ── Multi-format ingestion ── */}
            <SectionHeading>Multi-format ingestion</SectionHeading>
            <Prose>
              <p>
                Each format has a concrete ingestor that maps its native structure into the unified
                schema. The ingestor contract has three phases: validate (catch misconfigurations
                early), detect episodes (lightweight preview), and ingest (the expensive step).
              </p>
            </Prose>

            <CodeBlock lang="python - ingesting three formats into one lake">
{`from robot_data_lake import RobotDataLake

lake = RobotDataLake("./my-robot-lake")
lake.initialize()

# RLDS from Open X-Embodiment
lake.ingest("droid", format="rlds", robot_type="franka_fr3")

# LeRobot from HuggingFace
lake.ingest("lerobot/aloha_mobile_cabinet", format="lerobot",
            robot_type="aloha_v2")

# MCAP from a ROS 2 fleet
lake.ingest("recording.mcap", format="mcap",
            robot_id="franka_01", environment="warehouse_b")

# HDF5 from RoboMimic
lake.ingest("demo.hdf5", format="hdf5",
            robot_type="franka_panda")`}
            </CodeBlock>

            <Prose>
              <p>
                The normalization challenge is in the details. RLDS stores observations as nested
                TFRecord features - flattened into topic-keyed scalar maps. LeRobot uses Parquet
                with an <InlineCode>episode_index</InlineCode> column - mapped to our episode table
                with marker-based detection. For LeRobot datasets with embedded images (like
                xarm_lift), the ingestor reads only scalar columns from Parquet and catalogs
                image columns as URI references - no pixel data loaded into memory during
                ingestion. MCAP contains serialized ROS 2 messages - deserialized
                via CDR encoding into typed observations. HDF5 organizes data under{" "}
                <InlineCode>/data/demo_N</InlineCode> groups - each group becomes an episode.
              </p>
              <p>
                What each format calls "time" also differs. MCAP has nanosecond-precision{" "}
                <InlineCode>header.stamp</InlineCode> and separate{" "}
                <InlineCode>log_time</InlineCode>. RLDS has integer step indices. LeRobot has
                frame indices at a fixed FPS. HDF5 has no timestamps at all - just array
                indices. The ingestors normalize all of these to nanosecond epoch timestamps,
                synthesizing them from step indices and frame rates where necessary.
              </p>
            </Prose>

            {/* ── Demo results ── */}
            <SectionHeading>Demo: three formats, one lake</SectionHeading>
            <Prose>
              <p>
                We ingested five datasets across three formats and three robot types - LeRobot
                pusht and xarm_lift (HuggingFace), RoboMimic Can and Lift (HDF5), and a
                synthetic MCAP fleet (5 robots, 250K steps each) - into a single lake and ran
                queries across all of them.
              </p>
            </Prose>

            <IngestionTable />

            <Prose>
              <p>
                Total: <strong>5,121 episodes</strong>, <strong>5.1 million scalar
                observations</strong>, <strong>60K images</strong>, <strong>16.3 hours</strong> of
                robot data from 9 recordings across 3 formats and 3 robot types. All queryable
                through the same SQL interface.
              </p>
            </Prose>

            {/* ── Query patterns ── */}
            <SectionHeading>Query patterns</SectionHeading>
            <Prose>
              <p>
                Once data is in the lake, the queries that training teams actually need become
                straightforward SQL. These ran against the demo lake above - all times are measured,
                not estimated.
              </p>
            </Prose>

            <SubHeading>Episode duration distribution by format</SubHeading>
            <Prose>
              <p>
                The first thing you want to know about a mixed-format lake: how does the data
                distribute?
              </p>
            </Prose>

            <CodeBlock lang="sql">
{`SELECT r.source_format, COUNT(*) as episode_count,
       ROUND(AVG(e.duration_s), 2) as avg_duration_s,
       ROUND(SUM(e.duration_s) / 3600.0, 4) as total_hours
FROM episodes e
JOIN recordings r ON e.recording_id = r.recording_id
GROUP BY r.source_format`}
            </CodeBlock>

            <DurationTable />

            <Prose>
              <p>
                4.4ms. The format differences are immediately visible - HDF5 episodes are short
                and uniform (scripted demonstrations), LeRobot episodes vary widely (1.7s to 24.6s
                across pusht teleoperation and xarm pick-and-place), and MCAP episodes are long
                continuous recordings segmented by gap heuristics.
              </p>
            </Prose>

            <SubHeading>Cross-format failure analysis</SubHeading>

            <CodeBlock lang="sql">
{`SELECT e.episode_id, e.duration_s, e.detection_method,
       r.source_format, r.robot_type, r.environment
FROM episodes e
JOIN recordings r ON e.recording_id = r.recording_id
WHERE e.success = false AND e.duration_s > 5.0
ORDER BY e.duration_s DESC`}
            </CodeBlock>

            <Prose>
              <p>
                315 failed episodes longer than 5 seconds - returned in 4.2ms. Results span
                both LeRobot (pusht failures with marker-based detection, confidence 1.0) and
                HDF5 (RoboMimic failures with auto-labeled outcomes). Without the unified schema,
                this query would require two separate scripts reading two different formats and
                manually merging the results.
              </p>
            </Prose>

            <SubHeading>Success rate by robot type</SubHeading>

            <CodeBlock lang="sql">
{`SELECT r.robot_type, r.source_format,
       COUNT(*) as total_episodes,
       COUNT(CASE WHEN e.success = true THEN 1 END) as successes,
       COUNT(CASE WHEN e.success IS NULL THEN 1 END) as unlabeled,
       ROUND(COUNT(CASE WHEN e.success = true THEN 1 END) * 100.0
             / NULLIF(COUNT(CASE WHEN e.success IS NOT NULL THEN 1 END), 0),
       1) as success_rate_pct
FROM episodes e
JOIN recordings r ON e.recording_id = r.recording_id
GROUP BY r.robot_type, r.source_format`}
            </CodeBlock>

            <Prose>
              <p>
                This reveals something every team with mixed-format data hits: label availability
                varies by format. RoboMimic episodes have explicit success labels. MCAP episodes
                from the synthetic fleet have no outcome labels at all - they show as{" "}
                <InlineCode>unlabeled</InlineCode>. The schema makes this visible rather than
                hiding it behind a <InlineCode>NullPointerException</InlineCode> in a training
                script.
              </p>
            </Prose>

            {/* ── Export ── */}
            <SectionHeading>The export problem</SectionHeading>
            <Prose>
              <p>
                You can't feed Iceberg tables directly into a PyTorch DataLoader. Training loops
                need sequential access to (observation, action) pairs with consistent shapes,
                proper normalization, and efficient I/O. The export phase bridges this gap.
              </p>
            </Prose>

            <CodeBlock lang="python - curate and export">
{`# Curate: successful Franka demonstrations
episodes = lake.query_episodes(success=True, robot_type="franka_panda", limit=200)
episode_ids = episodes.to_pandas()["episode_id"].tolist()

# Export as WebDataset shards
lake.export_training_shards(
    episode_ids=episode_ids,
    observation_topics=["/state"],
    action_topic="/action",
    output_dir="./training_shards",
    shard_size_mb=256,
)

# Or as a PyTorch Dataset
dataset = lake.to_pytorch_dataset(
    episode_ids=episode_ids,
    observation_keys=["joint_position", "gripper"],
    action_keys=["action"],
    prediction_horizon=16,  # for action-chunking policies
)`}
            </CodeBlock>

            <Prose>
              <p>
                The demo exported 200 successful episodes → 19,596 training samples across 2
                WebDataset shards (12.4 MB). The curation query
                (<InlineCode>success=true, robot_type="franka_panda"</InlineCode>) selected
                from the combined lake - the exported shards contain data from both RoboMimic
                datasets, seamlessly mixed because the schema normalized them at ingest time.
              </p>
              <p>
                The <InlineCode>prediction_horizon</InlineCode> parameter matters for modern
                robot policies. Action-chunking architectures like Diffusion Policy and ACT
                predict sequences of future actions, not single next actions. The export layer
                handles the windowing - each sample includes the observation at time{" "}
                <em>t</em> and the action sequence from <em>t</em> to{" "}
                <em>t + prediction_horizon</em>.
              </p>
            </Prose>

            {/* ── Divider ── */}
            <div className="mt-16 border-t border-border" />

            {/* ── Footer CTA ── */}
            <div className="mt-12 rounded-lg bg-layer-2 px-8 py-10 text-center border border-border/50">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">Work with us</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                Building data infrastructure for physical AI?
              </h2>
              <p className="mt-3 text-muted-foreground">
                We design and implement production-grade data pipelines for robotics, autonomous
                systems, and embodied AI. Book a 30-minute call to talk through your data architecture.
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
              </div>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
