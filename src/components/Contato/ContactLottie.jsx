import React, { useEffect } from 'react';
import { ContactLottieContainer } from './styles';

/*Lotties*/
import lottie from 'lottie-web';
import contactLottie from '../../../public/lottie/contact.json';

export default function ContactLottie() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#contact-lottie"),
      animationData: contactLottie,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  },[])
  return (
    <ContactLottieContainer>
      <div>
        <div id="contact-lottie" />
      </div>
    </ContactLottieContainer>
  );
}