import React from "react";
import "./style.css";

function Table(props) {
    return (
        <table className="table table-striped sortable">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">ID Photo</th>
                </tr>
            </thead>
                {/* Table rows are passed through as a child of the Table component */}
                {props.children}
        </table>
    )
};

export default Table;