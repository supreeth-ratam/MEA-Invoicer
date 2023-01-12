import React from "react";


export default function Invoice(props) {
  let today = new Date();
  let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
  let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${today.getMonth() + 1}`;
  let year = `${today.getFullYear()}`;
  
  return (
    <div className="invoice">
      <div className="header d-flex justify-content-start mb-6">
        <div ><img src="assets/logo.png" alt="not found" className="logo"/>
        <h2>Fund for 2022 Batch</h2>
        </div>
        <h3  id="main-head">Mechanical Engineering Association</h3>
        
      </div>
      <h1 className="pad">Invoice</h1>
      <div className="details my-3">
        
        <div className="name">
          <h3>{props.name}</h3>
        </div>
        <div className="roll">
          <h5>{props.roll}</h5>
        </div>
        <div className="date">
          <p>
            {day}/{month}/{year}
          </p>
        </div>
      </div>
      <div className="description my-4 ">
        <p>
          This invoice is to confirm that you have paid amount Rs 500 only
          towards one time funding in Mechanical Engineering Association (MEA)
          for the year 2022-2026/27
        </p>
      </div>
      <div className="issued">
          <h3>Issued By:</h3>
          <p>Parag Bajaj</p>
          <p className="bold">(DG Sec)</p>
      </div>
    </div>
  );
}
