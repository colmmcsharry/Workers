import React, { Component } from 'react';
// sometimes looks like import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './components/Gallery';
import Builders from './components/builders/Builders';
import About from './components/Otherpgs/About'
import Contact from './components/Otherpgs/Contact'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import  Markbio from './components/builders/Markbio';
import Bobbio from './components/builders/Bobbio';
import { Container, Row, Col } from 'reactstrap';
import Navbar from './components/Navbar';
import Albio from './components/builders/Albio';


/*render is the only required lifecycle method, its needed to render the component in the browser
all the stuff below is JSX, its way easier than getting JS to show in the browser. JSX elements are written in {}
big difference is className instead of class*/

class App extends Component {
  render() {
    return (
     <div className="App">
     <Router>
     <Navbar /> {/*we always want this to show, just making it a component to keep things clean/organised*/}
     <div className="Gallerywrapper"> {/*with the current settings/placement, this will always show, regardless of the url route.*/}
         
               <Switch>
                 <Route path='/about' component={About} /> {/*this tells us what component to load on said route*/}
                <Route path='/contact' component={Contact} /> {/*think I can put all t hese route paths in a different file, like bea did*/}
                <Route path='/gallery' component={Gallery} />
                <Route path='/builders' component={Builders} />

              </Switch>
              <Route path='/builders/Bobbio' component={Bobbio} /> 
              <Route path='/builders/Markbio' component={Markbio} />
              <Route path='/builders/Albio' component={Albio} />

         
         </div>
         
        
        </Router>
    </div>
  );

  }

}

export default App;
