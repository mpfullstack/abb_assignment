/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       info@marcperez.cat
@organization:  MP.
@since:         November 2017
-----------------------------------------------------------------------------*/

import styled from 'styled-components';

const Header = styled.div`
    padding: 15px 10px;
    background-color: ${props => {
        if( props.quality === 'high' )
            return "#329a5d";
        else if( props.quality === 'medium' )
            return "#e9c704";
        else
            return "#f02f40";
    }}
`;

const Title = styled.h1`
    font-size: 16px;
    color: #fff;
    display: inline-block;
`;

export { Header, Title };
