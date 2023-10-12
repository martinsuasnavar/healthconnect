import { WhiteSpace, LineSeparator, Grid } from "../components/supports";
import Footer from "../components/containers/Footer";

const Contact = ()=>{
    return(
        <div id="main_wrapper">
            <LineSeparator/>
            <header>
                <h1></h1>
                <nav>
                </nav>
            </header>

            <div id="main_container">
                <aside>
                    <nav>
                    </nav>
                </aside>

                <div id="contents">
                    <WhiteSpace height="50"/>
                    <section> 
                        <article className="article-center">
                            <div className="big-title-text">Contact us</div>
                        </article>
                    </section>
                    <WhiteSpace height="50"/>

                    <section> 
                        <article className="article-center">
                            <div className="title-text">Contact methods</div>
                            <Grid templateColumns={"repeat(3,1fr)"}>

                                <div className="grid-item">
                                    <article className="article-center">
                                        <div className="title-text">Email</div>
                                        info@healthconnectinnovations.com
                                        <WhiteSpace height="20"/>
                                    </article>
                                </div>

                                <div className="grid-item">
                                    <article className="article-center">
                                        <div className="title-text">Phone</div>
                                        1-800-HEALTH-CONNECT
                                        <WhiteSpace height="20"/>
                                    </article>
                                </div>

                                <div className="grid-item">
                                    <article className="article-center">
                                        <div className="title-text">Mailing Address</div>
                                        123 Telehealth Avenue, Healthville, USA
                                        <WhiteSpace height="20"/>
                                    </article>
                                </div>

                            </Grid>
                        </article>
                    </section>
                    <WhiteSpace height="100"/>
                </div>
            </div>
            <LineSeparator/>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Contact;