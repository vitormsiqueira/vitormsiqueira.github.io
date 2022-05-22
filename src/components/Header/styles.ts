import styled from 'styled-components';

export const Container = styled.div`
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;

    z-index: 1;
    position: fixed;
    height: 95px;
    width: 100%;

    border-bottom: 1px solid  #20245C;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;

    height: 100%;
    
    box-sizing: border-box;
    padding: 20px;    
`;

export const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    height: 100%;

    background: rgba(27, 30, 74, 0.4);
    backdrop-filter: blur(8px);
    -webkit-filter: blur(8px);
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 250px;

    z-index: 1;

    h1{
        padding-left: 15px;
        color: #fff;
        font-family: 'Poppins';
        font-style: normal;
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0.01em;
    }
`;


export const Sections = styled.div`
    display: flex;
    align-items: center;
    width: 700px;
    justify-content: space-around;

    z-index: 1;

`;

export const TitleSection = styled.h1<{ active: boolean }>`
    color: #fff;
    opacity:${props => props.active ? '1' : '0.4'};
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.015em;

    margin: 10px;

    :hover{
        opacity: 1;
        cursor: pointer;
    }
`;

export const Config = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    justify-content: end;

    z-index: 1;

    svg{
        padding: 10px;
        cursor: pointer;
        margin: 5px 10px;
        border: 1px solid transparent;

    }

    svg:hover{
        background-color: rgba(27, 30, 74, 1);
        border-radius: 14px;
        border: 1px solid #20245C;
    }
`;