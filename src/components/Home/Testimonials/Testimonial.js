import React from 'react';

const Testimonial = ({review}) => {
    const {name, designation, description } = review;

    return (
        <div className='card shadow-sm bg-info'>           
            <div className="card-body text-justify">
                <p className="card-text text-white  text-center">{description}</p>
            </div>            
            <div className="card-footer d-flex p-3  align-items-center">
                <div>
                    <h6 className="text-dark">{name}</h6>
                    <p className="m-0">{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;