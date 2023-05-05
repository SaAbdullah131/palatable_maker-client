/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 import {RealLazyLoad} from 'real-react-lazyload';
import RecipeCard from '../RecipeCard/RecipeCard';



const ChefsDetails = () => {
    const chef = useLoaderData();


    const { _id, chef_picture, chef_name, bio, years_of_experience, num_recipes, likes, recipes, banner_img } = chef;

    // toast notification
    const notify = () => toast.success('The recipe is your favorite 🎀', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    // scroll the horizontal 0 and vertical 0.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='mt-3'>

            <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: `url("${banner_img}")` }}>
                <div className="hero-overlay  bg-opacity-90 rounded-lg"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className="avatar ">
                            <div className="w-80 rounded-full">
                                <RealLazyLoad height={300} width={200}> 
                                    <img src={chef_picture} /> 
                                </RealLazyLoad>
                                {/* <img src={chef_picture} /> */}
                            </div>
                        </div>
                        <div>
                            <h1 className="mb-5 text-5xl font-bold">{chef_name}</h1>
                            <p className="mb-5">{bio}</p>
                            <p className='mb-1 font-semibold'>Total Likes 🧡 {likes}</p>
                            <p className='mb-1 font-semibold'>Years of experience  👩🏻‍🍳 {years_of_experience}+</p>
                            <p className='mb-3 font-semibold'>Number of recipes 🍜 {num_recipes}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-4xl text-center mt-16 mb-14 font-extrabold text-cyan-900'>Recipes</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-11/12 mx-auto mb-16'>
                    {
                        recipes.map(recipe => <RecipeCard
                            key={recipe._rid}
                            recipe={recipe}
                            notify={notify}
                        
                        >
                        </RecipeCard>)
                    }
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ChefsDetails;