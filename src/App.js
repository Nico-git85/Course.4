import React from "react";
import logo from "./logo.svg";
import Nav from "./componente/nav";
import Carte from "./componente/carte";
import "./App.css";

function App() {
  const desc = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat.`;

  return (
    <>
      <Nav categorie="Carti pentru copii" />
      <Carte
        src="http://infoap.ro/imagini/harry_potter.png"
        alt="Imagine coperta 1"
        titlu="Harry Potter Si Piatra Filosofala"
        rezumat={desc}
        autor="J.K. Rowling"
        pret="30.32"
      />
    </>
  );
}

export default App;
