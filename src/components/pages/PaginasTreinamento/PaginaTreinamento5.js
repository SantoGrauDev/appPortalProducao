import React from "react";
import Sidebar from "../Sidebar";

function PaginaTreinamento5() {
  return (
    <Sidebar>
      <div
        style={{
          margin: "150px 100px 100px 270px",
          position: "absolute",
        }}
      >
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/vAK8RcXmy3E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Sidebar>
  );
}

export default PaginaTreinamento5;
