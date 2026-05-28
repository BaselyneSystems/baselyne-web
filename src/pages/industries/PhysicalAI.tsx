import { ArrowRight, Cpu, Database, GitBranch, Linkedin, Radio, Shield, BarChart3, Wifi, AlertTriangle, FileCheck } from "lucide-react";
import founderPhoto from "@/assets/achyuth.jpeg";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO, physicalAIServiceSchema } from "@/components/SEO";

const challenges = [
  {
    icon: Database,
    title: "Everything is custom-built because nothing fits",
    description:
      "Every team we've spoken to - from manufacturing lines to warehouse fulfilment to industrial AMRs - has built core data infrastructure in-house. Recording catalogs, format converters, training pipelines, evaluation scripts. Not because custom is better, but because nothing on the market fits the industrial robotics workflow.",
  },
  {
    icon: Wifi,
    title: "Getting data from the physical world is the real bottleneck",
    description:
      "Construction sites have no internet. Warehouse systems saturate 5Gbps pipes. A 15-second stereo camera clip is 3GB. Teams store 1% of data through random sampling - and systematically lose the most valuable recordings: failures, edge cases, and rare states.",
  },
  {
    icon: AlertTriangle,
    title: "Failure data is the most valuable and hardest to capture",
    description:
      "When an autonomous system fails, the last 5 minutes of sensor data is worth more than the last 5 hours of routine operation. But failure recording is ad hoc - manual triggers, inconsistent formats, no structured metadata about what went wrong or why. The highest-value training data is the least well-managed.",
  },
  {
    icon: BarChart3,
    title: "No systematic evaluation or regression testing",
    description:
      "Evaluating a model means manually running 20-50 trials, watching the video, and counting successes. Versioning is tracked in spreadsheets. There's no CI/CD for physical AI - no way to automatically block a regression before it reaches deployment.",
  },
  {
    icon: GitBranch,
    title: "Training runs can't be traced back to their data",
    description:
      "When a new policy performs worse than the last one, the first question is 'what changed?' Nobody can answer it. The model was trained in a notebook, the data was a folder on someone's machine, and there's no record of which episodes produced which checkpoint. Training history is stored in DVC or not at all.",
  },
  {
    icon: Cpu,
    title: "Fleet deployment is duct tape and spreadsheets",
    description:
      "Which model version is running on which robot? When was it last updated? How is it performing compared to the others? At one of the most advanced deployed fleets in Europe, the answer was an Excel spreadsheet. Inference latency varies by hardware, model updates require downtime, and rollback means SSH-ing into each machine.",
  },
];

const pillars = [
  {
    name: "Data",
    tagline: "Getting it in, making it useful",
    capabilities: [
      {
        icon: Radio,
        title: "Edge Data Management & Scoring",
        description:
          "Declarative scoring policies for on-device curation. Bandwidth-aware sync - failure data uploads first, routine operations downsample. Offline-first architecture for disconnected and constrained environments.",
      },
      {
        icon: Database,
        title: "Sensor Data Lake",
        description:
          "Multi-format ingestion (RLDS, LeRobot, MCAP, HDF5) normalized into one queryable schema. Cross-format SQL in milliseconds. Curate by task, outcome, source.",
      },
    ],
  },
  {
    name: "Models",
    tagline: "Turning data into deployable policies",
    capabilities: [
      {
        icon: GitBranch,
        title: "Training Infrastructure & Experimentation",
        description:
          "Systematic experiment tracking and head-to-head comparison across architectures on versioned datasets. Lineage from every model back to its exact training data. Model registry with reproducibility records.",
      },
      {
        icon: Shield,
        title: "Evaluation & Policy Gating",
        description:
          "You define eval criteria. The platform runs them on every model, blocks regressions before they reach the fleet, and grows the regression suite from production failures.",
      },
    ],
  },
  {
    name: "Fleet",
    tagline: "Running in production, safely",
    capabilities: [
      {
        icon: Cpu,
        title: "Fleet Deployment",
        description:
          "Per-system model versioning, deployment monitoring, and performance tracking. Updates without downtime; instant rollback on regression.",
      },
      {
        icon: FileCheck,
        title: "Compliance & Audit Trail",
        description:
          "Immutable lineage from sensor input to physical action. Trace any decision to the exact model version, training data, and sensor state. EU AI Act and ISO 42001 ready.",
      },
    ],
  },
];

