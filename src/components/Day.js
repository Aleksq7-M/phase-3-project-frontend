import React from 'react';
import styled from 'styled-components';

const DayContainer = styled.div`
    position: absolute;
    top: 6em;
    width: 100%
`

function Day(){
    return(
        <DayContainer className='Day'>
            Day Here
        </DayContainer>
    )
}

export default Day;