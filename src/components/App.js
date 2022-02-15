import '../App.css';
import {Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import Header from "./Header";
// import Week from './Week';
import MonthView from './MonthView';
import YearView from './YearView';

/* COMPONENT STRUCTURE
-App *you are here*
  -Header
    -YearSelect
    -MonthSelect
    -DaySelect
    -ViewStyle
  -DayView
    -... (consider how to re-use components between calendar views to save code)
  -MonthView
    -Calendar
      -Week
        -Day x 7 (days are the last custom component in the tree)
      -Week
      -...
      -...(enough Weeks)
  -YearView (DOES NOT TRIGGER REQUESTS TO DB ON LOAD)
    -(Whatever's in here will redirect to month and maybe day views)
*/

function App() {
  let initialDate = new Date();

  const [date, setDate] = useState({
    day: initialDate.getDate().toString(),
    month: (initialDate.getMonth() + 1).toString(),
    year: initialDate.getFullYear().toString()
})

  const [userState, setUserState] = useState('5')

  let [events, setEvents] = useState([])

  function handleDateChange(view){
    fetch(`${process.env.REACT_APP_API_URL}/${view}/${date.day}/${date.month}/${date.year}/${userState}`)
      .then(r => r.json())
      .then(resp => setEvents(resp))
  }

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Header date={date} setDate={setDate} userState={userState} setUserState={setUserState}/>}>
            <Route exact path='/m/:dd/:mm/:yyyy/:user_id' element={<MonthView date={date} userState={userState} events={events} onDateChange={handleDateChange}/>}/>
            <Route exact path='y/:dd/:mm/:yyyy/:user_id' element={<YearView date={date}/>}/>
            {/* <Route exact path='/d/:DD/:MM/:YYYY' element={<Day/>}/> */}
            </Route>
      </Routes>
    </div>
  );
}

export default App;
