import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { personal } from './personal.reducers';
import { overdue} from './overdue.reducers';
import { admin } from './admin.reducers';
const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  personal,
  overdue,
  admin
});

export default rootReducer;