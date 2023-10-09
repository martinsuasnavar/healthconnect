import "./NavigationBar.css";
import { Link } from 'react-router-dom';
import "../../styles/main.css";
import { WhiteSpace, MyImage } from "../supports";

const NavigationBar = () => {
    return(
        <div id="navigation_bar">
            <ul>
         
                <div className="nav-logo"><div className="left"><MyImage 
                src="/images/health-connect-logo-simple.png" width="150"/></div></div>
            
                <Link to="/"><li className="left">
                <a className="nav-button">Home</a></li></Link>


                <li className="right"><WhiteSpace height="5"/></li>

                <Link to="/contact"><li className="right">
                <a className="nav-button">Contact</a></li></Link>

                <div className="separator"><li className="right">|</li></div>
                
                <Link to="/faqs"><li className="right">
                <a className="nav-button">FAQs</a></li></Link>
      
                <div className="separator"><li className="right">|</li></div>

                <Link to="/plans"><li className="right">
                <a className="nav-button">Plans</a></li></Link>

                <div className="separator"><li className="right">|</li></div>
               
                <Link to="/services"><li className="right">
                <a className="nav-button">Services</a></li></Link>

                <div className="separator"><li className="right">|</li></div>

                <Link to="/about"><li className="right">
                <a className="nav-button">About us</a></li></Link>
           
                
            </ul>
            
        </div>
        
    );
}

export default NavigationBar;