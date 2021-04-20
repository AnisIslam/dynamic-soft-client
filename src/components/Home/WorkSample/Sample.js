import React from 'react';
import './Sample.css'

const Sample = ({sample}) => {
    // const {title, img, description}= sample;
    return (
        <div className='work-sample p-4 m-2 text-center mr-4'>
            <img className='rounded' style={{height:'120px', width:'100px'}} src={sample.img} alt=""/>
            <h5 className='mt-3 mb-2 text-gray  '>{sample.title}</h5>
            <p className='text-secondary'>{sample.description}</p>
            
        </div>
    );
};

export default Sample;