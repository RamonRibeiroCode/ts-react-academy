import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface LinkProps {
  text: string;
}

function Link(props: LinkProps) {
  return <h2>{props.text}</h2>;
}

function App() {
  return (
    <div className="App">
      <Link text="Link 01" />
    </div>
  );
}

export default App;
