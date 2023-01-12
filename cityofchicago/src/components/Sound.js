import React from "react";
import { useState } from "react";
import "./Button.css";

function Sound() {
  const [music, setMusic] = useState(false);

  function playSound() {
    if (music === false) {
      document.getElementById("soundPlay").play();
      setMusic(true);
    } else {
      document.getElementById("soundPlay").pause();
      setMusic(false);
    }
  }
  return (
    <div className="sound-container">
      <audio id="soundPlay" autoPlay>
        <source src="/audio/mainPage.ogg" type="audio/ogg" />
        <source src="/audio/mainPage.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <button
        className="btn btn--outline btn--medium left--position"
        onClick={playSound}
      >
        {" "}
        {/* <i className={music ? "Stop" : "fab fa-react"} /> */}
        <i className={music ? "fas fa-volume-mute" : "fas fa-volume-up"} />
      </button>
    </div>
  );
}

export default Sound;