export default function PhysicalAI() {
  return (
    <Layout>
      <SEO
        title="Physical AI Infrastructure for Industrial Robotics | Baselyne Systems"
        description="Infrastructure for industrial robotics teams focused on safer iteration and rollout. Manufacturing, warehouse, industrial AMRs, quality inspection. Data, models, fleet."
        keywords="physical AI infrastructure, embodied AI infrastructure, physical AI consulting, sensor data pipeline, training data lineage, model evaluation, edge inference, GPU optimization, robot data lake, autonomous systems data"
        canonical="https://baselynesystems.com/physical-ai"
        structuredData={physicalAIServiceSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-28 lg:py-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Physical AI for Industrial Robotics
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Your models are ready to deploy. Your infrastructure isn't.
            </h1>
            <p className="mt-6 text-xl font-semibold text-foreground sm:text-2xl">
              From fleet failure to validated policy update.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We build the infrastructure to close that loop.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <a
                  href="https://calendly.com/achyuthsamudrala/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Discuss Your Infrastructure
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section className="bg-layer-2 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              The Shift
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Better models create more engineering problems
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                VLAs can follow language instructions across tasks. Diffusion policies
                handle multi-modal action distributions. Open-source foundation models are
                approaching proprietary ones. The models are getting good enough. The
                bottleneck has shifted.
              </p>
              <p>
                Larger models need inference infrastructure - distillation, quantization,
                dual-system runtimes. More general-purpose models need evaluation across
                open-ended task spaces. More training data needs pipelines that scale to
                terabytes from fleets and simulation. Wider deployment needs operations: monitoring,
                failure detection, rollback, versioning.
              </p>
              <p>
                As models commoditize, the value shifts from "who has the best model" to
                "who can close the loop fastest - from production failure to retrained,
                redeployed model." Iteration velocity becomes the compounding advantage.
                That's where we operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              What We've Heard
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              The same problems from every team we've talked to
            </h2>
            <p className="mt-4 text-muted-foreground">
              From manufacturing automation to warehouse manipulation to industrial AMRs - the
              infrastructure pain is consistent.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item) => (
              <Card key={item.title} className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                    <item.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              What We Build
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Infrastructure for the full physical AI lifecycle
            </h2>
            <p className="mt-4 text-muted-foreground">
              We build the layer that closes the loop, across three pillars: data, models, fleet.
            </p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.name} className="border-border/50 bg-card">
                <CardContent className="flex flex-col gap-6 p-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      {pillar.name}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">
                      {pillar.tagline}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5">
                    {pillar.capabilities.map((capability) => (
                      <div key={capability.title} className="flex gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <capability.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{capability.title}</h4>
                          <p className="mt-1 text-sm text-muted-foreground">{capability.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-muted-foreground">
              Everything we build runs in your cloud. Your data never leaves your perimeter.
            </p>
            <p className="mt-3 text-muted-foreground">
              Scope the whole loop, or a single stage.{" "}
              <Link to="/solutions" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
                See our engagements
                <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <img
                src={founderPhoto}
                alt="Achyuth Samudrala"
                className="h-28 w-28 rounded-xl object-cover shrink-0"
              />
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Achyuth Samudrala
                </h2>
                <p className="mt-1 text-sm text-primary">Founder</p>
                <p className="mt-4 text-muted-foreground">
                  Built ML infrastructure at Meta, Isomorphic Labs (Alphabet), and
                  Booking.com - petabyte-scale data platforms, model serving at 100M+ QPS,
                  and ML observability that cut incident detection from days to seconds.
                  Now building infrastructure for physical AI.
                </p>
                <a
                  href="https://www.linkedin.com/in/achyuthsamudrala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
