import { useState, useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import Invoice from "./components/Invoice";
import ReactToPrint from "react-to-print";

function App() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }

  function handleRoll(event) {
    setRoll(event.target.value);
  }

  const componentRef = useRef();

  return (
    <>
    <Form changeName={handleName} changeRoll={handleRoll} />
    <div className="container main border border-secondary rounded p-3">
    <ReactToPrint trigger={() => <button className="btn btn-danger mx-3">Download PDF</button>} content={() => componentRef.current}/>
    <div  ref={componentRef}>      
      <Invoice name={name} roll={roll}/>    
     
    </div>
    </div></>
  );
}

export default App;
