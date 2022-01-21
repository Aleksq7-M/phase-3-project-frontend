import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-color: gray;
    width: 100%;
    height: 6em;
    margin-top: 0;
    
`

function Header () {
    return(
        <Background>
            <label for='day'>
                <select id='day'>
                    <option></option>
                </select>
            </label>
        </Background> 
    )
}

export default Header;