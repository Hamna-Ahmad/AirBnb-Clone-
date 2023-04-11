import { useState } from 'react'
import React from 'react'
import Header from './components/Header.jsx'
import Location from './components/Location.jsx'
import data from "./data.js"
import './App.css'

function App() {
  const locationData = data.map(location => {
      return (
          <Location
          key={location.id}
          location={location}
          />
      )
      
  })
  return (
      <div className="container">
          <Header />
          <section>
              {locationData}
          </section>
      </div>
  )
}

export default App
