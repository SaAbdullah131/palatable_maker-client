import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-violet-100 text-base-content">
                <div>
                    <span className="text-lg font-bold text-blue">Services</span>
                    <a className="link link-hover">Wedding</a>
                    <a className="link link-hover">Anniversary</a>
                    <a className="link link-hover">Birthday</a>
                    <a className="link link-hover">MeetUp</a>
                </div>
                <div>
                    <span className="text-lg font-bold text-blue">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    
                </div>
                <div>
                    <span className="text-lg font-bold text-blue">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="text-lg font-bold text-blue">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full pr-16" />
                            <button className="btn bg-violet-500 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <hr></hr>
            <p className='text-center bg-indigo-700 text-white py-1 mb-3'>Copyright © 2023 - All right reserved by <span className='text-md font-bold'>SA Abdullah</span></p>
        </div>
    )
};

export default Footer;