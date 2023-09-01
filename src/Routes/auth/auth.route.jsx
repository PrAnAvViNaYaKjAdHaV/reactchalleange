/** @format */

import { Container, Details } from './auth.style';
import Button, {
    BUTTON_TYPE_CLASSES,
} from '../../components/button/button.components';
import { AuthContext } from '../../store/auth.context';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
// password = t3stP@ssw0rd
//userName =  testLogin
export default function Authentication() {
    const Authcontext = useContext(AuthContext);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const { state, dispatch } = Authcontext;
    const handleLogin = async () => {
        if (username === null && password === null) return;
        const Login = await axios.get(
            `https://run.mocky.io/v3/0b140ce8-5cf9-414f-bbda-06965e6d728d?username=${username}&password=${password}`
        );
        if (username !== 'testLogin' && password !== 't3stP@ssw0rd') {
            setError(true);
            return;
        }

        setError(false);
        dispatch({ type: 'Login', payload: Login.data.auth });
        sessionStorage.setItem('auth', Login.data.auth);
    };
    return (
        <>
            {state.userAuth !== null ? (
                <Navigate to="/" />
            ) : (
                <Container>
                    <h1>Login Page</h1>
                    <Details>
                        <input
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && (
                            <p>Error:check your username and password and try again</p>
                        )}
                        <Button
                            buttonType={BUTTON_TYPE_CLASSES.register}
                            onClick={() => handleLogin()}>
                            Login
                        </Button>
                    </Details>
                </Container>
            )}
        </>
    );
}
