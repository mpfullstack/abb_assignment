/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       info@marcperez.cat
@organization:  MP.
@since:         November 2017
-----------------------------------------------------------------------------*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../reducers';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { updateFeatures } from '../../data/features';
import 'antd/dist/antd.css';
import InnerContentWrapper from './innerContentWrapper.style.js';
import Feature from './feature';
import PiecesCounter from '../components/piecesCounter';

const { Header, Content } = Layout;
const refreshFeatures = actions.refreshFeatures;

class Features extends Component {
    constructor(props) {
        super(props);
        this.refreshFeatures = this.refreshFeatures.bind(this);
    }
    refreshFeatures() {
        const { refreshFeatures, features } = this.props;
        refreshFeatures(updateFeatures(features));
    }
    render() {
        const { features, pieces } = this.props;
        return (
            <div>
                <Layout>
                    <Header>
                        <h1 style={{color: "#fff", fontSize: "30px", float: "left"}}>Part A</h1>
                        {PiecesCounter(10, this.refreshFeatures, pieces)}
                    </Header>
                    <Content>
                        <InnerContentWrapper>
                            <Row gutter={16}>
                                <Col className="gutter-row" xs={24} sm={12} md={9} lg={9} xl={9}>
                                    <Feature feature={features[0]} />
                                </Col>
                                <Col className="gutter-row" xs={24} sm={12} md={15} lg={15} xl={15}>
                                    <Row gutter={16}>
                                        <Col className="gutter-row" xs={24} sm={24} md={8} lg={8} xl={8}>
                                            <Feature feature={features[1]} />
                                            <Feature feature={features[2]} />
                                        </Col>
                                        <Col className="gutter-row" xs={24} sm={24} md={8} lg={8} xl={8}>
                                            <Feature feature={features[3]} />
                                            <Feature feature={features[4]} />
                                        </Col>
                                        <Col className="gutter-row" xs={24} sm={24} md={8} lg={8} xl={8}>
                                            <Feature feature={features[5]} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </InnerContentWrapper>
                    </Content>
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        features: state.Feature.toJS().features,
        pieces: state.Feature.toJS().pieces
    };
};

export default connect(mapStateToProps, { refreshFeatures })(Features);
