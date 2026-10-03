export const translations = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      cta: "Fale comigo",
    },
    hero: {
      available: "disponível para oportunidades",
      greetingPrefix: "Olá, eu sou o",
      role: "Backend Developer",
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
      whatIDo: "O que eu faço",
      stackTitle: "Minha stack",
      stats: {
        projects: "Projetos",
        technologies: "Tecnologias",
        student: "Estudante",
      },
      services: {
        apis: {
          title: "APIs REST",
          description: "APIs performáticas, seguras e bem estruturadas.",
        },
        microservices: {
          title: "Microsserviços",
          description: "Arquiteturas desacopladas e fáceis de escalar.",
        },
        containers: {
          title: "Containers",
          description: "Ambientes com Docker e orquestração com Kubernetes.",
        },
        queues: {
          title: "Filas & Mensageria",
          description: "Processamento assíncrono para tarefas pesadas.",
        },
      },
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
      description: "Uma seleção de projetos em que trabalhei — do banco de dados à interface.",
      noImage: "Adicione uma imagem ao projeto",
      viewOn: "Ver",
      viewCode: "Ver código",
    },
    contact: {
      label: "Contato",
      title: "Vamos conversar",
      description:
        "Estou aberto a oportunidades, parcerias ou só uma conversa sobre tecnologia. Me chame.",
      emailMe: "Enviar e-mail",
      rights: "Todos os direitos reservados.",
      backToTop: "Voltar ao topo",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      available: "available for opportunities",
      greetingPrefix: "Hi, I'm",
      role: "Backend Developer",
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
      whatIDo: "What I do",
      stackTitle: "My stack",
      stats: {
        projects: "Projects",
        technologies: "Technologies",
        student: "Student",
      },
      services: {
        apis: {
          title: "REST APIs",
          description: "Performant, secure and well-structured APIs.",
        },
        microservices: {
          title: "Microservices",
          description: "Decoupled architectures that are easy to scale.",
        },
        containers: {
          title: "Containers",
          description: "Docker environments and Kubernetes orchestration.",
        },
        queues: {
          title: "Queues & Messaging",
          description: "Asynchronous processing for heavy workloads.",
        },
      },
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
      description: "A selection of projects I've worked on — from the database to the UI.",
      noImage: "Add an image to the project",
      viewOn: "View on",
      viewCode: "View code",
    },
    contact: {
      label: "Contact",
      title: "Let's talk",
      description:
        "I'm open to opportunities, partnerships or just a conversation about technology. Reach out.",
      emailMe: "Send an email",
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
} as const

export type Language = keyof typeof translations
export type Translations = (typeof translations)[Language]
