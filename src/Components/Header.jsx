// Header.jsx

import { Nav, Ul, Li } from './Styles/HeaderStyles';

const Header = () => {
    return (
        <Nav>
            <Ul>
                <Li>Home</Li>
                <Li>About</Li>
                <Li>Services</Li>
                <Li>Contact</Li>
            </Ul>
        </Nav>
    );
};

export default Header;