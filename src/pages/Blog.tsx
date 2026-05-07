import { useState } from "react";
import { ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

type Post = {
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  excerpt: string;
  href: string;
  github: string;
};


const sections: { category: string; description: string; posts: Post[] }[] = [
  {
    category: "Data Infrastructure",
    description: "Sensor data lakes, pipelines, lakehouse architecture, and high-throughput data engineering.",
    posts: [
      {
        title: "The Robot Data Lake",
        subtitle: "A format-agnostic data lake for physical AI",
        date: "April 2026",
        tags: ["Case Study", "Physical AI"],
        excerpt:
          "How we built a format-agnostic data lake for physical AI - ingesting RLDS, LeRobot, MCAP, and HDF5 into Apache Iceberg tables, making 5,121 episodes across 3 formats and 3 robot types queryable via SQL.",
        href: "/blog/robot-data-lake",
        github: "",
      },
      {
        title: "Building a High-Throughput CDC Platform",
        subtitle: "From database change to lakehouse in milliseconds",
        date: "February 2026",
        tags: ["Case Study", "Open Source"],
        excerpt:
          "How we built a modular Python CDC platform achieving 38,647 msg/s with config-driven tuning - exactly-once delivery, multi-source support, and Iceberg lakehouse with time travel.",
        href: "/blog/cdc-platform",
        github: "https://github.com/Baselyne-Systems/cdc-platform",
      },
    ],
  },
  {
    category: "MLOps & Model Platforms",
    description: "Training pipelines, evaluation gates, deployment, and production model lifecycle.",
    posts: [
      {
        title: "MLOps for Robot Policies",
        subtitle: "Data lineage, experiment comparison, and model registry for physical AI training pipelines",
        date: "April 2026",
        tags: ["Case Study", "Physical AI"],
        excerpt:
          "How we built a training pipeline that traces every model back to its exact training data, compares 3 policy architectures on the same versioned dataset, and registers evaluated models with full reproducibility records.",
        href: "/blog/training-pipeline",
        github: "",
      },
      {
        title: "GateKeeper: Eval-Gated Model Deployment",
        subtitle: "Every model change runs through quality gates before it touches production traffic",
        date: "March 2026",
        tags: ["Case Study", "Open Source"],
        excerpt:
          "How we built an eval-gated deployment pipeline that caught a sentiment classifier regression (F1 dropped to 0.338) before it reached production - and promoted the fixed version (F1 = 0.950) automatically.",
        href: "/blog/gatekeeper",
        github: "https://github.com/achyuthsamudrala/gatekeeper",
      },
    ],
  },
  {
    category: "AI Infrastructure",
    description: "Edge data management, agent governance, and production AI systems.",
    posts: [
      {
        title: "Bulkhead: Defense in Depth for Autonomous AI Agents",
        subtitle: "How we enforce AI agent guardrails at the infrastructure level, not the prompt level",
        date: "March 2026",
        tags: ["Case Study", "Open Source"],
        excerpt:
          "Four independent enforcement layers - compiled guardrails evaluated in 184ns, kernel-level iptables egress, append-only audit trail, and non-blocking human-in-the-loop escalation - all evaluated before a tool call executes.",
        href: "/blog/bulkhead",
        github: "https://github.com/achyuthnsamudrala/bulkhead",
      },
    ],
  },
];

const categories = ["All", ...sections.map((s) => s.category)];

function PostCard({ post }: { post: Post }) {
  return (
    <Card className="border-border/50 bg-card transition-shadow hover:shadow-md">
      <CardContent className="p-8">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mt-4 text-2xl font-semibold text-foreground">
          {post.title}
        </h3>
        <p className="mt-1 text-muted-foreground">{post.subtitle}</p>
        <p className="mt-4 text-sm text-muted-foreground">{post.excerpt}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className="text-xs text-muted-foreground/70">{post.date}</span>
          <div className="flex items-center gap-3 ml-auto">
            {post.github && (
              <a
                href={post.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
            <Button asChild size="sm">
              <Link to={post.href} className="inline-flex items-center gap-1.5">
                Read Post
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Blog() {
  const ALL = "All";
  const [activeTab, setActiveTab] = useState(ALL);

  const filteredSections = activeTab === ALL
    ? sections
    : sections.filter((s) => s.category === activeTab);

  return (
    <Layout>
      <SEO
        title="Blog | Baselyne Systems"
        description="Technical case studies and open-source engineering from Baselyne - physical AI data infrastructure, MLOps, agent governance, and data pipelines."
        keywords="physical AI data infrastructure, robot data lake, AI infrastructure blog, MLOps blog, model deployment, eval pipeline, agent governance, CDC platform, data engineering, open source AI"
        canonical="https://baselynesystems.com/blog"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-layer-1 to-layer-2 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Blog
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Technical case studies and open-source engineering from Baselyne.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-layer-1 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex gap-1 overflow-x-auto py-4 -mb-px">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === cat
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-layer-1 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {filteredSections.map((section) => (
              <div key={section.category} className="mb-16 last:mb-0">
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  {section.category}
                </p>
                <p className="mt-1 text-muted-foreground">{section.description}</p>
                <div className="mt-8 grid gap-8">
                  {section.posts.map((post) => (
                    <PostCard key={post.href} post={post} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
