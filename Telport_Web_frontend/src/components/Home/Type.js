import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "thanks for join us ",
          "share your local host with TelePort.me system",
          "download the desktop app ",
          "Then follow  steps to share your locallhost and get the url ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        
      }}
    />
  );
}

export default Type;
