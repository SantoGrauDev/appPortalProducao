import React from "react";
import Sidebar from "../Sidebar";
import SlideshowEditor from "./SlideTreinamento3";

function PaginaTreinamento3() {
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
        <SlideshowEditor />
      </div>
    </Sidebar>
  );
}

export default PaginaTreinamento3;
