// MainStyles.jsx

import styled from 'styled-components';

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #ccc; // light grey text
    background: #333; // dark grey background
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-width: 100vh;
`;

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;
    max-width: 980px;
`;

export const StyledH2 = styled.h2`
    font-size: 50px;
    color: #ccc; // light grey text
    margin-bottom: 20px;
    font-weight: bold;
`;

export const StyledP = styled.p`
    font-size: 20px;
    color: #ccc; // light grey text
    margin-bottom: 20px;
    line-height: 1.6;
`;

export const StyledImg = styled.img`
    width: 100%;
    max-width: 980px;
    height: auto;
    margin-top: 20px;
`;

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const StyledLi = styled.li`
    font-size: 20px;
    color: #ccc; // light grey text
`;

export const StyledButton = styled.button`
    padding: 15px 30px;
    border: 2px solid #ccc; // light grey border
    border-radius: 0;
    background: #333; // dark grey background
    color: #ccc; // light grey text
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s ease, color 0.3s ease;

    &:hover {
        background: #ccc; // light grey background on hover
        color: #333; // dark grey text on hover
    }
`;