import { combineReducers } from 'redux';
import AllProjectsReducer from './AllProjectsReducer.js'

const rootReducer = combineReducers({
    projects: AllProjectsReducer
})

export default rootReducer;