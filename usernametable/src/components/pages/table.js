import React, { Component } from "react";
import Row from "./row";

class Table extends Component {
  render () {
    return (
      <table id="master" ref={this.appendChild(Row)}>
        <tr>
          <th id="lastNameHead">Last Name</th>
          <th id="firstNameHead">First Name</th>
          <th id="positionHead">Position</th>
          <th id="departmentHead">Department</th>
          <th id="managerHead">Manager</th>
        </tr>
      </table>
    )
  }
}

export default Table;