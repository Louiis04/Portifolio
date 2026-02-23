import type { Project } from '../types/Project';

export const projects: Project[] = [
    {
        title: `Sistema de Requerimento do Estudante - SRE`,
        description: `Sistema desenvolvido para gerenciar os requerimentos dos estudantes, unificando e facilitando os processos acadêmicos. O SRE é uma plataforma que permite aos estudantes solicitar e acompanhar seus requerimentos de forma eficiente, proporcionando uma experiência mais fluida e organizada.`,
        technologies: [`Laravel`, `PHP`, `TailwindCSS`, `MySQL`, `Livewire`, `Docker`, `Queue` ],
        link: `https://github.com/Timeless-inc/Quebec`,
        image: `/images/sre.gif`
    },
    {
        title: `Charlie E-commerce`,
        description: `Projeto de E-commerce desenvolvido para trazer visibilidade para pequenos empreendedores da região de Igarassu.`,
        technologies: [`Next.js`, `TypeScript`, `TailwindCSS`, `Prisma`, `PostgreSQL`, `Stripe`, `Clerk`, `Shadcn UI`],
        link: `https://github.com/KaueLui/Charlie`,
        image: `/images/charlie1.gif`
    },
    {
        title: `MangoAI`,
        description: `Projeto de chatbot desenvolvido para auxiliar os estudantes do IFPE a obter informações sobre o campus, cursos e eventos. O MangoAI é uma ferramenta interativa que utiliza inteligência artificial para fornecer respostas rápidas e precisas, melhorando a comunicação entre os estudantes e a instituição.`,
        technologies: [`Next.js`, `TypeScript`, `TailwindCSS`, `Prisma`, `PostgreSQL`, `MetaAI`, `Shadcn UI`],
        link: `https://github.com/Timeless-inc/Tango`,
        image: `/images/mango.gif`
    },
    {
        title: `SpaceType`,
        description: `Projeto de jogo de digitação desenvolvido para ajudar os estudantes a melhorar suas habilidades de digitação de forma divertida e interativa. O SpaceType é um jogo que desafia os jogadores a digitar palavras e frases rapidamente, proporcionando uma experiência envolvente e educativa.`,
        technologies: [`Svelte`, `JavaScript`, `Css`, `HTML`],
        link: `https://github.com/Louiis04/Jogo-de-digitar`,
        image: `/images/spacetype.gif`
    }
]