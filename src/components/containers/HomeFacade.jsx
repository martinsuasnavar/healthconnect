import { MyImage } from "../supports";
import "./HomeFacade.css";

const HomeFacade = () => {
    return(
        <div className="home-facade">
                <div className="logo">
                    <MyImage width="500" src="/images/health-connect-full-logo-alt.png"/>
            </div>
        </div>
    );
}

export default HomeFacade;