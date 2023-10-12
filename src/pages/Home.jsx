import HomeFacade from "../components/containers/HomeFacade";
import { WhiteSpace, LineSeparator, MyImage, MyVideo } from "../components/supports";
import Grid from "../components/supports/Grid/Grid";
import ContentButton from "../components/buttons/ContentButton";
import Footer from "../components/containers/Footer";

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

            <div id="home_contents">
           
                
                <section className="section-light-filter">
                <LineSeparator/>
                <WhiteSpace height="50"/>
                    <article className="article-center">
                         <div className="big-title-text">Who we are?</div>
                         <WhiteSpace height="50"/>
                        <MyVideo src="/videos/health-stock-video.mp4" width="280"/>
      
                    </article>
               
                    <WhiteSpace height="50"/>
                    <article className="article-center">
                        <div className="title-text">Our mission</div>
                        HealthConnect Innovations is a forward-thinking private company dedicated to transforming the healthcare landscape through cutting-edge telemedicine solutions. Our mission is to provide accessible, convenient, and high-quality healthcare services to individuals and healthcare providers.
                        <WhiteSpace height="50"/>
                        <ContentButton buttonText="More about us" pathTarget={"/about"}/>
                    </article>
                
                
                    <WhiteSpace height="50"/>
                </section> 
                <section> 
                    
                    <LineSeparator/>

                    <WhiteSpace height="50"/>
                    <Grid templateColumns={"repeat(2,4fr"} sideMargins={"10px"}>
                        <div className="grid-item">
                            <article className="article-center">
                                <div className="title-text">Modern solutions for telemedicine</div>
                                <br></br>
                                <ContentButton buttonText="Services" pathTarget={"/services"}/>
                            </article>
                        </div>

                        <div className="grid-item">
                        <article className="article-center">
                            <div className="title-text">Getting you started</div>
                            <br></br>
                                <ContentButton buttonText={"Contact"} pathTarget={"/contact"}/>
                            </article>
                        </div>

                        <div className="grid-item">
                            <article className="article-center">
                            <div className="title-text">Different plans for different needs</div>
                            <br></br>
                                <ContentButton buttonText={"Pricings"} pathTarget={"/plans"}/>
                            </article>
                        </div>

                        <div className="grid-item">
                            <article className="article-center">
                                <div className="title-text">Your doubt might be reflected here</div>
                                <br></br>
                                <ContentButton buttonText="Common questions" pathTarget={"/faqs"}/>
                            </article>
                        </div>
                    </Grid>
                </section>

                <WhiteSpace height="50"/>
            </div>
        </div>
        <LineSeparator/>
        <footer>
            <Footer />
        </footer>
    </div>
    );
}

export default Home;