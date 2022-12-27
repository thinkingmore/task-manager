import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../../programming-hero-webb6/good-books-client/src/contexts/AuthProvider/AuthProvider';

const Login = () => {
   
    const [loginError, setLoginError] = useState('');


    const [loginUserEmail, setLoginUserEmail] = useState('');
   


    const { login,providerLogin } = useContext(AuthContext);
    
    const location = useLocation();
    const navigate = useNavigate();
    
    const form = location.state?.form?.pathname || '/';

    
   
    
    const googleProvider = new GoogleAuthProvider();
    
    const handleGoogleSignIn = () => {
        providerLogin (googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user.email);
                setLoginUserEmail(user.email);
                navigate(form, {replace: true})
                // saveUser(user.uid,user.email,role);
        })
        .catch(error => console.error(error))
    }
    
    
    
    const handleLogin = (data) => {
        setLoginError('');
        console.log(data)
        login(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email);         
        })
        .catch(error => {
            console.error(error)
            setLoginError(error.message);
        });
    }

    return (
        <div>
            
        </div>
    );
};

export default Login;