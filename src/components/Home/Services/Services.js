import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData = [
    {
      
      "title": "Web & Mobile design",
      "description":
        "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
      "img": "https://i.ibb.co/6st1TDB/service1.png",
      "price": "9.99",
    },
    {
      
      "title": "Graphic design",
      "description":
        "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
      "img": "https://i.ibb.co/1Xnsds1/service2.png",
      "price": "12.99",
    },
    {
      
      "title": "Web development",
      "description":
        "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
      "img": "https://i.ibb.co/3vzZgMs/service3.png",
      "price": "15.99",
    },
  ];
  
  

const Services = () => {
  const [serviceData, setServiceData] = useState([]);

    // Get data from API and set the data:
    useEffect(() => {
      fetch('https://anis-dynamic-soft.herokuapp.com/services')
        .then((res) => res.json())
        .then((data) => {
          setServiceData(data);
          // setLoading(false);
        });
    }, []);

    return (
        <section className='services-container mt-1' id='services'>
            <div className='text-center bg-light m-2 p-2'>
                <h1 style={{ color: '#1CC7C1' }}>Services We Provide</h1>
            </div>

            <div className="bg-dark d-flex justify-content-center">
                    <div className="w-75 row mt-5 pt-5">
                        {
                            serviceData.map(service => <ServiceDetail service={service} key={service._id}></ServiceDetail>)
                        }
                    </div>
            </div>
        </section>
    );
};

export default Services;