/////////////////////////
/// RANDOMUSERSAPI.JS ///
/////////////////////////

import axios from "axios";
const APIURL = "https://randomuser.me/api/?results=200&nat=us";

export default {
    searchRandomUsers: function() { 
        return axios
                .get(APIURL)
                .then(res => {
                    const employees = res.data;
                    return employees.map(employee => {
                        return {
                            firstName: employee.name.first,
                            lastName: employee.name.last,
                            age: employee.dob.age,
                            email: employee.email,
                            phoneNumber: employee.phone,
                            employeePhoto: employee.picture.thumbnail
                        }
                    });
                })
                .catch(err => {
                    console.log("Failure to retrieve employee data. Error: ", err);
                });
    }
};