import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./SliderTreinamento2.module.css";
import dataTreinamento3 from "./dataTreinamento3";

const PropriedadesSlide = {
  duration: 1000000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const SlideshowEditor = () => {
  return (
    <div style={{ width: "800px" }} className={styles.containerSlider2}>
      <Slide {...PropriedadesSlide} easing="ease">
        {dataTreinamento3.map((slide, index) => {
          return (
            <div className={styles.slide2} key={slide}>
              <div
                style={{ backgroundImage: `url(${dataTreinamento3[index]})` }}
              >
                <span>Slide {index + 1}</span>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default SlideshowEditor;
