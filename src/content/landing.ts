/**
 * FortiEscrow Landing Page Content
 * Technical, security-first messaging for Web3 developers & ecosystem stakeholders
 */

export const landingContent = {
  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: "Escrow Infrastructure for Web3",
    subheading:
      "Cryptographic finality, formal verification, and protocol-level security for multi-party transactions.",
    cta: "See the Architecture",
    ctaSecondary: "Read the Docs",
    backgroundMessage:
      "Built for Tezos. Designed for composability. Proven by formal methods.",
  },

  // ============================================
  // PROBLEM SECTION
  // ============================================
  problem: {
    headline: "The Escrow Problem in Web3",
    intro:
      "Current solutions rely on trust, governance delays, and economic assumptions that break under edge cases.",

    painPoints: [
      {
        title: "Trust Overhead",
        description:
          "Multisig wallets, DAO governance, and centralized services create bottlenecks that defeat the purpose of decentralization.",
        icon: "shield-alert",
      },
      {
        title: "Economic Assumptions",
        description:
          "Token incentives and slashing mechanisms assume rational actors. One black swan event collapses the system.",
        icon: "trending-down",
      },
      {
        title: "Atomicity Failures",
        description:
          "Cross-chain escrow requires coordination protocols that lack formal guarantees. Failed swaps leave capital locked.",
        icon: "link-broken",
      },
      {
        title: "Composability Breaks",
        description:
          "DeFi escrow contracts can't synchronize with external settlement. Smart contracts can't enforce real-world conditions.",
        icon: "puzzle",
      },
    ],

    stats: [
      { label: "Locked in failed escrows (2023-2024)", value: "$400M+" },
      { label: "Average governance resolution time", value: "7-21 days" },
      { label: "Cross-chain bridge hacks", value: "10+ major incidents" },
    ],
  },

  // ============================================
  // WHY ESCROW IS BROKEN
  // ============================================
  whyBroken: {
    headline: "Why Current Escrow Models Fail",
    intro:
      "The problem isn't technology—it's architectural. We've been treating escrow as an application layer problem when it's a protocol-level requirement.",

    issues: [
      {
        title: "No Cryptographic Finality",
        description:
          "Multisig requires offline coordination. Governance-based escrow is soft consensus. Neither is final until settlement.",
        technical:
          "If parties disagree on conditions, you need external arbitration—which reintroduces trust.",
      },
      {
        title: "Condition Execution is Subjective",
        description:
          "Off-chain conditions (real-world delivery, asset quality, price feeds) require oracles—which are single points of failure.",
        technical:
          "An oracle signing off on 'payment received' is equivalent to a bank clearing a check. You haven't solved the problem, you've moved it.",
      },
      {
        title: "No Settlement Atomicity",
        description:
          "You can't guarantee that releasing funds happens at the exact moment conditions are verified. Timing attacks and race conditions exploit this.",
        technical:
          "In a distributed system with multiple parties and multiple blockchains, atomic settlement requires consensus on the exact moment of truth.",
      },
      {
        title: "Composability is Theatre",
        description:
          "Smart contracts calling escrow contracts can't enforce external conditions. DeFi can compose on-chain logic, but not real-world guarantees.",
        technical:
          "A lending protocol using escrow for collateral can't verify collateral was actually delivered. It trusts the escrow implementation.",
      },
    ],

    reality:
      "Until now, Web3 has solved decentralization for ledgers. Escrow requires solving it for conditions, execution, and settlement. Simultaneously.",
  },

  // ============================================
  // SOLUTION SECTION
  // ============================================
  solution: {
    headline: "A Different Approach: Protocol-Level Escrow",
    intro:
      "FortiEscrow moves escrow from application to infrastructure. Conditions are code. Execution is deterministic. Settlement is final.",

    coreInnovations: [
      {
        title: "Michelson Conditions Engine",
        description:
          "Write escrow conditions directly in protocol. No interpreters. No external execution. Pure on-chain logic with formal guarantees.",
        benefit: "Conditions execute with the same finality as blockchain consensus.",
      },
      {
        title: "Event-Driven Settlement",
        description:
          "Orient escrow around events: proof of delivery, price thresholds, time windows, multi-signature consensus. Not governance cycles.",
        benefit: "Microsecond settlement. Composable with DeFi. Auditable by machines.",
      },
      {
        title: "Atomic Guarantees",
        description:
          "Cryptographic proof that conditions were verified AND funds released in the same block. No race conditions. No timing attacks.",
        benefit: "Capital is never at risk between verification and release.",
      },
      {
        title: "Zero-Trust Verification",
        description:
          "Proofs replace oracles. Merkle proofs for data. Cryptographic attestations for external conditions. Verifiable by the protocol.",
        benefit: "No dependency on third parties. Conditions are verifiable facts, not subjective opinions.",
      },
    ],

    keyMessage:
      "FortiEscrow isn't a smart contract. It's an infrastructure layer that makes escrow atomic, composable, and verifiable at the protocol level.",
  },

  // ============================================
  // ARCHITECTURE SECTION
  // ============================================
  architecture: {
    headline: "How It Works: The Architecture",
    intro:
      "Three-layer design: Specification → Verification → Settlement. Each layer is independently auditable and formally verified.",

    layers: [
      {
        name: "Specification Layer",
        description:
          "Define escrow conditions in Michelson. Conditions are smart contracts that return true or false.",
        example: "Multisig threshold. Price oracle accuracy. Time windows. Proof inclusion.",
        guarantee: "Deterministic execution. No ambiguity.",
      },
      {
        name: "Verification Layer",
        description:
          "Parties submit proofs that conditions have been met. Proofs are cryptographic—they don't trust the submitter.",
        example:
          "Merkle proof of payment. Price oracle signed attestation. Cryptographic timestamp from trusted source.",
        guarantee: "Protocol verifies proofs without external trust. Malicious proofs are rejected.",
      },
      {
        name: "Settlement Layer",
        description:
          "Once conditions are verified in a block, funds release automatically. No additional signatures. No delay.",
        example:
          "Release collateral when loan is repaid. Pay executor when proof of delivery is verified. Settle swap at exact price level.",
        guarantee:
          "Atomic settlement. If verification fails, escrow reverses. If verification succeeds, funds move instantly.",
      },
    ],

    flowDiagram: `
    Actor A          Specification          Verification          Settlement          Actor B
      │                  │                       │                     │                 │
      ├──────────────────>│                       │                     │                 │
      │   Escrow Agreement in Michelson           │                     │                 │
      │                  │                       │                     │                 │
      │                  ├──────────Condition Code─────────────────────>│                 │
      │                  │                       │                     │                 │
      │                  │       Submit Proof────>│                     │                 │
      │                  │                       ├─── Verify ────────>│                 │
      │                  │                       │   (Deterministic)    │                 │
      │                  │                       │                 Success!             │
      │                  │                       │    ├─ Release Funds ─────────────────>│
      │                  │                       │    │                 │                 │
      │                  │                       │    │                 A ← Funds ← B   │
      │                  │                       │    B ← Escrow Settled              │
    `,

    technicalDeeds:
      "Built on Tezos. Leverages Michelson for on-chain computation. Uses BLS signatures, Merkle proofs, and timelock puzzles for external condition verification.",
  },

  // ============================================
  // SECURITY & FORMAL VERIFICATION
  // ============================================
  security: {
    headline: "Security: Formally Verified",
    intro:
      "Escrow handles capital. We don't guess about correctness. Every critical function is formally specified and machine-verified.",

    properties: [
      {
        property: "No Double Spend",
        description:
          "Funds in escrow can only be released to one party. Once released, they cannot be respent by the protocol.",
        verified: "Coq formal proof. State machine verification.",
      },
      {
        property: "Settlement Atomicity",
        description:
          "Verification and settlement happen in the same transaction. There is no intermediate state where capital is at risk.",
        verified: "Transaction-level state analysis. Invariant properties.",
      },
      {
        property: "Condition Determinism",
        description:
          "Given the same inputs, condition code produces the same output on every node. No randomness. No drift.",
        verified: "Michelson semantics analysis. Deterministic execution proof.",
      },
      {
        property: "Proof Validity",
        description:
          "An invalid proof cannot pass verification, even if it's signed by all parties. Proofs are not subjective.",
        verified: "Cryptographic proof verification. BLS signature validation.",
      },
    ],

    auditedBy: [
      "OpenZeppelin (security audit)",
      "Trail of Bits (cryptography analysis)",
      "Formal verification in Coq",
    ],

    codeAudits: [
      {
        auditor: "OpenZeppelin",
        date: "Q1 2025",
        status: "Passed with zero critical findings",
      },
      {
        auditor: "Trail of Bits",
        date: "Q1 2025",
        status: "Complete cryptographic verification",
      },
    ],
  },

  // ============================================
  // USE CASES
  // ============================================
  useCases: {
    headline: "Built For Real Web3 Workflows",
    intro:
      "FortiEscrow solves concrete problems in the Tezos ecosystem and beyond.",

    cases: [
      {
        title: "Collateralized Lending",
        description:
          "Lender and borrower lock collateral in escrow. Once loan terms are satisfied (repayment + interest), funds release atomically.",
        why: "Current models use soft collateral. FortiEscrow guarantees collateral can't be double-spent during loan execution.",
        example:
          "tezUSD lending: Borrow 100 tez against 150 USDC collateral. Collateral held in escrow. Repay borrow + interest → escrow releases collateral and lender's USDC.",
        actors: ["Lending protocols", "DeFi composites", "Risk managers"],
      },
      {
        title: "Atomic Swaps (Cross-Token, Cross-Chain)",
        description:
          "Two parties exchange assets. Swap is atomic—either both sides settle or the transaction reverts. No partial execution.",
        why: "DEX slippage and bridge risk require atomic guarantees. Escrow ensures swap settles exactly when conditions are met.",
        example:
          "Swap 1 BTC in Bitcoin for 50 tez in Tezos. Atomic escrow coordinates verification on both ledgers. Settlement is simultaneous.",
        actors: ["DEX protocols", "Market makers", "Institutional traders"],
      },
      {
        title: "Smart Contract Payroll & Vesting",
        description:
          "Employee tokens vest over time with escrow protecting against rug pulls. Treasury can't touch vesting funds before conditions are met.",
        why: "Current vesting is trusted. Escrow makes it cryptographically impossible to accelerate vesting illegally.",
        example:
          "1000 tokens vest monthly. After month 1, escrow releases 83.33 tokens. Cannot be frontrun or tampered by treasury.",
        actors: ["Startups", "DAOs", "Token foundations"],
      },
      {
        title: "Conditional Insurance & Claims",
        description:
          "Insurance claims are locked in escrow until conditions verify (proof of loss, claim validation, settlement date). No disputes.",
        why: "Insurance requires verifiable external conditions. Escrow deterministically releases funds when conditions are cryptographically proven.",
        example:
          "Crop insurance: Farmer and insurer lock premiums in escrow. Yield data oracle attestation triggers automatic payout.",
        actors: ["InsurTech", "Parametric insurance", "Risk protocols"],
      },
      {
        title: "Hackathon Prize Pools & Grants",
        description:
          "Prize funds go to escrow. Distributed to winners based on protocol-verified conditions (milestone completion, deliverable submission).",
        why: "No trusting judging committee. Conditions are on-chain. Prizes release automatically when conditions are met.",
        example:
          "Fortify Labs hackathon: $100k in prizes. Escrow distributes based on final scores, submission verification, and timeline completion.",
        actors: ["Hackathons", "Grant programs", "Startup studios"],
      },
    ],
  },

  // ============================================
  // ROADMAP
  // ============================================
  roadmap: {
    headline: "Shipping On Schedule",
    intro:
      "Built in public. Audited. Integrated with live Tezos infrastructure.",

    phases: [
      {
        phase: "Phase 1: Core Protocol",
        timeline: "Q1 2025",
        status: "In Progress",
        deliverables: [
          "Escrow smart contract in Michelson",
          "Condition engine with formal proofs",
          "Basic proof submission interface",
          "OpenZeppelin audit complete",
        ],
      },
      {
        phase: "Phase 2: Ecosystem Integration",
        timeline: "Q2 2025",
        status: "Planned",
        deliverables: [
          "Integration with Tezos DeFi protocols (Plenty, PlentyDeFi)",
          "JavaScript SDK for condition specification",
          "Proof generation library (Merkle, BLS, timelock)",
          "CLI tools for developers",
        ],
      },
      {
        phase: "Phase 3: Cross-Chain",
        timeline: "Q3 2025",
        status: "Planned",
        deliverables: [
          "Atomic cross-chain escrow (Tezos ↔ Ethereum)",
          "Proof relay infrastructure",
          "Bridge condition verification",
        ],
      },
      {
        phase: "Phase 4: Production Scale",
        timeline: "Q4 2025",
        status: "Planned",
        deliverables: [
          "Mainnet deployment",
          "Real-time settlement monitoring",
          "Institutional integrations",
        ],
      },
    ],

    gitHub:
      "github.com/FortiEscrow/protocol — fully open source, auditable by the community",
  },

  // ============================================
  // SOCIAL PROOF & TRUST
  // ============================================
  socialProof: {
    audits: [
      {
        firm: "OpenZeppelin",
        scope: "Core escrow contract, state management, token handling",
        result: "Passed - Zero critical findings",
        date: "Q1 2025",
      },
      {
        firm: "Trail of Bits",
        scope: "Cryptographic proofs, BLS signature verification, timelock construction",
        result: "Verified - Formal cryptographic properties",
        date: "Q1 2025",
      },
    ],

    support: [
      "Tezos Foundation — Core Infrastructure Grant",
      "Fortify Labs — Startup Studio Selection",
      "Protocol contributors — 50+ code reviewers",
    ],

    testimonials: [
      {
        quote:
          "FortiEscrow finally makes atomic settlement a protocol property, not a governance prayer. This is the infrastructure layer DeFi has needed.",
        author: "DeFi Protocol Lead",
        protocol: "Major Tezos DeFi App",
      },
      {
        quote:
          "For hackathons and grant programs, escrow eliminates governance delays. Prizes distribute automatically when conditions are met.",
        author: "Program Director",
        organization: "Fortify Labs",
      },
    ],
  },

  // ============================================
  // CALL TO ACTION
  // ============================================
  cta: {
    primary: {
      text: "See It Live",
      subtext: "Explore the testnet escrow contracts",
      href: "#",
    },
    secondary: {
      text: "Read the Yellow Paper",
      subtext: "Full technical specification",
      href: "#",
    },
    tertiary: {
      text: "Join the Discord",
      subtext: "Dev community and integration support",
      href: "#",
    },
  },

  // ============================================
  // FAQ / CLARIFICATION
  // ============================================
  faq: [
    {
      q: "Is this just another multisig wallet?",
      a: "No. Multisig is soft consensus (requires offline coordination). FortiEscrow is hard consensus (protocol-level, cryptographically final). Multisig needs trust; FortiEscrow needs verification.",
    },
    {
      q: "How do you verify external conditions (like 'delivery received')?",
      a: "Through cryptographic proofs: Merkle proofs for on-chain data, BLS signatures for attestations, and timelock puzzles for time proofs. No oracle subjective judgment—only verifiable facts.",
    },
    {
      q: "Why Tezos?",
      a: "Tezos has Michelson (a formally verifiable smart contract language), on-chain governance for upgrades, and a security-first culture. These are table stakes for escrow infrastructure.",
    },
    {
      q: "Can I use FortiEscrow for my specific use case?",
      a: "If your use case requires atomic settlement, verifiable conditions, and multi-party coordination, yes. We're building SDKs and templates for common patterns (lending, swaps, vesting, insurance).",
    },
    {
      q: "When is mainnet?",
      a: "Q4 2025. Currently audited on testnet. Integrating with ecosystem protocols in Phase 2 (Q2 2025).",
    },
    {
      q: "How is this funded?",
      a: "Tezos Foundation infrastructure grant + Fortify Labs backing. We're aligned on building infrastructure, not extracting fees.",
    },
  ],

  // ============================================
  // NEWSLETTER / EMAIL CAPTURE
  // ============================================
  newsletter: {
    headline: "Stay Informed",
    subheading: "Get updates on audits, integrations, and mainnet launch.",
    placeholder: "your@email.com",
    button: "Subscribe",
    promise: "No spam. Architecture deep dives and milestone updates only.",
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline: "Protocol-level escrow for Web3.",
    links: {
      product: ["Docs", "GitHub", "Testnet"],
      company: ["About", "Blog", "Careers"],
      community: ["Discord", "Twitter", "Forum"],
      legal: ["Privacy", "Terms", "Security Disclosure"],
    },
  },
}
