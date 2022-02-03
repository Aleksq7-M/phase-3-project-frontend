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

function MonthView({date, events, onDateChange}) {

    let params = useParams();


    useEffect(() => {
        onDateChange('m', params.dd, params.mm, params.yyyy)
    }, [date])


    return(
        <MonthContainer>
            <Calendar events={events}>
            </Calendar>
        </MonthContainer>
    )
}

export default MonthView;