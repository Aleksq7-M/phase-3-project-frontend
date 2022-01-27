import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Day from './MonthChildren/Day';

const MonthContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 6em;
    display: flex;
    justify-content: right;
    align-content: right;
`
const Calendar = styled.div`
    width: 75%;
`
const Week = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
`
const CalendarHeader = styled(Week)`
    height:25px;
`

const DayLabel = styled.strong`
    border: 0;
    text-align: center;
    height: 25px;
    display: flex;
    flex-grow: 1;
    justify-content: center;
`

function MonthView() {

    let params = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/m/${params.dd}/${params.mm}/${params.yyyy}`)
        .then(r => r.json())
        .then(resp => console.log(resp))
    })


    return(
        <MonthContainer>
            <Calendar>
                <CalendarHeader id='week0'>
                    <DayLabel>S</DayLabel>
                    <DayLabel>M</DayLabel>
                    <DayLabel>T</DayLabel>
                    <DayLabel>W</DayLabel>
                    <DayLabel>T</DayLabel>
                    <DayLabel>F</DayLabel>
                    <DayLabel>S</DayLabel>
                </CalendarHeader>
                <Week id='week1'>
                    <Day number = '1'/>
                    <Day number = '2'/>
                    <Day number = '3'/>
                    <Day number = '4'/>
                    <Day number = '5'/>
                    <Day number = '6'/>
                    <Day number = '7'/>
                </Week>
                <Week id='week2'>
                    <Day number = '8'/>
                    <Day number = '9'/>
                    <Day number = '10'/>
                    <Day number = '11'/>
                    <Day number = '12'/>
                    <Day number = '13'/>
                    <Day number = '14'/>
                </Week>
                <Week id='week3'>
                    <Day number = '15'/>
                    <Day number = '16'/>
                    <Day number = '17'/>
                    <Day number = '18'/>
                    <Day number = '19'/>
                    <Day number = '20'/>
                    <Day number = '21'/>
                </Week>
                <Week id='week4'>
                    <Day number = '22'/>
                    <Day number = '23'/>
                    <Day number = '24'/>
                    <Day number = '25'/>
                    <Day number = '26'/>
                    <Day number = '27'/>
                    <Day number = '28'/>
                </Week>
                <Week id='week5'>
                    <Day number = '29'/>
                    <Day number = '30'/>
                    <Day number = '31'/>
                    <Day number = '32'/>
                    <Day number = '33'/>
                    <Day number = '34'/>
                    <Day number = '35'/>
                </Week>
                <Week id='week6'>
                    <Day number = 'e1'/>
                    <Day number = 'e2'/>
                    <Day number = 'e3'/>
                    <Day number = 'e4'/>
                    <Day number = 'e5'/>
                    <Day number = 'e6'/>
                    <Day number = 'e7'/>
                </Week>
            </Calendar>
        </MonthContainer>
    )
}

export default MonthView;