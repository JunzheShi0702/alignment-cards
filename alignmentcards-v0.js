export const categories = [
  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  },
  {
    "code": "AB",
    "name": "Hoping for A, Rewarding B",
    "pathology": "incentive misalignment",
    "color": "#FFE6E6",
    "description": "These cards illustrate cases where organizations or systems profess to want one behavior or outcome (A) but actually incentivize another (B). The pathology is that rewards contradict hopes, producing counterproductive or even harmful results. Each card identifies the mismatch, names the resulting alignment failure, and proposes a principle to realign rewards with true goals."
  },
  {
    "code": "AT",
    "name": "Alignment Traits",
    "pathology": "trait deficit",
    "color": "#F0F8FF",
    "description": "Alignment traits are specific behavioral patterns, skills, or dispositions that promote cooperation, trust, and effective coordination between agents. These traits support the implementation of alignment principles in practice."
  },
];


export const cards = [
  {
    "category": "AP",
    "name": "Accountability",
    "definition": "Responsibility for actions and outcomes is clearly assigned, auditable, and enforceable.",
    "people": "Own your words, behavior, deliverables, and mistakes; make amends and learn.",
    "peopleref": "",
    "organizational": "Define reporting lines, oversight, and audit trails; foster a culture of answerability.",
    "organizationalref": "",
    "professionals": "Use peer review, client review, and postmortems; document rationale and changes.",
    "professionalref": "",
    "machine": "Log decisions, enable traceability/explanations, and bind accountability to deployment owners.",
    "machineref": "",
    "failureModes": {
      "human": "Blame-shifting; no reflection or remediation after errors.",
      "organizational": "Diffuse responsibility through convoluted structures; conceal harmful outcomes.",
      "experts": "Engineers disclaim liability as ‘just following orders’.",
      "machine": "Opaque models make harmful recommendations with no way to assign responsibility."
    },
    "expand": {
      "human": "Accountability encourages truth-telling, corrective action, and growth after failure.",
      "organizational": "Clear ownership + audits deter misconduct and surface systemic issues early.",
      "experts": "Professionals document decisions and expose them to scrutiny; this builds trust.",
      "machine": "Decision logs and model cards support error analysis and redress mechanisms."
    }
  },
  {
    "category": "AP",
    "name": "Transparency and Explainability",
    "definition": "Decisions and processes are understandable, reviewable, and open to scrutiny.",
    "people": "Communicate reasons and criteria clearly; avoid secrecy and ambiguity.",
    "peopleref": "",
    "organizational": "Publish methods/criteria; use clear contracts and user-facing explanations.",
    "organizationalref": "",
    "professionals": "Make work traceable with evidence and rationale; enable peer and client review.",
    "professionalref": "",
    "machine": "Provide model explanations, data provenance, and accessible recourse paths.",
    "machineref": "",
    "failureModes": {
      "human": "Leaders make opaque decisions that confuse or exclude stakeholders.",
      "organizational": "Policy or model changes are hidden from affected users.",
      "experts": "Clinicians or auditors provide conclusions without reasons or risks.",
      "machine": "Black-box denials (e.g., loans) without meaningful explanations or appeals."
    },
    "expand": {
      "human": "Clarity reduces rumor and resistance; it builds shared understanding.",
      "organizational": "Explainability legitimizes decisions and eases compliance and audits.",
      "experts": "Stated rationales improve quality control and accountability.",
      "machine": "Interpretability tools align system behavior with user expectations and oversight."
    }
  },
  {
    "category": "AP",
    "name": "Justice and Fairness",
    "definition": "Treat people equitably; design to prevent systemic bias and disparate impact.",
    "people": "Avoid favoritism; give equal opportunity and due consideration.",
    "peopleref": "",
    "organizational": "Adopt policies and audits that mitigate bias and remove unfair barriers.",
    "organizationalref": "",
    "professionals": "Deliver services impartially; validate criteria to avoid discriminatory effects.",
    "professionalref": "",
    "machine": "Measure and mitigate bias in datasets, models, and decision thresholds.",
    "machineref": "",
    "failureModes": {
      "human": "Teachers grade favorites higher than others.",
      "organizational": "Hiring pipelines exclude protected groups via biased filters.",
      "experts": "Lawyers prioritize wealthy clients and neglect equitable service.",
      "machine": "Face recognition performs well for light-skinned faces but fails for dark-skinned faces."
    },
    "expand": {
      "human": "Training and rubrics reduce implicit bias in everyday judgments.",
      "organizational": "Diverse panels, process audits, and fairness KPIs deter discrimination.",
      "experts": "Professional standards require equity reviews and documented criteria.",
      "machine": "Bias testing, rebalancing data, and calibrated thresholds improve parity."
    }
  },
  {
    "category": "AP",
    "name": "Safety and Security",
    "definition": "Prevent harm through resilient design, safeguards, and robust defenses.",
    "people": "Use prudent practices to avoid accidents and harm to self/others.",
    "peopleref": "",
    "organizational": "Implement security controls, monitoring, and incident response; test regularly.",
    "organizationalref": "",
    "professionals": "Apply safety standards; verify and validate in safety-critical contexts.",
    "professionalref": "",
    "machine": "Engineer models and systems to resist misuse, adversarial attacks, and unsafe actions.",
    "machineref": "",
    "failureModes": {
      "human": "Ignoring warnings or best practices leads to avoidable accidents.",
      "organizational": "Outdated controls or skipped patches cause data breaches.",
      "experts": "Clinicians bypass protocols; infections or errors rise.",
      "machine": "Systems are exploitable or behave unsafely under distribution shift."
    },
    "expand": {
      "human": "Checklists and training reduce human error rates.",
      "organizational": "Defense-in-depth and drills limit blast radius of incidents.",
      "experts": "Standards + audits create accountability in high-stakes domains.",
      "machine": "Red-teaming and safety cases expose and mitigate failure modes."
    }
  },

  {
    "category": "AB",
    "name": "Hoped for: People who show courage, initiative, and independent judgment. Rewarded: Those who make no mistakes, strictly follow orders, and avoid risk.",
    "definition": "Systemic Risk Aversion: Punishes error more than it rewards initiative, producing conformity over adaptability.",
    "people": "Individuals avoid challenging tasks to minimize punishment risk.",
    "peopleref": "",
    "organizational": "Firms emphasize rule-following and blame control over innovation.",
    "organizationalref": "",
    "professionals": "Experts recycle safe approaches rather than explore uncertain but better options.",
    "professionalref": "",
    "machine": "Agents trained with large error penalties and weak exploration become overly conservative.",
    "machineref": "",
    "failureModes": {
      "human": "Students pick only easy projects to protect grades.",
      "organizational": "Managers reject bold ideas to safeguard quarterly metrics.",
      "experts": "Engineers avoid proposing experimental designs due to fear of repercussions.",
      "machine": "Robots refuse to traverse unfamiliar terrain even when missions require it."
    },
    "expand": {
      "human": "Normalize reflective ‘fail-learn-improve’ cycles for low-stakes errors.",
      "organizational": "Reward responsible risk-taking; separate negligence from initiative.",
      "experts": "Use design reviews that credit learning and document trade-offs.",
      "machine": "Incorporate safe exploration and risk-aware rewards into training."
    }
  },
  {
    "category": "AB",
    "name": "Hoped for: High-quality, impactful outcomes (true learning, strategic success, real health gains). Rewarded: Easy-to-count proxies (publication counts, body counts, billable hours, throughput).",
    "definition": "Measure Myopia: Shifts effort to what’s easy to quantify, neglecting substantive mission outcomes.",
    "people": "Individuals chase scores and quotas instead of mastering knowledge.",
    "peopleref": "",
    "organizational": "Units are funded for metric wins rather than meaningful results.",
    "organizationalref": "",
    "professionals": "Scholars/pros optimize counts (papers, hours) instead of solving hard problems.",
    "professionalref": "",
    "machine": "Models optimize engagement/completions rather than understanding or mission success.",
    "machineref": "",
    "failureModes": {
      "human": "Students pad essays to hit word quotas.",
      "organizational": "Commands celebrate ‘body count’ while losing legitimacy on the ground.",
      "experts": "Researchers ship many low-impact papers to satisfy ‘publish or perish’.",
      "machine": "Ed-tech recommender maximizes quiz completions without improving retention."
    },
    "expand": {
      "human": "Use mastery-based assessments and portfolios over point tallies.",
      "organizational": "Tie rewards to validated impact metrics, not raw counts.",
      "experts": "Value translational impact, replication, and rigor alongside output volume.",
      "machine": "Optimize for longitudinal satisfaction/learning, not instantaneous clicks."
    }
  },
  {
    "category": "AB",
    "name": "Hoped for: Healthy discourse, accurate information, and prosocial communities. Rewarded: Content that drives clicks, shares, and watch-time regardless of quality or harm.",
    "definition": "Engagement Capture: Attention becomes the reward signal, incentivizing sensationalism and addictive loops that undermine civic goals.",
    "people": "Creators learn outrage and sensational takes outperform nuance.",
    "peopleref": "",
    "organizational": "Platforms privilege growth/ad revenue tied to attention over community health.",
    "organizationalref": "",
    "professionals": "Integrity/safety teams are deprioritized beneath growth targets.",
    "professionalref": "",
    "machine": "Recommenders trained on click-through optimize for attention, not truth or welfare.",
    "machineref": "",
    "failureModes": {
      "human": "Influencers escalate polarization to stay visible.",
      "organizational": "Safety frictions are rolled back if they reduce engagement.",
      "experts": "Policy proposals that reduce harm are shelved for hurting KPIs.",
      "machine": "Ranking boosts borderline/toxic content because it retains attention."
    },
    "expand": {
      "human": "Reward constructive contributions and credible sourcing.",
      "organizational": "Adopt well-being/discourse quality KPIs; add friction to toxic virality.",
      "experts": "Give integrity teams veto power on demonstrably harmful designs.",
      "machine": "Train/offset objectives toward quality, credibility, and safety signals."
    }
  },

  {
    "category": "AT",
    "name": "Empathy",
    "definition": "The capacity to model others' perspectives, goals, and feelings, and to modulate one's actions accordingly.",
    "people": "Active listening; mirroring concerns before proposing solutions.",
    "peopleref": "",
    "organizational": "User research, journey mapping, and policies that anticipate stakeholder impact.",
    "organizationalref": "",
    "professionals": "Bedside manner, client-centered design, trauma-informed practice.",
    "professionalref": "",
    "machine": "Preference/modeling that conditions actions on user states and accessibility needs.",
    "machineref": "",
    "failureModes": {
      "human": "Dismissive communication; 'solutioning' without understanding needs.",
      "organizational": "Policies that externalize cost onto users or frontline staff.",
      "experts": "Technocratic recommendations that ignore lived experience.",
      "machine": "Blind automation that applies one-size-fits-all actions."
    },
    "expand": {
      "human": "Perspective-taking reduces conflict and improves cooperation.",
      "organizational": "Embedding qualitative research prevents harmful rollouts.",
      "experts": "Co-design with affected groups surfaces hidden constraints.",
      "machine": "Context-awareness (disability, language, risk) tailors assistance."
    }
  },

  {
    "category": "AT",
    "name": "Accountability",
    "definition": "Clear ownership for actions and outcomes, with auditability and consequences.",
    "people": "Own errors; document decisions; close feedback loops.",
    "peopleref": "",
    "organizational": "Named owners, postmortems, and transparent remediation.",
    "organizationalref": "",
    "professionals": "Ethical codes, peer review, incident reporting.",
    "professionalref": "",
    "machine": "Decision logs, provenance, and recourse pathways tied to deployment owners.",
    "machineref": "",
    "failureModes": {
      "human": "Blame-shifting after mistakes.",
      "organizational": "Diffused responsibility; no one empowered to fix harm.",
      "experts": "'Just following orders' defenses.",
      "machine": "Opaque failures with no audit trail."
    },
    "expand": {
      "human": "Accountability builds trust and learning.",
      "organizational": "Ownership plus audits deter repeat incidents.",
      "experts": "Documentation supports external scrutiny.",
      "machine": "Traceability enables redress and improvement."
    }
  },

  {
    "category": "AT",
    "name": "Considerateness",
    "definition": "Proactively reducing friction and burden on others when coordinating.",
    "people": "Be on time; send clear notes; choose inclusive times and channels.",
    "peopleref": "",
    "organizational": "Human-centered policies (flex schedules, accessibility by default).",
    "organizationalref": "",
    "professionals": "Minimize client toil; anticipate follow-on tasks.",
    "professionalref": "",
    "machine": "Interfaces that default to safe, reversible actions; low-friction opt-outs.",
    "machineref": "",
    "failureModes": {
      "human": "Creating avoidable rework for teammates.",
      "organizational": "Process that optimizes for the center, not the edges.",
      "experts": "Hand-offs that dump hidden labor on others.",
      "machine": "Irreversible actions; noisy alerts; dark patterns."
    },
    "expand": {
      "human": "Courtesy compounds; small favors scale alignment.",
      "organizational": "Smoother processes increase throughput and morale.",
      "experts": "Professional courtesy reduces escalations.",
      "machine": "Good defaults reduce preventable errors."
    }
  },

  {
    "category": "AT",
    "name": "Reciprocity",
    "definition": "Help those who help you; share fairly in both costs and benefits.",
    "people": "Return favors; don't free-ride on group work.",
    "peopleref": "",
    "organizational": "Cross-team SLAs; mutual support in incident response.",
    "organizationalref": "",
    "professionals": "Credit collaborators; fair authorship and referrals.",
    "professionalref": "",
    "machine": "Multi-agent policies that reward cooperative equilibria.",
    "machineref": "",
    "failureModes": {
      "human": "One-way favors; resentment builds.",
      "organizational": "Siloed teams hoard resources.",
      "experts": "Ghosting collaborators post-publication.",
      "machine": "Agents exploit cooperative peers ('defecting' policies)."
    },
    "expand": {
      "human": "Reciprocity stabilizes norms in groups.",
      "organizational": "Shared capacity buffers shocks.",
      "experts": "Reputation effects sustain cooperation.",
      "machine": "Mechanism design aligns incentives to cooperate."
    }
  },

  {
    "category": "AT",
    "name": "Shared Transparent Reasoning",
    "definition": "Make your reasoning legible: state assumptions, evidence, and trade-offs so others can align or contest.",
    "people": "Write decision memos; 'show your work'.",
    "peopleref": "",
    "organizational": "ADR/RFC templates; public postmortems; open metrics.",
    "organizationalref": "",
    "professionals": "Explain diagnostics, uncertainty, and options to clients.",
    "professionalref": "",
    "machine": "Model cards, uncertainty estimates, example-based justifications.",
    "machineref": "",
    "failureModes": {
      "human": "Surprises and mistrust when choices lack rationale.",
      "organizational": "Shadow decisions; rumor-driven coordination.",
      "experts": "Authority without reasons; low consent and compliance.",
      "machine": "Black-box outputs that can't be audited or corrected."
    },
    "expand": {
      "human": "Legibility lowers conflict and speeds buy-in.",
      "organizational": "Shared context reduces duplicate work.",
      "experts": "Reason-giving supports informed consent.",
      "machine": "Explainability enables oversight and safer deployment."
    }
  },

  {
    "category": "AT",
    "name": "Shared Intentionality",
    "definition": "Align on goals, roles, and timing so agents coordinate toward a common end.",
    "people": "Confirm objectives and division of labor before starting.",
    "peopleref": "",
    "organizational": "OKRs, charters, and responsibility matrices (RACI).",
    "organizationalref": "",
    "professionals": "Scopes of work; pre-mortems; comms plans.",
    "professionalref": "",
    "machine": "Multi-agent reward shaping; joint policies; synchronized plans.",
    "machineref": "",
    "failureModes": {
      "human": "People pull in different directions.",
      "organizational": "Misaligned KPIs cause goal conflict.",
      "experts": "Scope creep and dueling authorities.",
      "machine": "Agents optimize locally, harming system performance."
    },
    "expand": {
      "human": "Clarifying intent reduces rework.",
      "organizational": "Goal congruence increases throughput.",
      "experts": "Contracting prevents costly disputes.",
      "machine": "Team-level objectives avoid tragedy-of-the-commons."
    }
  },

  {
    "category": "AT",
    "name": "Conflict Resolution",
    "definition": "Structured approaches to surface, mediate, and resolve disagreements fairly.",
    "people": "Use 'steel-man + negotiate' before escalation.",
    "peopleref": "",
    "organizational": "Clear reporting/mediation channels; restorative processes.",
    "organizationalref": "",
    "professionals": "Ethics consults, peer mediation, professional ombuds.",
    "professionalref": "",
    "machine": "Arbitration policies between agents; tie-break protocols.",
    "machineref": "",
    "failureModes": {
      "human": "Personal attacks; silent quitting.",
      "organizational": "Politics and stalemates drain momentum.",
      "experts": "Standards fights stall progress.",
      "machine": "Deadlocks or oscillations without a resolver."
    },
    "expand": {
      "human": "Early mediation preserves relationships.",
      "organizational": "Fair processes reduce churn and litigation.",
      "experts": "Shared norms enable dissent without punishment.",
      "machine": "Deterministic arbitration ensures liveness."
    }
  },

  {
    "category": "AT",
    "name": "Trustworthiness",
    "definition": "Be dependable, honest, and competent such that others can rationally rely on you.",
    "people": "Keep promises; say what you'll do and do it.",
    "peopleref": "",
    "organizational": "Meet SLAs; publish uptime/quality; honor privacy/security commitments.",
    "organizationalref": "",
    "professionals": "Practice within competence; disclose conflicts; follow standards.",
    "professionalref": "",
    "machine": "Predictable behavior under distribution shift; calibrated confidence; robust logging.",
    "machineref": "",
    "failureModes": {
      "human": "Broken promises and shifting stories.",
      "organizational": "Unreliable services; surprise data sharing; missed commitments.",
      "experts": "Overclaiming results; hidden conflicts of interest.",
      "machine": "Hallucinations stated with high confidence; flaky availability."
    },
    "expand": {
      "human": "Consistency + truth-telling compound into reputation capital.",
      "organizational": "Reliability builds brand trust and lowers coordination cost.",
      "experts": "Transparent limits of expertise increase client safety.",
      "machine": "Calibration and robust evaluation prevent over-trust or misuse."
    }
  },

  {
    "category": "AT",
    "name": "Epistemic Humility",
    "definition": "Recognize uncertainty and the limits of one's knowledge; update in light of evidence.",
    "people": "Say 'I don't know'; seek disconfirming views.",
    "peopleref": "",
    "organizational": "Decision logs with assumptions and risk ranges.",
    "organizationalref": "",
    "professionals": "Second opinions; pre-registrations; error bars.",
    "professionalref": "",
    "machine": "Uncertainty-aware inference; abstention options.",
    "machineref": "",
    "failureModes": {
      "human": "Overconfidence and brittle decisions.",
      "organizational": "Single-point estimates hide tail risks.",
      "experts": "P-hacking or post-hoc rationalization.",
      "machine": "Overconfident outputs drive unsafe actions."
    },
    "expand": {
      "human": "Humility invites collaboration.",
      "organizational": "Range-based planning handles volatility.",
      "experts": "Evidence standards protect against hype.",
      "machine": "Calibration and selective defer improve safety."
    }
  },

  {
    "category": "AT",
    "name": "Honesty / Veracity",
    "definition": "Tell the truth, avoid deception, and correct errors promptly.",
    "people": "State facts clearly; fix misstatements.",
    "peopleref": "",
    "organizational": "Transparent reporting; no cooked books.",
    "organizationalref": "",
    "professionals": "Disclosure of risks and uncertainties.",
    "professionalref": "",
    "machine": "Truthfulness objectives; cite sources; refuse to fabricate.",
    "machineref": "",
    "failureModes": {
      "human": "White lies spiral into distrust.",
      "organizational": "Fraud and regulatory penalties.",
      "experts": "Selective reporting to fit a narrative.",
      "machine": "Fabricated citations and confident nonsense."
    },
    "expand": {
      "human": "Truthfulness lowers coordination costs.",
      "organizational": "Honesty sustains brand and compliance.",
      "experts": "Veracity underwrites professional ethics.",
      "machine": "Anti-hallucination training and retrieval grounding."
    }
  },

  {
    "category": "AT",
    "name": "Role Fidelity",
    "definition": "Honor the duties and limits of your role; escalate when tasks exceed them.",
    "people": "Don't overstep; ask for help when needed.",
    "peopleref": "",
    "organizational": "Clear scopes; escalation ladders; guardrails.",
    "organizationalref": "",
    "professionals": "Practice within competence; refer out when needed.",
    "professionalref": "",
    "machine": "Capability tags; refusal policies beyond scope.",
    "machineref": "",
    "failureModes": {
      "human": "Well-meant overreach causing harm.",
      "organizational": "Decision chaos; duplicated authority.",
      "experts": "Scope creep; unsafe practice.",
      "machine": "Systems act beyond training domain."
    },
    "expand": {
      "human": "Boundaries protect others and yourself.",
      "organizational": "Clear remits speed decisions.",
      "experts": "Scope discipline preserves safety.",
      "machine": "Explicit limits reduce catastrophic errors."
    }
  },

  {
    "category": "AT",
    "name": "Reliability / Consistency",
    "definition": "Do what you say you will, predictably and repeatedly, under normal conditions.",
    "people": "Meet deadlines; maintain cadence.",
    "peopleref": "",
    "organizational": "SLOs/SLAs; on-call rotations; tested runbooks.",
    "organizationalref": "",
    "professionals": "Process control; checklists; redundancy.",
    "professionalref": "",
    "machine": "Robustness, graceful degradation, and retries.",
    "machineref": "",
    "failureModes": {
      "human": "Flakiness undermines plans.",
      "organizational": "Unplanned downtime and missed SLAs.",
      "experts": "Inconsistent practice quality.",
      "machine": "Intermittent failures; non-deterministic bugs."
    },
    "expand": {
      "human": "Consistency builds credibility.",
      "organizational": "Reliability lowers operating risk.",
      "experts": "Standardization reduces variance.",
      "machine": "Stability supports safe automation."
    }
  }
];