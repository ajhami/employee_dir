import React from "react";
import "./style.css";

function Searchbar(props) {
    return (
        <form className="search" onSubmit={props.handleFormSubmit}>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <input
                    type="text"
                    name="nameSearched"
                    id="searchedName"
                    className="nameSearchInput"
                    value={props.searchedName}
                    onChange={props.handleInputChange}
                    placeholder="Search for employee by name."
                    />
                </div>
                <div className="col-4"></div>
            </div>
            {/* <div className="row btnRow">
                <div className="col-4"></div>
                <div className="col-4">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
                <div className="col-4"></div>
            </div> */}
        </form>
    )
};

export default Searchbar;