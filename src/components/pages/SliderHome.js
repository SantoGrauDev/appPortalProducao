import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "../../components/SliderHome.module.css";
import SlideHome from "./PaginasTreinamento/ImagensHome";

const PropriedadesSlide = {
  duration: 3000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const SlideshowHome = () => {
  return (
    <div className={styles.containerSliderHome}>
      <Slide {...PropriedadesSlide} easing="ease">
        {SlideHome.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              <div
                style={{
                  height: "520px",
                  backgroundImage: `url(${SlideHome[index]})`,
                }}
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

export default SlideshowHome;
