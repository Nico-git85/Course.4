import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="http://infoap.ro/imagini/iap_logo.png"
              height="30"
              width="62"
              className="d-inline-block align-top"
              alt=" "
            />{" "}
            Categoria: {this.props.categorie}
          </a>
          <span className="navbar-text">
            Număr cărți: <span className="badge badge-success">4</span>
          </span>
        </div>
      </nav>
    );
  }
}

export default Nav;
