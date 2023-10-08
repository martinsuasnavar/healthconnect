import "./NavigationBar.css";
import { Link } from 'react-router-dom';
import "../../styles/main.css"

const NavigationBar = () => {
    return(
        <div id="navigation_bar">
            <ul>
                <Link to="/"><li className="left">
                <a className="nav-button">Home</a></li></Link>


                <Link to="/faqs"><li className="right">
                <a className="nav-button">FAQs</a></li></Link>

                <Link to="/services"><li className="right">
                <a className="nav-button">Services</a></li></Link>

                <Link to="/plans"><li className="right">
                <a className="nav-button">Plans</a></li></Link>

                <Link to="/contact"><li className="right">
                <a className="nav-button">Contact</a></li></Link>

                <Link to="/about"><li className="right">
                <a className="nav-button">About us</a></li></Link>
            </ul>
            
        </div>
        
    );
}

export default NavigationBar;