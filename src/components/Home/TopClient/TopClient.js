import React from 'react';
import client1 from '../../../images/client1.jpg'
import client2 from '../../../images/client2.jpg'
import client3 from '../../../images/client3.jpg'
import './TopClient.css'
const TopClient = () => {
    return (
        <section className='client-container mt-1 rounded'>
            <div className='text-center'>
                <h1 className='p-1 rounded client-heading' style={{ color: '#1CC7C1' }}>OUR TOP CLIENT</h1>

                <div className='d-flex justify-content-center'>
                    <div className='client row'>
                        <div className='m-2 text-white client-img'>
                            <img className='w-25 m-2 rounded ' src={client1} alt='' />
                            <img className='w-25 m-2 rounded' src={client2} alt='' />
                            <img className='w-25 m-2 rounded' src={client3} alt='' />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TopClient;