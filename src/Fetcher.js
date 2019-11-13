import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

// this is how you get data from a JSON api. mine is hosted at 3000, and is an object/array of users.

/*so we create this class and users is just an empty object. Then we fetch the data from the url. currently id no.1 which is Mark,
and then that data becomes the state. then in the div we're plugging those values in. I need to find a way of only plugging in the persons data who I want
*/
class Fetcher extends Component {
    constructor() {
        super()
        this.state = {
            users: {}
        }
    }
    
    // somehow I need this state to updated to be on whichever profile i'm looking at, as then their data will be loaded.
    componentDidMount() {
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: data
                })
            })

    }
    
    render() {
        return (
            <ul>
                li {this.state.users.firstName} <br />
                Last Name: {this.state.users.lastName} <br />
                Rating: {this.state.users.rating} <br />
                Phone:{this.state.users.phone} <br />
                E-Mail: {this.state.users.email} <br />
                Bio: {this.state.users.bio} <br />
                 <br />
            </ul>
        )

    }

}

export default Fetcher 