import { personalConstants } from '../_constants';

export function personal(state = {}, action) {
  switch (action.type) {
    case personalConstants.GETPERSONALDETAILS_REQUEST:
      return {
        loading: true
      };
    case personalConstants.GETPERSONALDETAILS_SUCCESS:
      return {
        items: action.details
      };
    case personalConstants.GETPERSONALDETAILS_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}