import Image from 'next/image';
import React from 'react';

import { Container } from './styles';

export default function About() {
  return(
    <Container id="about">
      <h1>Sobre mim</h1>

      <span><Image width={250} height={250} src="/images/gabrielgws.jpg" /></span>

      <p>Olá, me chamo Gabriel Willian, trabalho na área de ti desde 2014, sempre busquei algo no meu trabalho, que fosse além de trabalho e sim fazer o que gostava, foi então que conheci a programação(ReactJS), fiquei encantado pelos poderes que ela pode proporcionar.</p>
  
      <p>Foi então que, resolvi explorar a área de desenvolvimento web e me apaixonei pelo Front-end, que atualmente é meu maior foco de estudos, mas sempre aberto para novos conhecimentos e aprendizados. Meu maior objeto como desenvolvedor, é ajudar meu time a entregar uma experiência incrível, para o cliente e usuário da nossa aplicação.</p>

      <p>Hoje eu posso dizer, eu trabalho com o que eu amo!</p>
    </Container>
  )
}