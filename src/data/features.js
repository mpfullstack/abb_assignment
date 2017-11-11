/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       info@marcperez.cat
@organization:  MP.
@since:         November 2017
-----------------------------------------------------------------------------*/

const _ = require('lodash');

const TYPES = ["Seam", "Slot", "Hole"];
const QUALITIES = ["high","medium","low"];
const CONTROLS = ["position","diameter","length","weight","shape","depth"];
/*
{
    "key": "position",
    "value": {
        "x": {
            "dev": random(0,100),
            "devout": random(0,100)
        },
        "y": {
            "dev": random(0,100),
            "devout": random(0,100)
        },
        "z": {
            "dev": random(0,100),
            "devout": random(0,100)
        }
    }
},
{
    "key": "diameter",
    "dev": random(0,100),
    "devout": random(0,100)
},
{
    "key": "length",
    "dev": random(0,100),
    "devout": random(0,100)
},
    {
        "key": "weight",
        "dev": random(0,100),
        "devout": random(0,100)
    },
    {
        "key": "shape",
        "dev": random(0,100),
        "devout": random(0,100)
    },
    {
        "key": "depth",
        "dev": random(0,100),
        "devout": random(0,100)
    }
    */

/* Feature Object
 * -----------------------------------------------------------------------------*/

const FEATURE_NAMES = ['A','C','D','E'];

const features = generateFeatures(6);

function generateFeatures(num) {
    return _.map(_.range(num), function(value, index) {
        let id = FEATURE_NAMES[random(0,FEATURE_NAMES.length-1)] + _.pad(random(0,1000), 4, "0");
        const controls = [];
        const controlsNumber = _.random(3,6);
        _.map(_.range(0,controlsNumber), function(value) {
            const control = CONTROLS[value];
            if( control === "position" )
                controls.push({
                    "key": "position",
                    "value": {
                        "x": {
                            "dev": random(0,100),
                            "devout": random(0,100),
                            "quality": QUALITIES[random(0,QUALITIES.length-1)],
                        },
                        "y": {
                            "dev": random(0,100),
                            "devout": random(0,100),
                            "quality": QUALITIES[random(0,QUALITIES.length-1)],
                        },
                        "z": {
                            "dev": random(0,100),
                            "devout": random(0,100),
                            "quality": QUALITIES[random(0,QUALITIES.length-1)],
                        }
                    }
                });
            else
                controls.push({
                    "key": control,
                    "dev": random(0,100),
                    "devout": random(0,100),
                    "quality": QUALITIES[random(0,QUALITIES.length-1)]
                });
        });
        return {
            "id": id,
            "name": "Feature "+ id,
            "type": TYPES[random(0,TYPES.length-1)],
            "quality": QUALITIES[random(0,QUALITIES.length-1)],
            "controls": controls
        }
    });
}

function updateFeatures(features) {
    return _.map(features, function(feature, index) {
        feature.quality = QUALITIES[random(0,QUALITIES.length-1)];
        feature.controls = _.map(feature.controls, function(control, index) {
            if( control.key === "position" ) {
                control.value.x = {
                    dev: random(1,100),
                    devout: random(1,100),
                    quality: QUALITIES[random(0,QUALITIES.length-1)]
                }
                control.value.y = {
                    dev: random(1,100),
                    devout: random(1,100),
                    quality: QUALITIES[random(0,QUALITIES.length-1)]
                }
                control.value.z = {
                    dev: random(1,100),
                    devout: random(1,100),
                    quality: QUALITIES[random(0,QUALITIES.length-1)]
                }
            } else {
                control.dev = random(1,100);
                control.devout = random(1,100);
                control.quality = QUALITIES[random(0,QUALITIES.length-1)]
            }
            return control;
        });
        return feature;
    });
}

function random(a, b) {
    return _.round(_.random(a, b),3);
}

export {
    features,
    generateFeatures,
    updateFeatures
}
