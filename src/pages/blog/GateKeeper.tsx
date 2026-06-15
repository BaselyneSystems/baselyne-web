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

// ─── Gate Result Tables ──────────────────────────────────────────────────────

function BlockedGateTable() {
  const rows = [
    { gate: "accuracy_gate", evaluator: "accuracy", metric: "f1_weighted", value: "0.338", threshold: "≥ 0.85", verdict: "FAIL", highlight: true },
    { gate: "drift_gate", evaluator: "drift", metric: "max_psi_score", value: "0.143", threshold: "< 0.25", verdict: "PASS", highlight: false },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Gate</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Evaluator</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Metric</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Value</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Threshold</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Verdict</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                row.highlight
                  ? "bg-destructive/5 text-foreground"
                  : "bg-card text-muted-foreground"
              }
            >
              <td className="px-4 py-3 font-mono text-xs">{row.gate}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.evaluator}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.metric}</td>
              <td className="px-4 py-3 font-mono text-xs">
                {row.highlight ? (
                  <span className="text-destructive font-semibold">{row.value}</span>
                ) : (
                  row.value
                )}
              </td>
              <td className="px-4 py-3 font-mono text-xs">{row.threshold}</td>
              <td className="px-4 py-3 font-mono text-xs font-semibold">
                {row.verdict === "FAIL" ? (
                  <span className="text-destructive">{row.verdict}</span>
                ) : (
                  <span className="text-primary">{row.verdict}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PassedGateTable() {
  const rows = [
    { gate: "accuracy_gate", evaluator: "accuracy", metric: "f1_weighted", value: "0.950", threshold: "≥ 0.85", verdict: "PASS" },
    { gate: "drift_gate", evaluator: "drift", metric: "max_psi_score", value: "0.143", threshold: "< 0.25", verdict: "PASS" },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Gate</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Evaluator</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Metric</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Value</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Threshold</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Verdict</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}
            >
              <td className="px-4 py-3 font-mono text-xs">{row.gate}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.evaluator}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.metric}</td>
              <td className="px-4 py-3 font-mono text-xs">
                <span className="text-primary font-semibold">{row.value}</span>
              </td>
              <td className="px-4 py-3 font-mono text-xs">{row.threshold}</td>
              <td className="px-4 py-3 font-mono text-xs font-semibold">
                <span className="text-primary">{row.verdict}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EvaluatorTable() {
  const rows = [
    { evaluator: "accuracy", phase: "offline", metric: "f1_weighted", description: "Classification metrics via sklearn" },
    { evaluator: "drift", phase: "offline", metric: "max_psi_score", description: "Data drift via PSI or KS test against reference data" },
    { evaluator: "llm_judge", phase: "offline", metric: "llm_judge_score", description: "LLM-as-judge quality scoring (Anthropic API)" },
    { evaluator: "champion_challenger", phase: "offline", metric: "champion_challenger_delta", description: "Compare candidate against current champion" },
    { evaluator: "latency", phase: "online", metric: "p95_latency_ms", description: "P50/P95/P99 latency benchmarking against live endpoint" },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Evaluator</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Phase</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Primary metric</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}
            >
              <td className="px-4 py-3 font-mono text-xs">{row.evaluator}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.phase}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.metric}</td>
              <td className="px-4 py-3 text-xs">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GateKeeper() {
  return (
    <Layout>
      <SEO
        title="GateKeeper: Eval-Gated Model Deployment | Baselyne Systems Blog"
        description="How we built an eval-gated deployment pipeline that blocks bad models before production - with accuracy gates, drift detection, canary traffic, and a full audit trail."
        keywords="MLOps, model deployment, eval pipeline, model evaluation, canary deployment, model registry, ML CI/CD, model monitoring, drift detection, open source MLOps"
        canonical="https://baselynesystems.com/blog/gatekeeper"
        noIndex
        ogType="article"
        publishedTime="2026-03-23"
        author="Achyuth Samudrala"
        structuredData={articleSchema({
          title: "GateKeeper: Eval-Gated Model Deployment",
          description: "How we built an eval-gated deployment pipeline that blocks bad models before production - with accuracy gates, drift detection, canary traffic, and a full audit trail.",
          url: "https://baselynesystems.com/blog/gatekeeper",
          datePublished: "2026-03-23",
          keywords: ["MLOps", "model deployment", "eval pipeline", "canary deployment", "drift detection", "ML CI/CD", "open source MLOps"],
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
                GateKeeper: Eval-Gated Model Deployment
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                Every model change runs through quality gates before it touches production traffic
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="text-sm text-muted-foreground">March 2026</span>
                <a
                  href="https://github.com/achyuthsamudrala/gatekeeper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  achyuthsamudrala/gatekeeper
                </a>
              </div>
              <div className="mt-8 border-t border-border" />
            </div>

            {/* ── Why we built this ── */}
            <SectionHeading>Why we built this</SectionHeading>
            <Prose>
              <p>
                The model works in the notebook. The team packages it into a container, writes a
                serving endpoint, and deploys. Three days later, accuracy has degraded 15% and
                nobody noticed - because the only check was "did the endpoint start."
              </p>
              <p>
                The gap between "model artifact exists" and "model is safely serving production
                traffic" is almost entirely infrastructure. Evaluation pipelines, threshold
                enforcement, canary traffic management, rollback logic, audit trails. Most teams
                either skip this entirely or build ad hoc scripts that check one metric and
                hope for the best.
              </p>
              <p>
                We built GateKeeper as an open-source eval-gated deployment pipeline. It sits
                between your model registry and your serving infrastructure. Every model change -
                new weights, prompt update, config change - runs through a configurable set of
                quality gates before it can reach production. If any blocking gate fails, the
                deployment is stopped and the team sees exactly why.
              </p>
            </Prose>

            <Callout label="Key result">
              A sentiment classifier candidate with F1 = 0.338 was blocked before production.
              The same pipeline promoted a v2.2 candidate with F1 = 0.950 - both decisions
              fully auditable, config-driven, with no manual review required.
            </Callout>

            {/* ── Architecture ── */}
            <SectionHeading>Architecture</SectionHeading>
            <Prose>
              <p>
                GateKeeper has two independently optional phases - <strong>offline</strong> and{" "}
                <strong>online</strong> - that can be composed in any combination.
              </p>
              <p>
                <strong>Offline gates</strong> evaluate model quality without a live serving endpoint.
                Accuracy against held-out data, data drift against a reference distribution,
                LLM-as-judge scoring, champion vs. challenger comparison. These are cheap, fast,
                and artifact-based. Evaluators within a phase run concurrently via{" "}
                <InlineCode>asyncio.gather</InlineCode>.
              </p>
              <p>
                <strong>Online gates</strong> evaluate model behaviour under real conditions. Latency
                benchmarks against a deployed endpoint, then canary traffic with auto-promote or
                auto-rollback based on live metrics.
              </p>
              <p>
                Both phases produce gate results that are persisted to Postgres, evaluated against
                a configurable policy, and recorded in an append-only audit log.
              </p>
            </Prose>

            <CodeBlock lang="ascii - pipeline flow">
{`Trigger                    GateKeeper Server                External
───────                    ─────────────────                ────────

GitHub Action ──┐
  + gatekeeper  │  POST     ┌─────────────┐   predict()   Model Endpoints
    .yaml       ├─/trigger─►│ Eval Engine  ├─────────────► Champion
                │           │  (concurrent │               Challenger
                │           │   evaluators)│
                │           └──────┬───────┘               Model Registry
                │                  │ metric results        MLflow · S3
                │           ┌──────▼───────┐
                │           │ Gate Policy  │               Anthropic API
                │           │  Engine      │               (LLM Judge)
                │           └──────┬───────┘
                │            pass? │
                │           ┌──────▼───────┐
                │           │   Canary     │  set_traffic  ┌──────────┐
                │           │   Manager    ├──split()─────►│ Serving  │
                │           └──────┬───────┘               └──────────┘
                │                  │
                │           ┌──────▼───────┐
                │           │  Audit Log   │──► PostgreSQL
                │           └──────────────┘`}
            </CodeBlock>

            <Prose>
              <p>
                The system is fully async - every I/O operation (database, HTTP calls to model
                endpoints, file downloads, LLM judge API calls) is non-blocking. Evaluators
                within a phase run concurrently. If one evaluator fails, the others still complete
                and produce results - failures are isolated per gate, not per pipeline.
              </p>
            </Prose>

            {/* ── The Config ── */}
            <SectionHeading>Config-driven gates</SectionHeading>
            <Prose>
              <p>
                Every model repo contains a <InlineCode>gatekeeper.yaml</InlineCode> that defines
                what gates must pass before deployment. The config is declarative - you specify
                the evaluator, the metric, the threshold, and whether the gate is blocking.
                GateKeeper handles the execution, comparison, and policy evaluation.
              </p>
            </Prose>

            <CodeBlock lang="yaml - gatekeeper.yaml">
{`version: "1.0"
model_type: llm
eval_dataset:
  uri: s3://bucket/eval-data.jsonl
  format: jsonl
  label_column: expected_label
  task_type: classification
reference_dataset:
  uri: s3://bucket/reference.jsonl
  format: jsonl
  feature_columns:
    - text_length
    - category_id
gates:
  - name: accuracy_gate
    phase: offline
    evaluator: accuracy
    metric: f1_weighted
    threshold: 0.85
    comparator: ">="
    blocking: true
  - name: drift_gate
    phase: offline
    evaluator: drift
    metric: max_psi_score
    threshold: 0.25
    comparator: "<"
    blocking: true
    drift_method: psi`}
            </CodeBlock>

            <Prose>
              <p>
                This config defines two blocking gates. The accuracy gate requires weighted F1
                of at least 0.85 against the eval dataset. The drift gate requires that the
                maximum Population Stability Index across all feature columns stays below 0.25.
                If either fails, the deployment is blocked.
              </p>
              <p>
                The config lives in the model repo, versioned alongside the model code. Different
                models can have different gates, different thresholds, different evaluators. The
                server doesn't need to know about your model - it reads the config at trigger time.
              </p>
            </Prose>

            {/* ── Built-in Evaluators ── */}
            <SectionHeading>Built-in evaluators</SectionHeading>
            <Prose>
              <p>
                GateKeeper ships with five evaluators that cover the most common gate patterns.
                Each evaluator is async-native, reports a primary metric, and handles errors
                gracefully - a failing evaluator produces an error result, not a crashed pipeline.
              </p>
            </Prose>

            <EvaluatorTable />

            <Prose>
              <p>
                The accuracy evaluator streams the eval dataset in batches, runs inference against
                the candidate model, and computes classification metrics via sklearn in a thread
                pool (CPU-bound work never blocks the event loop). The drift evaluator compares
                feature distributions between a reference dataset and the current eval data using
                PSI or KS test. The LLM judge sends sample outputs to Claude for quality scoring.
              </p>
            </Prose>

            {/* ── Demo: Blocked ── */}
            <SectionHeading>Demo: blocking a bad model</SectionHeading>
            <Prose>
              <p>
                A sentiment classifier team pushes candidate v2.1-rc1. The model was fine-tuned
                on a subset of data and the team suspects it might have regressed. They trigger
                the GateKeeper pipeline:
              </p>
            </Prose>

            <CodeBlock lang="bash">
{`curl -X POST http://localhost:8000/api/v1/pipeline/trigger \\
  -H "Content-Type: application/json" \\
  -H "X-GateKeeper-Secret: $SECRET" \\
  -d '{
    "model_name": "sentiment-classifier",
    "candidate_version": "v2.1-rc1",
    "phase": "offline",
    "gatekeeper_yaml": "..."
  }'`}
            </CodeBlock>

            <Prose>
              <p>
                GateKeeper loads the eval dataset (60 samples, 3 classes), runs the candidate model
                against each sample, computes F1, and evaluates the drift gate against the reference
                distribution. The results:
              </p>
            </Prose>

            <BlockedGateTable />

            <Prose>
              <p>
                The accuracy gate fails - F1 of 0.338 is well below the 0.85 threshold. The drift
                gate passes - PSI of 0.143 is within the 0.25 limit, meaning the input data
                distribution hasn't shifted. The problem is the model, not the data.
              </p>
              <p>
                Because <InlineCode>accuracy_gate</InlineCode> is marked{" "}
                <InlineCode>blocking: true</InlineCode>, the pipeline status is set to{" "}
                <strong>failed</strong>. The deployment is stopped. The audit log records the
                trigger, the gate results, and the verdict. The team sees exactly what failed
                and by how much - no manual review needed.
              </p>
            </Prose>

            <Callout label="What the team sees">
              <strong>Pipeline: FAILED</strong> - sentiment-classifier v2.1-rc1 blocked by
              accuracy_gate. F1 = 0.338, required ≥ 0.85. Drift within normal range (PSI = 0.143).
              Model regression confirmed, data distribution unchanged.
            </Callout>

            {/* ── Demo: Passed ── */}
            <SectionHeading>Demo: promoting a good model</SectionHeading>
            <Prose>
              <p>
                The team fixes the training data issue and pushes v2.2-rc1. Same pipeline,
                same gates, same thresholds:
              </p>
            </Prose>

            <PassedGateTable />

            <Prose>
              <p>
                Both gates pass. F1 of 0.950 clears the 0.85 threshold. PSI remains at 0.143.
                The pipeline status is set to <strong>passed</strong>. The model is cleared for
                promotion to production.
              </p>
              <p>
                The same config, the same infrastructure, two different outcomes - one blocked,
                one promoted. The decision is fully automated, fully auditable, and took seconds
                instead of a manual review cycle.
              </p>
            </Prose>

            {/* ── Gate Policy Engine ── */}
            <SectionHeading>Gate policy engine</SectionHeading>
            <Prose>
              <p>
                After all evaluators in a phase complete, the gate policy engine loads
                their results from Postgres, applies threshold comparisons, and computes
                the overall verdict. The logic is simple and intentionally transparent:
              </p>
            </Prose>

            <CodeBlock lang="python - gate policy evaluation">
{`# For each gate: compare metric_value against threshold
ops = {
    ">=": lambda v, t: v >= t,
    "<=": lambda v, t: v <= t,
    ">":  lambda v, t: v > t,
    "<":  lambda v, t: v < t,
    "==": lambda v, t: v == t,
}

# Overall: all blocking gates must pass
overall_passed = all(
    gate.passed for gate in phase_gates
    if gate.blocking
)`}
            </CodeBlock>

            <Prose>
              <p>
                No weighted scoring, no complex decision trees. A blocking gate either passes
                or it doesn't. This is deliberate - when a deployment is blocked at 2 AM, the
                on-call engineer needs to understand exactly why in seconds, not interpret a
                composite score.
              </p>
            </Prose>

            {/* ── Canary ── */}
            <SectionHeading>Canary traffic management</SectionHeading>
            <Prose>
              <p>
                For models that pass offline gates, GateKeeper can manage canary traffic. It
                sets a traffic split between champion and challenger (configurable percentage),
                runs an async observation loop that collects latency and error rate snapshots
                at regular intervals, and auto-promotes or auto-rolls back based on thresholds.
              </p>
            </Prose>

            <CodeBlock lang="yaml - canary config">
{`canary:
  traffic_percent: 10
  observation_window_minutes: 30
  auto_promote_threshold:
    latency_p95_ms: 200
    error_rate: 0.01
  auto_rollback_threshold:
    latency_p95_ms: 500
    error_rate: 0.05`}
            </CodeBlock>

            <Prose>
              <p>
                If the challenger's P95 latency exceeds 500ms or error rate exceeds 5% during
                any observation snapshot, GateKeeper immediately rolls back traffic to the
                champion and logs the reason. If the observation window completes and the
                challenger meets the promotion thresholds, traffic is shifted 100% to the
                challenger. Manual promote and rollback endpoints are available for cases that
                need human judgment.
              </p>
            </Prose>

            {/* ── Plugin System ── */}
            <SectionHeading>Plugin system</SectionHeading>
            <Prose>
              <p>
                GateKeeper has six plugin registries - evaluators, model types, dataset formats,
                drift methods, inference encodings, and judge modalities. All follow the same
                pattern: implement a base class, register via Python entry points.
              </p>
            </Prose>

            <CodeBlock lang="python - custom evaluator">
{`class MyEvaluator(BaseEvaluator):
    @property
    def name(self) -> str:
        return "my_custom_eval"

    @property
    def phase(self) -> str:
        return "offline"

    @property
    def supported_model_types(self) -> list[str]:
        return ["*"]

    @property
    def primary_metric(self) -> str:
        return "my_score"

    async def evaluate(self, ctx: EvaluationContext) -> EvalResult:
        # Your evaluation logic here
        score = await compute_my_metric(ctx)
        return EvalResult(
            gate_name=ctx.gate_config["name"],
            evaluator_name=self.name,
            phase=self.phase,
            metric_name=self.primary_metric,
            metric_value=score,
            passed=None,  # Gate engine handles pass/fail
        )`}
            </CodeBlock>

            <CodeBlock lang="toml - pyproject.toml entry point">
{`[project.entry-points."gatekeeper.evaluators"]
my_eval = "my_package.evaluators:MyEvaluator"`}
            </CodeBlock>

            <Prose>
              <p>
                Install the package and GateKeeper discovers it automatically at startup. The
                same pattern works for custom dataset formats (Parquet, CSV, and JSONL are
                built-in), custom drift methods, and custom model types. The evaluator contract
                is strict: always async, never raises (return an error result instead), and
                CPU-bound work must be wrapped in{" "}
                <InlineCode>run_in_executor()</InlineCode>.
              </p>
            </Prose>

            {/* ── CI/CD ── */}
            <SectionHeading>GitHub Action integration</SectionHeading>
            <Prose>
              <p>
                GateKeeper ships a GitHub Action that triggers the pipeline from CI and polls
                for completion. A model change in a pull request triggers offline evaluation;
                the PR is blocked until gates pass.
              </p>
            </Prose>

            <CodeBlock lang="yaml - GitHub Actions workflow">
{`- uses: your-org/gatekeeper/action@main
  with:
    gatekeeper_url: \${{ secrets.GATEKEEPER_URL }}
    gatekeeper_secret: \${{ secrets.GATEKEEPER_SECRET }}
    model_name: sentiment-classifier
    phase: offline
    gatekeeper_yaml: ./gatekeeper.yaml`}
            </CodeBlock>

            <Prose>
              <p>
                The action is implemented as a bash + curl + jq script - no Node.js runtime, no
                compiled binary. It triggers the pipeline, polls the run status endpoint, and
                exits with a non-zero code if any blocking gate fails. The gate report is printed
                to the workflow log so reviewers can see exactly what passed and what didn't.
              </p>
            </Prose>

            {/* ── Workflow Patterns ── */}
            <SectionHeading>Workflow patterns</SectionHeading>
            <Prose>
              <p>
                The two phases compose into four patterns depending on what your team needs:
              </p>
            </Prose>

            <CodeBlock lang="text - workflow patterns">
{`Pattern A - Offline only
  Prompt change or serverless model. No deployment step needed.
  Run accuracy, drift, LLM judge gates against eval data.

Pattern B - Online only
  Team has existing eval suite. GateKeeper for canary only.
  Deploy challenger, run latency gates, manage canary traffic.

Pattern C - Chained (offline → deploy → online)
  Full pipeline. Offline gates must pass before online phase starts.
  If offline fails, online is skipped automatically.

Pattern D - Custom evaluator
  Extend with domain-specific evaluation logic via plugins.
  Same pipeline, your metric, your threshold.`}
            </CodeBlock>

            {/* ── Running it ── */}
            <SectionHeading>Running it</SectionHeading>
            <Prose>
              <p>
                The full stack runs via Docker Compose - FastAPI backend, Postgres, and a React
                dashboard for viewing pipeline runs, gate results, and canary snapshots.
              </p>
            </Prose>

            <CodeBlock lang="bash">
{`git clone https://github.com/achyuthsamudrala/gatekeeper.git
cd gatekeeper

# Full stack
docker compose up -d
make migrate
make health

# Run the blog demo
./demo/run.sh`}
            </CodeBlock>

            <Prose>
              <p>
                The demo script starts a mock model server, triggers both scenarios (blocked and
                passed), and writes the results to{" "}
                <InlineCode>demo/results/</InlineCode> as JSON files.
                The same JSON files were used to produce the gate result tables in this post.
              </p>
            </Prose>

            {/* ── Divider ── */}
            <div className="mt-16 border-t border-border" />

            {/* ── Footer CTA ── */}
            <div className="mt-12 rounded-lg bg-layer-2 px-8 py-10 text-center border border-border/50">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">Work with us</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                Need eval gates for your model deployment?
              </h2>
              <p className="mt-3 text-muted-foreground">
                We build MLOps infrastructure - from evaluation pipelines to production serving.
                Book a 30-minute call to talk through your model lifecycle.
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
                  href="https://github.com/achyuthsamudrala/gatekeeper"
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
