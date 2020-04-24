import React, { Component } from "react"

const classNames = ["lastName", "firstName", "position", "department", "manager"]
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones"];
const firstNames = ["James", "John", "Robert", "Michael", "William"];
const positions = ["Manager", "Manager", "Engineer", "Engineer", "Intern"];
const departments = ["Front-End", "Back-End", "Front-End", "Back-End", "Back-End"];
const managers = ["NULL", "NULL", "James Smith", "John Johnson", "John Johnson"];

class Row extends Component {
  render () {
    var lastName = document.createElement('td');
    lastName.innerText = lastNames[2];
    lastName.className = classNames[0];
    var firstName = document.createElement('td');
    firstName.innerText = firstNames[2];
    firstName.className = classNames[1];
    var position = document.createElement('td');
    position.innerText = positions[2];
    position.className = classNames[2];
    var department = document.createElement('td');
    department.innerText = departments[2];
    department.className = classNames[3];
    var manager = document.createElement('td');
    manager.innerText = managers[2];
    manager.className = classNames[4];

    return (
      <tr class="employee" ref={
        this.appendChild(lastName),
        this.appendChild(firstName),
        this.appendChild(position),
        this.appendChild(department),
        this.appendChild(manager)
      }></tr>
    )
  }
}

export default Row;