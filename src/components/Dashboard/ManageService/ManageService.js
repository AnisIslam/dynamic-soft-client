import React, { useContext, useEffect, useState } from 'react';
import { UserContext, userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://anis-dynamic-soft.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = (id)=> {
        console.log(id);
        fetch("https://anis-dynamic-soft.herokuapp.com/delete/"+id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                alert("Deleted Successfully");
            }
        })
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            
            </div>
            <div className="col-md-8 mt-5">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: '20px' }}>
                    <h4><strong>Manage Service</strong></h4>
                    <b>{loggedInUser.name}</b>
                </div>
                <table class="table shadow rounded mt-5">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => <tr>
                            <td>{service.title}</td>
                            <td>{service.description}</td>
                            <td>{service.price}</td>
                            <td><button type="button" class="btn btn-danger" onClick={()=>handleDelete(service._id)}>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManageService;