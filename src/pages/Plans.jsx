import { WhiteSpace, LineSeparator, Grid, MyImage } from "../components/supports";
import ContentButton from "../components/buttons/ContentButton";
import Footer from "../components/containers/Footer";

const Plans = ()=>{
    const servicesList=["Virtual Consulations","Electronic Health Records (EHR)","Prescription Management","Real-Time Chat Support","Healthcare Network"]
    return(
        
        <div id="main_wrapper">
            
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
                            <div className="big-title-text">Plans and billings</div>
                        </article>
                    </section>

                    <section>
                        <Grid templateColumns="repeat(3,1fr)" sideMargins="20px">
                            <div className="grid-item">
                                <article className="article-center">
                                    <div className="title-text">Basic</div>
                                    <div className="title-text">$5</div>
                                    Monthly
                                    <WhiteSpace height="20"/>

                                    <ul className="services-list">
                                        <li>{servicesList[0]}</li><br></br>
                                    </ul>

                                    <WhiteSpace height="20"/>
                                    <ContentButton buttonText="Get now"/>
                                </article>
                            </div>
                            <div className="grid-item">
                                <article className="article-center">
                                    <div className="title-text">Premium</div>
                                    <div className="title-text">$10</div>
                                    Monthly
                                    <WhiteSpace height="20"/>

                                    <ul className="services-list">
                                        <li>{servicesList[0]}</li><br></br>
                                        <li>{servicesList[1]}</li><br></br>
                                        <li>{servicesList[2]}</li><br></br>
                                    </ul>

                                    <WhiteSpace height="20"/>

                                    <ContentButton buttonText="Get now"/>
                                </article>
                            </div>
                            <div className="grid-item">
                                <article className="article-center">
                                    <div className="title-text">Full</div>
                                    <div className="title-text">$20</div>
                                    Monthly
                                    <WhiteSpace height="20"/>

                                    <ul className="services-list">
                                        <li>{servicesList[0]}</li><br></br>
                                        <li>{servicesList[1]}</li><br></br>
                                        <li>{servicesList[2]}</li><br></br>
                                        <li>{servicesList[3]}</li><br></br>
                                        <li>{servicesList[4]}</li><br></br>
                                    </ul>

                                    <WhiteSpace height="20"/>

                                    <ContentButton buttonText="Get now"/>
                                </article>
                            </div>
                        </Grid>
                    </section>
                   

                    <WhiteSpace height="100"/>

                    <div className="big-title-text">Payment methods
                    <br></br>
                        <MyImage src="/images/payment-methods.png" width="200px"/>
                    </div>

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

export default Plans;