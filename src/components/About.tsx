import styled, { keyframes } from "styled-components";
import { fadeIn, zoomIn } from "react-animations";
import Header from "./Header";

/**
 * Animations for styled-components
 */
const fadeInAnimations = keyframes`${fadeIn}`;
const zoomInAnimations = keyframes`${zoomIn}`;

/**
 * Component that applies a fade-in animation
 */
const FadeInDiv = styled.div`
  animation: 4s ${fadeInAnimations};
`;

/**
 * Component that applies a zoom-in animation
 */
const ZoomInDiv = styled.div`
  animation: 3s ${zoomInAnimations};
`;

/**
 * About component that describes professional experience, skills, and contact info.
 * @returns JSX Element
 */
function About() {
  return (
    <div className="about">
      <FadeInDiv>
        <Header key="1" />
      </FadeInDiv>

      <ZoomInDiv>
        <div key="1" className="about__container">
          <div className="about__presentation">
            <h2 className="about__title">À propos</h2>
            <p className="about__text">
              Je suis développeur Front End ReactJS. <br />
              Le web m’a toujours intéressé depuis que je suis petit. Après
              m’être intéressé aux logiciels de design comme Photoshop,
              Illustrator et Sketch, j’ai décidé de me tourner vers les lignes
              de code. Le front-end m’a toujours attiré.
            </p>

            <p className="about__text">
              C’est tout naturellement que j'ai suivi une carrière dans ce
              domaine. Titulaire d'un Bachelor Web de Hetic, j'ai travaillé
              pendant 2 ans en alternance chez Smart-Tribune (conception de FAQ
              intégrées sous forme de module sur des sites en JS/PHP, et vers la
              fin de mon alternance, j'ai fait une conversion progressive vers
              ReactJS). Ensuite, j'ai passé 3 ans chez Cityscoot en tant que
              développeur React/React Native. Là-bas, j'ai pu travailler sur la
              refonte de projets internes en ReactJS et effectuer la refonte de
              l’application mobile (refactoring, clean code, Typescript,
              utilisation de Jira pour les tickets, SCRUM, Ft team...). Ma
              dernière expérience professionnelle s’est déroulée au sein d’une
              start-up du secteur douanier, où j’ai travaillé avec ReactJS,
              Jest, React-query, Typescript, SCRUM et SOLID.
            </p>

            <p className="about__text">
              Je suis actuellement en recherche de CDI (dévéloppeur Front-End
              ReactJS).
            </p>
          </div>
          <div className="about__skills">
            <h2 className="about__skills-title">Compétences</h2>
            <div className="about__list-skills">
              <p className="about__list-title">- En Front :</p>
              <div>
                <p>JavaScript</p>
                <p>CSS/SASS</p>
                <p>BEM</p>
                <p>Material UI</p>
                <p>Tailwind CSS</p>
                <p>React JS</p>
                <p>Next.js</p>
                <p>React Query</p>
                <p>Redux</p>
                <p>Redux Toolkit</p>
                <p>TypeScript</p>
                <p>React Testing Library</p>
                <p>Storybook</p>
                <p>Git</p>
                <p>Méthode Agile</p>
              </div>
            </div>
          </div>
          <div className="about__contact">
            <h2 className="about__contact-title">Contact</h2>
            <p className="about__contact-sentence">
              Vous pouvez me contactez via mon email ou mon linkedin !
            </p>
            <div className="about__contact-info">
              <p>christopher.loubassou@gmail.com</p>
              <a
                className="about__linkedin"
                href="https://www.linkedin.com/in/christopherloubassou/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Christopher Loubassou
              </a>
            </div>
          </div>
        </div>
      </ZoomInDiv>
    </div>
  );
}

export default About;
