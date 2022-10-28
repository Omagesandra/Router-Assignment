import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Trainers  from './Trainers'
import ErrorBoundary from './ErrorBoundary'
import Home from './Home'
import {useState,useEffect} from "react"
import Pricing from './Pricing'
import Members from './Members'


function App() {

  return (
    <div className ="app">
      <ErrorBoundary>
      <section>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/Trainers" element = {<Trainers />} />
          <Route path = "Pricing" element = {<Pricing/>}/>
          <Route path = "Members" element = {<Members/>}/>
        </Routes>
      </section>
      </ErrorBoundary>
       </div>
  );
}
export default App;