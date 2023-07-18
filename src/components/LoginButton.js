import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    console.log(process.env.REACT_APP_AUTH0_DOMAIN)
    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>
                    Login
            </button>
        )
    )
}

export default LoginButton