import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/Heading_sec/cook.gif'

const Header = () => {
    return (
        <div className='md:flex justify-around items-center mt-5 border-b-3 border-green-900'>
            <div>
                <img className='w-full' src={bannerImg} alt="" />
            </div>
            <div className='flex flex-col items-center md:items-start md:w-1/2'>
                <h2 className='text-5xl font-semibold text-violet-900'>Get to know the  <br />world's top chefs</h2>
                <p className='mt-7 text-xl w-3/4 ps-6 border-s-4 b border-indigo-900'>Where everything yupi touches transforms into something bright, happy, and sweet for as long as it takes to eat a delicious Sour Brite Crawler.</p>
                <div>
                    <Link className='mt-10 btn btn-outline border-2 text-white border-green-500 rounded-full bg-violet-400 hover:bg-indigo-500' to={`/allchefs`}>All Chefs</Link>
                </div>
            </div>
            
        </div>
    );
};

export default Header;