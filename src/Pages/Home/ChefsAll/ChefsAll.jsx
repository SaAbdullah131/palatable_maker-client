import React from 'react';
import ChefsCard from './ChefsCard';

const ChefsAll = ({chefs}) => {
    return (
        <div>
            <h2 className='text-4xl text-center mt-12 mb-12 font-extrabold text-indigo-900'>Pro Chefs</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    chefs.map(chef => <ChefsCard
                        key={chef._id}
                        chef={chef}
                    ></ChefsCard>)
                }
            </div>
        </div>
    );
};

export default ChefsAll;