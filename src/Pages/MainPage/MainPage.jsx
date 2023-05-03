import React from 'react';
import cookImage from '../../assets/Heading_sec/cook.gif'
const MainPage = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row gap-x-25">
                <img src={cookImage} className="max-w-md rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default MainPage;