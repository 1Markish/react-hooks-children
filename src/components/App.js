import React from "react";
import Container from "./Container";
import Image from "./Image"
import Example from "./Example"

function App() {
  return (
    <div className="App">
      <Container header="Example header" direction="horizontal">
        <Example/>
        <Example/>
        <Example/>
        <Example/>
        <Example/>
        <Example/>
        <Example/>
      </Container>
      <Container header="Example header" textPosition="center">
        <Image/>
        <Image/>
        <Image/>
        <Image/>
        
      </Container>
    </div>
  );
}

export default App;
