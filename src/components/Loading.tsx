import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import logoAnimate from "../img/logo-animate.svg";

/**
 * Keyframe animation for fade-in effect using styled-components.
 */
const fadeInAnimations = keyframes`${fadeIn}`;

/**
 * Styled component for applying the fade-in animation.
 */
const FadeInDiv = styled.div`
  animation: 3s ${fadeInAnimations};
`;

/**
 * Loading component that displays an animated logo and redirects to the home page.
 *
 * @returns JSX.Element - The rendered loading component.
 */
function Loading() {
  const navigate = useNavigate();

  // State to track animation completion
  const [animation, setAnimation] = useState(false);

  // Trigger animation after 3.5 seconds
  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 3500);
  }, []);

  // Redirect to the home page once animation is complete
  useEffect(() => {
    if (animation) {
      navigate("/home");
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
