import React from "react";
import "../style/Welcome.css";
import Car from "../hooks/Car";
import About from "./About";
import CarouselB from "../Components/Carousel/CarouselB";
import Memory from "./Memory/Memory";
import reflexion from "../img/reflexion.gif";
const Welcome = ({ element }) => {
  return (
    <main>
      <section className="welcome">
        <div ref={element} className="container">
          <div className="logoPosi">
            {" "}
            <img src={reflexion} className="logo" alt="." />
          </div>{" "}
          <h2 className="description">
            Je me présente .<br /> Je suis Professeur Robot.
            <br /> Je suis votre professeur particulier.
            <br /> Ensemble, nous allons apprendre à parler et à écrire en
            français.
          </h2>
          <p className="description3">
            « J’apprends le français avec professeur robot » est un nouveau site
            <br />
            dédié à tous ceux qui désirent apprendre à parler, à lire et à
            écrire.
          </p>
          <p className="description2">
            Que vous soyez, enseignants, parents ou élèves, vous trouverez
            <br /> ici toutes les ressources qui vous sont nécessaires
            <br /> sous forme de fiches, d’exercices, de jeux, d’évaluations…{" "}
            <br />
            Elles sont libres d’accès après inscription. <br />
            Mais surtout, vous pourrez commander les supports principaux : mes
            cahiers d’activités en PDF.
            <br /> Ma devise est : apprendre grâce à des livres simples, claires
            et ludiques.
          </p>
          <p className="description2">
            Les cahiers d’activités, conformes au nouveau programme disponibles
            :<br /> • 3AP avec les vidéos explicatives : apprentissage de la
            lecture
            <br /> • 4AP exercices, leçons, évaluations, jeux… <br />• 5AP
            exercices et leçons…. <br />• 5AP études de textes
          </p>
          <p className="description2">
            Les cahiers d’activités de FLE disponibles :<br /> • FLE enfants
            grands débutants A1- partie 1<br /> • FLE enfants grands débutants
            A1- partie 2<br /> • FLE enfants grands débutants A1- partie 3
          </p>
          <p className="description2">
            Le but que l'on se fixe: Apprendre ensemble, jour après jour.
            <br /> Pour les grands débutants, nous allons commencer par
            l'apprentissage de la lecture. Puis, nous allons progressez pas à
            pas, <br /> jusqu'à ce que vous sachiez parler français
          </p>
        </div>
      </section>
      <Car />
      <About />
      <About />
      <Memory />
      <CarouselB />
    </main>
  );
};

export default Welcome;
