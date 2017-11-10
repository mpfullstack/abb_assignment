/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       info@marcperez.cat
@organization:  MP.
@since:         November 2017
-----------------------------------------------------------------------------*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../reducers';
import { generateFeatures } from '../../data/features';

const refreshFeatures = actions.refreshFeatures;

class Features extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        const { refreshFeatures } = this.props;
        refreshFeatures(generateFeatures(5));
    }
    render() {
        return (
            <div>
                <h1>Features</h1>
                <button onClick={this.onClick}>Refresh</button>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    console.log(state);
    return {
        features: state.Feature.features
    };
};

export default connect(mapStateToProps, { refreshFeatures })(Features);
