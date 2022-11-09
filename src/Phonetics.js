import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  console.log(props.phonetic);

  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <ReactAudioPlayer src={props.phonetic.audio} controls />
        <h3>{props.phonetic.text}</h3>
      </div>
    );
  } else {
    return (
      <div className="Phonetics">
        <h3>{props.phonetic.text}</h3>
      </div>
    );
  }
}
