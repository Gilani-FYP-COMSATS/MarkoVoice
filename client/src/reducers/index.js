import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import configuration from './configuration';

export default combineReducers({ alert, auth, configuration });
