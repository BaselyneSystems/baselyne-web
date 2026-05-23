import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const pricingTiers = [
  {
    name: "Advisory sprint",
    price: "From £5k",
    description:
      "Focused senior input on architecture and bottlenecks, with a view to which platform foundations would apply to your stack.",
  },
  {
    name: "Diagnostic assessment",
    price: "From £10k",
    description:
      "A structured map of your infrastructure gap and a prioritised plan for which platform foundations to deploy first.",
  },
  {
    name: "Pilot deployment",
    price: "Typically £25k–£75k",
    description:
      "One platform foundation deployed and adapted to your stack, with a defined outcome and handover path.",
  },
  {
    name: "Production deployment",
    price: "Scoped after pilot",
    description:
      "Multiple platform foundations adapted across data, training, deployment, or fleet systems.",
  },
  {
    name: "Operate",
    price: "From £6k / month",
    description:
      "Continuous engineering to run and evolve the deployed platform foundations as your fleet, models, and team grow.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      <SEO
        title="Pricing | Baselyne Systems"
        description="Engagement tiers for physical AI infrastructure work, from advisory sprints to ongoing operations. BYOC deployment, fixed-scope outcomes."
        keywords="physical AI infrastructure pricing, robotics infrastructure consulting cost, ML platform engagement"
        canonical="https://baselynesystems.com/pricing"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">Pricing</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Typical starting points
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We adapt our platform foundations to your stack and your use case. Configured and integrated, rather than built from scratch. Pricing depends on scope, access, and how much infrastructure already exists; most engagements start narrow and expand as the loop closes around your fleet.
            </p>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-layer-1 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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

      {/* Bottom CTA */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Not sure which tier fits?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Book a 30-minute scoping call. We'll walk through your pipeline and recommend the right starting point.
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
