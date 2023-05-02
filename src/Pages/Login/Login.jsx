import React from 'react';
import LoginImage from '../../assets/Login/login.gif'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
             <h4 className='text-center mt-10 p-2 text-3xl font-bold'>Please Login !!</h4>
            <div className="hero min-h-screen bg-base-100 ">
                <div className="hero-content flex">
                    <div className="card flex-shrink-0 w-[600px] h-[550px] max-w-sm shadow-2xl bg-base-100 border border-indigo-400">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter Your password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className='font-semibold'>New in PalatableMaker ? <Link to='/register' className='text-blue-400 font-semibold'>Register</Link></p>
                            <div>
                                <img  alt="" />
                                <button className='outline-indigo-400 outline p-2'>Login With Google</button>
                            </div>
                            <hr></hr>
                            
                        </div>
                    </div>
                    <img className='w-50' src={LoginImage} alt="" />
                </div>
            </div>
           
        </div>
    );
};

export default Login;