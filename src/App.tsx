import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { InitialStateType } from './store/index';
import { AuthInitialState } from './store/auth/reducers';
import {healthcheck} from './services/auth';
import { userDetails } from './store/user/actions';

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
      <div className="App-header">
        {!auth || auth.loading && (
          <div>spinner</div>
        )}

        {auth && !auth.loading && auth.error && (
          <div>Error</div>
        )}

        {auth && !auth.loading && !auth.authenticated && (
          <div>Authenticate</div>
        )}

        {auth && !auth.loading && auth.authenticated && (
          <div>{children}</div>
        )}
      </div>
    </div>
  );
}

export default App;
