import "./Footer.css"
import { WhiteSpace } from "../supports";

const Footer = () =>{
    return(
        <div className="footer">
            <ul>
                <li className="left"><div className="footer-section">HealthConnect Innovations, Inc</div><div className="footer-section">Since 2010</div></li>
                
                <li className="right"><div className="footer-section">Follow us</div></li>
            </ul>
        </div>
    );
}

export default Footer;