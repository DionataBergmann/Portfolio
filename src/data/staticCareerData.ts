
import type { ExperienceItem, EducationItem, ProjectItem } from '@/types/career';

export const staticExperiences: ExperienceItem[] = [
  {
    id: 'cigam',
    order: 0,
    title: {
      pt: 'CIGAM - Software de Gestão',
      en: 'CIGAM - Software de Gestão',
    },
    role: { pt: 'Desenvolvedor Frontend Web', en: 'Frontend Web Developer' },
    description: {
      pt: [
        'Atuo no time de funcionalidades de nota fiscal do ERP web (React + TypeScript), usado por empresas com alto volume de usuários, priorizando manutenibilidade e UX em ambiente corporativo crítico.',
        'Participo da migração do projeto principal para arquitetura de microfrontends, com foco em componentização, desacoplamento entre módulos e evolução sustentável do front-end.',
        'Entrego melhorias, correções e features em ciclos incrementais com produto e QA, priorizando estabilidade em produção e integração com APIs REST.',
      ],
      en: [
        'I work on the invoice (nota fiscal) features team of the web ERP (React + TypeScript), used by companies with high user volume, prioritizing maintainability and UX in a critical corporate environment.',
        'I contribute to migrating the main project to a microfrontend architecture, focusing on componentization, module decoupling, and sustainable front-end evolution.',
        'I ship improvements, fixes, and features in incremental cycles with product and QA, prioritizing production stability and REST API integration.',
      ],
    },
    date: { pt: 'Fevereiro 2025 - o Momento', en: 'February 2025 - Present' },
    logoKey: 'cigam',
    linkedinUrl: 'https://www.linkedin.com/company/erpcigam/posts/?feedView=all',
    techKeys: ['react', 'ts'],
  },
  {
    id: 'bridge',
    order: 1,
    title: { pt: 'Bridge MT como Outsourcing', en: 'Bridge MT as Outsourcing' },
    role: { pt: 'Desenvolvedor Frontend Mobile', en: 'Frontend Mobile Developer' },
    description: {
      pt: [
        'Atuei em apps Android/iOS internacionais em React Native sobre codebase legada de 9+ anos, equilibrando evolução e estabilidade.',
        'Recuperei e republiquei app obsoleto (SDK 27): atualizei dependências, identidade visual e UX até atender requisitos atuais das lojas.',
        'Implementei melhorias de usabilidade, responsividade e conformidade com versões recentes do SDK em produção.',
      ],
      en: [
        'I worked on international Android/iOS apps in React Native on a 9+ year legacy codebase, balancing evolution and stability.',
        'I recovered and republished an obsolete app (SDK 27): updated dependencies, visual identity, and UX until it met current store requirements.',
        'I delivered usability, responsiveness, and compliance improvements for recent SDK versions in production.',
      ],
    },
    date: {
      pt: 'Julho 2023 - Janeiro 2025 (outsourcing · Brainny)',
      en: 'July 2023 - January 2025 (outsourcing · Brainny)',
    },
    logoKey: 'bridge',
    linkedinUrl: 'https://www.linkedin.com/company/bridge-mgmt/posts/?feedView=all',
    techKeys: ['react_native', 'js'],
  },
  {
    id: 'brainny',
    order: 2,
    title: { pt: 'Brainny Smart Solutions', en: 'Brainny Smart Solutions' },
    role: { pt: 'Desenvolvedor Frontend', en: 'Frontend Developer' },
    description: {
      pt: [
        'Entreguei 15+ projetos web e mobile, incluindo produtos com ~3 mil acessos/dia, com foco em performance, escalabilidade e estabilidade.',
        'Desenvolvi e mantive soluções Full Stack (React, Next.js, React Native, NestJS) com ownership principal em front-end e integrações REST/GraphQL.',
        'Publiquei e mantive apps nas lojas, atendi clientes internacionais em manutenção contínua e trabalhei em squads Scrum com entrega iterativa.',
      ],
      en: [
        'I delivered 15+ web and mobile projects, including products with ~3k daily visits, focusing on performance, scalability, and stability.',
        'I built and maintained Full Stack solutions (React, Next.js, React Native, NestJS) with primary ownership on front-end and REST/GraphQL integrations.',
        'I published and maintained store apps, supported international clients on ongoing maintenance, and worked in Scrum squads with iterative delivery.',
      ],
    },
    date: { pt: 'Dezembro 2021 - Fevereiro 2025', en: 'December 2021 - February 2025' },
    logoKey: 'brainny',
    linkedinUrl: 'https://www.linkedin.com/company/brainnyss/',
    techKeys: ['react_native', 'nextjs', 'ts', 'nestjs', 'node', 'graphql', 'docker'],
  },
];

