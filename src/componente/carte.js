import React, { Component } from "react";
import "./carte.css";

class Carte extends Component {
  render() {
    const { src, alt, titlu, rezumat, autor, pret } = this.props;

    return (
      <div className="media carte-spatiu">
        <img className="mr-3" src={src} alt={alt} />
        <div className="media-body">
          <h5 className="mt-0">{titlu}</h5>
          <p>{rezumat}</p>
          <p>
            {autor}. Preț:{pret} Lei
          </p>
        </div>
      </div>
    );
  }
}

export default Carte;
