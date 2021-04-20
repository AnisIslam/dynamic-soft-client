import React, { useContext, useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import { useHistory } from 'react-router';

const Order = () => {
    const [order, setOrder] = useState([]);

    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // handle redirected to user service
    let history = useHistory();
    function handleClientService() {
        history.push('/orderList');
    }

    // When user registered send the data to server and redirect user to Client service list
    const onSubmit = (data) => {
        const newOrder = { ...data };
        newOrder.status = 'Pending';

        fetch('https://anis-dynamic-soft.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                setOrder(newOrder);
                if (data) {
                    handleClientService();
                }
            });
    };

    return (
        <div className="row">
            <Col xs={1} lg={2}>
                <Sidebar />
            </Col>
            <Col className="mt-4" xs={10}>
                <div className='rounded my-4 mx-4'>
                    <form onSubmit={handleSubmit(onSubmit)} className='client-form'>
                        <div className='row'>
                            <div className='col-md-6 p-4'>
                                <div className='form-group'>
                                    <input
                                        className='form-control'
                                        defaultValue={loggedInUser.name}
                                        name='name'
                                        type='text'
                                        placeholder='Your Name'
                                        ref={register({ required: true })}
                                    />
                                    {errors.name && <span className='error'>Name is required</span>}
                                </div>
                                <div className='form-group'>
                                    <input
                                        className='form-control'
                                        name='email'
                                        type='email'
                                        value={loggedInUser.email}
                                        placeholder='Email'
                                        ref={register({ required: true })}
                                    />
                                    {errors.email && <span className='error'>Email is required</span>}
                                </div>
                                <div className='form-group'>
                                    <input
                                        className='form-control'
                                        name='title'
                                        type='text'
                                        // value={service.title}
                                        placeholder='Service title'
                                        ref={register({ required: true })}
                                    />
                                    {errors.title && <span className='error'>Title is required</span>}
                                </div>
                                <div className='form-group'>
                                    <textarea
                                        className='form-control'
                                        name='description'
                                        placeholder='Description'
                                        rows='4'
                                        ref={register({ required: true })}
                                    ></textarea>

                                    {errors.description && (
                                        <span className='error'>Description is required</span>
                                    )}
                                </div>

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <input
                                                className='form-control'
                                                name='price'
                                                type='text'
                                                // value={service.price}
                                                placeholder='Price'
                                                ref={register({ required: true })}
                                            />
                                            {errors.price && (
                                                <span className='error'>Price is required</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group'>
                                            <label
                                                htmlFor='imageUpload'
                                                className='file-upload btn btn-outline-success btn-block w-100'
                                            >
                                                <FontAwesomeIcon
                                                    icon={faUpload}
                                                    className='mr-0'
                                                ></FontAwesomeIcon>{" "}
                        Upload Project Sample
                        <input id='imageUpload' name='imageUpload' type='file' />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-left'>
                                    <button type='submit' className='btn btn-brand'>
                                        Send
                  </button>
                                </div>

                            </div>
                        </div>

                    </form>

                </div>
            </Col>

        </div>
    );
};

export default Order;