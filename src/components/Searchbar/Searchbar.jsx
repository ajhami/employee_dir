import React from "react";
import "./style.css";

function Searchbar(props) {
    return (
        <form>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <input type="name" name="" id="searchedName" className="nameSearchInput" value={props.searchedName} placeholder="Search for employee by name." />
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row btnRow">
                <div className="col-4"></div>
                <div className="col-4">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
                <div className="col-4"></div>
            </div>
        </form>
    )
};

export default Searchbar;