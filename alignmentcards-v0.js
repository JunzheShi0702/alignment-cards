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
];


 export const cards = [
    { 
      "category": "AP", 
      "name": "Accountability", 
      "definition": "Respnosiblity should be clearly distributed for actions and result produced by entities", 
      "human": "Be in charge for your words, behavior, assigned workload, and the mistakes during the process of working", 
      "organizational": "Make clear standards and rules on reporting and oversight managment, be responsible for a good atmosphere for entities", 
      "professional": "Provide effective guidance and review, could from peer or clients", 
      "machine": "AI systems can trace and justify the correctness of their decisions, meanwhile be responsible for their failure in decisions", 
      "failureModes": { 
        "human": "a student blames the group missing deadline of an assignment without reflecting on his own role and responsibility", 
        "organizational": "a company try to avoid the penalty of environmental destruction by hiding behind a complext structure and falsifying environmental data statistics", 
        "professional": "An engineer try to escape from the unsafe manipulation during the building process by taking \"I ust built what I am told to build\"", 
        "machine": "AI gives wrong info on academic or medical instructions but there is no way to clarify the liability of this fault"
      }
    },
    { 
      "category": "AP", 
      "name": "Transparncy and Explainability", 
      "definition": "Decision and procedure should be understandable and open to corresponding clients or panels", 
      "human": "do all necessary communications clearly without being mysterious and blur", 
      "organizational": "Sharing methods or making contracts using direct, definite, and understandable language rather than using ambiguous one", 
      "professional": "Making all their work traceable and adequately-demonstrated using reliable and reachable evidence", 
      "machine": "AI should be able to explain the reason of a certain decision and outcome during the usage process", 
      "failureModes": { 
        "human": "A manager makes decisions in secrecy, leaving their team confused.",
        "organizational": "A company changes loan approval algorithms without disclosing new criteria to applicants.",
        "professional": "A doctor prescribes a treatment without telling the patient the reasons or risks.",
        "machine": "A black-box AI denies someone a mortgage but gives no explanation that can be understood or challenged."
      }
    },
    {
        "category": "AP",
        "name": "Justice and Fairness",
        "definition": "Treat individuals equitably and prevent systematic discrimination.",
        "human": "Making sure everyone gets a fair chance, not playing favorites.",
        "organizational": "Creating policies that do not disadvantage minority groups.",
        "professional": "Ensuring that services or advice are given without bias.",
        "machine": "AI that avoids discriminatory outcomes in hiring, lending, or policing.",
        "failureModes": {
          "human": "A teacher gives higher grades to students they personally like.",
          "organizational": "Hiring practices that systematically exclude women or minorities.",
          "professional": "A lawyer prioritizes wealthy clients at the expense of providing fair service to all.",
          "machine": "A facial recognition system that works well on light-skinned faces but fails on dark-skinned ones."
      }
    },
    {
        "category": "AP",
        "name": "Justice and Fairness",
        "definition": "Treat individuals equitably and prevent systematic discrimination.",
        "human": "Making sure everyone gets a fair chance, not playing favorites.",
        "organizational": "Creating policies that do not disadvantage minority groups.",
        "professional": "Ensuring that services or advice are given without bias.",
        "machine": "AI that avoids discriminatory outcomes in hiring, lending, or policing.",
      "failureModes": {
        "human": "A teacher gives higher grades to students they personally like.",
        "organizational": "Hiring practices that systematically exclude women or minorities.",
        "professional": "A lawyer prioritizes wealthy clients at the expense of providing fair service to all.",
        "machine": "A facial recognition system that works well on light-skinned faces but fails on dark-skinned ones."
      }
    },
    {
      "category": "AP",
      "name": "Safety and Security",
      "definition": "Protecting individuals and organizations from harm and threats.",
      "human": "Taking reasonable precautions to ensure personal safety.",
      "organizational": "Implementing security measures to safeguard company assets.",
      "professional": "Providing secure environments for patients or clients.",
      "machine": "AI systems that prevent unauthorized access or cyber threats.",
      "failureModes": {
        "human": "A person neglects their safety by ignoring warning signs.",
        "organizational": "A company fails to update its security protocols, leading to a data breach.",
        "professional": "A healthcare provider does not follow proper infection control procedures.",
        "machine": "An AI system is vulnerable to hacking attacks."
      }
    },
    {
      "category": "AB",
      "name": "Hoped for: People who show courage, initiative, and independent judgment. Rewarded: Those who make no mistakes, strictly follow orders, and avoid risk.",
      "definition": "Systemic Risk Aversion: A culture that punishes error more than it rewards initiative, producing caution and conformity instead of adaptability and courage.",
      "principle": "Make low-stakes failure acceptable. Definition: Distinguish errors of initiative from errors of negligence; reward responsible risk-taking, reflection, and learning rather than mere error avoidance.",
      "human": "People avoid challenging tasks to protect themselves from punishment.",
      "organizational": "Firms emphasize blame control and rule adherence over innovation.",
      "professional": "Professionals recycle safe, standard solutions rather than exploring better but uncertain ideas.",
      "machine": "Agents trained with heavy penalties for mistakes and little reward for exploration become overly conservative.",
      "failureModes": {
        "human": "A student selects only easy projects to keep a perfect grade.",
        "organizational": "Managers reject bold product ideas to safeguard quarterly metrics.",
        "professional": "An engineer never proposes an experimental design due to fear of repercussions if it fails.",
        "machine": "A robot refuses to traverse unknown terrain even when the mission requires it."
      }
    },
    {
      "category": "AB",
      "name": "Hoped for: High-quality, impactful outcomes (true learning, strategic success, real health gains). Rewarded: Easy-to-count proxies (publication counts, body counts, billable hours, throughput).",
      "definition": "Measure Myopia: Organizations fixate on what is simple to quantify, shifting effort to numbers that look good while neglecting the substance that actually matters.",
      "principle": "Value substance over volume. Definition: Prioritize long-term impact and validated quality indicators over raw counts; tie rewards to mission outcomes, not just proxies.",
      "human": "Individuals chase scorekeeping targets (word count, test scores) instead of mastery.",
      "organizational": "Units are funded for metric wins rather than meaningful results.",
      "professional": "Scholars/pros focus on boosting counts (papers, hours) instead of solving hard problems.",
      "machine": "Models optimize engagement/completions rather than understanding or mission success.",
      "failureModes": {
        "human": "Students pad essays to hit word quotas.",
        "organizational": "Commands celebrate ‘body count’ increases while losing legitimacy on the ground.",
        "professional": "Researchers ship many low-impact papers to satisfy ‘publish or perish’.",
        "machine": "An ed-tech recommender maximizes quiz completions without improving retention."
      }
    },
    {
      "category": "AB",
      "name": "Hoped for: Healthy discourse, accurate information, and prosocial communities. Rewarded: Content that drives clicks, shares, and watch-time regardless of quality or harm.",
      "definition": "Engagement Capture: Attention becomes the core reward signal, incentivizing sensationalism, outrage, and addictive loops that undermine civic and informational goals.",
      "principle": "Optimize for well-being. Definition: Replace/weight engagement KPIs with measures of discourse quality, trust, informedness, and safety; penalize harmful virality.",
      "human": "Creators learn that outrage and sensational takes outperform nuance.",
      "organizational": "Platforms privilege growth and ad revenue tied to attention over community health.",
      "professional": "Integrity/safety teams get overruled by growth targets and monetization priorities.",
      "machine": "Recommenders trained on click-through optimize for attention, not truth or welfare.",
      "failureModes": {
        "human": "Influencers escalate polarization to stay visible.",
        "organizational": "A platform rolls back safety friction because it depresses engagement.",
        "professional": "Policy proposals that reduce harm are shelved for hurting KPIs.",
        "machine": "Ranking boosts borderline/toxic content because it retains user attention longer."
      }
    }
]

 