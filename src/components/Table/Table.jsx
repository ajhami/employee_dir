import React from "react";
import "./style.css";

function Table(props) {
    return (
        <table className="table table-striped sortable">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">ID Photo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mark</td>
                    <td>Price</td>
                    <td>33</td>
                    <td>mark@test.com</td>
                    <td>1-999-999-9999</td>
                    <td>INSERT AN IMAGE</td>
                </tr>
                <tr>
                    <td>Mark</td>
                    <td>Price</td>
                    <td>33</td>
                    <td>mark@test.com</td>
                    <td>1-999-999-9999</td>
                    <td>INSERT AN IMAGE</td>
                </tr>
                {/* Create a mapping function that creates a row for each user */}
                {props.children}
            </tbody>
        </table>
    )
};

export default Table;