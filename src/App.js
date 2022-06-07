import React, { useState, useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import Invoice from "./components/Invoice";
import ReactToPrint from "react-to-print";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Login from "./components/Login";


function App() {

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [user,setUser] = useState(false)
  
  const [pass,setPass] = useState(false)

  function handleName(event) {
    setName(event.target.value);
  }

  function handleRoll(event) {
    setRoll(event.target.value);
  }
  function handleValidate(details){
    if(details.username === "council@mea"){
      if(details.password === "iAmNotCreative"){
        setUser(true)
      }else{
        console.log("Enter valid password")
        setPass(true)
      }
    }else{
      setPass(true)
      console.log("enter valid username")
    }
  }
  const componentRef = useRef();

  return (
    <>
    <Router>
    <Routes>
    {/* <Route path = "/login" element={<Login validate = {handleValidate}/>} />   */}
    <Route path = "/" element={
    <React.Fragment>
      {!user?<Login validate = {handleValidate}  pass = {pass}/>:
      <React.Fragment>
    <Form changeName={handleName} changeRoll={handleRoll} />  
    <div className="container main border border-secondary rounded p-3">
    <ReactToPrint trigger={() => <button className="btn btn-danger mx-3">Download PDF</button>} content={() => componentRef.current}/>
    <div  ref={componentRef} className="my-3">      
    <Invoice name={name} roll={roll}/>    
    </div>
    </div>
    </React.Fragment>}
      </React.Fragment>}/>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
