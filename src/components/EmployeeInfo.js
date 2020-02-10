import React from "react";
import EmployeeList from "../data/employees.json";

function EmployeeInfo(props) {
  console.log(props)

  const results = EmployeeList.filter(employee => employee.make.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <div className="text-center">
      {results.length > 0 ? (
        <ul className="list-group">
          <h2>Employees</h2>
          {results.map(result => (
            <li className="list-group-item" key={result.id}>
              <b>{result.year}</b> {result.make} {result.model}
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
}

export default EmployeeInfo;
