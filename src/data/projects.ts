import type { Project } from '../types/Project';

const base = import.meta.env.BASE_URL

export const projects: Project[] = [
    {
        title: `Sistema de Requerimento do Estudante - SRE`,
        description: `Sistema desenvolvido para gerenciar os requerimentos dos estudantes, unificando e facilitando os processos acadêmicos. O SRE é uma plataforma que permite aos estudantes solicitar e acompanhar seus requerimentos de forma eficiente, proporcionando uma experiência mais fluida e organizada.`,
        descriptionEn: `System developed to manage student requests, unifying and simplifying academic processes. SRE is a platform that allows students to submit and track their requests efficiently, providing a smoother and more organized experience.`,
        technologies: [`Laravel`, `PHP`, `TailwindCSS`, `MySQL`, `Livewire`, `Docker`, `Queue` ],
        link: `https://github.com/Timeless-inc/Quebec`,
        image: `${base}images/sre.gif`
    },
    {
        title: `Charlie E-commerce`,
        description: `Projeto de E-commerce desenvolvido para trazer visibilidade para pequenos empreendedores da região de Igarassu.`,
        descriptionEn: `E-commerce project developed to bring visibility to small entrepreneurs in the Igarassu region.`,
        technologies: [`Next.js`, `TypeScript`, `TailwindCSS`, `Prisma`, `PostgreSQL`, `Stripe`, `Clerk`, `Shadcn UI`],
        link: `https://github.com/KaueLui/Charlie`,
        image: `${base}images/charlie1.gif`
    },
    {
        title: `MangoAI`,
        description: `Projeto de chatbot desenvolvido para auxiliar os estudantes do IFPE a obter informações sobre o campus, cursos e eventos. O MangoAI é uma ferramenta interativa que utiliza inteligência artificial para fornecer respostas rápidas e precisas, melhorando a comunicação entre os estudantes e a instituição.`,
        descriptionEn: `Chatbot project developed to help IFPE students get information about the campus, courses and events. MangoAI is an interactive tool that uses artificial intelligence to provide fast and accurate answers, improving communication between students and the institution.`,
        technologies: [`Next.js`, `TypeScript`, `TailwindCSS`, `Prisma`, `PostgreSQL`, `MetaAI`, `Shadcn UI`],
        link: `https://github.com/Timeless-inc/Tango`,
        image: `${base}images/mango.gif`
    },
    {
        title: `SpaceType`,
        description: `Projeto de jogo de digitação desenvolvido para ajudar os estudantes a melhorar suas habilidades de digitação de forma divertida e interativa. O SpaceType é um jogo que desafia os jogadores a digitar palavras e frases rapidamente, proporcionando uma experiência envolvente e educativa.`,
        descriptionEn: `Typing game project developed to help students improve their typing skills in a fun and interactive way. SpaceType is a game that challenges players to type words and phrases quickly, providing an engaging and educational experience.`,
        technologies: [`Svelte`, `JavaScript`, `Css`, `HTML`],
        link: `https://github.com/Louiis04/Jogo-de-digitar`,
        image: `${base}images/spacetype.gif`
    }
]