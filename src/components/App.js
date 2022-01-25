import '../App.css';
import {Routes, Route, useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Header from "./Header";
import HomeRedirect from './HomeRedirect'
// import Day from './Day';
// import Week from './Week';
import MonthView from './MonthView';
// import Year from './Year';

/* COMPONENT STRUCTURE
-App *you are here*
  -Header
    -YearSelect]
    -MonthSelect]
    -DaySelect]
    -ViewStyle]
  -HomeRedirect(automatically redirects from route '/' to a month view of the current date)
  -DayView
    -...
  -WeekView
    -...
  -MonthView
    -Day
  -YearView
*/

function App() {
  const [events, setEvents] = useState([])
  const [date, setDate] = useState({
    day: '01',
    month: '01',
    year: '1970',
  })

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/events`)
  //   .then(r => r.json())
  //   .then(resp => console.log(resp))
  // })

  function handleDateChange(name, value){
    const updatedDate = {
      ...date,
      [name]: value
    }
    setDate(updatedDate)
  }

  return (
    <div className="App">
      <Header date={date} onDateChange={handleDateChange}/>
      <Routes>
          <Route exact path='/' element={<HomeRedirect/>}/>
          <Route exact path='/m/:DD/:MM/:YYYY' element={<MonthView/>}/>
          {/* <Route path='y' element={<Year/>}/> */}
          {/* <Route exact path='/d/:DD/:MM/:YYYY' element={<Day/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