export const staticEducation: EducationItem[] = [
  {
    id: 'fiap',
    order: 0,
    title: { pt: 'FIAP', en: 'FIAP' },
    role: { pt: 'MBA em Frontend Engineering', en: 'MBA in Frontend Engineering' },
    description: {
      pt: [
        'Especialização prática em engenharia front-end, com foco em arquitetura de software, performance, testes, acessibilidade e integração com APIs.',
        'Domínio de tecnologias como React, Next.js, TypeScript, Angular, Docker, AWS e Flutter.',
        'Desenvolvimento de projetos aplicando metodologias ágeis, integração contínua e deploy em ambientes cloud.',
        'Criação de aplicações completas, desde o design system até a publicação na nuvem, utilizando microfrontends e práticas modernas de DevOps.',
      ],
      en: [
        'Hands-on specialization in front-end engineering, focusing on software architecture, performance, testing, accessibility, and API integration.',
        'Proficiency in technologies such as React, Next.js, TypeScript, Angular, Docker, AWS, and Flutter.',
        'Project development using agile methodologies, continuous integration, and cloud deployment.',
        'Creation of complete applications, from design system to cloud publishing, leveraging microfrontends and modern DevOps practices.',
      ],
    },
    date: { pt: 'Março 2025 - Março 2026', en: 'March 2025 - March 2026' },
    logoKey: 'fiap',
    linkedinUrl: 'https://www.linkedin.com/school/fiap/',
    descriptionLinks: [],
  },
  {
    id: 'senac',
    order: 1,
    title: { pt: 'Senac RS', en: 'Senac RS' },
    role: {
      pt: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
      en: 'Technology in Analysis and Systems Development',
    },
    description: {
      pt: [
        'Desenvolvi e aperfeiçoei minhas habilidades em desenvolvimento de software Full Stack, abrangendo Backend, Web, Mobile, UI/UX.',
        '🥇 Dezembro de 2023 - Primeiro lugar geral no Hackathon com o projeto ',
        '🥈 Dezembro de 2022 - Segundo lugar geral no Hackathon com o projeto ',
        '💼 Dezembro de 2021 - Fui convidado a estagiar na Brainny pelo CTO da empresa, que também foi meu professor e coordenador.',
      ],
      en: [
        'I developed and improved my skills in Full Stack software development, covering Backend, Web, Mobile, UI/UX.',
        '🥇 December 2023 - First place overall at the Hackathon with the project ',
        '🥈 December 2022 - Second place overall at the Hackathon with the project ',
        '💼 December 2021 - I was invited to intern at Brainny by the company\'s CTO, who was also my professor and coordinator.',
      ],
    },
    date: { pt: 'Março 2020 - Dezembro 2023', en: 'March 2020 - December 2023' },
    logoKey: 'senac',
    linkedinUrl: '',
    descriptionLinks: [
      { index: 1, href: 'https://github.com/neto-virtual/NetoExtension', label: { pt: 'Neto Virtual', en: 'Neto Virtual' } },
      { index: 2, href: 'https://github.com/DionataBergmann/easilyMobile', label: { pt: 'Easily', en: 'Easily' } },
    ],
  },
  {
    id: 'ufpel',
    order: 2,
    title: { pt: 'Universidade Federal de Pelotas', en: 'Federal University of Pelotas' },
    role: { pt: 'Engenharia de Computação', en: 'Computer Engineering' },
    description: {
      pt: [
        'Foco em algoritmos, lógica, estruturas de dados.',
        'Decidi transferir meu foco para o curso de Análise e Desenvolvimento de Sistemas no Senac, para alinhar melhor minha formação com minhas oportunidades de trabalho.',
      ],
      en: [
        'Focus on algorithms, logic, and data structures.',
        'I decided to transfer my focus to the Systems Analysis and Development course at Senac to better align my education with my work opportunities.',
      ],
    },
    date: { pt: 'Março 2019 - Dezembro 2021', en: 'March 2019 - December 2021' },
    logoKey: 'ufpel',
    linkedinUrl: 'https://www.linkedin.com/school/universidade-federal-de-pelotas/',
    descriptionLinks: [],
  },
];

