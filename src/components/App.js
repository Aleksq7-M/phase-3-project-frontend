import '../App.css';
import {Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import Header from "./Header";
import Day from './Day';
// import Week from './Week';
import Month from './Month';
// import Year from './Year';

/* COMPONENT STRUCTURE
-App *you are here*
  -Header
    -YearSelect
    -MonthSelect
    -DaySelect
    -ViewStyle
    -Day
    -Week
    -Month ~default view.
            Route "/" automatically redirects to the
            the month view of the current date~
    -Year
*/

function App() {

  // const events = ServerFetch()

  const currentDate = Date()

  console.log(currentDate)


  const date = useState({
    day:'1',
    month:'1',
    year:'1970'
  })


  return (
    <div className="App">
      <Header />
      <Routes>
          <Route exact path='/m/:DD/:MM/:YYYY' element={<Month/>} date={date}/>
          {/* <Route path='y' element={<Year/>}/> */}
          <Route exact path='/d/:DD/:MM/:YYYY' element={<Day/>}/>
      </Routes>
    </div>
  );
}

export default App;
