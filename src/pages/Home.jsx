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
            <WhiteSpace height="50"/>
            
                <section>
                    <article className="article-center">
                        <MyVideo src="/videos/health-stock-video.p4" width="500" height="500"/>
                    </article>
                </section> 

                    <WhiteSpace height="50"/>
                    <article className="article-center">
                        <div className="title-text">Our mission</div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, aperiam ab? Magni et amet quibusdam reiciendis necessitatibus, ipsum ullam libero officiis veniam dicta tempora quasi nemo porro nisi vero eius?
                    </article>
                <section> 

                    <WhiteSpace height="50"/>
                    <article className="article-center">
                        <ContentButton buttonText="Check pricing and plans"/>
                    </article>

                    <WhiteSpace height="50"/>
                    <article className="article-center">
                        <div className="title-text">Common questions</div>
                        <br></br>
                        <ContentButton buttonText="FAQs"/>
                    </article>

                    <WhiteSpace height="50"/>
                </section>
            </div>
        </div>

        <footer>
            <Footer />
        </footer>
    </div>
    );
}

export default Home;