import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Final from '/Users/cmcsharry/playground/src/Final.js'
/*note for tomorrow this is the example dude was talking about, see if i can get it to work*/

class Builders extends React.Component {
  items = [1, 2, 3, 4, 5]

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 1 } },
    galleryItems: this.galleryItems(),
  }

  slideTo = (i) => this.setState({ currentIndex: i })

  onSlideChanged = (e) => this.setState({ currentIndex: e.item })

  slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

  slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

  thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}></span>

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
        >

        <div className="Mypicsclass"><figure><img  className="carimages"  src="https://rapidstartcrm.com/wp-content/uploads/Home-Builder-9.jpg"/><figcaption><Link to="/builders/Markbio"> Mark's Bio</Link></figcaption></figure></div>
        <div className="Mypicsclass"><figure><img  className="carimages" src="https://images.all-free-download.com/images/graphiclarge/funny_cartoon_builders_vector_illustration_576191.jpg"/><figcaption><Link to="/builders/Bobbio"> Bob's Bio</Link></figcaption></figure></div>
        <div className="Mypicsclass"><figure><img  className="carimages" src="https://nhg.secure.footprint.net/-/media/Articles/builder.jpg?h=306&la=en&w=460&t=20170610T112222Z"/><figcaption><Link to="/builders/Albio"> Alan's Bio</Link></figcaption></figure></div>
</AliceCarousel>

        


       
        
      </div>
    )
  }
}

export default Builders;