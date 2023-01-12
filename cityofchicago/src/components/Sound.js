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
      <button class="btn btn--outline btn--medium left--position" onClick={playSound}>
        {" "}
        {music ? "Stop" : "Play"}
      </button>
    </div>
  );
}

export default Sound;
