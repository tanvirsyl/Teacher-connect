import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser] = useContext(UserContext)
  const userLoggedInSession = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (userLoggedInSession)? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/log-in",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
};

export default PrivateRoute;