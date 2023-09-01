
import { Container, FooterLinks, FooterElement, FooterInfo, SocialMedia, ProfetionalMedia } from "./footer.style"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.components"
import Location from '../../assets/WhiteLocation.svg'
import Facebook from '../../assets/facebook.svg'
import Linkedin from '../../assets/linkedin.svg'
import Twitter from '../../assets/twitter.svg'
import Instagram from '../../assets/instagram.svg'
import EmailVector from '../../assets/EmailVector.svg'
import PhoneVector from '../../assets/PhoneVector.svg'
export default function Footer() {
    return (
        <Container>
            <FooterLinks>
                <FooterElement>
                    <p>BUY & SELL</p>
                    <ul>
                        <li>Sell</li>
                        <li>Browse Home</li>
                        <li>Cash Offer</li>
                        <li>Buy</li>
                        <li>New Construction</li>
                        <li>Pricing</li>
                        <li>Down Payment</li>
                    </ul>
                </FooterElement>
                <FooterElement>
                    <p>INVESTMENT</p>
                    <ul>
                        <li>Co-Investment</li>
                        <li>Partnership Buying</li>
                    </ul>
                </FooterElement>
                <FooterElement>
                    <p>COMPANY</p>
                    <ul>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Vendors</li>
                        <li>Careers</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </FooterElement>
                <FooterElement>
                    <p>LEARN</p>
                    <ul>
                        <li>Seller FAQs</li>
                        <li>Contact Us</li>
                        <li>Buyer FAQs</li>
                        <li>Blogs</li>
                        <li>Mortgage Calculator</li>
                    </ul>
                </FooterElement>
                <FooterElement>
                    <p>LOCATIONS</p>
                    <ul>
                        <li>Greater Toronto Area</li>
                        <li>Region of Peel</li>
                        <li>Region of Hamilton</li>
                        <li>Region of Waterloo</li>
                        <a href="">View All Locations</a>
                        <Button buttonType={BUTTON_TYPE_CLASSES.register}>
                            <img src={Location} />
                            <p>Map Search</p>
                        </Button>
                    </ul>
                </FooterElement>
            </FooterLinks>
            <FooterInfo>
                <h1>CONTACT US</h1>
                <SocialMedia>
                    <img src={Facebook} />
                    <img src={Twitter} />
                    <img src={Linkedin} />
                    <img src={Instagram} />
                </SocialMedia>
                <ProfetionalMedia>
                    <img src={PhoneVector} alt="" />
                    <p>905-567-0200</p>
                </ProfetionalMedia>
                <ProfetionalMedia>
                    <img src={EmailVector} alt="" />
                    <p>info@redbuyers.com</p>
                </ProfetionalMedia>
                <p>© 2021 redbuyers.com. All rights reserved.</p>
                <p>RedBuyers Realty. Brokerage, is fully registered under the Real Estate and Business brokerage, Act, 2002 of Ontario.</p>
            </FooterInfo>
        </Container>
    )
}
