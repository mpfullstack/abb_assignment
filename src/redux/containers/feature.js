/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       info@marcperez.cat
@organization:  MP.
@since:         November 2017
-----------------------------------------------------------------------------*/

import React, { Component } from 'react';
import { FeatureHeader, FeatureContent } from '../components/feature';

class Feature extends Component {
    render() {
        const { feature } = this.props;
        return (
            <div>
                <FeatureHeader
                    title={feature.name}
                    quality={feature.quality} />
                <FeatureContent
                    feature={feature} />
            </div>
        );
    }
}

export default Feature;

