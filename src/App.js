import React, { Component } from 'react';
// sometimes looks like import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CGallery from './components/CGallery';
import Builders from './components/Builders';
import Chefs from './components/Chefs';
import About from './components/Otherpgs/About'
import Contact from './components/Otherpgs/Contact'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile'
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-grid-gallery';
import Final from './Final'
import User from './User'



/*render is the only required lifecycle method, its needed to render the component in the browser
all the stuff below is JSX, its way easier than getting JS to show in the browser. JSX elements are written in {}
big difference is className instead of class*/

function App()  {
  return (
    
     <div className="App">
     <Router>
     <div id="demo2"> </div>
     <Navbar /> {/*we always want this to show, just making it a component to keep things clean/organised*/}
     <div className="Gallerywrapper"> {/*with the current settings/placement, this will always show, regardless of the url route.*/}
         
               <Switch>
                 <Route path='/about' component={About} /> {/*this tells us what component to load on said route/path*/}
                <Route path='/contact' component={Contact} /> {/*think I can put all t hese route paths in a different file, like bea did*/}
                <Route path='/home' component={CGallery} />
                <Route path='/builders' component={Builders} />
                <Route path='/chefs' component={Chefs} />       

              </Switch>

              
         
         </div>
         
        
        </Router>
    </div>
  

  )

}

export default App;
