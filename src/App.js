import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Table from "./components/Table";
import TableRows from "./components/TableRows"
import API from "./utils/randomUserAPI";
// import { render } from '@testing-library/react';

class App extends Component {
  state = {
    fullData: [],
    searchedData: []
  };


  componentDidMount() {

    API.searchRandomUsers()
      .then(res => {
        let employees = res.data.results;

        employees = employees.map(employee => ({
          id: employee.id.value,
          name: employee.name.first + " " + employee.name.last,
          age: employee.dob.age,
          email: employee.email,
          phoneNumber: employee.phone,
          employeePhoto: employee.picture.large
        }))
        // console.log(employees);
        this.setState({ fullData: employees, searchedData: employees });
        // let newState = { employees };
        // return newState;
        // this.setState(newState);
        console.log(this.state.fullData);
        console.log(this.state.searchedData);
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
            <TableRows data={this.state.searchedData}/>
          </Table>
        </div>
      </div>
    );
  };
};

export default App;
