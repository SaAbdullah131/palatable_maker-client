import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
            <div className="navbar bg-violet-300 mt-3 flex justify-between rounded-md">
                <div className='ml-3'>
                    <Link to='/'><span className='font-bold text-2xl text-green-100'>Palatable</span><span className='font-semibold text-2xl text-indigo-400'>Maker</span></Link>
                </div>
                <div>
                    <Link className='mr-5 text-blue font-bold' to='/'>Home</Link>
                    <Link className='ml-5 text-blue font-bold' to='/blog'>Blog</Link>
                </div>
                
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <button className='font-bold bg-violet-600 text-white rounded-xl py-3 px-8'>Login</button>
                </div>
            </div>
    
    );
};

export default NavigationBar;