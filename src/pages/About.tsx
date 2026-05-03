import { ArrowRight, Building2, CheckCircle2, Database, FileText, Linkedin, Mail, Search, Shield, Target, Users, Wrench, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO, organizationSchema } from "@/components/SEO";

const experience = [
  {
    icon: Database,
    metric: "Petabyte-scale",
    title: "Data platforms",
    description: "Designed and operated data infrastructure handling petabytes of data across distributed systems.",
  },
  {
    icon: Zap,
    metric: "100M+ QPS",
    title: "High-throughput systems",
    description: "Built and maintained systems serving hundreds of millions of queries per second at Meta.",
  },
  {
    icon: Shield,
    metric: "GDPR compliance",
    title: "Regulatory readiness",
    description: "Led data platform work for GDPR readiness and compliance at Meta, handling complex data governance requirements.",
  },
  {
    icon: Building2,
    metric: "Meta · Alphabet · Booking",
    title: "Engineering depth",
    description: "Infrastructure experience across Meta, Isomorphic Labs (Alphabet), and Booking.com.",
  },
];

const phases = [
  {
    step: "01",
    icon: Search,
    title: "Discovery",
    duration: "1-2 weeks",
    description: "We review your architecture, talk to your team, and identify the critical gap between where you are and where you need to be.",
    outputs: [
      "Architecture review and gap analysis",
      "Prioritised roadmap with milestones",
    ],
  },
  {
    step: "02",
    icon: Target,
    title: "Scope & Outcome",
    duration: "Collaborative",
    description: "We agree on a specific outcome - for example, reduce data-to-policy cycle time from weeks to days. Fixed scope, fixed timeline, fixed price.",
    outputs: [
      "Defined outcome with measurable success criteria",
      "Fixed-price proposal with timeline",
    ],
  },
  {
    step: "03",
    icon: Wrench,
    title: "Implementation",
    duration: "4-10 weeks typical",
    description: "We build alongside your team. Weekly syncs, shared code repositories, and continuous documentation. The deliverable is the agreed outcome.",
    outputs: [
      "Production-ready infrastructure",
      "Documentation and runbooks",
    ],
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Handover",
    duration: "Included",
    description: "Your team can operate and extend what we built independently. Training, shadowed operations, and a support window during transition.",
    outputs: [
      "Team training and operational handover",
      "Post-engagement support window",
    ],
  },
];

const principles = [
  {
    icon: Target,
    title: "Production first",
    description: "Everything we build is designed for production from day one. No prototypes that need to be rewritten.",
  },
  {
    icon: FileText,
    title: "Documentation as deliverable",
    description: "We deliver systems your team can understand, operate, and extend without us.",
  },
  {
    icon: Users,
    title: "Knowledge transfer built-in",
    description: "We work alongside your engineers. Skills transfer happens through pairing, reviews, and shared decision-making.",
  },
];

export default function About() {
  return (
    <Layout>
      <SEO
        title="About & Approach | Baselyne Systems"
        description="Founder-led physical AI infrastructure firm focused on safer iteration and rollout for teams deploying autonomy. Fixed-outcome engagements, with experience from Meta, Alphabet, and Booking.com."
        keywords="AI infrastructure consulting, physical AI consulting, fixed-outcome engagements, ML infrastructure, data engineering"
        canonical="https://baselynesystems.com/about"
        structuredData={organizationSchema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Accelerate autonomy
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About Baselyne Systems
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Helping physical AI teams shorten the path from field failure to validated update. A founder-led infrastructure firm that takes on hard engineering problems and delivers defined outcomes in fixed timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Background
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Built at scale, delivered at your scale
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                Baselyne Systems builds the infrastructure that closes the iteration loop for physical AI teams - the gap between a production failure and the next validated update. We scope every engagement around a specific, measurable outcome - faster evaluation, cleaner failure data, safer rollout - and deliver it in a fixed timeline at a fixed price.
              </p>
              <p>
                The founder has built infrastructure at Meta, Isomorphic Labs (Alphabet), and Booking.com - petabyte-scale data platforms, systems handling 100M+ queries per second, ML observability, and GDPR compliance at scale.
              </p>
              <p>
                We apply that experience to teams building physical AI systems - robotics, autonomous systems, and embodied AI - helping them move from incident to validated change with less manual work. Fixed outcome. Defined handover. Your team operates and extends what we built.
              </p>
              <Link
                to="/solutions"
                className="mt-6 flex w-fit items-center gap-2 text-primary transition-colors hover:text-primary/80"
              >
                See specific engagements
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.linkedin.com/in/achyuthsamudrala/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-fit items-center gap-2 text-primary transition-colors hover:text-primary/80"
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect with the founder on LinkedIn</span>
              </a>
              <a
                href="mailto:achyuth@baselynesystems.com"
                className="mt-2 flex w-fit items-center gap-2 text-primary transition-colors hover:text-primary/80"
              >
                <Mail className="h-5 w-5" />
                <span>achyuth@baselynesystems.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Engineering credibility that transfers
            </h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experience.map((item) => (
              <Card key={item.title} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mt-4 text-2xl font-bold text-foreground">{item.metric}</p>
                  <h3 className="mt-1 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              How We Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Fixed-outcome engagements
            </h2>
            <p className="mt-4 text-muted-foreground">
              You pay for results - a working system your team can operate - not for hours.
            </p>
          </div>

          <div className="mt-16 space-y-6 mx-auto max-w-3xl">
            {phases.map((phase) => (
              <div
                key={phase.step}
                className="flex gap-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {phase.step}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-foreground">{phase.title}</h3>
                    <span className="text-xs text-muted-foreground">{phase.duration}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{phase.description}</p>
                  <ul className="mt-3 space-y-1">
                    {phase.outputs.map((output) => (
                      <li
                        key={output}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        {output}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Principles
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              What guides our work
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3 mx-auto max-w-4xl">
            {principles.map((principle) => (
              <Card key={principle.title} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <principle.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{principle.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-layer-3 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Let's scope an outcome
            </h2>
            <p className="mt-4 text-muted-foreground">
              We'll discuss your infrastructure challenges and define a specific result. Typical engagements run 6-12 weeks.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href="https://calendly.com/achyuthsamudrala/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Schedule a Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
