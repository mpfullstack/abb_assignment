/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       info@marcperez.cat
@organization:  MP.
@since:         November 2017
-----------------------------------------------------------------------------*/

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import featuresReducer, { initState } from './reducers';

const store = createStore(
    combineReducers({
        Feature: featuresReducer
    }),
    {Feature: initState},
    applyMiddleware(logger)
);

export { store };
