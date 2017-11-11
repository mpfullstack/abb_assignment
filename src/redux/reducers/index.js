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
    features: features,
    pieces: 0
});

export { initState, actions };
export default function featuresReducer(state = initState, action) {
    switch (action.type) {
        case actions.REFRESH_FEATURES:
            return state
                .set('features', action.features)
                .set('pieces', state.get('pieces') + 1);
        default:
            return state;
    }
};
