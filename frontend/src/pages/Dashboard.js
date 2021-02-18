import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../utils/UserAtom.js';
import Cookies from 'js-cookie';
import { useHistory, Redirect } from 'react-router-dom';


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

    if (!user.id) {
        console.log('redirect')
        return <Redirect to="/" />
    }
    return (
        <div className="dashboard-wrapper">
            <div className="row dashboard-header">
                <h1>Welcome {user.username}</h1>
                <button onClick={() => logout()}>Logout</button>
            </div>
            <div className="row customize-box">
                <button>Customize your Box</button>
            </div>
            <div className="row active-box">
                <p>Name:</p>
                <p>Age:</p>
                <p>Last Watered:</p>
            </div>
        </div>
    )
}

export default Dashboard;
