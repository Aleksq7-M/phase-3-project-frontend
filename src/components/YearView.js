import React from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import Calendar from "./Calendar";
import Week from "./Week";
import Day from "./Day";

const YearContainer = styled.div`
    position: absolute;
    top: 6em;
    width: 100%
`

function YearView({date, onDateChange}){

    // console.log(events)

    // let params = useParams();

    return(
        <YearContainer>

        </YearContainer>
    )
}

export default YearView;