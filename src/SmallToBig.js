import React, { Fragment } from 'react';
// I just copied the below HTML from the same codepen i copied the CSS from. It had nothing to do with React. I just changed class to className.
// can reuse this anytime I need to do a small to big pic

export default class SmallToBig extends React.Component {
  render() {
  	if (this.props.name == 'Bill') {
		return (
	<Fragment>
	<a className="lightbox" href="#dog">
					   <img src="http://i.huffpost.com/gen/749263/original.jpg"/>
					   <img src="http://i.huffpost.com/gen/749263/original.jpg"/>
					   <img src="http://i.huffpost.com/gen/749263/original.jpg"/>
					   <img src="http://i.huffpost.com/gen/749263/original.jpg"/>
					</a> 
					<div className="lightbox-target" id="dog">
					   <img src="http://i.huffpost.com/gen/749263/original.jpg"/>
					   
					   <a className="lightbox-close" href="#"></a>
					   	</div>
					   	</Fragment>
	)
	} else { 

		return  (

		<Fragment>
	<a className="lightbox" href="#dog">
					   <img src="https://i.ytimg.com/vi/YJ2z_ZOHGqk/maxresdefault.jpg"/>
					   <img src="https://i.ytimg.com/vi/YJ2z_ZOHGqk/maxresdefault.jpg"/>
					   <img src="https://i.ytimg.com/vi/YJ2z_ZOHGqk/maxresdefault.jpg"/>
					   <img src="https://i.ytimg.com/vi/YJ2z_ZOHGqk/maxresdefault.jpg"/>
					</a> 
					<div className="lightbox-target" id="dog">
					   <img src="http://i.huffpost.com/gen/749263/original.jpg"/>
					   
					   <a className="lightbox-close" href="#"></a>
					   	</div>
					   	</Fragment>)

		}
  	}
  	// if this gets a prop called "Bill," then it should return a certain set of photos, if it gets a prop of "Al" then a different set of ohotos, etc.

  	// 	they did exactly this in the codeacademy thing and said it's a common technique

}


// export class Welcome extends React.Component {
//   render() {
//     if (this.props.name == 'Wolfgang Amadeus Mozart') {
//       return (
//       	<h2>
//       	  hello sir it is truly great to meet you here on the web
//       	</h2>
//       );
//     } else {
//       return (
//       	<h2>
//       	  WELCOME "2" MY WEB SITE BABYYY!!!!!
//       	</h2>
//       );
//     }
//   }
// }
