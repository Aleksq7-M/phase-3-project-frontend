import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-color: gray;
    width: 100%;
    height: 6em;
    margin-top: 0;
    
`

function Header ({params}) {

    const dayOptions = [];
    for (let i=1; i<32; i++){
        dayOptions.push(
            <option name={`${i}`} value={i<10?`0${i}`:`${i}`}>{i}</option>
        )
    }

    const monthOptions = [];
    for (let i=1; i<13; i++){
        monthOptions.push(
            <option name={`${i}`} value={i<10?`0${i}`:`${i}`}>{i}</option>
        )
    }

    const yearOptions = [];
    for (let i=1970; i<2039;i++){
        yearOptions.push(
            <option name={`${i}`} value={i}>{i}</option>
        )
    }

    return(
        <Background>
            <label htmlFor='day-select'>
                Day:
                <select name='day' id='day-select'>
                    {dayOptions}
                </select>
            </label>
            <label htmlFor='month-select'>
                Month: 
                <select name='month' id='month-select'>
                    {monthOptions}
                </select>
            </label>
            <label htmlFor='year-select'>
                Year:
                <select name='year' id='year-select'>
                    {yearOptions}
                </select>
            </label>
            <label htmlFor='view-select'>
                View:
                <select name='year' id='year-select'>
                    <option name='day' value='d'>Day</option>
                    <option name='week' value='w'>Week</option>
                    <option name='month' value='m'>Month</option>
                    <option name='year' value='y'>Year</option>
                </select>
            </label>
        </Background> 
    )
}

export default Header;