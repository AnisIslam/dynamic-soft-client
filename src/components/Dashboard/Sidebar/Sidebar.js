import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faHdd,
  faCommentAlt,
  faPlus,
  faUserPlus,
  faSignOutAlt,
  faEdit,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // console.log(loggedInUser);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://anis-dynamic-soft.herokuapp.com/isAdmin/${loggedInUser.email}`)
      .then(res => res.json())
      .then(data => {
        setIsAdmin(data);
        console.log(data);
      })

  }, [])

  return (
    <div className='sidebar d-flex flex-column justify-content-between py-5 px-4'>
      <ul className='list-unstyled'>
        {
          
          isAdmin ? (
            <>
              <li>
                <Link to='/allOrderList' className='text-dark'>
                  <FontAwesomeIcon icon={faHdd} /> <span>All Order List</span>
                </Link>
              </li>
              <li>
                <Link to='/addService' className='text-dark'>
                  <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                </Link>
              </li>
              <li>
                <Link to='/makeAdmin' className='text-dark'>
                  <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                </Link>
              </li>
              <li>
                <Link to='/manageService' className='text-dark'>
                  <FontAwesomeIcon icon={faEdit} /> <span>Manage Service</span>
                </Link>
              </li>
              <li>
                <Link to='/' className='text-dark'>
                  <FontAwesomeIcon icon={faHome} /> <span>Go To Home</span>
                </Link>
              </li>
            </>

          ) : (
            <>
              <li>
                <Link to='/order' className='text-dark'>
                  <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                </Link>
              </li>

              <li>
                <Link to='/orderList' className='text-dark'>
                  <FontAwesomeIcon icon={faHdd} /> <span>Order List</span>
                </Link>
              </li>

              <li>
                <Link to='/addReview' className='text-dark'>
                  <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                </Link>
              </li>

              <li>
                <Link to='/' className='text-dark'>
                  <FontAwesomeIcon icon={faHome} /> <span>Go To Home</span>
                </Link>
              </li>
            </>

          )
        }


      </ul>
    </div >
  );
};

export default Sidebar;