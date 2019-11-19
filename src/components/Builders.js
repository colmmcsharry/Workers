import React from 'react'
import ReactDOM from 'react-dom';
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Final from '/Users/cmcsharry/playground/src/Final.js'
import workers from './workers'
import Gallery from "react-photo-gallery";
import Bio from './Bio'
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from '/Users/cmcsharry/playground/src/photos.js'
import photos2 from '/Users/cmcsharry/playground/src/photos2.js'
import SmallToBig from '/Users/cmcsharry/playground/src/SmallToBig.js'
import '../SmallToBig.css'




class Builders extends React.Component {
  items = [1, 2, 3, 4, 5]

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 1 } },
    galleryItems: this.galleryItems(),
  }

  slideTo = (i) => this.setState({ currentIndex: i })

  onInitialized(e) {
    ReactDOM.render(<Bio bio={{firstName:"Mark", lastName:"Doe", rating:"***", phone:"605 784 8001", email:"Mark@gmail.com", bio:"Hey I'm Mark and welcome to my bio" }}  />, document.getElementById('myelement'))
  }

  onSlideChanged = (e) => this.setState({ currentIndex: e.item })
  

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}></span>

// so below, instead of having to make a seperate component for every single worker, I should be able to just make one "profile" component
// and get the data for each from an online json file, and pass it in as props. can be just an object, ancx i specify which 
// part of the object I want each time. ie. props.users.Mark.firstName. or somethin like that. will stop my project getting too heavy
onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    if (e.item === 2){
      console.log("now its Mark")
      ReactDOM.render(<SmallToBig name="Bill" />, document.getElementById('mybotelement') )
      // ReactDOM.render(<Bio imgUrl="https://images.unsplash.com/photo-1552903023-dc7b4c9fa5bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" bio={{firstName:"Mark", lastName:"Doe", rating:"***", phone:"605 784 8001", email:"Mark@gmail.com", blurb:"Hey I'm Mark and welcome to my bio" } }  />, document.getElementById('myelement'))
      
      }
      else if (e.item === 0){
      console.log("now its Bob")
      ReactDOM.render(<SmallToBig name="Bob" />, document.getElementById('mybotelement') )
      // ReactDOM.render(<Bio Gallery photos={photos} bio={{firstName:"Bob", lastName:"Smith", rating:"***", phone:"086 779 0230", email:"bob@gmail.com", blurb:"Hey I'm Bob and welcome to my bio" }}  />, document.getElementById('myelement'))
      } 
      else if (e.item === 1){
      console.log("now its Al")
      console.log(this.props)
      ReactDOM.render(<Bio bio={{ firstName:"Alan", lastName:"Johnson", rating:"****", phone:"778 768 9982", email:"al@gmail.com", blurb:"Hey I'm Al and welcome to my bio" }} />, document.getElementById('myelement'))
      }
    }


  galleryItems() {
    return this.items.map((i) => <h2 key={i}> {i}</h2>)
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state
    return (
      <div>
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={false}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
          items={this.state.galleryItems}
          ref={(el) => (this.Carousel = el)}
          myFunc={this.props.myFunc}
          onSlideChange={this.onSlideChange}
          onInitialized={this.onInitialized}
        >

        <div className="Mypicsclass"><figure><img  className="carimages"  src="https://rapidstartcrm.com/wp-content/uploads/Home-Builder-9.jpg"/><figcaption> Mark </figcaption></figure></div>
        <div className="Mypicsclass"><figure><img  className="carimages" src="https://images.all-free-download.com/images/graphiclarge/funny_cartoon_builders_vector_illustration_576191.jpg"/><figcaption> Bob</figcaption></figure></div>
        <div className="Mypicsclass"><figure><img  className="carimages" src="https://nhg.secure.footprint.net/-/media/Articles/builder.jpg?h=306&la=en&w=460&t=20170610T112222Z"/><figcaption> Alan</figcaption></figure></div>
</AliceCarousel>

        <div id="myelement"></div>
        <div id="mybotelement"></div>


       
        
      </div>
    )
  }
}

export default Builders;