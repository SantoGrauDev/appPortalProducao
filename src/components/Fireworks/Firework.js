import { useRef } from "react";
import { Button } from "semantic-ui-react";

import { Fireworks } from "@fireworks-js/react";

export default function Firework() {
  const ref = useRef(null);

  const toggle = () => {
    if (!ref.current) return;
    if (ref.current.isRunning) {
      ref.current.stop();
    } else {
      ref.current.start();
    }
  };

  return (
    <>
      <div
        style={{ display: "flex", gap: "4px", position: "absolute", zIndex: 1 }}
      >
        <Button style={{ margin: "1rem" }} color="red" onClick={() => toggle()}>
          Clique para desligar os fogos
        </Button>
      </div>
      <Fireworks
        ref={ref}
        options={{ opacity: 0.5 }}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          background: "transparent",
        }}
      />
    </>
  );
}
