import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from './utils/UserAtom.js'
import API from './utils/API.js'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { Route, Switch, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';

function App() {

    const [ loading, setLoading ] = useState(false);
    const [ user, setUser ] = useRecoilState(userAtom);
    const history = useHistory();

    const fetchAuthCookie = async () => {
        // console.log('fetch auth cookie')
        const result = Cookies.get('auth');
        if (result === undefined) { 
            // console.log(`no user to log in`);
            // setLoggedIn(false);
            setLoading(false);
            setUser({});
        } else {
            let [ id, authToken ] = result.split(':')
            console.log(id, authToken);
            let userFromCookie = await API.findOne(id);
            // console.log('userFromCookie', userFromCookie)
            setLoading(false);
            setUser(userFromCookie);
            history.push('/dashboard');
        }
    }
    
    useEffect(() => {
        setLoading(true)
        fetchAuthCookie();
    }, [])
    
    // console.log('user', user)


    if (loading === true) {
        return <h1>Loading</h1>
    }
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/dashboard" component={Dashboard} user={user}/>
            </Switch>
        </div>
    )
}

export default App;