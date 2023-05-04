import React, { useContext, useState } from 'react';
import LoginImage from '../../assets/Login/login.gif'
import { Link } from 'react-router-dom';
import { FaGoogle,FaGithub} from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import app from '../../Authentication/firebase.config';

const auth=getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

const Login = () => {
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');

    const {logIn,googleLogin,githubLogin}=useContext(AuthContext);

    const handleLogInSubmit =(event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        setError('');
        setSuccess('');
        logIn(email,password)
        .then(result=> {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            setSuccess('Login Successful');
            form.reset();
        })
        .catch(error=>{
            const errorMessage = error.code;
            if(errorMessage == 'auth/wrong-password') {
                setError('Password Does not Match');
            } else {
                setError('Invalid Email Address');
            }
            form.reset();
        })
    }
    // login with Google 

    const handleLoginWithGoogle =(event) =>{
        event.preventDefault();
        //signInWithPopup(auth,googleProvider)
        googleLogin()
        .then(result=> {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=> {
            setError(error.code);
        })
    }
    // login with Github
    const handleGithubLogin = (event) => {
        event.preventDefault();
       githubLogin()
        .then(result=> {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            setError(error.code);
        })
    }
    return (
        <div>
             <h4 className='text-center mt-10 p-2 text-3xl font-bold'>Please Login !!</h4>
            <div className="hero min-h-screen bg-base-100 ">
                <div className="hero-content sm:flex flex-col md:flex-row">
                    <div className="card flex-shrink-0 w-[600px] h-[550px] max-w-sm shadow-2xl bg-base-100 border border-indigo-400">
                        <form onSubmit={handleLogInSubmit} className="card-body flex-grow-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Email" className="input input-bordered"required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter Your password" className="input input-bordered" required/>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='flex-grow-0 text-success font-semibold text-lg text-center'>{success}</p>
                            <p className='font-semibold flex-grow-0'>New in PalatableMaker ? <Link to='/register' className='text-blue-400 font-semibold'>Register</Link></p>
                            <p className='text-red-500 font-md flex-grow-0 mb-0 text-center text-lg font-semibold'>{error}</p>
                        </form>
                        <div className='mt-1 mx-5'>
                                <div className='flex justify-center items-center outline-indigo-300 outline p-1 gap-2 bg-primary rounded font-lg tex-white mb-2 mt-6'>
                                    <FaGoogle className='h-[40px] w-[40px]'></FaGoogle>
                                    <button onClick={handleLoginWithGoogle} className='text-white font-semibold'>Login With Google</button>
                                </div>
                                <div className='flex justify-center items-center outline-indigo-300 outline p-1 gap-2 bg-primary rounded font-lg tex-white mt-5'>
                                    <FaGithub className='h-[40px] w-[40px]'></FaGithub>
                                    <button onClick={handleGithubLogin} className='text-white font-semibold'>Login With Github</button>
                                </div>
                        </div>
                    </div>
                    <img className='w-50' src={LoginImage} alt="" />
                </div>
            </div>
           
        </div>
    );
};

export default Login;