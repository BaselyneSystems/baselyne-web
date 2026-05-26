import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SEO
        title="Baselyne Systems - AI systems for manufacturing and supply chain"
        description="AI systems for manufacturing and supply chain operations."
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
              AI systems for manufacturing and supply chain.
            </h1>
            <p className="mt-8 text-base text-muted-foreground">
              By a founder who has built ML infrastructure at Meta, Isomorphic Labs (Alphabet), and Booking.com - petabyte-scale data platforms and model serving at 100M+ QPS.
            </p>
            <div className="mt-12">
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
