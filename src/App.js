import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App () {

    return (
      <>

        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<News key="General" country="in" category="General" />} />
              {/* <Route exact path='netlify.app' element={<News key="NewsWave" country="in" category="NewsWave" />} /> */}
              <Route exact path='nobelnewshunt' element={<News key="NewsWave" country="in" category="NewsWave" />} />
              <Route exact path='Home' element={<News key="Home" country="in" category="Home" />} />
              <Route exact path='General' element={<News key="General" country="in" category="General" />} />
              <Route exact path='Business' element={<News key="Business" country="in" category="Business" />} />
              <Route exact path='Entertainment' element={<News key="Entertainment" country="in" category="Entertainment" />} />
              <Route exact path='Health' element={<News key="Health" country="in" category="Health" />} />
              <Route exact path='Science' element={<News key="Science" country="in" category="Science" />} />
              <Route exact path='Sports' element={<News key="Sports" country="in" category="Sports" />} />
              <Route exact path='Technology' element={<News key="Technology" country="in" category="Technology" />} />
            </Routes>
          </div>
        </Router>
      </>
    )
  
}

export default App;