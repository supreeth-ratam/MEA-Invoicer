import React from 'react'

export default function Form(props) {
  return (
    <div className='d-flex flex-row align-items-center justify-content-center flex-wrap form my-3'>
      <div className="form-item">
      <label htmlFor="text" className='mx-3'>Name</label>
      <input type="text" name="name" id="name" value = {props.name}  onChange ={props.changeName} />
      </div>
      <div className="form-item">
      <label htmlFor="rollno" className='mx-3'>Roll Number</label>
      <input type="text" name="number" id="number" value={props.roll} onChange ={props.changeRoll} />
      </div>
      
    </div>
  )
}
