import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Table from './components/Table';
import API from "./utils/randomUserAPI";
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    data: []
  };


  loadEmployeeData = () => {

    API.searchRandomUsers()
      .then(res => {
        let employees = res.data.results;

        employees.map(employee => ({
          firstName: employee.name.first,
          lastName: employee.name.last,
          age: employee.dob.age,
          email: employee.email,
          phoneNumber: employee.phone,
          employeePhoto: employee.picture.thumbnail
        }))
        let newState = { employees };
        // return newState;
        this.setState(newState);
      })
  };

  // let employeeData = loadEmployeeData();
  // console.log(employeeData);

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <div className="container">
          <Searchbar />
          <br />
          <Table>

          </Table>
        </div>
      </div>
    );
  };
};

export default App;
