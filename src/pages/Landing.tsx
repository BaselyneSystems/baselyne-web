import { ArrowRight, Globe, Lock, Network, Server, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SEO
        title="Baselyne Systems - Data platforms for manufacturing and supply chain"
        description="Data platforms for manufacturing and supply chain operations."
        canonical="https://baselynesystems.com/"
      />

      <header className="border-b border-border/40">
        <div className="container mx-auto flex h-16 items-center px-4 lg:px-8">
          <Link to="/" className="text-xl font-semibold text-foreground">
            Baselyne Systems
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center">
        <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Data platforms for manufacturing and supply chain.
            </h1>
            <p className="mt-8 text-base text-muted-foreground">
              By a founder who has built petabyte-scale data platforms and AI systems serving 100M+ QPS at Meta, Alphabet, and Booking.com.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: ShieldCheck, label: "SOC 2" },
                { icon: Lock, label: "HIPAA" },
                { icon: Globe, label: "GDPR" },
                { icon: Network, label: "Private Link" },
                { icon: Server, label: "On-prem" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card px-3 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {label}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-xs text-muted-foreground/70">
              Architected for SOC 2, HIPAA, and GDPR compliance. Private Link and on-prem deployment supported.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <a
                  href="https://calendly.com/achyuthsamudrala/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/40">
        <div className="container mx-auto px-4 py-6 lg:px-8">
          <p className="text-center text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Baselyne Systems. Baseline AI Systems Limited, registered in England and Wales.
          </p>
        </div>
      </footer>
    </div>
  );
}
