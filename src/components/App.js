import '../App.css';
import {Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import Header from "./Header";
import MonthView from './MonthView';

/* COMPONENT STRUCTURE
-App *you are here*
  -Header
    -UserSelect
    -YearSelect
    -MonthSelect
    -DaySelect
  -MonthView
    -Calendar
      -Week
        -Day x 7 (days are the last custom component in the tree)
      -Week
      -...
      -...(enough Weeks)
*/

function App() {
  let initialDate = new Date();

  const [date, setDate] = useState({
    day: initialDate.getDate().toString(),
    month: (initialDate.getMonth() + 1).toString(),
    year: initialDate.getFullYear().toString()
})


  let [events, setEvents] = useState([])



  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Header date={date} setDate={setDate} setEvents={setEvents}/>}>
            <Route exact path='/m/:dd/:mm/:yyyy/:user_id' element={<MonthView date={date} events={events}/>}/>
            {/* <Route exact path='y/:dd/:mm/:yyyy/:user_id' element={<YearView date={date}/>}/> */}
            {/* <Route exact path='/d/:DD/:MM/:YYYY' element={<Day/>}/> */}
            </Route>
      </Routes>
    </div>
  );
}

export default App;
