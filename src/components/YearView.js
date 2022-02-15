import React from "react";
import styled from 'styled-components';

const YearContainer = styled.div`
    position: absolute;
    top: 6em;
    width: 100%
`

function YearView({date}){
    return(
        <YearContainer>Year View!</YearContainer>
    )
}

export default YearView;