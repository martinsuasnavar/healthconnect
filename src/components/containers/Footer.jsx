import "./Footer.scss"
import { WhiteSpace } from "../supports";
import ImageButton from "../buttons/ImageButton";

const Footer = () =>{
    const buttonSize = 20;
    const buttonWhiteSpaceSize = 10;
    return(
        <div className="footer">
            <ul>
                <li className="left">

                <div className="footer-column">HealthConnect Innovations, Inc</div>
                <div className="footer-column">Since 2010</div>

                </li>
                
                <li className="right">

                <div className="footer-column">Follow us</div>
                <div className="footer-column">
                    <ImageButton pathTarget="#" imgSrc="/images/facebook-logo-black.png" imgWidth={buttonSize}/>
                    <WhiteSpace width={buttonWhiteSpaceSize}/>
                    <ImageButton imgSrc="/images/twitter-logo-black.png" imgWidth={buttonSize}/>
                    <WhiteSpace width={buttonWhiteSpaceSize}/>
                    <ImageButton imgSrc="/images/linkedin-logo-black.png" imgWidth={buttonSize}/>
                    <WhiteSpace width={buttonWhiteSpaceSize}/>
                    <ImageButton imgSrc="/images/instagram-logo-black.png" imgWidth={buttonSize}/>
                    <WhiteSpace width={buttonWhiteSpaceSize}/>
                    <ImageButton imgSrc="/images/youtube-logo-black.png" imgWidth={buttonSize}/>
                </div>

                </li>
            </ul>
        </div>
    );
}

export default Footer;