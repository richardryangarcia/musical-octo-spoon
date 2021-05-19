import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { InitialState } from './store';
import { AuthInitialState } from './store/auth/reducers';
import {healthcheck} from './services/auth';
import { userDetails } from './store/user/actions';
import {Spinner, Card, Alert} from 'react-bootstrap';
import {Authentication} from './components/Authentication';
import { useAuthState } from './store/hooks';

export const App: React.FC = ({children}) => {
  const auth = useAuthState();
  console.log(auth)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(userDetails())
  }, [dispatch])

  return (
    <div className="App">
      
        {!auth || auth.loading && (
          <div className="App-header">
            <Spinner animation="grow" variant="info" />
          </div>
        )}

        {auth && !auth.loading && auth.error && (
          <div className="App-header">
            <Alert variant='danger'>
              Error: {auth.error.message}
            </Alert>
          </div>
        )}

        {auth && !auth.loading && !auth.authenticated && (
          <div className="App-header">
            <Authentication />
          </div>
        )}
        {auth && !auth.loading && auth.authenticated && (
          <div>{children}</div>
        )}
    </div>
  );
}

export default App;
