import HomeFacade from "../components/containers/HomeFacade";
import { WhiteSpace, LineSeparator, MyImage, MyVideo } from "../components/supports";
import Grid from "../components/supports/Grid";
import ContentButton from "../components/buttons/ContentButton";
import Footer from "../components/containers/Footer";
import "../styles/shared.scss";

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
                    </article>
                
                
                    <WhiteSpace height="50"/>
                </section> 
                <section> 
                    
                    <LineSeparator/>

                    <WhiteSpace height="50"/>
                    <Grid templateColumns={"repeat(2,4fr"} sideMargins={"10px"}>
                        <div className="grid-item">
                            <article className="article-center">
                                <div className="title-text">Variety is essential</div>
                                <br></br>
                                <ContentButton buttonText="Check our services"/>
                            </article>
                        </div>

                        <div className="grid-item">
                        <article className="article-center">
                            <div className="title-text">We can get you started</div>
                            <br></br>
                                <ContentButton buttonText={"Contact us"} pathTarget={"/plans"}/>
                            </article>
                        </div>

                        <div className="grid-item">
                            <article className="article-center">
                            <div className="title-text">Get your chance</div>
                            <br></br>
                                <ContentButton buttonText={"Check pricing and plans"} pathTarget={"/plans"}/>
                            </article>
                        </div>

                        <div className="grid-item">
                            <article className="article-center">
                                <div className="title-text">We are happy to answer you</div>
                                <br></br>
                                <ContentButton buttonText="Common questions"/>
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