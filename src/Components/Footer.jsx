// Footer.jsx

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Footer, SocialIcons, IconLink, NewsletterForm, EmailInput, SubscribeButton, Copyright } from './Styles/FooterStyles';

const ModernFooter = () => {
    return (
        <Footer>
            <SocialIcons>
                <IconLink href="https://www.facebook.com"><FaFacebook /></IconLink>
                <IconLink href="https://www.twitter.com"><FaTwitter /></IconLink>
                <IconLink href="https://www.instagram.com"><FaInstagram /></IconLink>
            </SocialIcons>
            <NewsletterForm>
                <EmailInput type="email" placeholder="Enter your email" />
                <SubscribeButton type="submit">Subscribe</SubscribeButton>
            </NewsletterForm>
            <Copyright>Copyright © 2022</Copyright>
        </Footer>
    );
};

export default ModernFooter;