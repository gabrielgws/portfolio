import React, { useState } from 'react';

import { Container, ProjectContainer } from './styles';

export default function Projects() {
  let classNameProfessional = 'professional';
  let classNameGitHub = 'github';
 
  return (
    <Container id="projects">
      <h1>Projetos</h1>

      <ProjectContainer>
        <div>
          <img src="/images/tripFood.png" alt="Trip Food" />

          <h1>Trip Food Web Site</h1>
          <h2 className={classNameProfessional}>Profissional</h2>

          <p>Desenvolvimento Front-end do site de comida mochileira. Serviço Freelancer.</p>

          <a href="https://www.tripfood.co/" target="_blank" rel="noopener noreferrer">Visitar Site</a>
        </div>

        <div>
          <img src="/images/netflix.png" alt="Trip Food"/>

          <h1>Netflix Clone</h1>
          <h2 className={classNameGitHub}>Projeto - Estudo</h2>

          <p>Clone da interface da Netflix utilizando React.js, Material UI e Themoviedb.org.</p>
          <a href="https://github.com/gabrielgws/netflix-clone" target="_blank" rel="noopener noreferrer">Visitar Site</a>
        </div>
      </ProjectContainer>
    </Container>
  );
}