import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../utils/UserAtom.js';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';


function Dashboard() {

    const history = useHistory();
    const user = useRecoilValue(userAtom)


    const logout = () => {
        console.log('logout ');
        Cookies.remove('auth');
        history.push('/');
    }

    if (user.Boxes) {
        console.log('user.Boxes.length', user.Boxes.length)
    }

    return (
        <div>
            <h1>Welcome {user.username}</h1>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default Dashboard;
