import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../utils/UserAtom.js';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';


// import PropTypes from 'prop-types';

function Dashboard() {

    const history = useHistory();
    const user = useRecoilValue(userAtom)

    // console.log(props)

    const logout = () => {
        console.log('logout ');
        Cookies.remove('auth');
        history.push('/');
    }
    console.log(user)
    return (
        <div>
            <h1>dashboard</h1>
            <p>props.user will go here --- {}</p>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default Dashboard;
