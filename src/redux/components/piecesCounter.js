/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       info@marcperez.cat
@organization:  MP.
@since:         November 2017
-----------------------------------------------------------------------------*/

import React, { Component } from 'react';

const PiecesCounter = (val, onComplete, pieces) => {
    class Counter extends Component {
        constructor (props) {
            super(props);
            this.state = { counter: props.val }
        }

        render() {
            const x = this;
            const { onComplete, pieces } = this.props;
            let { counter } = this.state;

            setTimeout(function() {
                if( counter > 0 ) {
                    x.setState({ counter: counter - 1 });
                } else {
                    onComplete();
                }
            }, 1000);
            const style = {
                color: "#fff",
                fontSize: "18px",
                display: "inline-block",
                float: "right"
            };
            const pStyle = {
                display: "inline-block",
                float: "right",
                margin: "3px 0",
                padding: 0,
                lineHeight: 1.5
            };
            return (
                <div style={style}>
                    <p style={pStyle}> Next piece coming in:
                        <strong style={{display: "inline-block", textAlign: "right", width: "25px"}}>{counter}</strong>
                    </p>
                    <p style={{...pStyle, clear:"right"}}>Total:
                        <strong style={{display: "inline-block", textAlign: "right", width: "25px"}}>{pieces}</strong>
                    </p>
                </div>
            );
        }
    }
    return <Counter val={val} onComplete={onComplete} pieces={pieces} />
}

export default PiecesCounter;
