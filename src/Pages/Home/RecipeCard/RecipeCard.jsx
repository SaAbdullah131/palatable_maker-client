/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const RecipeCard = ({ recipe, notify }) => {
    const { recipe_name, ingredients, cooking_method ,rating } = recipe;

    const [isClicked, setIsClicked] = useState(false);


    return (
        <div>
            <div className="card w-full h-full bg-violet-50 shadow-xl border-s border-e border-4 border-indigo-700">
                <div className="card-body flex-grow-0">
                    <h2 className="card-title text-2xl text-cyan-900 font-bold">{recipe_name}</h2>
                    <ul className="list-image-checkmark list-inside">
                        {
                            ingredients.map(ingredient => <li key={ingredient} >{ingredient}</li>)
                        }
                    </ul>
                    <p><span className='font-bold'>Cooking Method:</span> {cooking_method}</p>
                    <div>
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={Math.round(rating)}
                            readOnly
                        ></Rating>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => {
                            notify();
                            setIsClicked(true);
                        }} className='btn border-0 rounded-full bg-violet-600 text-white hover:bg-orange-500' disabled={isClicked}><FaHeart className='text-2xl '></FaHeart></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;