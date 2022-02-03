import React, { useEffect } from 'react';
import { RedesSociaisContainer } from './styles';

/*Lotties*/
import lottie from 'lottie-web';
import githubLottie from '../../../public/lottie/github.json';
import facebookLottie from '../../../public/lottie/facebook.json';
import instagramLottie from '../../../public/lottie/instagram.json';
import linkdinLottie from '../../../public/lottie/linkdin.json';

export default function RedesSociais() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#github-logo"),
      animationData: githubLottie,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  },[])

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#facebook-logo"),
      animationData: facebookLottie,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  },[])

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#instagram-logo"),
      animationData: instagramLottie,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  },[])

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#linkdin-logo"),
      animationData: linkdinLottie,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  },[])
  return (
    <RedesSociaisContainer>
      <div className="redes-sociais-ap">
        <a href="https://github.com/gabrielgws" target="_blank" rel="noopener noreferrer"><div id="github-logo" className="redes-sociais" /></a>
        <a href="https://www.linkedin.com/in/gabrielgws/" target="_blank" rel="noopener noreferrer"><div id="linkdin-logo" className="redes-sociais"/></a>
        <a href="https://www.instagram.com/gabrielgws/" target="_blank" rel="noopener noreferrer"><div id="instagram-logo" className="redes-sociais"/></a>
        <a href="https://www.facebook.com/Gabrielgws/" target="_blank" rel="noopener noreferrer"><div id="facebook-logo" className="redes-sociais"/></a>
      </div>
    </RedesSociaisContainer>
  );
}