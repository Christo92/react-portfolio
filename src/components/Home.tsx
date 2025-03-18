import { Link } from 'react-router-dom';
// Component
import Header from './Header';
import TypeWritter from './TypeWritter';
import Footer from './Footer';
// Third packages
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

// Styled-components
const fadeInAnimations = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
    animation: 1s ${fadeInAnimations}
`;

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
