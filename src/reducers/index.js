/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as authReducer from './authReducer';

export default Object.assign(authReducer, loadingReducer);