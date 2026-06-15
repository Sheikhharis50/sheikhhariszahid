export interface Certification {
  title: string
  issuer: string
  date?: string
  url?: string
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
  { value: 6, suffix: '+', label: 'Years of experience' },
  { value: 30, suffix: '+', label: 'Projects Completed' },
  { value: 3, suffix: '', label: 'OpenSource Libraries' },
  { value: 30, suffix: '+', label: 'Happy Customers' },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Back-End Development',
    skills: [
      { name: 'Python', level: 100, icon: '/assets/svg/about/progress_bars/python.svg' },
      { name: 'Django', level: 100, icon: '/assets/svg/about/progress_bars/django.svg' },
      { name: 'Node.js', level: 80, icon: '/assets/svg/about/progress_bars/nodejs.svg' },
      { name: 'Express.js', level: 60, icon: '/assets/svg/about/progress_bars/expressjs.svg' },
      { name: 'Flask', level: 60, icon: '/assets/svg/about/progress_bars/flask.svg' },
      { name: 'FastAPI', level: 40, icon: '/assets/svg/about/progress_bars/fastapi.svg' },
      { name: 'Celery', level: 80, icon: '/assets/svg/about/progress_bars/clarity.svg' },
      { name: 'GraphQL', level: 60, icon: '/assets/svg/about/progress_bars/graphql.svg' },
      { name: 'NumPy', level: 40, icon: '/assets/svg/about/progress_bars/numpy.svg' },
      { name: 'NestJS', level: 80, icon: '/assets/svg/about/progress_bars/nestjs.svg' },
      { name: 'TypeORM', level: 80, icon: '/assets/svg/about/progress_bars/typeorm.svg' },
      { name: 'Prisma', level: 60, icon: '/assets/svg/about/progress_bars/prisma.svg' },
      { name: 'Pandas', level: 60, icon: '/assets/svg/about/progress_bars/pandas.svg' },
      { name: 'WebSocket', level: 60, icon: '/assets/svg/about/progress_bars/websocket.svg' },
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
      { name: 'Bootstrap', level: 80, icon: '/assets/svg/about/progress_bars/bootstrap.svg' },
      { name: 'Sass', level: 60, icon: '/assets/svg/about/progress_bars/sass.svg' },
      { name: 'Gatsby', level: 60, icon: '/assets/svg/about/progress_bars/Gatsby.svg' },
      { name: 'Ajax', level: 40, icon: '/assets/svg/about/progress_bars/ajax.svg' },
      { name: 'jQuery', level: 40, icon: '/assets/svg/about/progress_bars/jquery.svg' },
      { name: 'LogStash', level: 60, icon: '/assets/svg/about/progress_bars/logstash.svg' },
      { name: 'Docusaurus', level: 40, icon: '/assets/svg/about/progress_bars/docusaurus.svg' },
    ],
  },
  {
    title: 'Cloud & Deployment',
    skills: [
      { name: 'Docker', level: 100, icon: '/assets/svg/about/progress_bar_03/docker.svg' },
      { name: 'BitBucket', level: 100, icon: '/assets/svg/about/progress_bar_03/bitbucket.svg' },
      { name: 'Google Cloud', level: 100, icon: '/assets/svg/about/progress_bar_03/google_cloud.svg' },
      { name: 'Terraform', level: 80, icon: '/assets/svg/about/progress_bar_03/terraform.svg' },
      { name: 'GitHub', level: 60, icon: '/assets/svg/about/progress_bar_03/github.svg' },
      { name: 'GitLab CI/CD', level: 60, icon: '/assets/svg/about/progress_bar_03/gitLab_CI_CD.svg' },
      { name: 'AWS', level: 20, icon: '/assets/svg/about/progress_bar_03/aws.svg' },
      { name: 'Jenkins', level: 20, icon: '/assets/svg/about/progress_bar_03/jenkins.svg' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'Firebase', level: 80, icon: '/assets/svg/about/progress_bar_04/firebase.svg' },
      { name: 'Redis', level: 60, icon: '/assets/svg/about/progress_bar_04/redis.svg' },
      { name: 'MongoDB', level: 60, icon: '/assets/svg/about/progress_bar_04/mongo_db.svg' },
      { name: 'MySQL', level: 40, icon: '/assets/svg/about/progress_bar_04/mysql.svg' },
      { name: 'Kafka', level: 20, icon: '/assets/svg/about/progress_bar_04/kafka.svg' },
    ],
  },
]

