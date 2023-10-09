import React, { useEffect, useState  } from 'react';
import { MyImage } from "../supports";
import "./HomeFacade.css";

const HomeFacade = () => {
    const [offset, setOffset] = useState(0);
    const handleScroll = () => {
        setOffset(window.pageYOffset);
      };

    useEffect(() => {
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
     };
    }, []);

    return(
        <div className="home-facade" style={{ backgroundPositionY: `${offset * -0.2}px` }}>
            <div className="logo">
                <MyImage width="400" src="/images/health-connect-logo.png"/>
            </div>
        </div>
    );
}

export default HomeFacade;