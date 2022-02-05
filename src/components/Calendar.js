import React from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
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

    const params = useParams()
    const firstOfMonth = new Date(params.yyyy, params.mm-1, 1)
    const weekOffset = firstOfMonth.getDay()

    function lastMonthLength(month){
        
        switch (month){
            case 1 : return 31;
            case 2 : return 31;
            case 3 : return 28;
            case 4 : return 31;
            case 5 : return 30;
            case 6 : return 31;
            case 7 : return 30;
            case 8 : return 31;
            case 9 : return 31;
            case 10 : return 30;
            case 11 : return 31;
            case 12 : return 30;
            default: return 31;
        }
    }

    let offsetDays = {}

    for (let i=weekOffset; i>0; i--){
        offsetDays[`day_-${lastMonthLength(parseInt(params.mm)) - i + 1}`] = []
    }

    offsetDays = {
        ...offsetDays,
        ...events
    }

    const keys = Object.keys(offsetDays)

    for (let i = 0; i < (42-keys.length); i++){
        offsetDays[`day_+${i+1}`] = []
    }

    const weeks = [
        [],
        [],
        [],
        [],
        [],
        [],
]

    Object.entries(offsetDays).forEach((day, index) => {
        const weekNum = (Math.floor(index/7))
        weeks[weekNum].push(day)
    })

    // console.log(weeks)

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
        {weeks.map((week, index) => {
            return <Week key={`week_${index+1}`} weekEvents={week} />
        })}
    </MonthDiv>)
}

export default Calendar;