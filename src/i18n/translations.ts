export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      available: "disponível para oportunidades",
      greeting: "Olá, eu sou o Luís",
      subtitle: "Construo sistemas backend eficientes e escaláveis.",
      description:
        "Fissurado em desenvolver APIs, microsserviços e sistemas de alta performance. Trabalho com PHP, Laravel, Node.js, Docker e muito mais.",
      viewProjects: "Ver projetos",
      contact: "Contato",
    },
    about: {
      label: "Sobre",
      title: "Quem sou eu",
      bio1: `Sou um desenvolvedor Backend, no qual busco cada vez mais me aprofundar nos conceitos de Backend + DevOps, gosto bastante de estruturar códigos que tragam uma boa perfomance ao produto. Atualmente estudante no IFPE, onde desenvolvo soluções reais para problemas reais.`,
      bio1Highlight: "IFPE",
      bio2: "Tenho experiência com arquitetura de microsserviços, filas de mensagens, containerização com Docker e orquestração com Kubernetes, sempre buscando escrever código limpo e escalável.",
      skillCategories: {
        Backend: "Backend",
        "Banco de Dados": "Banco de Dados",
        "Infra & DevOps": "Infra & DevOps",
        Frontend: "Frontend",
      },
    },
    projects: {
      label: "Projetos",
      title: "O que já desenvolvi",
      noImage: "Adicione uma imagem ao projeto",
      viewOn: "Ver",
    },
    contact: {
      label: "Contato",
      title: "Vamos conversar",
      description:
        "Estou aberto a oportunidades, parcerias ou só uma conversa sobre tecnologia. Me chame.",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      available: "available for opportunities",
      greeting: "Hi, I'm Luís",
      subtitle: "I build efficient and scalable backend systems.",
      description:
        "Passionate about developing APIs, microservices and high-performance systems. I work with PHP, Laravel, Node.js, Docker and much more.",
      viewProjects: "View projects",
      contact: "Contact",
    },
    about: {
      label: "About",
      title: "Who I am",
      bio1: `I'm a Backend developer who constantly seeks to deepen knowledge in Backend + DevOps concepts. I enjoy structuring code that delivers great performance. Currently a student at IFPE, where I build real solutions to real problems.`,
      bio1Highlight: "IFPE",
      bio2: "I have experience with microservices architecture, message queues, containerization with Docker and orchestration with Kubernetes, always aiming to write clean and scalable code.",
      skillCategories: {
        Backend: "Backend",
        "Banco de Dados": "Database",
        "Infra & DevOps": "Infra & DevOps",
        Frontend: "Frontend",
      },
    },
    projects: {
      label: "Projects",
      title: "What I've built",
      noImage: "Add an image to the project",
      viewOn: "View on",
    },
    contact: {
      label: "Contact",
      title: "Let's talk",
      description:
        "I'm open to opportunities, partnerships or just a conversation about technology. Reach out.",
      rights: "All rights reserved.",
    },
  },
} as const

export type Language = keyof typeof translations
export type Translations = (typeof translations)[Language]
