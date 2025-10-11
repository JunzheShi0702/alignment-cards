export const categories = [

  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  }
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
    }
    ]

 