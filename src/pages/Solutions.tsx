import { ArrowRight, Database, Filter, FlaskConical, Lightbulb, Rocket, ShieldCheck, Target } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

type Solution = {
  stage: string;
  duration: string;
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

const advisorySprint: Solution = {
  stage: "ADVISORY",
  duration: "2 weeks",
  price: "From £5k",
  icon: Lightbulb,
  title: "Advisory Sprint",
  audience:
    "For teams who want focused senior input on a specific infrastructure question - lighter than a full Assessment, more structured than a scoping call.",
  outcome:
    "A written decision memo with concrete recommendations and rationale, ready to share with your team or board. Includes ~12 hours of senior advisory time across the engagement.",
  build: [
    "3 scheduled discussion sessions of 90 minutes with your team",
    "Offline research and analysis between sessions",
    "Written observations after each session",
    "Final decision memo with prioritised recommendations",
  ],
  dontDo: [
    "Implement technical fixes - advisory only",
    "Replace a full Assessment if what you need is systematic bottleneck diagnosis",
  ],
  ctaLabel: "Book an advisory sprint",
};

const entryPoint: Solution = {
  stage: "ASSESSMENT",
  duration: "2-3 weeks",
  price: "From £10k",
  icon: Target,
  title: "Find what's actually slowing you down",
  audience: "For teams who want a sharp outside view of where their iteration cycle breaks, with a structured diagnostic.",
  outcome:
    "Walk away with a bottleneck map, dollar cost per bottleneck, and a prioritised path to fix them. Specific recommendations tied to your stack - not platitudes.",
  build: [
    "Bottleneck map - where your cycle time is actually going",
    "Cost of each bottleneck (cycle time, engineering hours, GPU waste)",
    "Prioritized recommendations with estimated impact",
    "Scoped follow-on engagement options, if you want them",
  ],
  dontDo: ["Implement fixes in this engagement - diagnostic only"],
  ctaLabel: "Start with an assessment",
};

const solutions: Solution[] = [
  {
    stage: "CAPTURE",
    duration: "6–8 weeks",
    price: "Pilot or buildout",
    icon: Database,
    title: "Make your fleet data usable",
    painQuote:
      "We have terabytes of MCAP files in S3 and no one knows what's actually in them.",
    audience:
      "For teams that just deployed their first robots and don't know what to do with the data streaming back.",
    outcome:
      "Sensor streams from every robot become one queryable dataset your ML team can train on. No more bespoke conversion scripts. No more 'where did that episode go.'",
    build: [
      "Your fleet data, ingested in whatever format it arrives (MCAP, RLDS, LeRobot, HDF5)",
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
    duration: "4–6 weeks",
    price: "Pilot",
    icon: Filter,
    title: "Train on what actually matters",
    painQuote:
      "We're keeping 1% randomly. We know the failures we care about aren't in there.",
    audience:
      "For teams with fleet data who realize retraining on everything is infeasible and retraining on random 1% is losing the signal.",
    outcome:
      "Stop retaining 1% blindly or trying to keep everything. Score episodes by failure, novelty, and difficulty; export curated slices that turn fine-tuning into signal, not noise.",
    build: [
      "Declarative scoring policies (diversity, outcome, novelty, difficulty)",
      "Curated training set export in your preferred format",
      "Integration with your fine-tuning workflow (Pi-0, OpenVLA, or custom)",
      "Reproducible slice definitions tied to model versions",
    ],
    dontDo: ["Fine-tune the model - your ML engineers run the actual training"],
    ctaLabel: "Discuss curation",
  },
  {
    stage: "EXPERIMENT",
    duration: "6–8 weeks",
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
    duration: "6–8 weeks",
    price: "Pilot or buildout",
    icon: Rocket,
    title: "Stop regressed models from reaching your fleet",
    painQuote:
      "Eval looked good. Production regressed anyway.",
    audience:
      "For teams whose retrained model looks better in eval but keeps regressing in production.",
    outcome:
      "Every model change goes through automated comparison gates and canary deployment. Regressions roll back automatically. Your ops team stops getting paged at 2am.",
    build: [
      "Config-driven eval pipeline with statistical comparison",
      "Regression suite that grows from production failures",
      "Canary deployment with per-robot version management",
      "Automatic rollback on eval regression",
    ],
    dontDo: [
      "Build simulation environments from scratch - we integrate with your existing sim or offline eval on real data",
    ],
    ctaLabel: "Discuss deployment gates",
  },
  {
    stage: "TRACE",
    duration: "6–10 weeks",
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
];

function SolutionCard({ solution, highlighted = false }: { solution: Solution; highlighted?: boolean }) {
  const Icon = solution.icon;
  return (
    <Card className={`h-full ${highlighted ? "border-primary/40 bg-primary/5" : "border-border/50 bg-card"}`}>
      <CardContent className="flex h-full flex-col gap-5 p-6">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider">
          <span className="text-primary">{solution.stage}</span>
          <span className="text-muted-foreground">{solution.duration} · {solution.price}</span>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
            <p className="mt-2 text-sm italic text-muted-foreground">{solution.audience}</p>
          </div>
        </div>
        <p className="text-sm font-medium text-foreground">{solution.outcome}</p>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">What we build</p>
          <ul className="mt-2 space-y-1.5">
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
          <ul className="mt-2 space-y-1.5">
            {solution.dontDo.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-muted-foreground/60">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto">
          <Button asChild className="w-fit">
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
      </CardContent>
    </Card>
  );
}

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
              Fixed-scope engagements for the physical AI iteration loop. Each stage is a standalone engagement — enter at the one that matches your current bottleneck, not necessarily the beginning.
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
              Companies building AI for the physical world — across autonomous fleets (trucking, AV, last-mile), industrial automation (warehouse, construction, manufacturing, agriculture), inspection systems (energy, utilities, drones), and general-purpose robotics (humanoid, manipulation, foundation labs). Each vertical hits the iteration loop at different points; scope reflects the specific bottleneck you're working against.
            </p>
          </div>
        </div>
      </section>

      {/* Entry point cards */}
      <section className="bg-layer-1 pt-16 lg:pt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-center text-sm font-medium uppercase tracking-wider text-primary">
              Start with a lighter entry point
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <SolutionCard solution={advisorySprint} highlighted />
              <SolutionCard solution={entryPoint} highlighted />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing guide */}
      <section className="bg-layer-1 py-16 lg:py-20">
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
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground">
              Design partnerships are scoped separately when there is strong mutual learning and a path to a reusable product.
            </p>
          </div>
        </div>
      </section>

      {/* Scoped engagements as vertical sections */}
      {solutions.map((solution, index) => (
        <SolutionSection key={solution.title} solution={solution} alt={index % 2 === 1} />
      ))}

      {/* Bottom CTA */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Don't see the right fit?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Book a scoping call — we'll walk through your pipeline and scope whatever makes sense.
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