export const experiences: Experience[] = [
  {
    company: 'Freelancer',
    location: 'Pakistan',
    role: 'Senior Software Engineer',
    period: 'March 2023 – Present',
    description:
      "Direct and implement API integration testing, evaluate and resolve issues through comprehensive incorporation of systematic troubleshooting approaches. Architect and seamlessly integrate front-end and back-end operations to fulfil scripting requirements with precision, such as Node.js for back-end functionality and React.js for diverse front-end interfaces.",
    achievements: [
      "Retained Net Promotor Score (NPS) of above 40 to achieve higher customer satisfaction level, streamlining maximum speed applications and increasing overall user experience.",
      "Attained culture of innovation and continuous improvement in software development to deliver reliable end products through precise testing, analysis, and rectifying discrepancies.",
      "Maximised entire system's performance up to 95% and sustained augmented scalability through advanced error monitoring, debugging, and agile methodologies.",
      "Spearheaded designing, developed large-scale data systems, and generated reusable codes while nurturing liaison between cross-functional team members.",
    ],
  },
  {
    company: 'AIWORKS.AI | EPESYS',
    location: 'Lahore, Pakistan',
    role: 'Lead Software Engineer',
    period: 'February 2022 – March 2023',
    description:
      "Performed strategic utilisation of Elasticsearch for crafting and executing effective indexing along with deploying Redis to boost WebSocket services. Integrated Firebase for authentication and cloud messaging while developing back-end services, leveraging Django, Flask, and FastAPI.",
    achievements: [
      "Improved workflows and elevated system's performance conceptualising ETL processes, optimising database schemas, and transforming data from heterogeneous sources to automate integration process.",
      "Accomplished optimal functionality incorporating Apache Kafka, managing clusters, facilitating real-time data streaming, and migrating data from legacy to current infrastructure.",
      "Ensured unparalleled level of integration and efficiency by establishing appropriate synchronisation between front-end and back-end components through GraphQL execution.",
      "Orchestrated AWS Cognito service as authentication and identity solution while offering contemporary security features to protect customers and businesses.",
    ],
  },
  {
    company: 'Orange Shine',
    location: 'Los Angeles County, CA | Remote',
    role: 'Full Stack Developer',
    period: 'July 2021 – January 2022',
    description:
      "Facilitated synergistic collaboration with interdisciplinary teams, encompassing UX/UI designers, product managers, and QA engineers. Preserved confidentiality of critical assets through encryption measures and regular audits to acquire highest standards of data protection and fortify organisation's resilience.",
    achievements: [
      "Amplified data storage and retrieval efficiency by constructing as well as implementing database schemas to reduce query response time.",
      "Yielded 20% increase in user engagement metrics and improved website usability through advanced technologies such as React.js and Next.js.",
    ],
  },
  {
    company: 'Glowerx',
    location: 'Lahore, Pakistan',
    role: 'Senior Software Developer',
    period: 'November 2019 – June 2021',
    description:
      "Streamlined cross-device/screen design and layout consistency in accordance with responsive design principles to guarantee optimal operational-ability across various devices and sizes.",
    achievements: [
      "Created visually appealing and highly responsive user interfaces to accelerate page load time, utilising Bootstrap 4 and 5 frameworks.",
      "Reduced latency by deploying scalable server-side logic while positioning applications for sustained success in digital landscape.",
    ],
  },
]

