import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Order from './components/Dashboard/Order/Order';
import AddReview from './components/Dashboard/AddReview/AddReview';
import AddService from './components/Dashboard/Dashboard/AddService/AddService';
import AllOrders from './components/Dashboard/Dashboard/AllOrders/AllOrders';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import ClientServiceLIst from './components/Dashboard/ClientServiceList/ClientServiceLIst';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ManageService from './components/Dashboard/ManageService/ManageService';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute path="/addReview">
            <AddReview></AddReview>
          </PrivateRoute>

          <PrivateRoute path="/makeAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>

          <PrivateRoute path="/orderList">
            <ClientServiceLIst></ClientServiceLIst>
          </PrivateRoute>

          <PrivateRoute path="/allOrderList">
            <AllOrders></AllOrders>
          </PrivateRoute>

          <PrivateRoute path="/manageService">
            <ManageService></ManageService>
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;