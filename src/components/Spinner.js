// import React, { Component } from 'react'
import React from 'react'
import loading from './loading.gif'
const Spinner = () => {
    return (
      <div>
        <img src={loading} alt="loading" style={{height:'50px',width:'50px',marginLeft: '700px'}}/>
      </div>
    )
}
export default Spinner

