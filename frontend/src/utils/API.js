import Promise from 'es6-promise';
import axios from 'axios';

export default {
    registerUser: userObj => {
        console.log('axios post create user')
        console.log('userObj', userObj)
        return new Promise ((resolve, reject) => {
            axios.post("/api/user", userObj)
                .then(response => {
                    if (response.data) {
                        console.log(JSON.stringify(response.data));
                        resolve(response.data);
                    } else {
                        console.log('Sign-up error');
                    }
                }).catch(error => {
                    console.log('Sign up server error: ');
                    reject(Error('find user sign up error: ' + JSON.stringify(error)))
                });
        })
    },
    loginUser: userObj => {
        // console.log('axios post login user')
        // console.log('userObj', userObj)
        return new Promise((resolve, reject) => {
            axios.post("/api/user/login", userObj)
                .then(response => {
                    if (response) {
                        console.log('where am i ', response.data);
                        resolve(response.data);
                    } else {
                        console.log('Sign-up error');
                    }
                }).catch(error => {
                    reject(Error('find user sign up error: ' + JSON.stringify(error)))
                });
        })
    },
    findAll: () => {
        console.log('axios get find all route')
        return new Promise((resolve, reject) => {
            axios.get(`/api/user`)
                .then(response => {
                    // console.log(`response.data from finduser promise API ${JSON.stringify(response.data)}`)
                    if (response.data) {
                        resolve(response)
                    }
                    else {
                        console.log('find user error')
                    }
                })
                .catch(error => {
                    reject(Error('find user server error: ' + JSON.stringify(error)))
                })
        })
   },
}