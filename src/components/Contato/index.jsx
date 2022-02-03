import React from 'react';
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

import ContactLottie from './ContactLottie';

import { Container, ContactContainer, ContactContent, ContactRedeSociais } from './styles';

export default function Contato() {
  return (
    <Container id="contato">
      <ContactContainer>
        <ContactLottie />
        <ContactContent>
          <h1>Contato</h1>
          <p>Espero que tenha gostado do meu portifólio.<br/>
            Caso queira entrar em contato, esses são os meios aonde posso ser encontrado.
          </p>
          
          <div>
            <h2><AiOutlineMail/> <span>E-MAIL</span></h2>
            <p><a href="mailto:gabriel.gws@hotmail.com">gabriel.gws@hotmail.com</a></p>

            <h2><FaWhatsapp/> <span>WHATSAPP</span></h2>
            <p>(31) 9 9497-4032</p>

            <h2><span>REDES SOCIAIS</span></h2>
            <ContactRedeSociais>
              <a href="https://github.com/gabrielgws" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/gabrielgws/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.instagram.com/gabrielgws/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/Gabrielgws/" target="_blank" rel="noopener noreferrer" ><FaFacebook /></a>
            </ContactRedeSociais>
          </div>
        </ContactContent>
      </ContactContainer>
    </Container>
  );
}