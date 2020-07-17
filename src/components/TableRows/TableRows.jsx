import React from "react";
import "./style.css";

function TableRows(props) {

    return (
        <tbody>
            {props.data.map(employee => (
                <tr>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phoneNumber}</td>
                    <td>{employee.employeePhoto}</td>
                </tr>
            ))}
        </tbody>

    );



}


export default TableRows;