export const services: Service[] = [
  {
    title: 'Mobile Development',
    description:
      "Transform your business ideas into powerful mobile applications that offer seamless user experiences on both Android and iOS platforms. My expertise in mobile development ensures that your app is robust and secure.",
    offerings: [
      'Custom Mobile App Development',
      'App Store Deployment and Support',
      'App Testing and Quality Assurance',
      'Native App Development (Swift, Kotlin)',
    ],
  },
  {
    title: 'Back-end Development',
    description:
      "Develop robust and scalable server-side applications that form the backbone of your web services. My back-end development services ensure your applications are secure, reliable, and perform at their best.",
    offerings: [
      'Server-Side Application Development',
      'Microservices Architecture',
      'Authentication and Authorisation',
      'API Development and Integration',
    ],
  },
  {
    title: 'Web Development',
    description:
      "Harness the power of modern web technologies to build dynamic, responsive, and user-friendly websites. I specialise in creating custom websites tailored to your specific needs, ensuring they are not only visually appealing but also highly functional.",
    offerings: [
      'Responsive Design for All Devices',
      'SEO Optimisation',
      'Website Maintenance and Support',
      'E-commerce Solutions',
    ],
  },
  {
    title: 'Front-end Development',
    description:
      "Create visually stunning and interactive user interfaces that provide a seamless user experience. My front-end development services focus on building responsive and dynamic websites that engage users and drive conversions.",
    offerings: [
      'Custom UI/UX Design',
      'Responsive Web Design',
      'Cross-Browser Compatibility',
      'Front-end Optimisation',
    ],
  },
  {
    title: 'Consultancy',
    description:
      "Provide expert guidance and strategic advice to help you leverage technology to achieve your business goals. My consultancy services cover technology strategy, system architecture, and project management.",
    offerings: [
      'System Architecture and Design',
      'Training and Mentorship',
      'Performance Optimisation',
      'Code Reviews and Audits',
    ],
  },
  {
    title: 'Full Stack Development',
    description:
      "End-to-end development solutions that cover everything from front-end design to back-end functionality. As a full stack developer, I ensure that your web applications are efficient, secure, and provide a seamless experience for users.",
    offerings: [
      'Performance Optimisation',
      'API Development and Integration',
      'Database Design and Management',
      'Cloud Services (AWS, Azure)',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'OrangeShine',
    url: 'https://www.orangeshine.com/',
    description:
      "Orange Shine is an e-commerce platform based in the United States that accommodates numerous vendors and clients. The platform boasts an extensive collection of products ranging from clothing to essential apparel, offering a diverse selection for consumers.",
    techStack: ['Next.js', 'Python', 'FastAPI', 'TypeScript', 'ETL', 'React.js', 'Django', 'LogStash', 'WebSocket'],
    domain: 'E-Commerce',
    image: '/assets/images/project/project1.png',
  },
  {
    title: 'AlignerBase',
    url: 'https://alignerbase.com/',
    description:
      "AlignerBase Platform empowers dental professionals to track treatment plans at every stage of the design workflow, facilitating direct communication with their design team. This seamless collaboration allows for easy requests for plan revisions, ensuring treatment plan perfection and optimal patient care.",
    techStack: ['Node.js', 'Stripe', 'Django', 'Amazon S3', 'DRF', 'React.js', 'ETL', 'AWS Lambda', 'WebSocket'],
    domain: 'Dental and Health Care',
    image: '/assets/images/project/project3.png',
  },
  {
    title: 'Sharove',
    url: 'https://www.sharove.com/',
    description:
      "I contributed to the 2.0 update of the OrangeShine.com website. This upgrade expanded the platform's capabilities to serve both business (B2B) and individual (B2C) customers, ensuring a smooth integration of new features and a unified user experience.",
    techStack: ['Next.js', 'Python', 'FastAPI', 'TypeScript', 'ETL', 'React.js', 'Django', 'LogStash', 'WebSocket'],
    domain: 'E-Commerce',
    image: '/assets/images/project/project2.png',
  },
  {
    title: 'Degree37',
    url: 'https://degree37.io/',
    description:
      "Degree37 is dedicated to revolutionising the blood donation landscape. By leveraging cutting-edge technologies, fostering educational outreach, and hosting engaging blood drives, Degree37 bridges gaps between blood centres and donors.",
    techStack: ['Next.js', 'Python', 'FastAPI', 'TypeScript', 'ETL', 'React.js', 'Django', 'LogStash', 'WebSocket'],
    domain: 'Health Care',
    image: '/assets/images/project/project4.png',
  },
  {
    title: 'Pashione',
    url: 'https://pashione.co/',
    description:
      "Pashione is a social commerce platform on a mission to revolutionise the fashion industry for Africans and beyond. The primary goal was to design and develop a custom e-commerce platform with robust scalability, multiple payment gateway integrations, and third-party integrations.",
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

export const certifications: Certification[] = []
