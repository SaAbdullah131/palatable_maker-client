/* eslint-disable no-unused-vars */
import React from 'react';
import FeaturedBanner from '../../../assets/FeaturedBanner.jpg'
const Featured = () => {
    return (
        <div className='rounded-xl mb-10'>
            {/* `url("${bottomBanner}")` */}
            <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `url("${FeaturedBanner}")` }}>
                <div className="hero-overlay bg-opacity-80 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className="w-64 carousel rounded-box mx-auto">
                        <div id="item2" className="carousel-item w-full h-full">
                                <img src="https://img.freepik.com/free-photo/chopsticks-bowls-thai-cuisine_23-2148093228.jpg?w=360&t=st=1683136954~exp=1683137554~hmac=8001de8e1e44dbd2b009f672244e2bdac6af90766d100cf3fa97f5485ca9f746" />
                            </div>
                            <div id="item1" className="carousel-item w-full h-full">
                                <img src="https://img.freepik.com/free-photo/chinese-cuisine-braised-meat-fermented-bean-curd-braised-meat_1205-10968.jpg?w=360&t=st=1683136919~exp=1683137519~hmac=096ec95da6b8dc358d0947ccf77edce2d7d09018eeac5a16f6016054dc47e4ec" />
                            </div>
                            <div id="item3" className="carousel-item w-full h-full">
                                <img src="https://img.freepik.com/free-photo/chinese-noodles-with-beef-vegetables-served-with-spring-rolls-wooden-desk_23-2148093182.jpg?w=360&t=st=1683136879~exp=1683137479~hmac=28caf01b7e865b4f51ad8a07d496519ef43869e4f5dc2ef7998649249e9bc729" />
                            </div>
                            <div id="item4" className="carousel-item w-full h-full">
                                <img src="https://img.freepik.com/free-photo/fried-chicken-with-red-green-chili-peppers-onion-plate_141793-1657.jpg?w=360&t=st=1683136699~exp=1683137299~hmac=c30c3c268f3e3f6a063c84cc062722d8c1578bd2d69b4091eb28c5cee07e8a1d" />
                            </div>
                            <div id="item6" className="carousel-item w-full h-full">
                                <img src="https://img.freepik.com/free-photo/top-view-chinese-hot-pot_23-2149529770.jpg?w=360&t=st=1683136984~exp=1683137584~hmac=7355c8e4360f8fe92304adbca9e15ae4e6b466bb3f77bfd028bb5e7084320017" />
                            </div>
                            <div id="item5" className="carousel-item w-full h-full">
                                <img src="https://img.freepik.com/free-photo/thai-food-noodles-spicy-boil-with-seafood-pork-hot-pot_1150-27873.jpg?w=360&t=st=1683136712~exp=1683137312~hmac=19a083cc7c9c9b7bf04730f6cd42f4774f46eff15ae5454ebe6935a01182d7f4" />
                            </div>
                            
                            <div id="noddles" className="carousel-item w-full h-full">
                                <img src="https://img.freepik.com/free-photo/bowl-asian-food-with-rice-chopsticks_23-2148382877.jpg?w=360&t=st=1683136739~exp=1683137339~hmac=98468dc0a74c747af4bcbe51ec321668c78d03a91be41a701e75cca30e26a429" />
                            </div>
                        </div>
                        <div className="flex justify-center w-full py-2 gap-2">
                            <a href="#item1" className="btn btn-xs">1</a>
                            <a href="#item2" className="btn btn-xs">2</a>
                            <a href="#item3" className="btn btn-xs">3</a>
                            <a href="#item4" className="btn btn-xs">4</a>
                            <a href="#item5" className="btn btn-xs">5</a>
                            <a href="#item6" className="btn btn-xs">6</a>
                            <a href="#noddles" className="btn btn-xs">7</a>
                        </div>
                        <div>
                            <p className='text-4xl text-violet-400 font-extrabold border-s-4 border-e-4 border-green-400'>
                                Our Most Popular Recipes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;