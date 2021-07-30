//Deps
import {combineReducers} from 'redux';

import {countReducer} from './countReducer';
import {wellbeingReducer} from './wellbeingReducer';


export default combineReducers({
    count:countReducer,
    wellbeing:wellbeingReducer,
})
  
  