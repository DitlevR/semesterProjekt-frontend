import { adminConstants } from '../_constants';
import { adminService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const adminActions = {
    getUsers,
    getUnregisteredUsers,
    getAllBooks,
    getOverdueBooks,
    editUser
};

function getUsers(){
    return dispatch => {
        dispatch(request());

        adminService.getUsers()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: adminConstants.GETUSERS_REQUEST} }
    function success(users) { return { type: adminConstants.GETUSERS_SUCCESS, users } }
    function failure(error) { return { type: adminConstants.GETUSERS_FAILURE, error } }
}
function getUnregisteredUsers(){
    return dispatch => {
        dispatch(request());

        adminService.getUnregisteredUsers()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: adminConstants.GETUNREGISTEREDUSERS_REQUEST} }
    function success(users) { return { type: adminConstants.GETUNREGISTEREDUSERS_SUCCESS, users } }
    function failure(error) { return { type: adminConstants.GETUNREGISTEREDUSERS_FAILURE, error } }
}
function getAllBooks(){
    return dispatch => {
        dispatch(request());

        adminService.getAllBooks()
            .then(
                books => dispatch(success(books)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: adminConstants.GETALLBOOKS_REQUEST} }
    function success(books) { return { type: adminConstants.GETALLBOOKS_SUCCESS, books } }
    function failure(error) { return { type: adminConstants.GETALLBOOKS_FAILURE, error } }
}
function getOverdueBooks(){
    return dispatch => {
        dispatch(request());

        adminService.getOverdueBooks()
            .then(
                books => dispatch(success(books)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: adminConstants.GETOVERDUEBOOKS_REQUEST} }
    function success(books) { return { type: adminConstants.GETOVERDUEBOOKS_SUCCESS, books } }
    function failure(error) { return { type: adminConstants.GETOVERDUEBOOKS_FAILURE, error } }
}
function editUser(user){
    return dispatch => {
        dispatch(request(user));

        adminService.editUser(user)
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(user) { return { type: adminConstants.EDITUSER_REQUEST, user} }
    function success(user) { return { type: adminConstants.EDITUSER_SUCCESS, user} }
    function failure(error) { return { type: adminConstants.EDITUSER_FAILURE, error } }
}
