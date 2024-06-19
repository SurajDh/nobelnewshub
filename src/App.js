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
  
  const apiKey = process.env.REACT_APP_NEWS_API;

    return (
      <>

        <Router>
          <div><Navbar/>
            <Routes>
              <Route exact path='/'  element={<News key="General" country="in" apiKey={apiKey} category="General" />} />
              <Route path='/Home'   element={<News key="Home" country="in" apiKey={apiKey} category="Home" />} />
              <Route path='/General'   element={<News key="General" country="in" apiKey={apiKey} category="General" />} />
              <Route path='/Business'   element={<News key="Business" country="in" apiKey={apiKey} category="Business" />} />
              <Route path='/Entertainment'   element={<News key="Entertainment" country="in" apiKey={apiKey} category="Entertainment" />} />
              <Route path='/Health'   element={<News key="Health" country="in" apiKey={apiKey} category="Health" />} />
              <Route path='/Science'   element={<News key="Science" country="in" apiKey={apiKey} category="Science" />} />
              <Route path='/Sports'   element={<News key="Sports" country="in" apiKey={apiKey} category="Sports" />} />
              <Route path='/Technology'   element={<News key="Technology" country="in" apiKey={apiKey} category="Technology" />} />
            </Routes>
          </div>
        </Router>
      </>
    )
  
}

export default App;