export const staticProjects: ProjectItem[] = [
  {
    id: 'mindease-web',
    order: 0,
    featured: true,
    title: { pt: 'MindEase – Web', en: 'MindEase – Web' },
    description: {
      pt: 'MindEase é uma plataforma de estudos para organizar o aprendizado com menos sobrecarga — voltada também a pessoas neurodivergentes (TDAH, TEA, dislexia, burnout). Integrei a API da OpenAI para gerar conteúdo a partir de PDFs, textos ou foto de questão no celular: resumos em níveis ajustáveis, flashcards e quizzes automáticos, inclusive para entender o enunciado em tempo real só fotografando a questão. Para o dia a dia de estudos há Kanban com Pomodoro e revisão espaçada; para acessibilidade cognitiva, painel com modo foco, contraste, tipografia e preferências persistentes. Stack: Next.js (App Router), TypeScript, Firebase, Tailwind, Framer Motion e Vitest com CI.',
      en: 'MindEase is a study platform to organize learning with less cognitive overload — also designed for neurodivergent people (ADHD, autism, dyslexia, burnout). I integrated the OpenAI API to generate content from PDFs, plain text, or a phone photo of a question: adjustable summaries, automatic flashcards and quizzes, including real-time help to understand a prompt just by photographing it. For daily studying: Kanban with Pomodoro and spaced repetition; for cognitive accessibility: a panel with focus mode, contrast, typography, and persistent preferences. Stack: Next.js (App Router), TypeScript, Firebase, Tailwind, Framer Motion, and Vitest with CI.',
    },
    githubLink: 'https://github.com/DionataBergmann/MindEase-WEB',
    liveUrl: 'https://mindease-self.vercel.app/',
    bgImage: "url('/mindeaseWeb.png')",
    videoUrl: 'https://youtu.be/xqWohg7ZOGs',
  },
  {
    id: 'mindease-app',
    order: 1,
    featured: true,
    title: { pt: 'MindEase – App', en: 'MindEase – App' },
    description: {
      pt: 'Versão mobile do MindEase para estudar fora do desktop, alinhada ao ecossistema web. Em React Native e Expo, integrei a OpenAI para gerar resumos, flashcards e quizzes a partir de PDFs, textos ou foto da questão — inclusive entender o enunciado em tempo real só fotografando com o celular. Há Kanban com Pomodoro, revisão espaçada e acessibilidade cognitiva (modo foco, contraste, tipografia e preferências persistentes), com foco também em pessoas neurodivergentes. Stack: React Native, Expo, TypeScript e Firebase.',
      en: 'Mobile version of MindEase for studying off desktop, aligned with the web ecosystem. Built with React Native and Expo, I integrated OpenAI to generate summaries, flashcards, and quizzes from PDFs, text, or a photo of a question — including real-time help to understand a prompt just by taking a picture with the phone. Includes Kanban with Pomodoro, spaced repetition, and cognitive accessibility (focus mode, contrast, typography, persistent preferences), also aimed at neurodivergent users. Stack: React Native, Expo, TypeScript, and Firebase.',
    },
    githubLink: 'https://github.com/DionataBergmann/MindEase-APP',
    bgImage: 'linear-gradient(135deg, #2c5282 0%, #2b6cb0 45%, #285e61 100%)',
    videoUrl: '',
  },
  {
    id: 'farm-assist-app',
    order: 2,
    featured: true,
    title: { pt: 'Farm Assist App', en: 'Farm Assist App' },
    description: {
      pt: 'App mobile para funcionários de fazenda executarem e registrarem tarefas no campo. Implementei criação de tarefas (pelo gestor ou pelo próprio funcionário), acompanhamento de progresso e relatórios sincronizados com o painel web. React Native com foco em usabilidade para uso em ambiente operacional.',
      en: 'Mobile app for farm employees to execute and log field tasks. I implemented task creation (by manager or employee), progress tracking, and reports synced with the web dashboard. React Native focused on usability in operational environments.',
    },
    githubLink: 'https://github.com/DionataBergmann/AgroFiveStar-APP',
    bgImage: 'https://img.youtube.com/vi/bKxBzCzjNBg/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/bKxBzCzjNBg',
  },
  {
    id: 'farm-assist-web',
    order: 3,
    featured: true,
    title: { pt: 'Farm Assist Web', en: 'Farm Assist Web' },
    description: {
      pt: 'Painel web para donos e gestores de fazenda acompanharem tarefas e produtividade em tempo real. Desenvolvi fluxos de criação/gestão de tarefas, relatórios por área/cultura, estoque de grãos e notificações, integrado à API GraphQL. Stack: React, NestJS e PostgreSQL no ecossistema AgroFiveStar.',
      en: 'Web dashboard for farm owners and managers to track tasks and productivity in real time. I built task creation/management flows, area/crop reports, grain storage, and notifications, integrated with the GraphQL API. Stack: React, NestJS, and PostgreSQL in the AgroFiveStar ecosystem.',
    },
    githubLink: 'https://github.com/DionataBergmann/AgroFiveStar-WEB',
    bgImage: 'https://img.youtube.com/vi/TQsoWcfyJ8o/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/TQsoWcfyJ8o',
  },
  {
    id: 'farm-assist-api',
    order: 4,
    title: { pt: 'Farm Assist API', en: 'Farm Assist API' },
    description: {
      pt: 'API NestJS + GraphQL + PostgreSQL do ecossistema Farm Assist: tarefas em tempo real, relatórios, estoque de grãos e notificações para web e mobile.',
      en: 'NestJS + GraphQL + PostgreSQL API for the Farm Assist ecosystem: real-time tasks, reports, grain storage, and notifications for web and mobile.',
    },
    githubLink: 'https://github.com/DionataBergmann/AgroFiveStar-API',
    bgImage: "url('/insomnia.png')",
    videoUrl: 'https://www.youtube.com/watch?v=MHcePcAXmBU',
  },
  {
    id: 'bytebank-landing',
    order: 5,
    featured: true,
    title: { pt: 'Bytebank – Landing page', en: 'Bytebank – Landing page' },
    description: {
      pt: 'Primeira entrega do case Bytebank (Fase 1 do MBA FIAP): landing institucional da plataforma financeira. React, Next.js, Tailwind CSS e Material UI.',
      en: 'First Bytebank case delivery (FIAP MBA Phase 1): institutional landing for the financial platform. React, Next.js, Tailwind CSS, and Material UI.',
    },
    githubLink: 'https://github.com/DionataBergmann/Bytebank',
    bgImage: 'https://img.youtube.com/vi/SjfjRfZSjK0/maxresdefault.jpg',
    videoUrl: '',
  },
  {
    id: 'bytebank-web',
    order: 6,
    featured: true,
    title: { pt: 'Bytebank – Web', en: 'Bytebank – Web' },
    subtitle: {
      pt: 'Microfrontends (Single SPA) + módulo de investimentos',
      en: 'Microfrontends (Single SPA) + investments module',
    },
    description: {
      pt: 'Fases 1 e 2 do MBA FIAP: plataforma web com arquitetura de microfrontends via Single SPA. Desenvolvi o shell Next.js e o módulo de investimentos (CRA + React, porta 3001), com Docker para build e execução em container.',
      en: 'FIAP MBA Phases 1 and 2: web platform with a microfrontend architecture via Single SPA. I built the Next.js shell and the investments module (CRA + React, port 3001), with Docker for containerized build and run.',
    },
    githubLink: 'https://github.com/DionataBergmann/Bytebank-WEB',
    bgImage: 'https://img.youtube.com/vi/SjfjRfZSjK0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=SjfjRfZSjK0',
  },
  {
    id: 'bytebank-app',
    order: 7,
    featured: true,
    title: { pt: 'Bytebank – App', en: 'Bytebank – App' },
    description: {
      pt: 'Versão mobile do Bytebank (MBA FIAP): app financeiro em React Native para operações e experiência do usuário fora do desktop, alinhado ao case web do mesmo ecossistema.',
      en: 'Mobile version of Bytebank (FIAP MBA): React Native financial app for operations and user experience off desktop, aligned with the web case in the same ecosystem.',
    },
    githubLink: 'https://github.com/DionataBergmann/Bytebank-APP',
    bgImage: "url('/BytebankApp.png')",
    videoUrl: 'https://www.youtube.com/watch?v=jHwChK6VQSo',
  },
  {
    id: 'newshub',
    order: 8,
    featured: true,
    title: { pt: 'News Hub', en: 'News Hub' },
    description: {
      pt: 'Portal de notícias com filtros por categoria, clima em tempo real e resumos gerados por IA (OpenAI) dos top 5 artigos. Converti resumos em áudio para consumo hands-free. Desenvolvi front-end em React/Next.js com integrações a APIs públicas; demo em vídeo disponível.',
      en: 'News portal with category filters, real-time weather, and AI-generated summaries (OpenAI) of the top 5 articles. I converted summaries to audio for hands-free consumption. Built the front-end in React/Next.js with public API integrations; video demo available.',
    },
    githubLink: 'https://github.com/DionataBergmann/NewsHub',
    bgImage: 'https://img.youtube.com/vi/dVwqEofGZPs/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/dVwqEofGZPs',
  },
  {
    id: 'portfolio',
    order: 9,
    title: { pt: 'Portfólio', en: 'Portfolio' },
    description: {
      pt: 'Este site: portfólio bilíngue com timeline de carreira, projetos e contato. Next.js, Chakra UI, i18n e dados centralizados (static + Firestore) com foco em performance e SEO para recrutadores.',
      en: 'This site: bilingual portfolio with career timeline, projects, and contact. Next.js, Chakra UI, i18n, and centralized data (static + Firestore) focused on performance and SEO for recruiters.',
    },
    githubLink: 'https://github.com/DionataBergmann/Portfolio',
    bgImage: "url('/home.png')",
    videoUrl: 'https://youtu.be/TEU5gEqXnQg',
  },
];
