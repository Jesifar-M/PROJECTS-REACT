import React from "react";

function LightSwitch({ isBright, toggleLight }) {
  return (
    <button onClick={toggleLight}>
      {isBright ? "Turn OFF" : "Turn ON"}
    </button>
  );
}

export default LightSwitch;