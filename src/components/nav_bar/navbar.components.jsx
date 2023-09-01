/** @format */

import BurgerMenue from '../../assets/burgermenue.svg';
import Logo from '../../assets/Logo.svg';
import {
    Container,
    LogoContainer,
    Navigation,
    Nav,
    Authentication,
    AuthLink,
} from './navbar.style';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.components';
import { useState } from 'react';
import Menue from '../menue/menue.component';
import { AuthContext } from '../../store/auth.context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [menue, setMenue] = useState(false);
    const auth = useContext(AuthContext);
    const { state, dispatch } = auth;
    const handlelogout = () => {
        dispatch({ type: 'Login', payload: null });
    };
    return (
        <Container>
            <Menue
                menue={menue}
                setMenue={setMenue}
            />
            <LogoContainer>
                <img
                    src={BurgerMenue}
                    alt=""
                    className="burggermenue"
                    onClick={() => setMenue(!menue)}
                />
                <Link to='/'>
                    <img
                        src={Logo}
                        alt=""
                        className="logo"
                    />
                </Link>
            </LogoContainer>
            <Navigation>
                <Nav href="/sell">Sell</Nav>
                <Nav href="/buy">Buy</Nav>
                <Nav href="/contactus">Contact us</Nav>
            </Navigation>
            <Authentication>
                {state.userAuth ? (
                    <Button onClick={handlelogout}>Logout</Button>
                ) : (
                    <Button>
                        <AuthLink to="/login">Login</AuthLink>
                    </Button>
                )}

                <Button
                    buttonType={BUTTON_TYPE_CLASSES.register}
                    type="button">
                    Register
                </Button>
            </Authentication>
        </Container>
    );
}
