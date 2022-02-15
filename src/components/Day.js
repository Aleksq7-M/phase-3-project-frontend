import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Div = styled.div`
    color: ${props => {
        if (props.hasEvents === true){
            if (props.selected === true){
                return "red"
            }else{
                return "black"
            }
        } else {
            return "gray"
        }
    }};
    font-weight: ${props => props.hasEvents ? "bold" : "normal"};
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
    overflow: hidden;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
`
const Event = styled.div`
    background-color: lightblue;
    width: 85%
    display: flex;
    max-height: 1.3em;
    overflow: hidden;
    font-weight: normal;
`
const DayNumber = styled.div`
    width: 100%;
    height: 1.5em;
    display: flex;
    content-align:left;
`

function Day({number, events, hasEvents, selected}){
    const params = useParams()

    // console.log(events)
    return(
        <Div hasEvents={hasEvents} selected={selected}>
            <DayNumber selected={number === params.dd ? true : false}>{number}</DayNumber>
            {hasEvents?
                <EventDisplay>
                {typeof events === "object" ? 
                events.map((event, index) =>{ 
                        return <Event key={index}>{event.event_name}</Event>
                    }) :
                    []
                }
            </EventDisplay> :
            []
            }
        </Div>
    )
}

export default Day;