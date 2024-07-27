import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const AnimacaoHome = () => {
  return (
    <div className="">
      <Player
        src="https://assets10.lottiefiles.com/private_files/lf30_ikcobyoq.json"
        className="player"
        style={{
          padding: "5px 5px",
          margin: "-100 0 0 0",
          width: "120px",
          height: "90px",
        }}
        loop
        autoplay
        speed={1}
        //da para controlar a velocidade por meio de speed={10},
        //ou background background='red' ou direção por direction={-1}, ou inserir style inline
      />
    </div>
  );
};

export default AnimacaoHome;
