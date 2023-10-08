import HomeFacade from "../components/containers/HomeFacade";
import { WhiteSpace, MyImage } from "../components/supports";
import MyVideo from "../components/supports/MyVideo";
import ContentButton from "../components/buttons/ContentButton";
import Footer from "../components/containers/Footer";
import "../styles/main.css";

const Home = () =>{
    return(
    <div id="main_wrapper">
        <header>
            <h1></h1>
            <nav>
            </nav>
        </header>

        <div id="main_container">
            
            <HomeFacade />

            <aside>
                <nav>
                </nav>
            </aside>

            <div id="contents">
           
                
                <section className="section-light-filter">
                <div className="line-separator"></div>
                <WhiteSpace height="50"/>
                    <article className="article-center">
                         <div className="big-title-text">Who we are?</div>
                         <WhiteSpace height="50"/>
                        <MyVideo src="/videos/health-stock-video.mp4" width="780"/>
      
                    </article>
               
                    <WhiteSpace height="50"/>
                    <article className="article-center">
                        <div className="title-text">Our mission</div>
                        HealthConnect Innovations is a forward-thinking private company dedicated to transforming the healthcare landscape through cutting-edge telemedicine solutions. Our mission is to provide accessible, convenient, and high-quality healthcare services to individuals and healthcare providers.
                    </article>
                
                
                    <WhiteSpace height="50"/>
                </section> 
                <section> 
                <div className="line-separator"></div>
                    <WhiteSpace height="50"/>
                    <article className="article-center">
                        <div className="title-text">Variety is essential</div>
                        <br></br>
                        <ContentButton buttonText="Check our services"/>
                    </article>
                    
                </section>

                <section> 

                
                    <WhiteSpace height="50"/>
                    <article className="article-center">
                    <div className="title-text">We can get you started</div>
                    <br></br>
                        <ContentButton buttonText={"Contact us"} pathTarget={"/plans"}/>
                    </article>
                </section>
                <section> 

                
                    <WhiteSpace height="50"/>
                    <article className="article-center">
                    <div className="title-text">Need guide about billings?</div>
                    <br></br>
                        <ContentButton buttonText={"Check pricing and plans"} pathTarget={"/plans"}/>
                    </article>
                
                </section>
                <section> 



                    <WhiteSpace height="50"/>
                    <article className="article-center">
                        <div className="title-text">If you have a doubt, we are happy to answer you</div>
                        <br></br>
                        <ContentButton buttonText="Common questions"/>
                    </article>
                </section>


                    <WhiteSpace height="50"/>
            </div>
        </div>
        <div className="line-separator"></div>
        <footer>
            <Footer />
        </footer>
    </div>
    );
}

export default Home;