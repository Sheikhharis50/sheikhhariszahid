export interface Certification {
  title: string
  issuer: string
  date?: string
  url?: string
  icon?: string
}

export interface Skill {
  name: string
  level: number
  icon?: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface Experience {
  company: string
  location: string
  role: string
  period: string
  description: string
  achievements: string[]
}

export interface Service {
  title: string
  description: string
  offerings: string[]
}

export interface Project {
  title: string
  url: string
  description: string
  techStack: string[]
  domain: string
  image: string
}

export const stats = [
  { value: 7, suffix: '+', label: 'Years of Experience' },
  { value: 15, suffix: '+', label: 'AI Products Built' },
  { value: 30, suffix: '+', label: 'Projects Completed' },
  { value: 30, suffix: '+', label: 'Happy Customers' },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI & Generative AI',
    skills: [
      { name: 'Prompt Engineering', level: 95, icon: '/assets/svg/about/ai_skills/prompt.svg' },
      { name: 'OpenAI / Anthropic APIs', level: 95, icon: '/assets/svg/about/ai_skills/openai.svg' },
      { name: 'LangChain', level: 90, icon: '/assets/svg/about/ai_skills/langchain.svg' },
      { name: 'RAG Systems', level: 90, icon: '/assets/svg/about/ai_skills/rag.svg' },
      { name: 'AI Agents', level: 85, icon: '/assets/svg/about/ai_skills/agents.svg' },
      { name: 'pgvector & Vector DBs', level: 85, icon: '/assets/svg/about/ai_skills/pgvector.svg' },
      { name: 'LlamaIndex', level: 80, icon: '/assets/svg/about/ai_skills/llamaindex.svg' },
      { name: 'Hugging Face', level: 75, icon: '/assets/svg/about/ai_skills/huggingface.svg' },
      { name: 'Fine-tuning (LoRA / PEFT)', level: 70, icon: '/assets/svg/about/ai_skills/finetuning.svg' },
    ],
  },
  {
    title: 'Back-End Development',
    skills: [
      { name: 'Python', level: 100, icon: '/assets/svg/about/progress_bars/python.svg' },
      { name: 'FastAPI', level: 90, icon: '/assets/svg/about/progress_bars/fastapi.svg' },
      { name: 'Django', level: 90, icon: '/assets/svg/about/progress_bars/django.svg' },
      { name: 'Node.js', level: 80, icon: '/assets/svg/about/progress_bars/nodejs.svg' },
      { name: 'NestJS', level: 80, icon: '/assets/svg/about/progress_bars/nestjs.svg' },
      { name: 'Express.js', level: 60, icon: '/assets/svg/about/progress_bars/expressjs.svg' },
      { name: 'Flask', level: 60, icon: '/assets/svg/about/progress_bars/flask.svg' },
      { name: 'GraphQL', level: 60, icon: '/assets/svg/about/progress_bars/graphql.svg' },
      { name: 'WebSocket', level: 60, icon: '/assets/svg/about/progress_bars/websocket.svg' },
      { name: 'Celery', level: 80, icon: '/assets/svg/about/progress_bars/clarity.svg' },
      { name: 'TypeORM', level: 80, icon: '/assets/svg/about/progress_bars/typeorm.svg' },
      { name: 'Prisma', level: 60, icon: '/assets/svg/about/progress_bars/prisma.svg' },
    ],
  },
  {
    title: 'Front-End & Libraries',
    skills: [
      { name: 'React', level: 100, icon: '/assets/svg/about/progress_bars/react.svg' },
      { name: 'Next.js', level: 80, icon: '/assets/svg/about/progress_bars/javascript.svg' },
      { name: 'TypeScript', level: 80, icon: '/assets/svg/about/progress_bars/typescript.svg' },
      { name: 'JavaScript', level: 100, icon: '/assets/svg/about/progress_bars/javascript.svg' },
      { name: 'Redux', level: 100, icon: '/assets/svg/about/progress_bars/redux.svg' },
      { name: 'Tailwind CSS', level: 80, icon: '/assets/svg/about/progress_bars/tailwind.svg' },
      { name: 'Material UI', level: 100, icon: '/assets/svg/about/progress_bars/material_ui.svg' },
      { name: 'Sass', level: 60, icon: '/assets/svg/about/progress_bars/sass.svg' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Docker', level: 100, icon: '/assets/svg/about/progress_bar_03/docker.svg' },
      { name: 'Google Cloud', level: 100, icon: '/assets/svg/about/progress_bar_03/google_cloud.svg' },
      { name: 'BitBucket', level: 100, icon: '/assets/svg/about/progress_bar_03/bitbucket.svg' },
      { name: 'Terraform', level: 80, icon: '/assets/svg/about/progress_bar_03/terraform.svg' },
      { name: 'GitHub', level: 80, icon: '/assets/svg/about/progress_bar_03/github.svg' },
      { name: 'GitLab CI/CD', level: 60, icon: '/assets/svg/about/progress_bar_03/gitLab_CI_CD.svg' },
      { name: 'AWS', level: 60, icon: '/assets/svg/about/progress_bar_03/aws.svg' },
      { name: 'Jenkins', level: 40, icon: '/assets/svg/about/progress_bar_03/jenkins.svg' },
    ],
  },
  {
    title: 'Databases & Vector Stores',
    skills: [
      { name: 'pgvector / PostgreSQL', level: 90, icon: '/assets/svg/about/ai_skills/pgvector.svg' },
      { name: 'Firebase', level: 80, icon: '/assets/svg/about/progress_bar_04/firebase.svg' },
      { name: 'Redis', level: 60, icon: '/assets/svg/about/progress_bar_04/redis.svg' },
      { name: 'MongoDB', level: 60, icon: '/assets/svg/about/progress_bar_04/mongo_db.svg' },
      { name: 'MySQL', level: 40, icon: '/assets/svg/about/progress_bar_04/mysql.svg' },
      { name: 'Kafka', level: 40, icon: '/assets/svg/about/progress_bar_04/kafka.svg' },
    ],
  },
]

export const experiences: Experience[] = [
  {
    company: 'Freelancer',
    location: 'Pakistan',
    role: 'AI Engineer & Senior Full-Stack Developer',
    period: 'March 2023 – Present',
    description:
      "Design and ship production-grade AI systems — RAG pipelines, LLM-powered chatbots, and autonomous AI agents — integrated into full-stack applications. Architect end-to-end solutions using LangChain, pgvector, and the OpenAI and Anthropic APIs, connecting generative AI capabilities to robust back-end services and responsive front-ends.",
    achievements: [
      "Engineered RAG pipelines with pgvector and LangChain, cutting document-retrieval latency by 60% and improving answer relevance scores by 35% over a baseline keyword-search approach.",
      "Shipped a multi-turn AI assistant for a SaaS client, boosting user engagement by 40% and reducing support ticket volume by 25% through contextual, streaming LLM responses.",
      "Built AI agent workflows with tool-calling, persistent memory, and multi-step planning that automated repetitive back-office tasks, saving clients 120+ hours per month.",
      "Maintained NPS above 40 by delivering high-reliability AI features with zero-downtime deployments, streaming SSE responses, and robust prompt-injection guardrails.",
    ],
  },
  {
    company: 'AIWORKS.AI | EPESYS',
    location: 'Lahore, Pakistan',
    role: 'Lead Software Engineer',
    period: 'February 2022 – March 2023',
    description:
      "Led engineering at an AI-focused product company, building intelligent data pipelines, real-time AI services, and ML-integrated back-ends. Applied Elasticsearch for semantic indexing, Redis for low-latency model serving, and FastAPI for high-throughput AI inference APIs.",
    achievements: [
      "Architected ETL pipelines that fed structured data into ML models, automating integration of heterogeneous sources and cutting data-preparation time by 50%.",
      "Deployed Apache Kafka-based real-time streaming infrastructure, enabling live inference feeds and reducing model-serving latency for analytics dashboards.",
      "Implemented AWS Cognito authentication across AI product surfaces, delivering enterprise-grade identity management and securing sensitive model outputs.",
      "Established a GraphQL layer synchronising front-end dashboards with back-end AI services, improving cross-team developer velocity across a 10-person product organisation.",
    ],
  },
  {
    company: 'Orange Shine',
    location: 'Los Angeles County, CA | Remote',
    role: 'Full Stack Developer',
    period: 'July 2021 – January 2022',
    description:
      "Collaborated with cross-functional teams — UX/UI designers, product managers, and QA engineers — to build and maintain a high-traffic e-commerce platform. Upheld data-protection standards through encryption measures and regular security audits.",
    achievements: [
      "Amplified data storage and retrieval efficiency by implementing optimised database schemas, reducing average query response time significantly.",
      "Yielded a 20% increase in user engagement metrics and improved website usability by leveraging React.js and Next.js for dynamic, server-rendered experiences.",
    ],
  },
  {
    company: 'Glowerx',
    location: 'Lahore, Pakistan',
    role: 'Senior Software Developer',
    period: 'November 2019 – June 2021',
    description:
      "Delivered responsive, cross-device web applications following modern design principles, ensuring consistent layouts and optimal performance across screen sizes.",
    achievements: [
      "Built visually appealing, highly responsive UIs that accelerated page load times using Bootstrap 4 and 5 frameworks.",
      "Reduced server latency by deploying scalable server-side logic, positioning applications for sustained growth in a competitive digital landscape.",
    ],
  },
]

export const services: Service[] = [
  {
    title: 'AI Integration',
    description:
      "Embed the latest large language models — OpenAI, Anthropic, Gemini — directly into your existing products and workflows. I handle prompt design, API orchestration, streaming, and guardrails so you ship a reliable AI feature, not a fragile proof of concept.",
    offerings: [
      'LLM API Orchestration (OpenAI, Anthropic)',
      'Streaming & Real-time AI Responses',
      'Prompt Engineering & Safety Guardrails',
      'AI Feature Prototyping to Production',
    ],
  },
  {
    title: 'RAG & Knowledge Systems',
    description:
      "Build retrieval-augmented generation pipelines that let your LLM answer questions grounded in your own data — documents, databases, wikis. From chunking strategy and embedding models to vector store tuning, I architect the full pipeline for accuracy and speed.",
    offerings: [
      'pgvector & Pinecone Vector Stores',
      'Document Ingestion & Chunking Pipelines',
      'Semantic Search & Hybrid Retrieval',
      'LangChain / LlamaIndex Orchestration',
    ],
  },
  {
    title: 'AI Chatbots & Agents',
    description:
      "Design and ship production-ready conversational AI — from customer-support bots to fully autonomous agents with tool use, memory, and multi-step planning. Built to handle real traffic, not just demos.",
    offerings: [
      'Multi-turn Conversational Agents',
      'Tool-calling & Function Calling',
      'Persistent Memory & Context Management',
      'LangGraph / OpenAI Agents SDK',
    ],
  },
  {
    title: 'Full Stack AI Applications',
    description:
      "End-to-end development of AI-powered web applications — React/Next.js frontends paired with FastAPI or Node.js backends, all wired to your AI layer. I own the full stack so handoffs don't create bottlenecks.",
    offerings: [
      'React / Next.js AI-powered Frontends',
      'FastAPI & Node.js AI Backends',
      'Real-time Streaming UIs',
      'Cloud Deployment (GCP, AWS, Vercel)',
    ],
  },
  {
    title: 'Back-End Development',
    description:
      "Robust, scalable server-side systems that underpin AI features and traditional web applications alike — microservices, REST/GraphQL APIs, background workers, and event streaming, built to last.",
    offerings: [
      'Python (FastAPI, Django, Flask)',
      'Node.js / NestJS Microservices',
      'API Design & Authentication',
      'Queue Systems & Background Workers',
    ],
  },
  {
    title: 'AI Consulting',
    description:
      "Not sure which model, architecture, or vendor to bet on? I provide vendor-neutral guidance on AI strategy — from defining the right use case to selecting the right stack and avoiding costly over-engineering.",
    offerings: [
      'Use-case Scoping & ROI Analysis',
      'Model Selection & Cost Optimisation',
      'AI Architecture & System Design',
      'Team Training & Prompt Engineering',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'OrangeShine',
    url: 'https://www.orangeshine.com/',
    description:
      "Orange Shine is a high-traffic US e-commerce platform serving hundreds of vendors and clients. Contributed to the platform's ETL data layer and real-time WebSocket features, handling a diverse catalog of apparel and consumer goods.",
    techStack: ['Next.js', 'Python', 'FastAPI', 'TypeScript', 'ETL', 'React.js', 'Django', 'LogStash', 'WebSocket'],
    domain: 'E-Commerce',
    image: '/assets/images/project/project1.png',
  },
  {
    title: 'AlignerBase',
    url: 'https://alignerbase.com/',
    description:
      "AlignerBase empowers dental professionals to track treatment plans at every stage of the design workflow, enabling direct communication with design teams. Built real-time collaboration features and secure document pipelines across AWS infrastructure.",
    techStack: ['Node.js', 'Stripe', 'Django', 'Amazon S3', 'DRF', 'React.js', 'ETL', 'AWS Lambda', 'WebSocket'],
    domain: 'Dental and Health Care',
    image: '/assets/images/project/project3.png',
  },
  {
    title: 'Sharove',
    url: 'https://www.sharove.com/',
    description:
      "Contributed to the 2.0 upgrade of OrangeShine, expanding the platform to serve both B2B and B2C customers with unified UX, new ETL pipelines, and a fully revamped product discovery experience.",
    techStack: ['Next.js', 'Python', 'FastAPI', 'TypeScript', 'ETL', 'React.js', 'Django', 'LogStash', 'WebSocket'],
    domain: 'E-Commerce',
    image: '/assets/images/project/project2.png',
  },
  {
    title: 'Degree37',
    url: 'https://degree37.io/',
    description:
      "Degree37 revolutionises blood donation by bridging blood centres and donors through smart matching and educational outreach. Built real-time notification systems and donor management pipelines using cutting-edge web technologies.",
    techStack: ['Next.js', 'Python', 'FastAPI', 'TypeScript', 'ETL', 'React.js', 'Django', 'LogStash', 'WebSocket'],
    domain: 'Health Care',
    image: '/assets/images/project/project4.png',
  },
  {
    title: 'Pashione',
    url: 'https://pashione.co/',
    description:
      "Pashione is a social commerce platform revolutionising fashion for Africans and beyond. Designed and developed a custom e-commerce platform with robust scalability, multiple payment gateway integrations, and Elasticsearch-powered product search.",
    techStack: ['Next.js', 'Python', 'Node.js', 'Stripe', 'ETL', 'React.js', 'Elastic Search'],
    domain: 'E-Commerce',
    image: '/assets/images/project/project5.png',
  },
]

export const trustedBy = [
  { name: 'Neuronus', logo: '/assets/images/home/neuronus.png' },
  { name: 'OrangeShine', logo: '/assets/images/home/orangshine.png' },
  { name: 'Pashione', logo: '/assets/images/home/pashione.png' },
  { name: 'Degree37', logo: '/assets/images/home/degree37.png' },
]

export const certifications: Certification[] = [
  {
    title: 'Machine Learning',
    issuer: 'DeepLearning.AI',
    icon: '/assets/svg/certifications/deeplearningai.svg',
    url: 'https://www.coursera.org/account/accomplishments/verify/6P68P0CO7GA7?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
  },
  {
    title: 'NodeJS Certificate',
    issuer: 'HackerRank',
    icon: '/assets/svg/certifications/hackerrank.svg',
    url: 'https://www.hackerrank.com/certificates/748733b39606',
  },
  {
    title: 'Python Certificate',
    issuer: 'HackerRank',
    icon: '/assets/svg/certifications/hackerrank.svg',
    url: 'https://www.hackerrank.com/certificates/488e06656465',
  },
  {
    title: 'Problem Solving (Basic) Certificate',
    issuer: 'HackerRank',
    icon: '/assets/svg/certifications/hackerrank.svg',
    url: 'https://www.hackerrank.com/certificates/92872e7803f3',
  },
]
