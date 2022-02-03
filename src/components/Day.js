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
    font-size: 0.85em;
`

const EventList = styled.ul`
    padding-left:10px;
    margin:0;
`

const DayNumber = styled.div`
    width: 100%;
    height: 1.5em;
    display: flex;
    content-align:left;
`

function Day({number, events}){

    if (events !== []){
        console.log(events)
    }
    return(
        <Div>
            <DayNumber>{number}</DayNumber>
            <EventDisplay>
                <EventList>
                    {events.map(event =>{
                        return <li>{event.event_name}</li>
                    })}
                </EventList>
            </EventDisplay>
        </Div>
    )
}

export default Day;