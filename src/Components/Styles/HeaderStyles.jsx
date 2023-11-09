import styled from 'styled-components';

export const Nav = styled.nav`
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9));
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
`;

export const Li = styled.li`
    color: white;
    cursor: pointer;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
        color: rgba(255, 255, 255, 0.7);
        transform: scale(1.1);
    }
`;