import React from "react";
import Sidebar from "../Sidebar";
import SlideShow from "./SlideTreinamento2";

function PaginaTreinamento2() {
  return (
    <Sidebar>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <SlideShow />
      </div>
    </Sidebar>
  );
}

export default PaginaTreinamento2;
