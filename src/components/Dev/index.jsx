import React from 'react';

import DevLottie from './DevLottie';
import RedesSociais from './RedesSociais';

import { Container, DeveloperContainer } from './styles';

export default function Dev(){
  const developer = '<Gabriel Willian />'

  return (
    <Container id="dev">
        <DeveloperContainer>
          <h1>Olá,</h1>
          <h2>Eu sou <span>{developer}</span></h2>
          <h3>Desenvolvedor Front-end</h3>
          <RedesSociais />
        </DeveloperContainer>

        <DevLottie />
    </Container>
  )
}