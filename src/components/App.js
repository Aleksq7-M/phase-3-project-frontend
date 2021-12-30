import '../App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Header from "./Header"
import Day from './Day'
// import Week from './Week'
import Month from './Month'
// import Year from './Year'

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
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Month/>}/>
          <Route path='d' element={<Day/>}/>
          {/* <Route path='w' element={<Week/>}/> */}
          <Route path='m' element={<Month/>}/>
          {/* <Route path='y' element={<Year/>}/> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
