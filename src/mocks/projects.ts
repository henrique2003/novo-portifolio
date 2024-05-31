import {
  cloneNubank,
  getFruits,
  indecisionApp,
  pokeApi,
  sporgenda,
  squidFunkos,
  signMundi
} from '../assets'
import { Project } from '../domain'
import { TechsTypes } from '../enums'

export default [
  {
    image: signMundi,
    description: 'O Sign Mundi é um app que mostra a o nome dos paises em imagens que representam sua escrita em libras. Também contém uma área admin para cadastrar, editar e apagar um pais de acordo com sua geolocalização.',
    links: {
      github: 'https://henrique-cristioglu.vercel.app'
    },
    techs: [TechsTypes.reactNative, TechsTypes.styledComponents, TechsTypes.typescript, TechsTypes.nodejs, TechsTypes.mongodb],
    title: 'Sign-Mundi',
    color: '#303030'
  },
  {
    image: getFruits,
    description: 'O Get fruits é um app para fazer pedido de salada de frutas online. Esta aplicação contem telas de boas vindas, outra com o mercado para escolher a suas saladas de frutas e um carrinho para finalizar o seu pedido junto com uma tela de sucesso no final.',
    links: {
      github: 'https://github.com/henrique2003/get-fruits'
    },
    techs: [TechsTypes.reactNative, TechsTypes.styledComponents, TechsTypes.typescript],
    title: 'Get fruits',
    color: '#ffa451'
  },
  {
    image: squidFunkos,
    description: 'O Squid funkos é o comeco de uma ideia de app para venda de funkos do squid game. Esta é uma simples aplicação que consiste em uma pagina inicial e outra com os funkos que podem ser adiquiridos.',
    links: {
      github: 'https://github.com/henrique2003/Squid-funkos'
    },
    techs: [TechsTypes.reactNative, TechsTypes.styledComponents, TechsTypes.typescript],
    title: 'Squid funkos',
    color: '#f22f56'
  },
  {
    image: cloneNubank,
    description: 'Este app é um clone da tela inicial do nubank em uma das primeiras versões do app.',
    links: {
      github: 'https://github.com/henrique2003/clone-nubank'
    },
    techs: [TechsTypes.reactNative, TechsTypes.styledComponents, TechsTypes.typescript],
    title: 'Clone Nubank',
    color: '#8b10ae'
  },
  {
    image: sporgenda,
    description: 'Nesta aplicação você escolhe um horário na agenda onde você pode ir ao local mostrado e praticar a atividade física desejada conhecendo outras pessoas. Garantindo sua vaga somente com o seu nome.',
    links: {
      github: 'https://github.com/henrique2003/Sporgenda'
    },
    techs: [TechsTypes.react, TechsTypes.styledComponents, TechsTypes.css, TechsTypes.typescript, TechsTypes.nodejs, TechsTypes.mongodb],
    title: 'Sporgenda',
    color: '#6dc75f'
  },
  {
    image: pokeApi,
    description: 'Este app foi feito com a api do pokemon. Nele você pode procurar qualquer pokemon por seu nome ou número da pokédex e ao clicar em ver mais você irá ver mais informações sobre ele.',
    links: {
      site: 'https://poke-api-site.netlify.app',
      github: 'https://github.com/henrique2003/PokeApi'
    },
    techs: [TechsTypes.react, TechsTypes.css],
    title: 'Poke api',
    color: '#ff3f3f'
  },
  {
    image: indecisionApp,
    description: 'Nesta aplicação é possível que o usuário adicione tarefas à sua lista, removê-las e sortear qualquer uma das opções.',
    links: {
      site: 'https://indecision-aplication.netlify.app',
      github: 'https://github.com/henrique2003/Indecision-App'
    },
    techs: [TechsTypes.react, TechsTypes.styledComponents, TechsTypes.sass],
    title: 'Indecision App',
    color: '#8357c5'
  }
] as Project[]
