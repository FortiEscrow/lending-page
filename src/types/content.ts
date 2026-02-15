export type LandingContent = {
  hero: {
    headline: string
    subheading: string
    cta: string
    ctaSecondary: string
    backgroundMessage: string
  }
  problem: {
    headline: string
    intro: string
    painPoints: Array<{
      title: string
      description: string
      icon: string
    }>
    stats: Array<{
      label: string
      value: string
    }>
  }
  solution: {
    headline: string
    intro: string
    coreInnovations: Array<{
      title: string
      description: string
      benefit: string
    }>
    keyMessage: string
  }
  architecture: {
    headline: string
    intro: string
    layers: Array<{
      name: string
      description: string
      example: string
      guarantee: string
    }>
    flowDiagram: string
    technicalDeeds: string
  }
  security: {
    headline: string
    intro: string
    properties: Array<{
      property: string
      description: string
      verified: string
    }>
    auditedBy: string[]
    codeAudits: Array<{
      auditor: string
      date: string
      status: string
    }>
  }
  useCases: {
    headline: string
    intro: string
    cases: Array<{
      title: string
      description: string
      why: string
      example: string
      actors: string[]
    }>
  }
  roadmap: {
    headline: string
    intro: string
    phases: Array<{
      phase: string
      timeline: string
      status: string
      deliverables: string[]
    }>
    gitHub: string
  }
  socialProof: {
    audits: Array<{
      firm: string
      scope: string
      result: string
      date: string
    }>
    support: string[]
    testimonials: Array<{
      quote: string
      author: string
      protocol?: string
      organization?: string
    }>
  }
  cta: {
    primary: {
      text: string
      subtext: string
      href: string
    }
    secondary: {
      text: string
      subtext: string
      href: string
    }
    tertiary: {
      text: string
      subtext: string
      href: string
    }
  }
  faq: Array<{
    q: string
    a: string
  }>
  newsletter: {
    headline: string
    subheading: string
    placeholder: string
    button: string
    promise: string
  }
  footer: {
    tagline: string
    links: {
      product: string[]
      company: string[]
      community: string[]
      legal: string[]
    }
  }
}
