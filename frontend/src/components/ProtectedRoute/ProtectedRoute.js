// REACT DEPENDENCIES
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import API from '../../utils/API';


// USER CONTEXT
// import { UserContext } from '../../UserContext.js';


function ProtectedRoute({ component: Component, ...rest } ) {


    // const { user, isLoggedIn } = useContext(UserContext)


    // console.log(isLoggedIn)
    // console.log(`is logged in bool ${isLoggedIn}`);
    // console.log(user)

    return (
            <Route {...rest} render={() => {
                return Math.random() > 5
                ? <Component />
                : <Redirect to={{
                    pathname: "/"
                }}/>
            }} />
    )
}

export default ProtectedRoute;