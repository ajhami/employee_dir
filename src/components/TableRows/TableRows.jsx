import React from "react";
import "./style.css";

function TableRows(props) {

    return (
        <tbody>
            {props.data.map(employee => (
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phoneNumber}</td>
                    <td><img src={employee.employeePhoto} alt="EIP"/></td>
                </tr>
            ))}
        </tbody>

    );



}


export default TableRows;