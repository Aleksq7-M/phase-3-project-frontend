import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    color: ${props => props.smart ? "black" : "grey"};
    font-weight: ${props => props.smart ? "bold" : "normal"};
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
    font-size: 0.85em;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
`

const Event = styled.div`
    background-color: lightblue;
    width: 85%
    max-height: 1em;
    overflow: hidden;
    font-weight: normal;
`

const DayNumber = styled.div`
    width: 100%;
    height: 1.5em;
    display: flex;
    content-align:left;
`

function Day({number, events, smart}){

console.log(events)
    return(
        <Div smart={smart}>
            <DayNumber>{number}</DayNumber>
            <EventDisplay>
                {/* <EventList>
                    {typeof events === "object" ? 
                    events.map(event =>{
                        return <li>{event.event_name}</li>
                    }) :
                    []
                }
                </EventList> */}
                {typeof events === "object" ? 
                events.map(event =>{ 
                        return <Event>{event.event_name}</Event>
                    }) :
                    []
                }
            </EventDisplay>
        </Div>
    )
}

export default Day;