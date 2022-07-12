import React from "react";
import "../style/Navbar.css";
import Logo from "../img/robot.png";
import "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js";
import { Dropdown } from "react-bootstrap";

const Navbar1 = ({ sticky }) => (
  <>
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
      {/* <form>
          <select name='languages'className="navbar--link-item"
                  >
                
            <option value='JAVA'>
              JAVA
            </option>
            <option value='C++'>
              C++
            </option>
            </select></form>
            <form>
          <select name='languages'className="navbar--link-item">
            <option value='JAVA'>
              JAVA
            </option>
            <option value='C++'>
              C++
            </option>
            </select></form> */}
      <div className="dropdown">
        <div className="navbar--logo-holder">
          {sticky ? (
            <img src={Logo} alt="logo" className="navbar--logo" />
          ) : null}
          <h1> Professeur Robot</h1>
          <div className="dropdownTotal">
            <ul className="navbar--link">
              <li className="navbar--link-item">Home</li>
            </ul>
            <Dropdown>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="*">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="*">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="*">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </Dropdown>
            <Dropdown>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="id.dropdown">
                      Regular link
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item active"
                      href="id.dropdown"
                      aria-current="true"
                    >
                      Active link
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="id.dropdown">
                      Another link
                    </a>
                  </li>
                </ul>
              </div>{" "}
            </Dropdown>
            <ul className="navbar--link">
              <li className="navbar--link-item2">About</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </>
);
export default Navbar1;
