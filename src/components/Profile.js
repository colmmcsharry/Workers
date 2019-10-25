import React from "react"

function Profile(props) {
    console.log(props)
    return (
        <div className="Profilecss">
            <img src={props.profileobj.imgUrl}/>
            <h3>Name: {props.profileobj.name}</h3>
            <p>Rating: {props.profileobj.rating}</p>
            <p>Cost: (props.profileobj.cost}</p>
            <p>Phone: {props.profileobj.phone}</p>
            <p>Email: {props.profileobj.email}</p>
        </div>
    )
}

export default Profile