import { combineReducers } from 'redux';

//import the different reducers inside each feature
import form from '../features/Form/reducers';

const rootReducer = combineReducers({
    form,
})

export default rootReducer;