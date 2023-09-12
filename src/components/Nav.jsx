import React from "react";
import App from "../App";
const Nav = (item) =>
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand bold" href="#"><button className="title-text" onClick={() => item.handleShow(false)} >Fashionova.com</button></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <div classNameName="buttons">
        <button type="button" class="btn btn-outline-success" onClick={() => item.handleShow(true)}>Cart {item.count}</button>
      </div>
    </div>

  </div>
</nav>
        </div>
    );
}
export default Nav;