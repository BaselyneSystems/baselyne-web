import { ArrowRight, Bot, ClipboardCheck, Cloud, Database, Factory, Filter, FlaskConical, Lock, Repeat, Rocket, ScanLine, ShieldCheck, Truck } from "lucide-react";
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
    price: "Pilot or buildout",
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
    price: "Pilot or buildout",
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
    price: "Pilot or buildout",
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
    price: "Buildout",
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

const pricingTiers = [
  {
    name: "Advisory sprint",
    price: "From £5k",
    description:
      "Focused senior input on architecture, bottlenecks, or technical direction.",
  },
  {
    name: "Diagnostic assessment",
    price: "From £10k",
    description:
      "A structured map of the current infrastructure gap and prioritized fixes.",
  },
  {
    name: "Pilot build",
    price: "Typically £25k–£75k",
    description:
      "One focused workflow with a defined outcome and handover path.",
  },
  {
    name: "Production buildout",
    price: "Scoped after pilot",
    description:
      "Larger integrations across data, training, deployment, or fleet systems.",
  },
  {
    name: "Operate",
    price: "From £6k / month",
    description:
      "Continuous engineering to run and evolve the pipeline as your fleet, models, and team grow.",
  },
];

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
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">What we build</p>
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
              Where you are, what we build
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Fixed-scope engagements for the physical AI iteration loop. Each stage is a standalone engagement - enter at the one that matches your current bottleneck, not necessarily the beginning.
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
              Companies building AI for the physical world.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Autonomous fleets</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Trucking, AV, last-mile delivery.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Factory className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Industrial automation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Warehouse, construction, manufacturing, agriculture.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <ScanLine className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">Inspection systems</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Energy, utilities, drones.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">General-purpose robotics</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Humanoid, manipulation, foundation labs.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
            Each vertical hits the iteration loop at different points; scope reflects the specific bottleneck you're working against.
          </p>
        </div>
      </section>

      {/* Pricing guide */}
      <section className="bg-layer-1 pt-16 lg:pt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Typical starting points
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                Pricing depends on scope, access, and how much of the surrounding infrastructure already exists.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {pricingTiers.map((tier) => (
                <Card key={tier.name} className="border-border/50 bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground">{tier.name}</h3>
                    <p className="mt-2 text-sm font-medium text-primary">{tier.price}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{tier.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
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
              Every robot interaction should become training signal
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Most teams capture it badly. We build the fleet learning ops layer across five stages of the iteration loop. Most teams enter where they are stuck, and scope from there.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-5xl">
            <div className="flex flex-col items-stretch gap-2 rounded-lg border border-border/50 bg-card p-4 sm:p-6 lg:flex-row lg:items-center lg:gap-2">
              {[
                { stage: "CAPTURE", label: "failure logs" },
                { stage: "CURATE", label: "cluster / label" },
                { stage: "EXPERIMENT", label: "retrain policy" },
                { stage: "SHIP", label: "sim + real eval, safe rollout" },
                { stage: "TRACE", label: "monitor regressions" },
              ].flatMap((step, idx, arr) => {
                const node = (
                  <div key={step.stage} className="flex-1 text-center">
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">{step.stage}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{step.label}</p>
                  </div>
                );
                if (idx === arr.length - 1) return [node];
                return [
                  node,
                  <ArrowRight
                    key={`arrow-${idx}`}
                    className="mx-auto h-4 w-4 shrink-0 rotate-90 text-muted-foreground/40 lg:rotate-0"
                  />,
                ];
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Single-stage engagements */}
      {solutions.slice(1).map((solution, index) => (
        <SolutionSection key={solution.title} solution={solution} alt={index % 2 === 0} />
      ))}

      {/* Closed-loop divider */}
      <section className="bg-layer-1 py-10 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Or close the whole loop end-to-end
            </p>
          </div>
        </div>
      </section>

      {/* Flagship: closed-loop */}
      <SolutionSection solution={solutions[0]} alt={false} />

      {/* Bottom CTA */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Don't see the right fit?
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
          </div>
        </div>
      </section>
    </Layout>
  );
}
