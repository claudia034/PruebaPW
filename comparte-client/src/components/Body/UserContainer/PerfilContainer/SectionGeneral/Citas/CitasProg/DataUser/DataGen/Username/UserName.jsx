import React from "react";
import "./UserName.scss";

const UserName = ({name, lugar}) => {
    return (
    <div className="username">
        <h3>{lugar}</h3>
        <p>{name}</p>
    </div>)
}

export default UserName