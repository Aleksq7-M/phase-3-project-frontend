import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from './Calendar';

const MonthContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 6em;
    display: flex;
    justify-content: center;
    align-content: center;
`

function MonthView({events,date}) {
    return(
        <MonthContainer>
            <Calendar date={date} events={events} hasEvents>
            </Calendar>
        </MonthContainer>
    )
}

export default MonthView;