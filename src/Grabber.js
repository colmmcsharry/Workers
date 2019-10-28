import React from "react"
import User from "./User"
import users from "./db.js"

function Grabber() {
    const allUsers = users.map(user => <User key={user.id} user={user}/>)
    
    return (
        <div>
            {allUsers}
        </div>)
}

export default Grabber