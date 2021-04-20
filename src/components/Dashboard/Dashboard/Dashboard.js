import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';


const containerStyle = {
    backgroundColor: "#F4FDFB",
  
}
const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
 
    console.log(loggedInUser);
    return (
        <section className='row '>
            <div style={containerStyle} className="row d-flex container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <h2 className="text-info col-md-8">Welcome {loggedInUser.name} </h2>

            </div>
        </section>
    );
};

export default Dashboard;