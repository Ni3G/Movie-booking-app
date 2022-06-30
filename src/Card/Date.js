import React  from "react";
import './Date.css';

export default function SelectDate(){
  return(
      <div className="date-div">
        <p><label>Release Date Start</label></p>
          <input className="date-bar" type="date" id="start" placeholder="dd/mm/yyyy" name="trip-start" />
        <p><label>Release Date End</label></p>
          <input className="date-bar" type="date" id="start" placeholder="dd/mm/yyyy" name="trip-start" />
      </div>
  )
}