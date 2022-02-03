import React, { useEffect } from 'react';
import { DevContainer } from './styles';

/*Lotties*/
import lottie from 'lottie-web';
import devLottie from '../../../public/lottie/dev.json';

export default function RedesSociais() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#dev-logo"),
      animationData: devLottie,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
  },[])
  return (
    <DevContainer>
      <div>
        <div id="dev-logo" className="redes-sociais" />
      </div>
    </DevContainer>
  );
}