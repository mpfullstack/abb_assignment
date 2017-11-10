/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       info@marcperez.cat
@organization:  MP.
@since:         November 2017
-----------------------------------------------------------------------------*/

const _ = require('lodash');

const TYPES = ["Seam", "Slot", "Hole"];

/* Feature Object
 * -----------------------------------------------------------------------------
{
    "name": "Feature A",
    "type": "Seam", [Seam, Slot, Hole],
    "position": {
        "x": 1.112, "y": 2.132, "z": 0.211
    }
    "diameter": 10,
    "length": 9,
    "weight": 9,
    "controls": [
        {
            "position": {
                "x": 1.212, "y": 2,332, "z": 0.232
            }
        },
        {"diameter": {"value": 12.32, "},
        {"length": 10.23}
        {"weight": 10}
    ]
}
*/

const FEATURE_NAMES = ['A','C','D','E'];

const features = generateFeatures(10);
console.log(features);

function generateFeatures(num) {
    return _.map(_.range(num), function(value, index) {
        let id = FEATURE_NAMES[_.random(0,FEATURE_NAMES.length-1)] + _.pad(_.random(0,1000), 4, "0");
        return {
            "id": id,
            "name": "Feature "+ id,
            "type": TYPES[_.random(0,TYPES.length-1)],
            "position": {
                "x": _.random(0,1.5), "y": _.random(0,1.5), "z": _.random(0,1.5)
            },
            "diameter": _.random(1,10.5),
            "length": _.random(5,20.5),
            "weight": _.random(10,50.5),
            "controls": [
                {
                    "position": {
                        "x": _.random(0,1.5),
                        "y": _.random(0,1.5),
                        "z": _.random(0,1.5)
                    }
                },
                {"diameter": _.random(1,10.5)},
                {"length": _.random(5,20.5)},
                {"weight": _.random(10,50.5)}
            ]
        }
    });
}

export {
    features,
    generateFeatures
}
