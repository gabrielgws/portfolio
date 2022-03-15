import Image from 'next/image';
import React from 'react';

import { Container, ProjectContainer } from './styles';

export default function Projects() {
  let classNameProfessional = 'professional';
  let classNameGitHub = 'github';
  let classNameBuilding = 'Building';
 
  return (
    <Container id="projects">
      <h1>Projetos</h1>

      <ProjectContainer>
        <div>
          <Image src="/images/dan-logo.png" alt="Dan Mitrione Advogado" width="200px" height="200px"/>

          <h1>Mitrione & Luckezzi - Advogados</h1>
          {/* <h2 className={classNameBuilding}>Building</h2> */}
          <h2 className={classNameProfessional}>Profissional</h2>

          <p>Desenvolvimento de uma Landing page para uma advogado. Serviço Freelancer.</p>

          <a href="https://mitrioneluckezziadvogados.com.br/" target="_blank" rel="noopener noreferrer">Visitar Site</a>
        </div>

        <div>
          <Image src="/images/tripFood.png" alt="Trip Food" width="200px" height="200px"/>

          <h1>Trip Food Web Site</h1>
          <h2 className={classNameProfessional}>Profissional</h2>

          <p>Desenvolvimento Front-end do site de comida mochileira. Serviço Freelancer.</p>

          <a href="https://www.tripfood.co/" target="_blank" rel="noopener noreferrer">Visitar Site</a>
        </div>

        <div>
          <Image src="/images/netflix.png" alt="Netflix clone" width="200px" height="200px"/>

          <h1>Netflix Clone</h1>
          <h2 className={classNameGitHub}>Projeto - Estudo</h2>

          <p>Clone da interface da Netflix utilizando React.js, Material UI e Themoviedb.org.</p>
          <a href="https://github.com/gabrielgws/netflix-clone" target="_blank" rel="noopener noreferrer">Visitar Site</a>
        </div>
      </ProjectContainer>
    </Container>
  );
}