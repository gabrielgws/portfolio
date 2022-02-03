import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaGithub, FaLinux } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiStyledcomponents, SiAdobephotoshop } from 'react-icons/si'

import { Container, SkillsContainer } from './styles'

export default function Skills() {
  return (
    <Container id="skills">
      <h1>Habilidades</h1>
      <h3>#NeverStopLearning</h3>

      <h2>Habilidades Principais</h2>
      <SkillsContainer>
        <div>
          <h1><FaReact /></h1>
          <p>ReactJS</p>
        </div>

        <div>
          <h1><SiNextdotjs /></h1>
          <p>NextJs</p>
        </div>

        <div>
          <h1><SiJavascript /></h1>
          <p>javaScript</p>
        </div>

        <div>
          <h1><FaHtml5 /></h1>
          <p>HTML5</p>
        </div>

        <div>
          <h1><FaCss3 /></h1>
          <p>css3</p>
        </div>

        <div>
          <h1><SiStyledcomponents /></h1>
          <p>styled-components</p>
        </div>
      </SkillsContainer>

      <h2>Outras Habilidades</h2>

      <SkillsContainer>
        <div>
          <h1><FaNodeJs /></h1>
          <p>Nodejs</p>
        </div>

        <div>
          <h1><FaGithub /></h1>
          <p>Github</p>
        </div>

        <div>
          <h1><FaLinux /></h1>
          <p>Linux</p>
        </div>

        <div>
          <h1><SiAdobephotoshop /></h1>
          <p>Photoshop</p>
        </div>
      </SkillsContainer>

    </Container>
  )
}