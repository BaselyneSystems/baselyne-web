import { ArrowRight, Calendar, Clock, Mail, MessageSquare } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const callDetails = [
  {
    icon: Clock,
    title: "30 minutes",
    description: "A focused conversation about the problem you want to solve.",
  },
  {
    icon: MessageSquare,
    title: "No sales pitch",
    description: "We'll discuss your situation, not run through a deck. Come with questions.",
  },
  {
    icon: Calendar,
    title: "Flexible scheduling",
    description: "Book a time that works for you. We accommodate different time zones.",
  },
];

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact Baselyne Systems | Physical AI Infrastructure"
        description="Schedule a 30-minute call to discuss a physical AI infrastructure problem."
        keywords="physical AI consulting, ML infrastructure consultation, physical AI data pipeline, inference optimization, fixed-outcome engagement"
        canonical="https://baselynesystems.com/contact"
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Start a Conversation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Every engagement begins with understanding your specific situation. Schedule a 30-minute call to discuss the problem and explore whether we can help.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-layer-1 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left: Details */}
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  Book an Intro Call
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-foreground">
                  Let's discuss your infrastructure
                </h2>
                <p className="mt-4 text-muted-foreground">
                  The first call is about understanding your situation: what you're building, where you're stuck, and what success looks like. No commitment required.
                </p>

                <div className="mt-8 space-y-4">
                  {callDetails.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Calendly CTA Card */}
              <Card className="border-primary/20 bg-gradient-to-b from-card to-accent/20">
                <CardContent className="flex flex-col items-center justify-center p-8 text-center lg:p-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    Schedule Your Call
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Pick a 30-minute slot that works for you.
                  </p>
                  <Button asChild size="lg" className="mt-8 w-full">
                    <a
                      href="https://calendly.com/achyuthsamudrala/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      Book on Calendly
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <p className="mt-6 text-sm text-muted-foreground">Or email directly</p>
                  <a
                    href="mailto:achyuth@baselynesystems.com"
                    className="mt-2 inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                  >
                    <Mail className="h-4 w-4" />
                    achyuth@baselynesystems.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              What to Expect
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              A conversation, not a pitch
            </h2>
            
            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                We'll start by understanding your current situation: what systems you have, what you're trying to build, and what's getting in the way. This isn't a discovery call designed to qualify you as a lead - it's a genuine conversation about your situation.
              </p>
              <p>
                If there's an obvious area where we can help, we'll discuss what an engagement might look like. If we're not the right fit, we'll tell you directly and, where possible, point you toward resources or approaches that might help.
              </p>
              <p>
                Come with questions. The more specific you can be about your challenges, the more useful the conversation will be for both of us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-layer-3 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Ready to move forward?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Book your 30-minute intro call and let's discuss the problem you're working on.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href="https://calendly.com/achyuthsamudrala/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Schedule Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
