import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";


export default function TweetList() {
  return (
    <div>
    <div className="App">
      <h1>Sydney</h1>
      <YoutubeEmbed embedId="4FdlOJicGBk" />
    </div><span></span>
    <div className="App">
      <h1>LA</h1>
      <YoutubeEmbed embedId="Co8Ljb4RLe4" />
    </div>
    <div className="App">
      <h1>Tokyo</h1>
      <YoutubeEmbed embedId="0nTO4zSEpOs" />
    </div>
    <div className="App">
      <h1>Dubai</h1>
      <YoutubeEmbed embedId="jB2Z9PA7iKI" />
    </div>
    </div>
    
  );
}
