import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SEO
        title="Baselyne Systems | Production AI for the physical world"
        description="Production AI for the physical world. Manufacturing, warehouses, construction, logistics, AMRs, inspection lines, robotics."
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
              Production AI for the physical world.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground sm:text-xl">
              Manufacturing. Warehouses. Construction. Logistics. AMRs. Inspection lines. Robotics.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://physicalaiinfra.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Get updates
                </a>
              </Button>
            </div>
            <p className="mt-16 text-sm text-muted-foreground/80">
              Achyuth Samudrala. ML infrastructure at Meta, Alphabet, Booking.com.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/40">
        <div className="container mx-auto px-4 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-3 text-xs text-muted-foreground/70 sm:flex-row sm:justify-between">
            <p>
              © {new Date().getFullYear()} Baselyne Systems. Baseline AI Systems Limited, registered in England and Wales.
            </p>
            <a
              href="https://www.linkedin.com/in/achyuthsamudrala/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Linkedin className="h-3 w-3" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
