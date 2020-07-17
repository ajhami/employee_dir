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
    data: []
  };


  componentDidMount() {

    API.searchRandomUsers()
      .then(res => {
        let employees = res.data.results;

        employees = employees.map(employee => ({
          name: employee.name.first + " " + employee.name.last,
          age: employee.dob.age,
          email: employee.email,
          phoneNumber: employee.phone,
          employeePhoto: employee.picture.thumbnail
        }))
        // console.log(employees);
        this.setState({ data: employees });
        // let newState = { employees };
        // return newState;
        // this.setState(newState);
        console.log(this.state.data);
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
            <TableRows data={this.state.data}/>
          </Table>
        </div>
      </div>
    );
  };
};

export default App;
