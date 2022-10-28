import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import App from './App'



const Home = () => {
  return (
  <div>
      <section className="myNav">
        <NavLink to ="/" className="navBar">Home </NavLink>
        <NavLink to ="/Trainers" className="navBar">Trainers</NavLink>
        <NavLink to ="/Pricing" className="navBar"> Pricing</NavLink>
        <NavLink to = "/Members" className="navBar">Members</NavLink>
      </section>
      <div className="home-page">
        <h1 className="title"><span>S-</span>FITNESS</h1>
        <p className="title-body">STAY HEALTHY AND FIT</p>
        <button className="homeBtn">JOIN NOW ></button>
       </div>
    
    </div>
      )
  };
        
export default Home