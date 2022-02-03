import React from 'react';

import Header from '../components/Header';
import Dev from '../components/Dev';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contato from '../components/Contato';
import Footer from '../components/Footer';

import { Container } from './styles';

export default function Home() {
  const title = '<gabrielgws/>'
  return (
    <>
      <main>
        <title>{title}</title>
      </main>

      <Container>
        <Header />
        <Dev />
        <About />
        <Projects />
        <Skills />
        <Contato />
        <Footer />
      </Container>
    </>
  )
}
