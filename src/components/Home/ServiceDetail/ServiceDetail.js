import React from 'react';
import { useHistory } from 'react-router';
// import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'
import './ServiceDetail.css'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceDetail = ({ service }) => {
    const history = useHistory();

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <animated.div
            className=" m-4 p-2 col-md-3 text-center services-card p-4 justify-content-center serviceDetails"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            onClick={()=> history.push("/order")} 
            style={{ transform: props.xys.interpolate(trans) }}>
            {/* <Link to={'service/' + service._id}> */}
                {
                    service.image ? <img style={{ height: '100px' }} src={`data:image/png;base64,${service.image.img}`} />
                        :
                        <img style={{ height: '100px' }} src={service.img} alt='' />

                }
                <h5 className='mt-3 mb-3 bg-info p-2 text-white rounded' style={{ fontSize: '20px', fontWeight: '600' }}>{service.title}</h5>
                <p className='text-secondary'>{service.description}</p>
            {/* </Link> */}
        </animated.div>
    );
};

export default ServiceDetail;



// import React from 'react';
// import { useHistory } from 'react-router';
// import './ServiceDetail.css'

// const ServiceDetail = ({service}) => {
//     const history = useHistory();

//     return (
//         <div onClick={()=> history.push("/order")} className='bg-info container hover-overlay hover-zoom hover-shadow justify-item-center align-items-center p-3 m-2 col-md-3 text-center serviceDetails'>
//             <img className='' style={{height:'100px', width:'75px'}} src={service.img} alt=""/>
//             <h5 className='p-1 bg-white rounded mt-5 mb-3  '>{service.title}</h5>
//             <p className='text-white'>{service.description}</p>
//         </div>
//     );
// };

// export default ServiceDetail;