import React from "react";
import "./style.css";


function Table(props) {
    return (
        <table className="table table-striped sortable">
            <thead>
                <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">
                        Name
                        <button type="button"
                            // onClick={() => sortNames()}
                            className="btn-light fa fa-sort"
                        ></button>
                    </th>
                    <th scope="col">Age</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">ID Photo</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phoneNumber}</td>
                        <td><img src={employee.employeePhoto} alt="EIP" /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default Table;