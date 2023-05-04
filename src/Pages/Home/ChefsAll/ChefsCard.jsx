/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefsCard = ({ chef }) => {
    const { _id, chef_picture, chef_name, years_of_experience, num_recipes, likes } = chef;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl border-s-4 border-b-4 border-violet-400 border-e-green-400 border-e-4">
                <figure>
                    <img className='h-full w-80' src={chef_picture} alt="Movie" />
                </figure>
                <div className="card-body justify-around">
                    <div>
                        <h2 className="card-title flex flex-col  items-start">
                            <p className='grow-0 text-1xl md:text-3xl font-bold'>{chef_name}</p>
                            <div className="badge badge-md md:badge-lg badge-accent"><FaHeart className='me-1'></FaHeart> {likes}</div>
                        </h2>
                        <div className='mt-4'>
                            <p><span className='font-bold text-blue-600 text-lg'>{years_of_experience}</span> years of experience.</p>
                            <p>Numbers of recipes  <span className='font-bold text-violet-600 text-lg'>{num_recipes}</span>.</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link className='mt-10 w-full btn btn-outline border-2 hover:border-orange-500 border-green-500 rounded-full text-black-600 hover:bg-indigo-500' to={`/chefs/${_id}`}>View Recipes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;