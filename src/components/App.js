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
  let initialDate = new Date;

  const [date, setDate] = useState({
    day: initialDate.getDate().toString(),
    month: (initialDate.getMonth() + 1).toString(),
    year: initialDate.getFullYear().toString()
})

  return (
    <div className="App">
      <Routes>s
          <Route path='/' element={<Header date={date} setDate={setDate}/>}>
            <Route exact path='/m/:dd/:mm/:yyyy' element={<MonthView/>}/>
            {/* <Route path='y' element={<Year/>}/> */}
            {/* <Route exact path='/d/:DD/:MM/:YYYY' element={<Day/>}/> */}
            </Route>
      </Routes>
    </div>
  );
}

export default App;
