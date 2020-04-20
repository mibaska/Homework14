import React, { Component } from "./node_modules/react";

class User extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    position: "",
    department: "",
    manager: "",
    subordinates: []
  };
}

export default User;
