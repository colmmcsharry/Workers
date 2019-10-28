import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

// this is how you get data from a JSON api. mine is hosted at 3000, and is an object/array of users.

class Fetcher extends Component {
    constructor() {
        super()
        this.state = {
            users: {}
        }
    }
    
    componentDidMount() {
        fetch("http://localhost:3000/users/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: data
                })
            })
    }
    
    render() {
        return (
            <div>
                First Name: {this.state.users.firstName} <br />
                Last Name: {this.state.users.lastName} <br />
                E-Mail {this.state.users.email} <br />
                Age {this.state.users.age} <br />
            </div>
        )
    }
}

export default Fetcher 