import React from 'react';
import styled from 'styled-components';
import Week from './Week';

const MonthDiv = styled.div`
    width: 75%
`

const CalendarHeader = styled.div`
    height:25px;
    width: 100%;
    border: solid 1px black;
    display: flex;
`

const DayLabel = styled.strong`
    border: 0;
    text-align: center;
    height: 25px;
    display: flex;
    flex-grow: 1;
    justify-content: center;
`

function Calendar({events}) {

    return( 
    <MonthDiv>
        <CalendarHeader id='week_0'>
            <DayLabel>S</DayLabel>
            <DayLabel>M</DayLabel>
            <DayLabel>T</DayLabel>
            <DayLabel>W</DayLabel>
            <DayLabel>T</DayLabel>
            <DayLabel>F</DayLabel>
            <DayLabel>S</DayLabel>
        </CalendarHeader>
        {Object.entries(events).map((week, index) => {
            return <Week key={`week_${index+1}`} events={week} />
        })}
    </MonthDiv>)
}

export default Calendar;