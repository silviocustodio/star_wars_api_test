import { combineReducers } from 'redux';
import SwapiReducer from './reducer_starwars';

const rootReducer = combineReducers({
    swapi: SwapiReducer
});

export default rootReducer;
