import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import Testimonial from './Testimonial'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

    // Get data from API and set the data:
    useEffect(() => {
        fetch('https://anis-dynamic-soft.herokuapp.com/reviews')
          .then((res) => res.json())
          .then((data) => {
            setReviews(data);
            // setLoading(false);
          });
      }, []);

    return (
        <section className='testimonials mt-1 py-5 ' id='review'>
            <div className="container">
                <div className="section-header text-center">
                    <h1  className="text-dark text-uppercase"> What Our Clients <br /> Says </h1>
                </div>

                <div className="card-deck mt-4 ">
                    {
                        reviews.map(review=> <Testimonial key={review._id} review = {review}></Testimonial>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Testimonials;