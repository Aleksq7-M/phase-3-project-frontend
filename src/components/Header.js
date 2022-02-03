import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

const Background = styled.div`
    background-color: gray;
    width: 100%;
    height: 6em;
    margin-top: 0;
    
`

function Header ({date, setDate}) {

    let navigate = useNavigate()

    const {day, month, year} = date

    const [viewState, setViewState] = useState('m')

    useEffect(() => {
        navigate(`/${viewState}/${day}/${month}/${year}`, {replace: true})
    }, [date, viewState])


    function handleDateChange(event){
        const {name, value} = event.target
        const updatedDate = {
            ...date,
            [name]: value
        }
        setDate(updatedDate)
    }

    const dayOptions = [];
    for (let i=1; i<32; i++){
        dayOptions.push(
            <option key = {i} name={`${i}`} value={i}>{i}</option>
        )
    }

    const monthOptions = [];
    for (let i=1; i<13; i++){
        monthOptions.push(
            <option key={i} name={`${i}`} value={i}>{i}</option>
        )
    }

    const yearOptions = [];
    for (let i=1970; i<2039;i++){
        yearOptions.push(
            <option key={i} name={`${i}`} value={i}>{i}</option>
        )
    }

    return(
        <Background>
            <label htmlFor='day-select'>
                Day:
                <select name='day' id='day-select' value={day} onChange={handleDateChange}>
                    {dayOptions}
                </select>
            </label>
            <label htmlFor='month-select'>
                Month: 
                <select name='month' id='month-select' value={month} onChange={handleDateChange}>
                    {monthOptions}
                </select>
            </label>
            <label htmlFor='year-select'>
                Year:
                <select name='year' id='year-select' value={year} onChange={handleDateChange}>
                    {yearOptions}
                </select>
            </label>
            <label htmlFor='view-select'>
                View:
                <select name='view' id='view-select' value={viewState} onChange={(e) => setViewState(e.target.value)}>
                    <option name='day' value='d'>Day</option>
                    <option name='week' value='w'>Week</option>
                    <option name='month' value='m'>Month</option>
                    <option name='year' value='y'>Year</option>
                </select>
            </label>
            <Outlet/>
        </Background> 
    )
}

export default Header;