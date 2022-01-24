import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 0%;
    overflow: hidden;
`
const EventDisplay = styled.div`
    height: 100%;
    text-align: left;
`

function Day({number, events}){
    return(
        <Div>
            <span>{number}</span>
            <EventDisplay>event</EventDisplay>
        </Div>
    )
}

export default Day;