/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       info@marcperez.cat
@organization:  MP.
@since:         November 2017
-----------------------------------------------------------------------------*/

import React, { Component } from 'react';
import { Table } from 'antd';
import Ionicon from 'react-ionicons'
import { Header, Title } from './feature.style.js';

const _ = require('lodash');

const getIcon = (quality) => {
    switch(quality) {
        case "high":
            return "md-checkmark-circle";
        case "medium":
            return "md-alert";
        default:
            return "md-close-circle";
    }
}

const getIconColor = (quality) => {
    if( quality === 'high' )
        return "#329a5d";
    else if( quality === 'medium' )
        return "#e9c704";
    else
        return "#f02f40";
}

class FeatureHeader extends Component {
    render() {
        const { title, quality } = this.props;
        return (
            <Header quality={quality}>
                <Title>{title}</Title>
                <div style={{float: "right", padding: "0"}}>
                    <Ionicon icon={getIcon(quality)} fontSize="26px" color="#fff" />
                </div>
            </Header>
        );
    }
}

class FeatureContent extends Component {
    tableDataAdapter(feature) {
        return _.reduce(feature.controls, function(accumulator, control) {
            if( control.key === "position" ) {
                accumulator = _.reduce(control.value, function(accumulator, position, key) {
                    accumulator.data.push({
                        key: feature.name + key,
                        name: _.upperFirst(key),
                        dev: position.dev,
                        devout: position.devout,
                        quality: position.quality
                    });
                    return accumulator;
                }, accumulator);
            } else {
                accumulator.data.push({
                    key: feature.name + control.key,
                    name: _.upperFirst(control.key),
                    dev: control.dev,
                    devout: control.devout,
                    quality: control.quality
                });
            }
            return accumulator;
        }, {
            columns: [
                {title:"Control", dataIndex:"name"},
                {title:"Dev", dataIndex:"dev"},
                {title:"Dev Out Tot", dataIndex: "devout"},
                {title:"", dataIndex:"quality", render: (text, record) => {
                    return (
                        <div style={{float: "right", padding: "2px"}}>
                            <Ionicon icon={getIcon(text)} fontSize="22px" color={getIconColor(text)} />
                        </div>
                    );
                }}
            ],
            data: []
        });
    }
    render() {
        const { feature } = this.props;
        const { columns, data } = this.tableDataAdapter(feature);
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false} />
            </div>
        );
    }
}


export { FeatureHeader, FeatureContent };
