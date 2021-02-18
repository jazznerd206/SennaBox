import Promise from 'es6-promise';
import axios from 'axios';

export default {
    registerUser: userObj => {
        // console.log('axios post create user')
        // console.log('userObj', userObj)
        return new Promise ((resolve, reject) => {
            axios.post("/api/user", userObj)
                .then(response => {
                    if (response) {
                        // console.log('user response from register ', response.data);
                        resolve(response.data);
                    } else {
                        console.log('Sign-up error');
                    }
                }).catch(error => {
                    // console.log('Sign up server error: ' + error);
                    reject(Error('sign up server error: ' + error))
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
                        // console.log('user response from login ', response.data);
                        resolve(response.data);
                    } else {
                        console.log('Login error');
                    }
                }).catch(error => {
                    reject(Error('find user sign up error: ' + error))
                });
        })
    },
    findAll: () => {
        // console.log('axios get find all route')
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
    findOne: (id) => {
    // console.log('axios get find all route')
    return new Promise((resolve, reject) => {
        axios.get(`/api/user/${id}`)
            .then(response => {
                // console.log(`response.data from finduser promise API ${JSON.stringify(response.data)}`)
                if (response) {
                    resolve(response.data)
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
    create: (type, obj) => {
        // console.log('obj', obj)
        return new Promise ((resolve, reject) => {
            axios.post(`/api/${type}`, obj)
                .then(response => {
                    if (response) {
                        console.log('box response from register ', response.data);
                        resolve(response.data);
                    } else {
                        console.log('box create error');
                    }
                }).catch(error => {
                    console.log('box create server error: ' + error);
                    reject(Error('box create server error: ' + error))
                });
        })
    }
}