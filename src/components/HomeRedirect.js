import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

function HomeRedirect() {
    let navigate = useNavigate()
    const date = Date() 


    function parseDate(date){
        const range = date.split(' ').slice(1, 4)
        //switch changes month from string to number
        switch (range[0]) {
            case "Jan":
                range[0] = '01';
                break;
            case "Feb":
                range[0] = '02';
                break;
            case "Mar":
                range[0] = '03';
                break;
            case "Apr":
                range[0] = '04';
                break;
            case "May":
                range[0] = '05';
                break;
            case "Jun":
                range[0] = '06';
                break;
            case "Jul":
                range[0] = '07';
                break;
            case "Aug":
                range[0] = '08';
                break;
            case "Sep":
                range[0] = '09';
                break;
            case "Oct":
                range[0] = '10';
                break;
            case "Nov":
                range[0] = '11';
                break;
            case "Dec":
                range[0] = '12';
                break;
        }
        return range;
    }

    const parsedDate = parseDate(date)

    useEffect(() => {
        navigate(`/m/${parsedDate[1]}/${parsedDate[0]}/${parsedDate[2]}`, {replace: true})
    })

    return(<div>Redirecting...</div>)
}

export default HomeRedirect;