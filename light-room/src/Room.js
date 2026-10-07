import React, { useState } from "react";
import LightSwitch from "./LightSwitch";

function Room() {
  const [isBright, setIsBright] = useState(false);

  function toggleLight() {
    setIsBright(!isBright);
  }

  return (
    <div>
      <h1>
        {isBright ? "The room is bright" : "The room is dark"}
      </h1>

      <LightSwitch
        isBright={isBright}
        toggleLight={toggleLight}
      />
    </div>
  );
}

export default Room;