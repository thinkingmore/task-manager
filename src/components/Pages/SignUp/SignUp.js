import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState('');

    const {createUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    
    const handleSignUp = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(res=>{
                const user = res.user;
                console.log(user);
                form.reset();
               
            })
            
            .catch(error =>{
                console.error(error)
                setError(error.message)
            });
            
            navigate(from, {replace:true});

    }

    return (
        <div>
            <h2 className='text-2xl mb-6'>Please Sign Up</h2>
            <form onSubmit={handleSignUp}  className='w-2/4 mx-auto'>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-xl text-left font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required/>
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-left text-xl font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required/>
                </div>
                <div class="flex items-start mb-6">
                   <p>Already have an account click <Link className='underline text-blue-600' to="/login">here</Link></p>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>         
        </div>
    );
};

export default SignUp;