const projects = {
  edunext: {
    kicker: "2025–2026 · AI systems · Educational technology",
    title: "EDUNEXT learning intelligence platform",
    summary: "An end-to-end AI system designed to transform lecture recordings into structured learning resources while preserving traceability, human oversight and operational reliability.",
    context: "The programme needed to process a large semester-scale flow of lecture recordings across ingestion, media cleaning, transcription, concept extraction, content generation and learning evaluation—without treating each step as a disconnected tool.",
    contribution: "I managed the system-level architecture and coordinated the full workflow across researchers, administrators, software contributors and external services. I designed modular Python/Flask components, data hand-offs, failure handling and agentic quality-control concepts.",
    methods: "Teams/SharePoint intake, silence detection, transcription services, concept-tree generation, structured JSON flows, AI-generated learning materials, APIs, local services, output checking, reflective agents and iterative debugging.",
    outcome: "A coordinated platform concept built for approximately 80–100 videos per semester, with clearer ownership of the complete lifecycle instead of isolated AI features.",
    links: []
  },
  agent: {
    kicker: "2026 · Independent systems development",
    title: "Reflective offline desktop agent",
    summary: "A local-first agent architecture that can understand a screen, break a goal into steps, use permissioned tools and verify that the requested change actually happened.",
    context: "Many autonomous agents depend on cloud services and report success without robust verification. The project explores an independent system that keeps sensitive work local and separates task execution from safety reflection.",
    contribution: "I designed the architecture, interaction loop and safeguards: observation, planning, approved action, state checking, reflection, retry and recovery. I also developed the Python automation and local-model integration strategy.",
    methods: "Local LLM orchestration, screen capture, structured action schemas, permission gates, tool adapters, audit logs, independent reflective agent, verification criteria and recovery paths.",
    outcome: "A working systems concept for trustworthy desktop automation, with explicit control boundaries and evidence-based completion rather than blind execution.",
    links: []
  },
  shopfloor: {
    kicker: "2021–2025 · PhD · Industrial collaboration",
    title: "Activity-based shop-floor intelligence",
    summary: "A programme of research on how prediction, incentives and human decision-making can improve flexible manufacturing systems without reducing workers to passive system components.",
    context: "Activity-based shop floors require people to choose and accept tasks dynamically. This creates operational uncertainty, skill bottlenecks, cognitive load and social dilemmas that conventional scheduling does not fully capture.",
    contribution: "I built predictive and simulation studies using industrial ERP/MES data, developed reward and cooperation models, translated company requirements into experiments and connected behavioural evidence to recommendation-system design.",
    methods: "104 weeks of operational data, weekly task-distribution modelling, KNN, Random Forest, multi-output SVR, simulation, benefit-cost mechanisms, social cooperation strategies and controlled behavioural experiments.",
    outcome: "Peer-reviewed outputs on task prediction and reward systems, plus a doctoral thesis integrating machine learning, dynamic incentives and cognitive heuristics for human-centred shop-floor management.",
    links: [
      ["PhD dissertation", "https://bia.unibz.it/esploro/outputs/doctoral/Reward-Mechanisms-and-Human-Performance-Management/991007197244301241"],
      ["Task prediction paper", "https://doi.org/10.1016/j.procir.2025.01.032"],
      ["Social rewarding paper", "https://doi.org/10.1038/s41598-025-19709-w"]
    ]
  },
  shopping: {
    kicker: "2025–2026 · Experimental HCI",
    title: "Eco-friendly recommendations & decision heuristics",
    summary: "A behavioural study of when people follow sustainable product recommendations—and when intuitive shortcuts around price and origin override them.",
    context: "Recommendation systems often assume that better information directly produces better decisions. In real shopping, budget restrictions and familiar cues can dominate even when an eco-friendly option is clearly recommended.",
    contribution: "I designed the mixed factorial experiment, created the shopping task and metrics, analysed the behaviour of 67 participants and developed the conceptual link between recommendation adoption, budget flexibility and local/cost heuristics.",
    methods: "Within-subject baseline versus recommendation condition, between-subject high/low budget condition, item-level choice measures, selection-bias ratios, ANCOVA and interpretation through cognitive heuristics and behavioural constraints.",
    outcome: "The recommendation improved eco-friendly choice, while budget and heuristic alignment shaped adoption. The work supports more realistic recommendation systems that account for constraints rather than only presenting information.",
    links: []
  },
  llmsecurity: {
    kicker: "2026 · Conversational AI security",
    title: "Indirect prompting vulnerabilities & intention-aware defence",
    summary: "An investigation into how seemingly harmless requests can indirectly guide language models toward an underlying intention that would be easier to detect in a direct prompt.",
    context: "Current safeguards tend to evaluate the visible wording of a prompt. Attackers—or ordinary users—can split, disguise or progressively reveal intent across natural conversation, creating a gap between literal content and actual purpose.",
    contribution: "I co-developed the research framing, dataset design and defence concept, focusing on human indirectness, intent reconstruction and conversational intervention rather than keyword blocking.",
    methods: "Five prompt families with 100 prompts each, evaluation across six open and large language models, vulnerability analysis and an intention-aware defence layer designed to reason across the conversational trajectory.",
    outcome: "A short-paper research programme for CIKM 2026 that reframes prompt safety as an interaction and intention problem, not only a content-classification problem.",
    links: []
  },
  healthai: {
    kicker: "2020–2021 · Multimodal AI · Healthcare",
    title: "Breathing audio + chest X-ray diagnosis",
    summary: "A multimodal deep-learning architecture combining respiratory sounds and chest radiography for preliminary COVID-19 assessment.",
    context: "Single-modality screening can miss useful evidence. During the pandemic, the project explored whether two inexpensive and complementary signals could reduce false negatives in settings with limited diagnostic access.",
    contribution: "I led the work as first author, connecting the clinical problem, system architecture, multimodal fusion and evaluation while coordinating a multidisciplinary team.",
    methods: "Inception-v3 transfer learning for X-rays, multilayer perceptron processing for breathing features, multimodal decision fusion and curated open radiography data.",
    outcome: "Published in Applied Soft Computing and made openly accessible through PubMed Central; the related curated X-ray dataset was reused and cited by later research.",
    links: [["Open-access paper", "https://pmc.ncbi.nlm.nih.gov/articles/PMC8149173/"]]
  },
  assistive: {
    kicker: "2018–2025 · Human-centred and inclusive design",
    title: "Assistive and accessible technology",
    summary: "A connected body of products and studies focused on independence, safety and access for people facing visual, cognitive or geographic barriers.",
    context: "Assistive products fail when technical capability is separated from daily routines, stigma, affordability and the surrounding service system.",
    contribution: "I worked across user research, concept development, physical and digital prototyping, system integration, testing and publication. Projects included visual navigation support, dementia assistance, emergency response and rural pneumonia diagnosis.",
    methods: "Human-centred design, wearable and mobile prototypes, speech interfaces, sensors, computer vision, IoT, task analysis and iterative usability evaluation.",
    outcome: "Multiple peer-reviewed publications, practical prototypes and a continuing research line on the opportunities and limitations of human-centred design for assistive systems.",
    links: [
      ["Visual impairment paper", "https://doi.org/10.1016/j.procs.2020.03.277"],
      ["Dementia device", "https://www.behance.net/gallery/68187335/Assistive-Device-for-Dementia-patients"],
      ["Pneumonia application", "https://doi.org/10.1109/GHTC46095.2019.9033048"]
    ]
  },
  bharatanatyam: {
    kicker: "2025 · Interaction design · Immersive culture",
    title: "Demystifying Bharatanatyam",
    summary: "A multimodal interaction framework for making the meanings of Indian classical dance more accessible without flattening its cultural complexity.",
    context: "Audiences unfamiliar with Bharatanatyam may see movement without understanding the gestures, expressions and associations that carry meaning.",
    contribution: "I contributed to the interaction and research framing, connecting multimodal labels, perception, evaluation and immersive learning possibilities.",
    methods: "Gesture and expression annotation, comparative user evaluation with and without labels, multimodal interpretation and a VR extension for immersive learning.",
    outcome: "Participants understood the dance better when semantic cues were present. The work was published at CHItaly 2025 through ACM.",
    links: [["ACM paper", "https://doi.org/10.1145/3750069.3750442"]]
  }
};

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const themeButton = document.querySelector('.theme-toggle');
let storedTheme = null;
try { storedTheme = localStorage.getItem('theme'); } catch (_) {}
if (storedTheme) document.documentElement.dataset.theme = storedTheme;
themeButton?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (_) {}
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const selected = button.dataset.filter;
  cards.forEach(card => {
    card.hidden = selected !== 'all' && !card.dataset.category.split(' ').includes(selected);
  });
}));

