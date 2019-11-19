import React from "react"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images"
import { photos } from '/Users/cmcsharry/playground/src/photos.js'
import Final  from '/Users/cmcsharry/playground/src/Final.js'
import { photos2 } from '/Users/cmcsharry/playground/src/photos2.js'
import SmallToBig from '/Users/cmcsharry/playground/src/SmallToBig.js'
import '../SmallToBig.css'



function Bio2(props) {
    return (
     <React.Fragment>
    
         <ul>   

                First Name: {props.bio2.firstName} <br />
                Last Name: {props.bio2.lastName} <br />
                Rating: {props.bio2.rating} <br />
                Phone:{props.bio2.phone} <br />
                E-Mail: {props.bio2.email} <br />
                Bio: {props.bio2.blurb} <br />
                
            </ul>  
           <div>
               <SmallToBig />
                
           </div>
     </React.Fragment>
    
    )
}

export default Bio2