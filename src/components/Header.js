import React from 'react';
import {Outlet} from 'react-router-dom';

function Header () {
    return(
        <div>
            <p>Header Here, also select time on calendar and Display Style Here</p>
            <Outlet />
        </div>
    )
}

export default Header;