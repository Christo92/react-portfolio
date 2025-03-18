import { useState, useEffect } from "react";
// Remote packages
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
// Svg
import logoAnimate from "../img/logo-animate.svg";

// Styled-components
const fadeInAnimations = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 3s ${fadeInAnimations};
`;

function Loading() {
  const navigate = useNavigate();

  // Hooks state
  const [animation, setAnimation] = useState(false);

  // Animation Writing
  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 3500);
  }, []);

  // Redirect to home page
  useEffect(() => {
    if (animation) {
      navigate("/home"); // Remplace <Redirect to="/home" />
    }
  }, [animation, navigate]);

  return (
    <div className="loading">
      <div className="loading__container">
        <FadeInDiv>
          <img src={logoAnimate} className="loading__logo" alt="logo-loading" />
        </FadeInDiv>
      </div>
    </div>
  );
}

export default Loading;
