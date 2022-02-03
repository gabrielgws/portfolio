import Image from 'next/image';
import React from 'react';

import { Container } from './styles';

export default function About() {
  return(
    <Container id="about">
      <h1>Sobre mim</h1>

      <span><Image width={200} height={200} src="/images/gabrielgws.jpg" /></span>

      <p>Olá, sou Gabriel Willian e trabalho na área de TI desde 2014. Durante minha experiência profissional, sempre busquei por algo que me proporcionasse satisfação. Foi então que conheci e me encantei pela programação (ReactJS). </p>
  
      <p>Tenho explorado a área de desenvolvimento web e focado no Front-end. Mas sempre ligado e aberto para novos conhecimentos e aprendizados. Meu maior objeto como desenvolvedor, é ajudar meu time a entregar uma experiência incrível, para o cliente e usuário da nossa aplicação. </p>

      <p>Hoje eu posso dizer com tranquilidade que trabalho com o que eu amo!</p>
    </Container>
  )
}