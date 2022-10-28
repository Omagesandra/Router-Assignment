import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import App from './App'



const Pricing = () => {
  return (
  <div>
      <section className="myNav">
        <NavLink to ="/" className="navBar">Home </NavLink>
        <NavLink to ="/Users" className="navBar">Trainers</NavLink>
        <NavLink to ="/Pricing" className="navBar"> Pricing</NavLink>
        <NavLink to = "/Members" className="navBar">Members</NavLink>
      </section>
    <div className="pricing">
    <h1 className="price-header">PRICE LIST</h1>
      <div className="list">
      <h2 className="topic">PERSONAL TRAINING</h2>
      <ul>
        <li>30 minutes blast...........N10000</li>
        <li>Rehab......................N12000</li>
        <li>Circuit Training...........N14000</li>
        <li>Sport Conditioning.........N16000</li>
        <li>HIIT Training..............N10000</li>
      </ul>
      <h2 className="topic">MEMBERSHIP FORM </h2>
      <ul>
        <li>6 months...................N30000</li>
        <li>12 months..................N35000</li>
        <li>24 months..................N45000</li>
      </ul>
      <h2 className="topic">INTERACTIVE PPROGRAMS</h2>
      <ul>
        <li>Boxing.....................N12000</li>
        <li>Kickboxing.................N15000</li>
        <li>Crossfit...................N15000</li>
        <li>Musy Thai..................N16000</li>
      </ul>
    </div>
    
    </div>
  </div>
   
)
};
export default Pricing;