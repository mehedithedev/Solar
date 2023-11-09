import { StyledMain, StyledSection, StyledH2, StyledP, StyledImg, StyledUl, StyledLi, StyledButton } from './Styles/MainStyles.jsx';

const Main = () => {
    return (
        <StyledMain>
            <StyledSection>
                <StyledH2>About Us</StyledH2>
                <StyledP>We are a company that offers crypto mining using solar energy. Our mission is to provide sustainable and eco-friendly solutions for the crypto mining industry.</StyledP>
                <StyledP>Our team of experts has developed a unique system that harnesses the power of the sun to mine cryptocurrencies such as Bitcoin, Ethereum, and more.</StyledP>
                <StyledImg src="https://images.unsplash.com/photo-1606785483716-4d9e9a5e9c1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29sYXIlMjBwYW5lbHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Solar panels" />
            </StyledSection>
            <StyledSection>
                <StyledH2>Why Solar Crypto Mining?</StyledH2>
                <StyledP>Traditional crypto mining requires a lot of energy, which can be harmful to the environment. By using solar energy, we reduce our carbon footprint and help create a more sustainable future.</StyledP>
                <StyledP>Our solar panels are designed to capture the maximum amount of sunlight, which allows us to mine cryptocurrencies more efficiently and at a lower cost.</StyledP>
                <StyledImg src="https://images.unsplash.com/photo-1621574532237-8d9c3f4f7c4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Yml0Y29pbiUyMGluZG9uZXNpYXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Bitcoin" />
            </StyledSection>
            <StyledSection>
                <StyledH2>Our Services</StyledH2>
                <StyledP>We offer a range of services to help you get started with crypto mining using solar energy. Our team of experts will work with you to design a customized solution that meets your specific needs.</StyledP>
                <StyledUl>
                    <StyledLi>Consulting services</StyledLi>
                    <StyledLi>System design and installation</StyledLi>
                    <StyledLi>Maintenance and support</StyledLi>
                </StyledUl>
                <StyledImg src="https://images.unsplash.com/photo-1621574532237-8d9c3f4f7c4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Yml0Y29pbiUyMGluZG9uZXNpYXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Solar panels" />
            </StyledSection>
            <StyledSection>
                <StyledH2>Get Started</StyledH2>
                <StyledP>Interested in mining cryptocurrencies using solar energy? Contact us today to learn more about our services and how we can help you get started.</StyledP>
                <StyledButton>Contact Us</StyledButton>
            </StyledSection>
        </StyledMain>
    );
};

export default Main;