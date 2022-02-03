import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Day from './Day'

const WeekDiv = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
`

function Week({events}){

    const params = useParams()

    const monthStart = Date.UTC(params.yyyy, params.mm-1, 1, 0, 0, 0, 0)/1000
    const weekNum = events[0].split('_')[1]

    const eventsSortedByDay = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ]

    events.forEach((item) =>{
        if (typeof item !== 'string'){
            item.forEach(event =>{
                const index = ((event.event_start - monthStart)/86400)%7
                eventsSortedByDay[index].push(event) 
            })
        }
    })

    console.log(eventsSortedByDay)


    return(<WeekDiv>
        {eventsSortedByDay.map((day, index) => {
            return <Day key={(index+1)+ (7*(weekNum-1))} number={(index+1)+(7*(weekNum-1))} events={day}/>
        })}
    </WeekDiv>)
}
 export default Week;