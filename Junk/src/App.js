import React from 'react';
import './App.css';


const headers = ["Last Name", "First Name", "Position", "Department", "Manager"]
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones"];
const firstNames = ["James", "John", "Robert", "Michael", "William"];
const positions = ["Manager", "Manager", "Engineer", "Engineer", "Intern"];
const departments = ["Front-End", "Back-End", "Front-End", "Back-End", "Back-End"];
const managers = ["NULL", "NULL", "James Smith", "John Johnson", "John Johnson"];

function App() {
  const filterTable = () => {var e,t,n,a;for(e=document.value.toUpperCase(),t=document.getElementsByTagName("table").getElementsByTagName("tr"),a=0;a<t.length;a++)(n=t[a].getElementsByTagName("td")[0])&&(-1<(n.textContent||n.innerText).toUpperCase().indexOf(e)?t[a].style.display="":t[a].style.display="none")};
  const sortTable = () => {var e,t,r,n,o,a,s;for(e=document.getElementsByTagName("table"),r=!0;r;){for(r=!1,t=e.rows,n=1;n<t.length-1;n++)if(s=!1,o=t[n].getElementsByTagName("TD")[0],a=t[n+1].getElementsByTagName("TD")[0],o.innerHTML.toLowerCase()>a.innerHTML.toLowerCase()){s=!0;break}s&&(t[n].parentNode.insertBefore(t[n+1],t[n]),r=!0)}};
  var table = document.createElement("table");
  var rowHead = document.createElement("tr");
  var lastNameHead = document.createElement("th");
  lastNameHead.innerText = headers[0];
  rowHead.appendChild(lastNameHead);
  var firstNameHead = document.createElement("th");
  firstNameHead.innerText = headers[1];
  rowHead.appendChild(firstNameHead);
  var positionHead = document.createElement("th");
  positionHead.innerText = headers[2];
  rowHead.appendChild(positionHead);
  var departmentHead = document.createElement("th");
  departmentHead.innerText = headers[3];
  rowHead.appendChild(departmentHead);
  var managerHead = document.createElement("th");
  managerHead.innerText = headers[4];
  rowHead.appendChild(managerHead);
  table.appendChild(rowHead);
  for(var i = 0; i < lastNames.length; i++) {
    var row = document.createElement("tr");
    var lastName = document.createElement('td');
    lastName.innerText = lastNames[i];
    row.appendChild(lastName);
    var firstName = document.createElement('td');
    firstName.innerText = firstNames[i];
    row.appendChild(firstName);
    var position = document.createElement('td');
    position.innerText = positions[i];
    row.appendChild(position);
    var department = document.createElement('td');
    department.innerText = departments[i];
    row.appendChild(department);
    var manager = document.createElement('td');
    manager.innerText = managers[i];
    row.appendChild(manager);
    table.appendChild(row);
  }
  return (
    <div className="App" ref={node => node.appendChild(table)}>
      <input type="text" id="search" onkeyup={filterTable()} placeholder="Search for names.." title="Type in a name"/>
      <p><button onclick={sortTable()}>Sort</button></p>
    </div>
  );
}

export default App;
