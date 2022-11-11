import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <section className="phonetics-audio">
          <ReactAudioPlayer src={props.phonetic.audio} controls />
          <h3>{props.phonetic.text}</h3>
        </section>
      </div>
    );
  } else {
    return (
      <div className="Phonetics">
        <section className="phonetics-audio">
          <h3>{props.phonetic.text}</h3>
        </section>
      </div>
    );
  }
}
