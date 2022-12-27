import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const Login = () => {
   
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
      
    const { login,providerLogin } = useContext(AuthContext);
    
    const navigate = useNavigate();
    
       
    const googleProvider = new GoogleAuthProvider();
    
    const handleGoogleSignIn = () => {
        providerLogin (googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user.email);
                setLoginUserEmail(user.email);
              
                // saveUser(user.uid,user.email,role);
        })
        .catch(error => console.error(error))
    }
    
    
    
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setLoginError('');
        console.log(email,password)
        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(email);
            navigate('/');
        })
        .catch(error => {
            console.error(error)
            setLoginError(error.message);
        });
    }

    return (
        <div>
            <form onSubmit={handleLogin} className='w-2/4 mx-auto'>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-xl text-left font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required/>
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-left text-xl font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required/>
                </div>
                <div class="flex items-start mb-6">
                   <p>Already have an account click <Link className='underline text-blue-600' to="/signup">here</Link></p>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            <button onClick={handleGoogleSignIn} type="button" className="my-6 text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                Sign in with Google
            </button>    
        </div>
    );
};

export default Login;