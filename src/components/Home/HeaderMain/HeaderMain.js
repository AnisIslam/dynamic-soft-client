import React from 'react';
import firm from '../../../images/firm-banner.jpg'

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1 text-white">
                <h1 className="text-white" >Dynamic Soft<br />Your Tech Journey Start <br /></h1>
                <p  className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perferendis ad omnis earum temporibus optio animi excepturi? Quod ratione, sint ex velit quibusdam adipisci in ullam, eos enim molestias beatae.</p>
            </div>
            <div className="col-md-6">
                <img src={firm} alt="" className="img-fluid rounded" style={{height:'400px', width:'700px'}}/>
            </div>

        </main>
    );
};

export default HeaderMain;