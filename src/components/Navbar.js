import React, { useState } from 'react'
import logopic from './NNH.png'
import {
  Link,
  useLocation
} from "react-router-dom";


 function Navbar () {
  
  let location = useLocation();

    const [collapsed, setCollapsed] = useState(false);

    const handleToggleMenu = () => {
      setCollapsed(!collapsed);
    };
  


    return (<>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid" >

            <Link className="navbar-brand" to="/">
              <img src={logopic} alt="logo" style={{borderRadius:"50%",width:"2.5rem"}}/> NobelNewsHub</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={collapsed} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" ><Link onClick={handleToggleMenu} className={`nav-link nav-item ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link></li>
                <li className="nav-item" ><Link onClick={handleToggleMenu} className={`nav-link nav-item ${location.pathname === "/Business" ? "active" : ""}`} to="/Business">Business</Link></li>
                <li className="nav-item" ><Link onClick={handleToggleMenu} className={`nav-link nav-item ${location.pathname === "/Entertainment" ? "active" : ""}`} to="/Entertainment">Entertainment</Link></li>
                <li className="nav-item" ><Link onClick={handleToggleMenu} className={`nav-link nav-item ${location.pathname === "/General" ? "active" : ""}`} to="/General">General</Link></li>
                <li className="nav-item" ><Link onClick={handleToggleMenu} className={`nav-link nav-item ${location.pathname === "/Health" ? "active" : ""}`} to="/Health">Health</Link></li>
                <li className="nav-item" ><Link onClick={handleToggleMenu} className={`nav-link nav-item ${location.pathname === "/Science" ? "active" : ""}`} to="/Science">Science</Link></li>
                <li className="nav-item" ><Link onClick={handleToggleMenu} className={`nav-link nav-item ${location.pathname === "/Sports" ? "active" : ""}`} to="/Sports">Sports</Link></li>
                <li className="nav-item" ><Link onClick={handleToggleMenu} className={`nav-link nav-item ${location.pathname === "/Technology" ? "active" : ""}`} to="/Technology">Technology</Link></li>

              </ul>

            </div>

          </div>
        </nav>
      </div>
    </>
    )

  }

  export default Navbar

