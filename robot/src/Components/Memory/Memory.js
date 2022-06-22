import React from "react";
import "../../style/Memory.css";
import "https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js";
const Memory = () => {
  let cartes = document.querySelectorAll(".carte");

  var carteTournee = false;
  var carteUn = "";
  var carteDeux = "";

  var lock = false;

  function tournerLaCarte() {
    if (lock === true) {
      return;
    }
    if (carteUn === this) {
      return;
    }
    this.classList.toggle("retourner");
    if (carteTournee === false) {
      carteUn = this;
      carteTournee = true;
    } else {
      carteDeux = this;
      carteTournee = false;
      validerCartes(carteUn, carteDeux);
    }
  }

  function validerCartes(x, y) {
    console.log("valider Cartes");
    if (x.dataset.framework === y.dataset.framework) {
      carteCorrect(x, y);
    } else {
      lock = true;

      setTimeout(function () {
        retourArriere(x, y);
      }, 1000);
    }
  }

  function carteCorrect(x, y) {
    x.removeEventListener("click", tournerLaCarte);
    y.removeEventListener("click", tournerLaCarte);
  }

  function retourArriere(x, y) {
    lock = false;
    x.classList.toggle("retourner");
    y.classList.toggle("retourner");
  }

  function shuffle() {
    cartes.forEach((x) => {
      x.style.order = Math.floor(Math.random() * 12);
    });
  }
  shuffle();
  cartes.forEach(function (x) {
    x.addEventListener("click", tournerLaCarte);
  });

  return (
    <div>
      <section class="container-memory">
        <div class="carte" data-framework="react">
          <img className="front" src="../../img/1.jpg" alt="img" />
          <img className="back" src="../../img/1.jpg" alt="img" />
        </div>
        <div class="carte" data-framework="react">
          <img className="front" src="../../img/1.jpg" alt="img" />
          <img className="back" src="../../img/1.jpg" alt="img" />
        </div>
        <div class="carte" data-framework="angular">
          <img className="front" src="../../img/1.jpg" alt="img" />
          <img className="back" src="../../img/1.jpg" alt="img" />
        </div>
        <div class="carte" data-framework="angular">
          <img className="front" src="../../img/1.jpg" alt="img" />
          <img className="back" src="../../img/1.jpg" alt="img" />
        </div>
        <div class="carte" data-framework="aurelia">
          <img className="front" src="../../img/1.jpg" alt="img" />
          <img className="back" src="../../img/1.jpg" alt="img" />
        </div>
        <div class="carte" data-framework="aurelia">
          <img className="front" src="../../img/1.jpg" alt="img" />
          <img className="back" src="../../img/1.jpg" alt="img" />
        </div>
        <div class="carte" data-framework="backbone">
          <img className="front" src="../../img/1.jpg" alt="img" />
          <img className="back" src="../../img/1.jpg" alt="img" />
        </div>
        <div class="carte" data-framework="backbone">
          <img className="front" src="../../img/1.jpg" alt="img" />
          <img className="back" src="../../img/1.jpg" alt="img" />
        </div>
        <div class="carte" data-framework="ember">
          <img className="front" src="../../img/1.jpg" alt="img" />
          <img className="back" src="../../img/1.jpg" alt="img" />
        </div>
        <div class="carte" data-framework="ember">
          <img className="front" src="../../img/1.jpg" alt="img" />
          <img className="back" src="../../img/1.jpg" alt="img" />
        </div>
        <div class="carte" data-framework="vue">
          <img className="front" src="../../img/1.jpg" alt="img" />
          <img className="back" src="../../img/1.jpg" alt="img" />
        </div>
        <div class="carte" data-framework="vue">
          <img className="front" src="../../img/1.jpg" alt="img" />
          <img className="back" src="../../img/1.jpg" alt="img" />
        </div>
      </section>
    </div>
  );
};

export default Memory;
