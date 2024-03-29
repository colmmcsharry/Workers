import React from 'react'
import ReactDOM from 'react-dom';
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Final from '/Users/cmcsharry/playground/src/Final.js'
import workers from './workers'
import Gallery from "react-photo-gallery";
import Bio from './Bio'
import Bio2 from './Bio2'
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from '/Users/cmcsharry/playground/src/photos.js'
import photos2 from '/Users/cmcsharry/playground/src/photos2.js'
/*note for tomorrow this is the example dude was talking about, see if i can get it to work*/



class Chefs extends React.Component {
  items = [1, 2, 3, 4, 5]

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 1 } },
    galleryItems: this.galleryItems(),
  }

  slideTo = (i) => this.setState({ currentIndex: i })

  onInitialized(e) {
    ReactDOM.render(<Bio2 bio2={{firstName:"Barry", lastName:"Doe", rating:"***", phone:"605 784 8001", email:"Mark@gmail.com", bio:"Hey I'm Barry and welcome to my bio" }}  />, document.getElementById('myelement'))
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
      ReactDOM.render(<Bio2 bio2={{firstName:"Barry", lastName:"Doe", rating:"***", phone:"605 784 8001", email:"Mark@gmail.com", bio:"Hey I'm Barry and welcome to my bio" } }  />, document.getElementById('myelement'))

      }
      else if (e.item === 0){
      console.log("now its Bob")
      ReactDOM.render(<Bio imgUrl="https://i.ytimg.com/vi/YJ2z_ZOHGqk/maxresdefault.jpg" bio={{firstName:"Bob", lastName:"Smith", rating:"***", phone:"086 779 0230", email:"bob@gmail.com", bio:"Hey I'm Bob and welcome to my bio" }}  />, document.getElementById('myelement'))
      } 
      else if (e.item === 1){
      console.log("now its Al")
      console.log(this.props)
      ReactDOM.render(<Bio bio={{ firstName:"Alan", lastName:"Johnson", rating:"****", phone:"778 768 9982", email:"al@gmail.com", bio:"Hey I'm Al and welcome to my bio" }} />, document.getElementById('myelement'))
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

        <div className="Mypicsclass"><figure><img  className="carimages"  src="https://images.unsplash.com/photo-1559575003-fb4ee38a747d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80"/><figcaption> Barry </figcaption></figure></div>
        <div className="Mypicsclass"><figure><img  className="carimages" src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"/><figcaption> Bill</figcaption></figure></div>
        <div className="Mypicsclass"><figure><img  className="carimages" src="https://images.unsplash.com/photo-1551218371-bc055a9c1487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"/><figcaption> Joe</figcaption></figure></div>
</AliceCarousel>

        <div id="myelement"></div>


       
        
      </div>
    )
  }
}

export default Chefs;