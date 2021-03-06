import React, { useState, useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import googleIcon from '../../../images/google-login.png';
import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeLoginFramework, handleGoogleSignIn } from './loginManager';
import { UserContext } from '../../../App';

const Login = () => {
  document.title = "Dynamic Soft Login";

  // Initialize Firebase
  initializeLoginFramework();

  //Handle New User:
  const [newUser, SetNewUSer] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    success: false,
  });

  // Error Message:
  const [error, setError] = useState('');

  // Context from app.js
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // Redirecting to home/ Registration Component if signed In successfully
  const history = useHistory();

  const location = useLocation();
  const { from } = location.state || {
    from: { pathname: '/dashboard' },
  };

  // Google Sign In
  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => handleResponse(res, true));
  };

  // Handle Response
  const handleResponse = (res, redirect) => {
    if (res.error) {
      newUser && setError(res.error);
      !newUser && setError(res.error);
    } else {
      const userDetails = {...res};
      setLoggedInUser(userDetails);
      storeAuthToken();
      history.replace(from);
      newUser && setError('');
      !newUser && setError('');
    }
  };
  console.log(loggedInUser);

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <section className='container'>
      <div className='d-flex justify-content-center flex-column align-items-center my-5'>
        <div className='row mb-2'>
          <Link to='/'>
            <div className='col-md-12 text-center mb-3'>
              <img
                style={{ width: '150px', height: '47px' }}
                // src={logo}
                alt=''
              />
            </div>
          </Link>
        </div>

        <div className='card login-area rounded'>
          <div className='card-body d-flex justify-content-center align-items-center flex-column'>
            <h4 className='card-title text-center mb-4 mt-1'>Login With</h4>
            <div className='social-login'>
              <button className='btn' onClick={googleSignIn}>
                <img style={{ height: '50px', width: '50px' }} src={googleIcon} alt='google icon' />{' '}
                <button type="button" class="btn btn-info">Continue with Google</button>
              </button>
            </div>
            <div className='form-group text-center mt-3' id='formForget'>
              <span>Don't have an account?</span>{' '}
              <span
                style={{ cursor: 'pointer', color: '#3F90FC' }}
                onClick={googleSignIn}
              >
                Create an account
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

