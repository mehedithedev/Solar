// FooterStyles.jsx

import styled from 'styled-components';

export const Footer = styled.footer`
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9));
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
`;

export const IconLink = styled.a`
    color: #fff;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
        color: rgba(255, 255, 255, 0.7);
    }
`;

export const NewsletterForm = styled.form`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

export const EmailInput = styled.input`
    padding: 10px;
    border: none;
    border-radius: 5px;
`;

export const SubscribeButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: #444;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #333;
    }
`;

export const Copyright = styled.p`
    color: #aaa;
    font-size: 14px;
`;