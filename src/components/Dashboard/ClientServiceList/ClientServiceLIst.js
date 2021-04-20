import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import ClientServiceItem from './ClientServiceItem';

const ClientServiceLIst = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();

    // This is table showed in the Admin Dashboard with List of service register
    // Set List of service register:
    const [serviceList, setServiceList] = useState([]);
    const [orders, setOrders] = useState([]);

    // Get orders for specific mail
    useEffect(() => {
        fetch(`https://anis-dynamic-soft.herokuapp.com/clientServices/${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
            
    }, [loggedInUser.email]);
    console.log(orders);

    function dashboardRedirect() {

        history.push('/dashboard');

    }

    return (
        <section className='container mt-4 client-services-area'>
            <h4 className="text-center text-dark">You've placed {orders.length} Order</h4>
            <div className='row'>

                {

                    orders.map((service) => (
                        <ClientServiceItem key={service._id} service={service} />
                    ))
                }
            </div>
            <button onClick={dashboardRedirect} type="button" class="btn btn-warning">Go To Dashboard</button>
        </section>
    );
};

export default ClientServiceLIst;