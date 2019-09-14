import React from 'react';
import  AliceCarousel  from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class Builders extends React.Component {



  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position lol during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1024: {
        items: 1
      }
    };

    return (
      <AliceCarousel
        duration={400}
        autoPlay={false}
        startIndex = {1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <div className="Mypicsclass"><figure><img src="https://rapidstartcrm.com/wp-content/uploads/Home-Builder-9.jpg"/><figcaption><Link to="/builders/Markbio"> Mark's Bio</Link></figcaption></figure></div>
        <div className="Mypicsclass"><figure><img src="https://images.all-free-download.com/images/graphiclarge/funny_cartoon_builders_vector_illustration_576191.jpg"/><figcaption><Link to="/builders/Bobbio"> Bob's Bio</Link></figcaption></figure></div>
        <div className="Mypicsclass"><figure><img src="https://nhg.secure.footprint.net/-/media/Articles/builder.jpg?h=306&la=en&w=460&t=20170610T112222Z"/><figcaption><Link to="/builders/Albio"> Alan's Bio</Link></figcaption></figure></div>
        
        
      </AliceCarousel>
    );
  }
}

export default Builders;