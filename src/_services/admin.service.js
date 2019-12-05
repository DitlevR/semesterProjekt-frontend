import config from 'config';
import { authHeader } from '../_helpers';

export const adminService = {
    getUsers,
    getUnregisteredUsers,
    getAllBooks,
    getOverdueBooks,
    editUser,
};

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
function getUsers(){
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://jsonplaceholder.typicode.com/albums`, requestOptions).then(handleResponse);
   
}
function getUnregisteredUsers(){
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://jsonplaceholder.typicode.com/todos`, requestOptions).then(handleResponse);
}
function getAllBooks(){
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://jsonplaceholder.typicode.com/posts`, requestOptions).then(handleResponse);
}
function getOverdueBooks(){
    const requestOptions = {
        method: 'GET',
    };
    return fetch(`http://jsonplaceholder.typicode.com/photos`, requestOptions).then(handleResponse);
}
function editUser(user){
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`https://jsonplaceholder.typicode.com/posts/30`,requestOptions).then(handleResponse);
    // const requestOptions = {
    //     method: 'GET',
    // };
    // return fetch(`http://jsonplaceholder.typicode.com/albums`, requestOptions).then(handleResponse);
    
}