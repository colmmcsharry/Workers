/*I have no need to make the dropdown and the items inside the navbar seperate components, as they will always be on screen, regardless of route*/

import logo from '/Users/cmcsharry/playground/src/components/networking.png'
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Newdrop from '/Users/cmcsharry/playground/src/components/Newdrop';

export default class Navbar extends React.Component {
  render() {


	return (
				<div className="Mynavbar">
		        			<div className="llogo"><Link to="/gallery"><img src={logo} className="logo"/></Link>
		        				<div className="ddropbar"><Newdrop /></div>
		        			</div>
                        	
                        	<div className="authlinks">
                        		<div className="linky1">
                        		 <a href="/login">Log in</a>
                        		 </div>
                        		 <div className="linky2">
                      			 <a href="/signup">Sign Up</a>
                      			 </div>
                    		</div>
		        
				</div>       
)
}
}

                        
                        

                  