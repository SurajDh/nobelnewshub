import React, { Component } from 'react'
import spinner from '../../components/spinner/spinner1.gif'

function Spinner() {

  return (
    <div className="text-center">
      <img src={spinner} alt={spinner} style={{ height: "10%", width: "10%" }} />
    </div>
  )
}


export default Spinner
