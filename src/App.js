import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Table from "./components/Table";
import Footer from './components/Footer/Footer';
import API from "./utils/randomUserAPI";

class App extends Component {
  state = {
    fullData: [],
    searchedData: [],
    searchedName: ""
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
        }));
        this.setState({ fullData: employees, searchedData: employees });
        console.log(this.state.fullData);
        console.log(this.state.searchedData);
      })

  };
  
  // This function is used solely for the purpose of preventing default for submissions
  handleFormSubmit = event => {
    event.preventDefault();    
  }
  
  handleInputChange = event => {
    let searchedName = event.target.value;
    this.setState({ searchedName: searchedName});
    console.log(this.state.searchedName);

    let fullData = this.state.fullData;    
    let searchedData = fullData.filter(employee => (employee.name).toLowerCase().includes(searchedName.toLowerCase()));
    
    this.setState({ searchedData: searchedData });
    console.log(this.state.searchedData);
    console.log(searchedData);

  }

  render() {
    return (
      <div>
        <Navbar />
        <br />
        <div className="container">
          <Searchbar 
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
          <br />
          <Table data={this.state.searchedData}></Table>
        </div>
        <Footer />
      </div>
    );
  };
};

export default App;
