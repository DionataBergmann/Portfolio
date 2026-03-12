
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
        'Desenvolvimento e manutenção de sistemas web internos utilizando React e TypeScript.',
        'Atuação em melhorias, correções e novas funcionalidades em soluções corporativas utilizadas por grandes empresas com alto volume de usuários.',
      ],
      en: [
        'Development and maintenance of internal web systems using React and TypeScript.',
        'Working on improvements, bug fixes, and new features in corporate solutions used by large companies with a high user volume.',
      ],
    },
    date: { pt: 'Fevereiro 2025 - o Momento', en: 'February 2025 - Present' },
    logoKey: 'cigam',
    linkedinUrl: 'https://www.linkedin.com/company/erpcigam/posts/?feedView=all',
    techKeys: ['react_native', 'ts'],
  },
  {
    id: 'bridge',
    order: 1,
    title: { pt: 'Bridge MT como Outsourcing', en: 'Bridge MT as Outsourcing' },
    role: { pt: 'Desenvolvedor Frontend Mobile', en: 'Frontend Mobile Developer' },
    description: {
      pt: [
        'Atuação em projetos internacionais.',
        'Desenvolvimento e manutenção de aplicativos Android e iOS utilizando React Native em uma base de código de mais de 9 anos.',
        'Recuperação e republicação de um aplicativo obsoleto (SDK 27), realizando as atualizações necessárias para torná-lo novamente compatível com os requisitos das lojas.',
        'Implementação de melhorias de UX, usabilidade e responsividade.',
        'Alteração da identidade visual, incluindo a redefinição de temas, imagens e layout.',
        'Atualização de bibliotecas e dependências para garantir a conformidade com as versões mais recentes do SDK, atendendo aos requisitos das lojas.',
      ],
      en: [
        'Worked on international projects.',
        'Development and maintenance of Android and iOS applications using React Native in a codebase of over 9 years.',
        'Recovery and republication of an obsolete application (SDK 27), making the necessary updates to make it compatible with store requirements.',
        'Implementation of UX, usability, and responsiveness improvements.',
        'Redesign of visual identity, including themes, images, and layout.',
        'Updating libraries and dependencies to ensure compliance with the latest SDK versions, meeting store requirements.',
      ],
    },
    date: { pt: '', en: '' },
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
        'Atuação em mais de 15 projetos de diferentes propostas, incluindo projetos com média de 3 mil acessos diários, garantindo estabilidade, escalabilidade e otimização de performance.',
        'Desenvolvimento e manutenção Full Stack de aplicações web responsivas e mobile utilizando React.js, NextJS, React Native e NestJS, com foco principal em Frontend.',
        'Implementação de melhorias de UX e usabilidade, focando na criação de interfaces intuitivas e eficientes.',
        'Publicação e atualização de aplicações mobile na Play Store e App Store.',
        'Trabalho direto com clientes para manutenção contínua e conforme necessário de uma aplicação com usuários internacionais.',
        'Colaboração com equipes ágeis utilizando a metodologia Scrum para garantir a entrega contínua e melhorias iterativas.',
      ],
      en: [
        'Worked on over 15 projects with different proposals, including projects with an average of 3,000 daily accesses, ensuring stability, scalability, and performance optimization.',
        'Full Stack development and maintenance of responsive web and mobile applications using React.js, NextJS, React Native, and NestJS, with a primary focus on Frontend.',
        'Implementation of UX and usability improvements, focusing on creating intuitive and efficient interfaces.',
        'Publication and updating of mobile applications on the Play Store and App Store.',
        'Direct work with clients for continuous maintenance of an application with international users.',
        'Collaboration with agile teams using Scrum methodology to ensure continuous delivery and iterative improvements.',
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
    date: { pt: 'Março 2025 - Dezembro 2025', en: 'March 2025 - December 2025' },
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
    id: 'portfolio',
    order: 0,
    title: { pt: 'Portfólio', en: 'Portfolio' },
    description: {
      pt: 'Meu Portfólio é uma aplicação moderna e interativa, projetada para destacar minhas habilidades, experiências e projetos como desenvolvedor. Construído com Next.js e React, a plataforma reflete princípios de design responsivo e uma navegação fluida, garantindo uma experiência envolvente para os visitantes.',
      en: 'My Portfolio is a modern and interactive application designed to showcase my skills, experiences, and projects as a developer. Built with Next.js and React, the platform reflects responsive design principles and smooth navigation, ensuring an engaging experience for visitors.',
    },
    githubLink: 'https://github.com/DionataBergmann/Portfolio',
    bgImage: "url('/home.png')",
    videoUrl: 'https://youtu.be/TEU5gEqXnQg',
  },
  {
    id: 'newshub',
    order: 1,
    title: { pt: 'News Hub', en: 'News Hub' },
    description: {
      pt: 'O News Hub é um portal de notícias, projetado para manter os usuários informados com as últimas notícias de forma acessível e envolvente. Construída com React e Next.js, a plataforma integra-se com APIs públicas para fornecer notícias em tempo real e dados meteorológicos. Os usuários podem explorar notícias por categoria, aplicar filtros e se manter atualizados com as previsões meteorológicas atuais. Aproveitando a IA por meio da API OpenAI, o NewsHub gera resumos concisos dos cinco principais artigos da categoria digitada. Esses resumos são então convertidos em áudio, permitindo que os usuários ouçam atualizações breves de notícias diretamente na plataforma, tornando-a perfeita para se manter informado em qualquer lugar.',
      en: 'News Hub is a news portal designed to keep users informed with the latest news in an accessible and engaging way. Built with React and Next.js, the platform integrates public APIs to provide real-time news and weather data. Users can explore news by category, apply filters, and stay updated with current weather forecasts. Leveraging AI through the OpenAI API, NewsHub generates concise summaries of the top five articles in the selected category. These summaries are then converted to audio, allowing users to listen to brief news updates directly on the platform, making it perfect for staying informed anywhere.',
    },
    githubLink: 'https://github.com/DionataBergmann/NewsHub',
    bgImage: 'https://img.youtube.com/vi/dVwqEofGZPs/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/dVwqEofGZPs',
  },
  {
    id: 'farm-assist-app',
    order: 2,
    title: { pt: 'Farm Assist App', en: 'Farm Assist App' },
    description: {
      pt: 'Farm Assist App é um aplicativo móvel criado com React Native. Este projeto tem como objetivo fornecer aos usuários que são funcionários de uma fazenda uma maneira perfeita de gerenciar e visualizar suas tarefas diárias de forma eficiente. Ele inclui recursos como a criação de tarefas por meio do sistema web gerenciado pelo proprietário, bem como a criação de tarefas pelos próprios funcionários e a visualização de relatórios sobre o progresso das tarefas.',
      en: 'Farm Assist App is a mobile application created with React Native. This project aims to provide farm employees with a seamless way to manage and view their daily tasks efficiently. It includes features like task creation through the web system managed by the owner, as well as task creation by the employees themselves and viewing reports on task progress.',
    },
    githubLink: 'https://github.com/DionataBergmann/AgroFiveStar-APP',
    bgImage: 'https://img.youtube.com/vi/bKxBzCzjNBg/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/bKxBzCzjNBg',
  },
  {
    id: 'farm-assist-web',
    order: 3,
    title: { pt: 'Farm Assist Web', en: 'Farm Assist Web' },
    description: {
      pt: 'Farm Assist é um aplicativo web desenvolvido com React e NestJS. Este projeto foi criado para fornecer aos proprietários e gerentes de fazendas uma maneira eficiente de organizar e monitorar as atividades diárias de seus funcionários. A versão web permite que os proprietários criem e gerenciem tarefas em tempo real, conforme são realizadas pelos funcionários. Ele também fornece relatórios de produtividade em diferentes áreas e culturas, gerenciamento de armazenamento de grãos e criação de notificações para usuários. Com uma interface amigável, o sistema garante um gerenciamento mais produtivo e colaborativo das operações da fazenda.',
      en: 'Farm Assist is a web application developed with React and NestJS. This project was created to provide farm owners and managers with an efficient way to organize and monitor their employees\' daily activities. The web version allows owners to create and manage tasks in real-time as they are performed by employees. It also provides productivity reports in different areas and crops, grain storage management, and user notification creation. With a user-friendly interface, the system ensures more productive and collaborative farm operations.',
    },
    githubLink: 'https://github.com/DionataBergmann/AgroFiveStar-WEB',
    bgImage: 'https://img.youtube.com/vi/TQsoWcfyJ8o/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/TQsoWcfyJ8o',
  },
  {
    id: 'bytebank',
    order: 4,
    title: { pt: 'Bytebank', en: 'Bytebank' },
    description: {
      pt: 'Bytebank é um projeto web desenvolvido para a fase 1 do meu MBA em Engenharia Frontend na FIAP. Desenvolvido utilizando React, Next.js, Tailwind CSS, Material UI.',
      en: 'Bytebank is a web project developed for Phase 1 of my MBA in Frontend Engineering at FIAP. Built using React, Next.js, Tailwind CSS, and Material UI.',
    },
    githubLink: 'https://github.com/DionataBergmann/Bytebank',
    bgImage: 'https://img.youtube.com/vi/SjfjRfZSjK0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=SjfjRfZSjK0',
  },
  {
    id: 'farm-assist-api',
    order: 5,
    title: { pt: 'Farm Assist API', en: 'Farm Assist API' },
    description: {
      pt: 'API desenvolvida com NestJS, GraphQL, PostgreSQL para atender às necessidades do frontend da aplicação, permitindo que proprietários e gerentes de fazendas monitorem e organizem as atividades diárias de seus funcionários. A API fornece suporte para a criação e gerenciamento de tarefas em tempo real, relatórios de produtividade em diferentes áreas e culturas, gerenciamento de armazenamento de grãos e envio de notificações aos usuários. Com uma arquitetura robusta e eficiente, a API oferece uma base sólida para o frontend, garantindo que as operações da fazenda sejam gerenciadas de forma produtiva e colaborativa.',
      en: 'API developed with NestJS, GraphQL, PostgreSQL to meet the needs of the application\'s frontend, allowing farm owners and managers to monitor and organize their employees\' daily activities. The API provides support for real-time task creation and management, productivity reports in different areas and crops, grain storage management, and sending notifications to users. With a robust and efficient architecture, the API offers a solid foundation for the frontend, ensuring that farm operations are managed productively and collaboratively.',
    },
    githubLink: 'https://github.com/DionataBergmann/AgroFiveStar-API',
    bgImage: "url('/insomnia.png')",
    videoUrl: 'https://www.youtube.com/watch?v=MHcePcAXmBU',
  },
];