const modal = document.getElementById('project-modal');
const closeModal = () => {
  if (modal?.open) modal.close();
  document.body.classList.remove('modal-open');
};
document.querySelectorAll('.open-project').forEach(button => button.addEventListener('click', () => {
  const key = button.closest('.project-card').dataset.project;
  const project = projects[key];
  if (!project || !modal) return;
  document.getElementById('modal-kicker').textContent = project.kicker;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-summary').textContent = project.summary;
  document.getElementById('modal-context').textContent = project.context;
  document.getElementById('modal-contribution').textContent = project.contribution;
  document.getElementById('modal-methods').textContent = project.methods;
  document.getElementById('modal-outcome').textContent = project.outcome;
  const links = document.getElementById('modal-links');
  links.innerHTML = '';
  project.links.forEach(([label,url]) => {
    const link = document.createElement('a');
    link.className = 'button ghost';
    link.href = url;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = `${label} ↗`;
    links.appendChild(link);
  });
  modal.showModal();
  document.body.classList.add('modal-open');
}));
document.querySelector('.modal-close')?.addEventListener('click', closeModal);
modal?.addEventListener('click', event => {
  const rect = modal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) closeModal();
});
modal?.addEventListener('close', () => document.body.classList.remove('modal-open'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .08});
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.getElementById('year').textContent = new Date().getFullYear();


document.querySelectorAll('.jump-chip').forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  document.getElementById('work')?.scrollIntoView({behavior:'smooth', block:'start'});
  const matchingFilter = document.querySelector(`.filter[data-filter="${selected}"]`);
  matchingFilter?.click();
}));
