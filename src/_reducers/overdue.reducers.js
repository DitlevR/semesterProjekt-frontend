import { overdueConstants } from '../_constants';

export function overdue(state = {}, action) {
  switch (action.type) {
    case overdueConstants.GETOVERDUEDETAILS_REQUEST:
      return {
        loading: true
      };
    case overdueConstants.GETOVERDUEDETAILS_SUCCESS:
      return {
        items: action.details
      };
    case overdueConstants.GETOVERDUEDETAILS_FAILURE:
      return { 
        error: action.error
      };
   
    default:
      return state
  }
}