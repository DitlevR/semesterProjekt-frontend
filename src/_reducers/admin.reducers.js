import { adminConstants } from '../_constants';

export function admin(state = {}, action) {
  switch (action.type) {
    case adminConstants.GETUSERS_REQUEST:
      return {
        loading: true
      };
    case adminConstants.GETUSERS_SUCCESS:
      return {
        ...state,
        users: action.users
      };
    case adminConstants.GETUSERS_FAILURE:
      return { 
        error: action.error
      };

    case adminConstants.GETUNREGISTEREDUSERS_REQUEST:
    return {
        loading: true
    };
    case adminConstants.GETUNREGISTEREDUSERS_SUCCESS:
    return {
        ...state,
        unregisteredUsers: action.users
    };
    case adminConstants.GETUNREGISTEREDUSERS_FAILURE:
    return { 
        error: action.error
    };
    
    case adminConstants.GETALLBOOKS_REQUEST:
      return {
        loading: true
      };
    case adminConstants.GETALLBOOKS_SUCCESS:
      return {
        ...state,
        allBooks: action.books
      };
    case adminConstants.GETALLBOOKS_FAILURE:
      return { 
        error: action.error
      };
    
    case adminConstants.GETOVERDUEBOOKS_REQUEST:
        return {
        loading: true
        };
    case adminConstants.GETOVERDUEBOOKS_SUCCESS:
        return {
        ...state,
        overdueBooks: action.books
        };
    case adminConstants.GETOVERDUEBOOKS_FAILURE:
        return { 
        error: action.error
        };

    case adminConstants.EDITUSER_REQUEST:
      return {
        loading: true
      };
    case adminConstants.EDITUSER_SUCCESS:
      return {
        ...state,
        users:action.user
      };
    case adminConstants.EDITUSER_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}