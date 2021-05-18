import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { InitialStateType } from './store/index';
import { AuthInitialState } from './store/auth/reducers';
import {healthcheck} from './services/auth';
import { userDetails } from './store/user/actions';
import {Spinner, Card, Alert} from 'react-bootstrap';
import {Authentication} from './components/Authentication';

export const App: React.FC = ({children}) => {
  const auth = useSelector<InitialStateType, AuthInitialState>(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(userDetails())
  }, [dispatch])

  return (
    <div className="App">
      {/* <div className="App-header">
        {!auth || auth.loading && (
          <Spinner animation="grow" variant="info" />
        )}

        {auth && !auth.loading && auth.error && (
            <Alert variant='danger'>
              Error: {auth.error}
            </Alert>
        )}

        {auth && !auth.loading && !auth.authenticated && (
          <Authentication />
        )}
      </div>

        {auth && !auth.loading && auth.authenticated && ( */}
          <div>{children}</div>
        {/* )} */}
    </div>
  );
}

export default App;
