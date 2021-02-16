import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { Route, Switch, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';

function App() {

    const [ loading, setLoading ] = useState(false)
    const [ user, setUser ] = useState({})
    const history = useHistory();

    const fetchAuthCookie = () => {
        console.log('fetch auth cookie')
        const result = Cookies.get('auth');
        if (result === undefined) { 
            console.log(`no user to log in`)
            // setLoggedIn(false);
            setLoading(false);
        } else {
            console.log(result);
            setLoading(false);
            setUser(result);
            history.push('/dashboard');
        }
    }
    
    useEffect(() => {
        setLoading(true)
        fetchAuthCookie();
    }, [])

    console.log(loading)


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