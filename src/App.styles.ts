import styled from "styled-components";
import logoBack from './svgs/logo-vms-gradient.svg';


export const Container = styled.div`
margin: 0;
    padding: 0;
`;

export const SectionPage = styled.div`
    
    background: radial-gradient(50% 50% at 50% 50%, #1B1E4A 9.99%, #111338 77.6%);
`;

export const Home = styled.div`
    background-image: url(${logoBack});
    background-position: right;
    background-repeat: no-repeat;
    color: #ffff;
    min-height: 100vh;    
`;

export const Title = styled.div`
    max-width: 1200px;
    min-width: 920px;
    height: 380px;
    position: absolute;
    top: 95px; // header size
    bottom: 95px;
    left: 0;
    right: 0;
    margin: auto;

    padding: 20px;

    .work{
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 100px;
        line-height: 124px;

        color: #fff;
        opacity: 0.7;
    }

    .poppins{
        font-family: 'Poppins';

        font-style: normal;
        font-weight: 700;
        font-size: 100px;
        line-height: 124px;
        letter-spacing: 0.015em;
    }

`;
