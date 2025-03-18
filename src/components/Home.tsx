import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
// Components
import Header from './Header';
import TypeWritter from './TypeWritter';
import Footer from './Footer';

/**
 * Styled-component for fade-in animation.
 */
const fadeInAnimations = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
    animation: 1s ${fadeInAnimations}
`;

/**
 * Home component representing the landing page of the website.
 * Includes a header, a typewriter animation, a navigation link to "About", and a footer.
 */
function Home() {
    return (
        <FadeInDiv>
            <div className="home">
                <Header />
                <TypeWritter />
                <Link to="/about" className="home__to-about"> {'>'} Explorer le site</Link>
                <Footer />
            </div>
        </FadeInDiv>
    );
}

export default Home;
