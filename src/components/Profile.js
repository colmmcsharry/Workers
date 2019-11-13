import React from "react"

function Profile(props) {
    return (
        <div className="Profilecss">
           
            <h3>Name: {props.profileobj.name}</h3>
            <p>Rating: {props.profileobj.rating}</p>
            <p>Cost: {props.profileobj.cost}</p>
            <p>Phone: {props.profileobj.phone}</p>
            <p>Email: {props.profileobj.email}</p>
            <h3>Bio</h3> 
            <p> {props.profileobj.bio} </p>
           
        </div>
    )
}

export default Profile

// this is like the template for each profile. 