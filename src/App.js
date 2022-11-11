import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="App-logo-bar">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </div>
      <div className="container">
        <header className="App-header">
          <main className="App-main">
            <Dictionary defaultKeyword="sunset" />
          </main>
          <footer className="App-footer">
            <span role="img" aria-label="person">
              🙋🏻‍♀️
            </span>{" "}
            This project was coded by Hiromi Tanimura, and it is{" "}
            <a
              className="App-link"
              href="https://github.com/hiromirhondalee/dictionary-application"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced.
            </a>
          </footer>
        </header>
      </div>
    </div>
  );
}

export default App;
