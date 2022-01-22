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
            <label htmlFor='day-select'>
                <select name='day' id='day-select'>
                    <option>1</option>
                </select>
            </label>
        </Background> 
    )
}

export default Header;