import React from "react"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images"
import { photos } from '/Users/cmcsharry/playground/src/photos.js'
import Final  from '/Users/cmcsharry/playground/src/Final.js'
import { photos2 } from '/Users/cmcsharry/playground/src/photos2.js'

function Bio(props) {
    return (
     <React.Fragment>
    
         <ul>   

                First Name: {props.bio.firstName} <br />
                Last Name: {props.bio.lastName} <br />
                Rating: {props.bio.rating} <br />
                Phone:{props.bio.phone} <br />
                E-Mail: {props.bio.email} <br />
                Bio: {props.bio.bio} <br />
                
            </ul>  
           <div>below should be the image
               
                <Final />
           </div>
     </React.Fragment>
    
    )
}

export default Bio

// <img src="https://images.unsplash.com/photo-1552903023-dc7b4c9fa5bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"></img>
// <img src={props.imgUrl}></img> this works to make a certain image load