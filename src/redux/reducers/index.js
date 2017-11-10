/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       info@marcperez.cat
@organization:  MP.
@since:         November 2017
-----------------------------------------------------------------------------*/

import { Map } from 'immutable';
import { features } from '../../data/features';

const actions = {
    REFRESH_FEATURES: 'REFRESH_FEATURES',
    refreshFeatures: features => ({
        type: actions.REFRESH_FEATURES,
        features
    })
};

const initState = new Map({
    features: features
});

export { initState, actions };
export default function featuresReducer(state = initState, action) {
    switch (action.type) {
        case actions.REFRESH_FEATURES:
            if( action.features.length )
                return state
                    .set('features', action.features);
            else
                return state;
        default:
            return state;
    }
};
