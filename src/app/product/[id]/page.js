import React from 'react';

const DynamicId = ({params, searchParams}) => {
    console.log(searchParams);
    return (
        <div>
            <h2 className='text-3xl'>This is Dynamic Id page : {params.id}</h2>
            <h2 className='text-3xl'>This is Dynamic Id page : {searchParams.category}</h2>
        </div>
    );
};

export default DynamicId;