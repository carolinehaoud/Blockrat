import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom"

import MapPage from "./MapPage"
import LandingPage from "./LandingPage"

import "./App.css"

export default function App() {
  
  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/">
            About
          </NavLink>
          <NavLink to="/map">
            Map
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="map" element={<MapPage/>}/>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
    
  )
}