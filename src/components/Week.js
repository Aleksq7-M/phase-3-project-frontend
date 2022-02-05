import React from 'react';
import styled from 'styled-components';
import Day from './Day';

const WeekDiv = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
`

function Week({weekEvents}){

    //weekEvents = [
    //     ['day_x', [...events]],
    //     ...
    // ]

    return(<WeekDiv>
        {weekEvents.map(day => {
            const number = day[0].split('_')[1]
            return (number.includes('+') || number.includes('-')?
            <Day key={day[0]} number={number.slice(1)} /> :
            <Day key={day[0]} number={number} events={day[1]} smart/>)
        })}
    </WeekDiv>)
}
 export default Week;