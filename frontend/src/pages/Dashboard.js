import React from 'react';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';


// import PropTypes from 'prop-types';

function Dashboard(props) {

    const history = useHistory();

    console.log(props)

    const logout = () => {
        console.log('logout ');
        Cookies.remove('auth');
        history.push('/');
    }

    return (
        <div>
            <h1>dashboard</h1>
            <p>props.user will go here ---{}</p>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default Dashboard;
