import { ArrowRight, Bot, ClipboardCheck, Cloud, Database, Factory, Filter, FlaskConical, Lock, Repeat, Rocket, ScanLine, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

type Solution = {
  stage: string;
  price: string;
  icon: typeof Database;
  title: string;
  audience: string;
  outcome: string;
  build: string[];
  dontDo: string[];
  ctaLabel: string;
  painQuote?: string;
};

const solutions: Solution[] = [
  {
    stage: "CLOSED LOOP",
    price: "Customized scope",
    icon: Repeat,
    title: "Close the loop, tailored to your stack",
    audience:
      "For teams who want the whole iteration loop built end-to-end, customized to your fleet, stack, and constraints - not stitched together stage by stage.",
    outcome:
      "A working closed-loop learning system in production: capture, principled retention, eval-gated deploy, and outcome trace - with the operator workflow layer (oncall queues, weekly review feeds, failure triage) that holds it together. Built around your stack, not over the top of it.",
    build: [
      "Fleet data captured and queryable across every robot, in the format it arrives",
      "Episodes scored and retained by signal - failure, novelty, eval disagreement - not random sampling",
      "Every training run tracked, reproducible, and head-to-head comparable on the same eval",
      "Automated eval gating and canary rollout with rollback on regression",
      "Every robot action traceable back to the data and model that produced it",
      "The connecting tissue - production failures auto-feed the eval set, retraining queue, and operator review",
    ],
    dontDo: [
      "Replace your training stack - we integrate over it",
      "Boil the ocean - sequenced by which stage needs it most first",
    ],
    ctaLabel: "Discuss a closed-loop build",
  },
  {
    stage: "CAPTURE",
    price: "Pilot or deployment",
    icon: Database,
    title: "Make your fleet data usable",
    painQuote:
      "We have terabytes of MCAP files in S3 and no one knows what's actually in them.",
    audience:
      "For teams that just deployed their first robots and don't know what to do with the data streaming back.",
    outcome:
      "Sensor streams from every robot become one searchable dataset your ML team can use. No more bespoke conversion scripts. No more 'where did that episode go.'",
    build: [
      "Your fleet data, ingested in the format it arrives",
      "One queryable schema across your entire robot fleet",
      "Interventions, failures, and successes tagged for later retrieval",
      "Query episodes by task, outcome, source, environment - whatever matters",
    ],
    dontDo: [
      "Modify your robot's on-device code - your engineers integrate against our ingestion API",
    ],
    ctaLabel: "Discuss data capture",
  },
  {
    stage: "CURATE",
    price: "Pilot",
    icon: Filter,
    title: "Train on what actually matters",
    painQuote:
      "We're keeping 1% randomly. We know the failures we care about aren't in there.",
    audience:
      "For teams with fleet data who realize retraining on everything is infeasible and retraining on random 1% is losing the signal.",
    outcome:
      "Stop retaining 1% blindly or trying to keep everything. Score episodes by failure, novelty, and difficulty so retraining uses signal, not noise.",
    build: [
      "Declarative scoring policies (diversity, outcome, novelty, difficulty)",
      "Curated training set export in your preferred format",
      "Integration with your training workflow",
      "Reproducible slice definitions tied to model versions",
    ],
    dontDo: ["Fine-tune the model - your ML engineers run the actual training"],
    ctaLabel: "Discuss curation",
  },
  {
    stage: "EXPERIMENT",
    price: "Pilot or deployment",
    icon: FlaskConical,
    title: "Know which model is better, before you ship it",
    painQuote:
      "We have 30 training runs and no real way to tell which one is best.",
    audience:
      "For teams running multiple training configurations who lose track of which run did what and can't systematically compare them.",
    outcome:
      "Stop guessing which training run did what. Track every experiment with full context, compare approaches head-to-head on the same eval, and ship the version that actually wins.",
    build: [
      "Track every experiment with full context (data slice, config, eval results)",
      "Re-run any past experiment exactly",
      "Compare training approaches head-to-head on the same eval set",
      "Run parameter sweeps without writing orchestration code",
      "Integrate with PyTorch, JAX, or your custom training stack",
    ],
    dontDo: [
      "Write your training loop or build custom architectures",
      "Manage your GPU cluster - uses your existing infrastructure",
    ],
    ctaLabel: "Discuss experimentation",
  },
  {
    stage: "SHIP",
    price: "Pilot or deployment",
    icon: Rocket,
    title: "Stop regressed models from reaching your fleet",
    painQuote:
      "Eval looked good. Production regressed anyway.",
    audience:
      "For teams whose retrained model looks better in eval but keeps regressing in production.",
    outcome:
      "Every model change goes through automated comparison gates and staged rollout. Regressions roll back automatically.",
    build: [
      "Config-driven eval pipeline with statistical comparison",
      "Regression suite that grows from production failures",
      "Sim eval gates - run your existing simulator before promoting to fleet",
      "Canary deployment with per-robot version management",
      "Automatic rollback on eval regression",
    ],
    dontDo: [
      "Build a physics engine - we integrate with your existing sim",
    ],
    ctaLabel: "Discuss deployment gates",
  },
  {
    stage: "TRACE",
    price: "Deployment",
    icon: ShieldCheck,
    title: "Answer 'why did the robot do that?' in seconds",
    painQuote:
      "A regulator asked which model was running last Tuesday. It took us a week to answer.",
    audience:
      'For teams whose enterprise customers, compliance teams, or regulators ask "why did the robot do that?"',
    outcome:
      "When compliance, customers, or regulators ask why a robot did what it did, you have the answer in queryable form. From sensor input to physical action, every decision traces back to its data and model.",
    build: [
      "Immutable lineage graph across your training pipeline",
      "Decision-to-data traceability",
      "Evidence export formatted for audit use",
      "Integration with existing logging and deployment systems",
    ],
    dontDo: [
      "Certify compliance with EU AI Act or ISO 42001 - we build the evidence; your compliance team certifies",
    ],
    ctaLabel: "Discuss audit lineage",
  },
];

const journeyStages = ["Capture", "Curate", "Experiment", "Ship", "Trace"];

function SolutionSection({ solution, alt = false }: { solution: Solution; alt?: boolean }) {
  const Icon = solution.icon;
  return (
    <section className={alt ? "bg-layer-2 py-16 lg:py-20" : "bg-layer-1 py-16 lg:py-20"}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-primary">{solution.stage}</span>
            </div>
            <span className="text-muted-foreground">{solution.price}</span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            {solution.title}
          </h2>

          {solution.painQuote && (
            <blockquote className="mt-5 border-l-2 border-primary/40 pl-4 text-base italic text-muted-foreground">
              "{solution.painQuote}"
            </blockquote>
          )}

          <p className="mt-6 text-base text-foreground">
            {solution.outcome}
          </p>

          <p className="mt-3 text-sm italic text-muted-foreground">{solution.audience}</p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">What we deploy</p>
              <ul className="mt-3 space-y-2">
                {solution.build.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">What we don't do</p>
              <ul className="mt-3 space-y-2">
                {solution.dontDo.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-muted-foreground/60">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Button asChild>
              <a
                href="https://calendly.com/achyuthsamudrala/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                {solution.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Solutions() {
  return (
    <Layout>
      <SEO
        title="Solutions | Baselyne Systems"
        description="Fixed-scope engagements for physical AI teams - capture, curate, experiment, ship, and trace. Each stage is a standalone engagement."
        keywords="physical AI consulting engagements, robot data infrastructure, training pipeline consulting, eval gates, fleet deployment, audit lineage, iteration velocity"
        canonical="https://baselynesystems.com/solutions"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">Solutions</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Engagements across the iteration loop
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Scoped engineering services that adapt our platform foundations to each stage of the iteration loop. Each engagement is standalone; enter at the stage that matches your current bottleneck, not necessarily the beginning.
            </p>
            <Button asChild size="lg" className="mt-10">
              <a
                href="https://calendly.com/achyuthsamudrala/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Book a scoping call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Journey map */}
      <section className="border-y border-border/50 bg-layer-2 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Typical flow
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 overflow-x-auto pb-2 lg:gap-6">
              {journeyStages.map((stage, i) => (
                <div key={stage} className="flex flex-shrink-0 items-center gap-3 lg:gap-6">
                  <span className="text-sm font-semibold uppercase tracking-wider text-foreground">{stage}</span>
                  {i < journeyStages.length - 1 && (
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="bg-layer-1 pt-16 lg:pt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Teams we work with
            </p>
            <p className="mt-3 text-base text-muted-foreground">
              Teams building industrial robotics in production.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Factory className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Manufacturing</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Automotive, aerospace, food, pharma, electronics.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Warehouse manipulation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Picking, packing, sortation, fulfilment.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Industrial AMRs</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Mobile robots on factory floors and in warehouses.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <ScanLine className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Quality & inspection</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vision-based defect detection on production lines.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
            Each vertical hits the iteration loop at different points; scope reflects the specific bottleneck you're working against.
          </p>
        </div>
      </section>


      {/* Deployment principle */}
      <section className="bg-layer-1 pt-16 lg:pt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Runs in your cloud, by default
            </p>
            <p className="mt-3 text-base text-muted-foreground">
              Deploys into your cloud account - not ours. Fleet data, model artifacts, and audit logs stay where they are generated. Not an enterprise upsell - it is how the platform is built.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Cloud className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Your cloud, your IAM</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Deployed into your AWS, GCP, or Azure account against your existing roles and policies. We never see your buckets.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Your data stays in your perimeter</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fleet data, episodes, model artifacts, and audit logs stay where they are generated. Your raw data never leaves your perimeter - only operational signals if you choose an Operate engagement.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <ClipboardCheck className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Compliance evidence stays yours</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lineage, access logs, and decision traces live in your account, queryable by your own auditors against your existing systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagements intro */}
      <section className="bg-layer-1 pt-16 lg:pt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Engagements
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
              Every fleet interaction should become training signal
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Most teams capture it badly. We adapt our fleet learning ops foundations across five stages of the iteration loop. Most teams enter where they are stuck, and scope from there.
            </p>
          </div>
          <div className="mx-auto mt-12 w-full max-w-md sm:max-w-lg">
            <div className="relative aspect-square w-full">
              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                  strokeDasharray="6 5"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="55"
                  fill="hsl(var(--primary))"
                  fillOpacity="0.05"
                  stroke="hsl(var(--primary))"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
                {[-54, 18, 90, 162, 234].map((angleDeg) => {
                  const rad = (angleDeg * Math.PI) / 180;
                  const x = 200 + 140 * Math.cos(rad);
                  const y = 200 + 140 * Math.sin(rad);
                  const tangent = angleDeg + 90;
                  return (
                    <g key={angleDeg} transform={`translate(${x} ${y}) rotate(${tangent})`}>
                      <path
                        d="M -7 -5 L 0 0 L -7 5"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeOpacity="0.7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  );
                })}
              </svg>
              <div className="absolute left-1/2 top-1/2 w-28 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">Deployed Fleet</p>
                <p className="mt-1 text-[10px] leading-tight text-muted-foreground">every fleet interaction is signal</p>
              </div>
              {[
                { stage: "CAPTURE", label: "failure logs", left: 50, top: 7.5 },
                { stage: "CURATE", label: "cluster / label", left: 90.4, top: 36.9 },
                { stage: "EXPERIMENT", label: "retrain policy", left: 75.0, top: 84.4 },
                { stage: "SHIP", label: "sim + real eval", left: 25.0, top: 84.4 },
                { stage: "TRACE", label: "monitor regressions", left: 9.6, top: 36.9 },
              ].map(({ stage, label, left, top }) => (
                <div
                  key={stage}
                  className="absolute w-24 -translate-x-1/2 -translate-y-1/2 text-center"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">{stage}</p>
                  <p className="mt-1 text-[10px] leading-tight text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Find where you're stuck
            </h2>
            <p className="mt-4 text-muted-foreground">
              Book a scoping call - we'll walk through your pipeline and scope whatever makes sense.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href="https://calendly.com/achyuthsamudrala/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Book a scoping call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <p className="mt-6 text-sm text-muted-foreground">
              Curious about cost?{" "}
              <Link to="/pricing" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
                See pricing
                <ArrowRight className="h-3 w-3" />
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
