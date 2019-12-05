import { personalConstants } from '../_constants';
import { personalService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const personalActions = {
    getPersonalDetails
};
function getPersonalDetails(user){
    return dispatch => {
        dispatch(request(user));

        personalService.getPersonalDetails(user)
            .then(
                details => dispatch(success(details)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(user) { return { type: personalConstants.GETPERSONALDETAILS_REQUEST,user } }
    function success(details) { return { type: personalConstants.GETPERSONALDETAILS_SUCCESS, details } }
    function failure(error) { return { type: personalConstants.GETPERSONALDETAILS_FAILURE, error } }
}