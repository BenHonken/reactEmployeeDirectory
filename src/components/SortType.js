import React from "react";

function EmployeeInfo(props) {
  return(
  <div>
    <div className="card text-center">
      <div className="card-header">
        <h2>Order:</h2>
      </div>
      <form>
        <input onChange={props.handleInputChange} type="radio" id="1" name="sortType" value="1" checked />
        <label for="name.first">Ascending</label><br />
        <input onChange={props.handleInputChange} type="radio" id="-1" name="sortType" value="-1" />
        <label for="name.first">Decending</label><br /><br /><br />
      </form>
    </div>
  </div>)
}

export default EmployeeInfo;
