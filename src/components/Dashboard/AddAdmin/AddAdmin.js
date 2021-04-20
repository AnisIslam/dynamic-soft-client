import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // handle redirected to home
    let history = useHistory();
    function handleAdminUpdate() {
        history.push('/');
    }

      // handle Add admin when form Submit:
  const onSubmit = (data) => {
    const newAdmin = { ...data };
    console.log('new ad', newAdmin);

    fetch('https://anis-dynamic-soft.herokuapp.com/addAdmin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAdmin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          handleAdminUpdate();
        }
      });
  };

    return (
        <div className="row">
            <Col xs={1} lg={2}>
                <Sidebar />
            </Col>

            <Col className="mt-4" xs={10}>
                <div className='rounded bg-white my-4 mx-4 p-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row'>
                            <h2>Add Admin</h2>
                            <div className='col-md-6 d-flex'>
                                <div className='form-group mr-3 w-100'>
                                    <input
                                        className='form-control'
                                        name='email'
                                        type='email'
                                        placeholder='Ex: admin@dynamicsoft.com'
                                        ref={register({ required: true })}
                                    />
                                    {errors.email && <span className='error'>Email is required</span>}
                                </div>

                                <div className='text-left'>
                                    <button type='submit' className='btn btn-success'>
                                        Submit
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

export default AddAdmin;