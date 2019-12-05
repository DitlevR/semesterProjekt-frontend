import { overdueConstants } from '../_constants';
import { overdueService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const overdueActions = {
    getOverdueDetails,
    // getOverdueNumber
};
function getOverdueDetails(user){
    return dispatch => {
        dispatch(request(user));

        overdueService.getOverdueDetails(user)
            .then(
                details => dispatch(success(details)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(user) { return { type: overdueConstants.GETOVERDUEDETAILS_REQUEST,user } }
    function success(details) { return { type: overdueConstants.GETOVERDUEDETAILS_SUCCESS, details } }
    function failure(error) { return { type: overdueConstants.GETOVERDUEDETAILS_FAILURE, error } }
}
