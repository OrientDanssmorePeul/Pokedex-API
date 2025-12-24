import React from "react";

function Filters(props) {
    const { search, type, types, onSearchChange, onTypeChange } = props;

    return (
        <div className="filters">
            <input type="text" onChange={onSearchChange} placeholder="Search By Name"/>

            <select onChange={onTypeChange}>
                <option value="All Types">All Types</option>
                {
                    types.map((t, index)=>(
                        <option key={index}>{t}</option>
                    ))
                }
            </select>   
        </div>
    );
}

export default Filters;
