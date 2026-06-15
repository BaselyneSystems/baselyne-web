import { ArrowLeft, ArrowRight } from "lucide-react";
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

function ComparisonTable() {
  const rows = [
    { policy: "MLP", params: "70K", time: "59s", eval: "100%", stage: "production", highlight: true },
    { policy: "Flow Matching", params: "1.38M", time: "522s", eval: "100%", stage: "production", highlight: false },
    { policy: "Diffusion", params: "1.38M", time: "509s", eval: "99%", stage: "production", highlight: false },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Policy</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Parameters</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Training time</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Eval success</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Stage</th>
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
              <td className="px-4 py-3 font-mono text-xs">{row.policy}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.params}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.time}</td>
              <td className="px-4 py-3 font-mono text-xs">
                {row.highlight ? (
                  <span className="text-primary font-semibold">{row.eval}</span>
                ) : (
                  row.eval
                )}
              </td>
              <td className="px-4 py-3 font-mono text-xs">{row.stage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ManifestTable() {
  const rows = [
    { field: "Episodes", value: "206" },
    { field: "Total samples", value: "25,650" },
    { field: "Curation query", value: "SELECT * FROM episodes WHERE robot_type = 'pusht_2dof'" },
    { field: "Source", value: "robot-data-lake/demo/lake" },
    { field: "Data hash", value: "69a2cbd3..." },
    { field: "Normalization hash", value: "5a57671d..." },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Field</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}
            >
              <td className="px-4 py-3 text-xs">{row.field}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RegistryTable() {
  const rows = [
    { version: "v1", policy: "MLP", data: "69a2cbd3", eval: "100%", params: "70K", stage: "production" },
    { version: "v2", policy: "Diffusion", data: "69a2cbd3", eval: "99%", params: "1.38M", stage: "production" },
    { version: "v3", policy: "Flow", data: "69a2cbd3", eval: "100%", params: "1.38M", stage: "production" },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Version</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Policy</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Data version</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Eval success</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Parameters</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Stage</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}
            >
              <td className="px-4 py-3 font-mono text-xs">{row.version}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.policy}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.data}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.eval}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.params}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.stage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TrainingPipeline() {
  return (
    <Layout>
      <SEO
        title="MLOps for Robot Policies: Versioned, Auditable, Reproducible | Baselyne Systems"
        description="How we built a training pipeline for physical AI that traces every model back to its exact training data, compares policy architectures on the same versioned dataset, and registers evaluated models with full reproducibility records."
        keywords="robot policy training, physical AI MLOps, model registry robotics, training data lineage, experiment comparison, reproducible training, robot policy versioning, physical AI training pipeline"
        canonical="https://baselynesystems.com/blog/training-pipeline"
        noIndex
        ogType="article"
        publishedTime="2026-04-05"
        author="Achyuth Samudrala"
        structuredData={articleSchema({
          title: "MLOps for Robot Policies: Versioned, Auditable, Reproducible",
          description: "How we built a training pipeline for physical AI that traces every model back to its exact training data and compares policy architectures with evidence.",
          url: "https://baselynesystems.com/blog/training-pipeline",
          datePublished: "2026-04-05",
          keywords: ["robot policy training", "physical AI MLOps", "model registry", "training data lineage", "experiment comparison", "reproducible training"],
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
                <Tag>Physical AI</Tag>
              </div>
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                MLOps for Robot Policies
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                Data lineage, experiment comparison, and model registry for physical AI training pipelines
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
                A robotics team trains a new policy. It works worse than the last one. The
                first question is always: "what changed?" Was it the data? A hyperparameter?
                A different subset of episodes? Nobody knows - because the training ran in a
                notebook, the data was a folder on someone's machine, and the model was
                saved as <InlineCode>model_final_v2_FIXED.pt</InlineCode>.
              </p>
              <p>
                This isn't a tooling problem - MLflow and Weights & Biases exist. It's a
                physical AI-specific problem. Robot training data comes from episode recordings
                across multiple formats and robots. The curation query ("only successful grasps
                from warehouse B") is as important as the hyperparameters. And the model
                registry needs to track not just the checkpoint but the data version, the
                eval results, and the full chain from recording to deployment.
              </p>
              <p>
                We built a training pipeline that wraps existing training loops with the
                infrastructure that makes every decision traceable. It's not a training
                framework - it's the lineage, versioning, evaluation, and comparison layer
                around whatever training code your team already uses.
              </p>
            </Prose>

            <Callout label="Key results">
              <strong>3 policy architectures</strong> compared on the same versioned dataset
              (206 episodes, data hash <InlineCode>69a2cbd3</InlineCode>) ·{" "}
              MLP: <strong>70K params, 59s, 100% success</strong> ·{" "}
              Diffusion: <strong>1.38M params, 509s, 99%</strong> ·{" "}
              Flow: <strong>1.38M params, 522s, 100%</strong> ·{" "}
              Every model registered with data lineage, eval results, and reproducibility record
            </Callout>

            {/* ── Pipeline ── */}
            <SectionHeading>The pipeline</SectionHeading>
            <Prose>
              <p>
                Four steps, one config, one command. Each step is independently runnable -
                you can evaluate an existing checkpoint without retraining, or register a
                model without re-evaluating.
              </p>
            </Prose>

            <CodeBlock lang="ascii - pipeline flow">
{`Data Manifest          Pipeline                    Model Registry
─────────────          ────────                    ──────────────

episode IDs     ─┐
curation query   │     1. Validate data manifest
data hash        ├──►  2. Train policy              ──► checkpoint
norm stats hash ─┘     3. Evaluate (offline/sim)     ──► eval report
                       4. Register (if eval passes)  ──► versioned model
                              │                           + lineage
                              ▼                           + eval results
                       Reproducibility Record              + repro record
                       (git SHA, config, env, seeds)`}
            </CodeBlock>

            <Prose>
              <p>
                The pipeline wraps whatever training code your team uses. The training loop,
                model architectures, and data loaders don't change. The pipeline adds the
                infrastructure around them: data validation before training starts, structured
                evaluation after training ends, and model registration with full metadata.
              </p>
            </Prose>

            {/* ── Data lineage ── */}
            <SectionHeading>Data lineage: which episodes trained this model</SectionHeading>
            <Prose>
              <p>
                When training shards are exported from the data lake, a manifest is written
                alongside them. The manifest records every episode ID, the curation query
                that selected them, the export timestamp, and a deterministic hash of the
                contents.
              </p>
            </Prose>

            <ManifestTable />

            <Prose>
              <p>
                The data hash is computed from a canonical JSON serialization of the episode
                IDs, curation query, and normalization stats. Same data, same hash - regardless
                of when or where the export ran. When the pipeline starts, it reads this
                manifest and logs it as a training artifact. Every model in the registry
                links back to this hash.
              </p>
              <p>
                All three runs in the demo share data hash{" "}
                <InlineCode>69a2cbd3</InlineCode>. This is the guarantee: when comparing
                MLP vs. diffusion vs. flow matching, the data is identical. Any difference
                in eval results is from the architecture, not the data.
              </p>
            </Prose>

            {/* ── Comparison ── */}
            <SectionHeading>Experiment comparison</SectionHeading>
            <Prose>
              <p>
                We ran three policy architectures through the pipeline - MLP (simple baseline),
                diffusion policy (generative, handles multi-modal actions), and flow matching
                (faster inference variant of diffusion) - all on the same 206-episode PushT
                dataset. The comparison is structured: same data version, same eval protocol,
                same registration process.
              </p>
            </Prose>

            <ComparisonTable />

            <Prose>
              <p>
                The MLP trains in 59 seconds with 70K parameters and hits 100% offline eval
                success. Diffusion and flow matching take 9x longer with 20x more parameters -
                and diffusion actually scores slightly lower at 99%. On this task, the simplest
                architecture wins.
              </p>
              <p>
                That's not always the case - diffusion policies excel on multi-modal action
                distributions where the same observation can map to multiple valid actions.
                The point isn't which architecture is best. The point is that the infrastructure
                produces this comparison automatically. Three YAML configs, one command, a
                ranked table with every model traceable to its exact data and reproducible
                from its record.
              </p>
            </Prose>

            {/* ── Registry ── */}
            <SectionHeading>Model registry: version, evaluate, promote</SectionHeading>
            <Prose>
              <p>
                After training and evaluation, models are registered with their full context:
                policy type, data manifest hash, eval results, parameter count, and training
                wall time. The registry supports a stage lifecycle - models enter as{" "}
                <InlineCode>staging</InlineCode> and are promoted to{" "}
                <InlineCode>production</InlineCode> only if eval passes the configured
                thresholds.
              </p>
            </Prose>

            <RegistryTable />

            <Prose>
              <p>
                Every version links to the same data hash (<InlineCode>69a2cbd3</InlineCode>)
                because they were trained on the same export. When the next training run uses
                a different curation query - say, adding episodes from a new robot - the data
                hash changes, and the registry makes it visible: "v4 was trained on different
                data than v1-v3."
              </p>
              <p>
                The registry wraps MLflow when available and falls back to a local JSON file
                when it's not. The interface is the same either way - register, load by version
                or stage, set stage. No hard dependency on any tracking server.
              </p>
            </Prose>

            {/* ── Reproducibility ── */}
            <SectionHeading>Reproducibility: everything needed to rerun</SectionHeading>
            <Prose>
              <p>
                Each training run produces a reproducibility record capturing everything
                another engineer would need to reproduce it exactly:
              </p>
            </Prose>

            <CodeBlock lang="json - reproducibility record (excerpt)">
{`{
  "git_sha": "e9f6d9d7595d...",
  "git_dirty": true,
  "resolved_config": {
    "model": { "policy_type": "mlp", "state_dim": 2, "action_dim": 2 },
    "train": { "epochs": 20, "lr": 0.0001, "seed": 42 },
    "data": { "batch_size": 64 }
  },
  "data_manifest_hash": "69a2cbd338bc...",
  "python_env_hash": "3ddc028bc753...",
  "random_seeds": { "training": 42, "data": 42, "eval": 42 },
  "hardware": {
    "platform": "macOS-15.4.1-arm64",
    "torch": "2.11.0",
    "gpu": "none",
    "cpu_count": 10
  }
}`}
            </CodeBlock>

            <Prose>
              <p>
                The resolved config is the full config after YAML loading with all defaults
                filled - not the user-provided partial config. The python environment hash
                is computed from <InlineCode>pip freeze</InlineCode>. The git SHA links to
                the exact code version, with a diff hash if there are uncommitted changes.
              </p>
              <p>
                Given a reproducibility record and the same code version, another engineer
                can reproduce the training run on different hardware. The data manifest hash
                ensures they use the same episodes. The random seeds ensure the same
                initialization and shuffling. The resolved config ensures the same
                hyperparameters.
              </p>
            </Prose>

            {/* ── Design ── */}
            <SectionHeading>Design principles</SectionHeading>
            <Prose>
              <p>
                <strong>MLflow is optional.</strong> The pipeline works without a tracking
                server - it falls back to local file storage for the registry, comparison,
                and reproducibility records. This matters for physical AI teams that train
                on edge devices or air-gapped environments. MLflow adds value when it's
                available but isn't a hard dependency.
              </p>
              <p>
                <strong>Each component is independent.</strong> The manifest, registry,
                evaluation, comparison, and reproducibility modules have clean interfaces
                and no circular dependencies. You can use the data manifest without the
                registry, or the registry without the evaluation pipeline. The pipeline
                runner composes them but they don't depend on each other.
              </p>
              <p>
                <strong>Typed data structures throughout.</strong> Every artifact - manifest,
                eval report, reproducibility record, model version - is a typed dataclass
                with validation on construction. Corrupt manifests are caught at load time,
                not during training.
              </p>
            </Prose>

            {/* ── Divider ── */}
            <div className="mt-16 border-t border-border" />

            {/* ── Footer CTA ── */}
            <div className="mt-12 rounded-lg bg-layer-2 px-8 py-10 text-center border border-border/50">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">Work with us</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                Need MLOps infrastructure for physical AI?
              </h2>
              <p className="mt-3 text-muted-foreground">
                We build training pipelines, data lakes, and evaluation infrastructure
                for robotics and autonomous systems. Book a 30-minute call to talk through
                your training workflow.
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
