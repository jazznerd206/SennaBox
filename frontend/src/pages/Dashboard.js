import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../utils/UserAtom.js';
import Cookies from 'js-cookie';
import CreateBox from '../components/CreateBox/CreateBox';
import Box from '../components/Box/Box';

function Dashboard() {

    const history = useHistory();
    const user = useRecoilValue(userAtom)


    const logout = () => {
        console.log('logout ');
        Cookies.remove('auth');
        history.push('/');
    }

    if (!user.username) {
        // console.log('redirect')
        return <Redirect to="/" />
    }
    
    return (
        <div className="dashboard-wrapper">
            <div className="row dashboard-header">
                <h1>SENNABOX</h1>
                <h1>{user.username}</h1>
                <button onClick={() => logout()}>Logout</button>
            </div>
            {user.Boxes.length === 0 && (
                <div className="row vertical-align">
                    <CreateBox />
                </div>
            )}
            {user.Boxes.length > 0 && (
                <div className="row vertical-align">
                    {user.Boxes.map(box => (
                        <Box 
                            key={box.id}
                            name={box.boxName}
                            plantType={box.plantType}
                            lastWatered={box.lastWatered}
                            birth={box.createdAt}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

Dashboard.propTypes = {
    name: PropTypes.string,
    plantType: PropTypes.string,
    lastWatered: PropTypes.string,
    birth: PropTypes.string
};

export default Dashboard;
