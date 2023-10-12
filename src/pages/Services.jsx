import { WhiteSpace, LineSeparator, Grid } from "../components/supports";
import ContentButton from "../components/buttons/ContentButton";
import Footer from "../components/containers/Footer";

const Services = ()=>{
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
                            <div className="big-title-text">Services</div>
                        </article>
                    </section>
                    
                    <section>

                    <Grid templateColumns={"repeat(3,4fr"} sideMargins={"10px"}>

                        <div className="grid-item">
                            <article className="article">
                                <div className="title-text">Virtual Consulations</div>
                                    <ul>
                                        <li>Access a network of licensed healthcare providers for virtual medical consultations.</li><br></br>
                                        <li>Convenient, on-demand access to healthcare professionals for non-emergency medical needs.</li><br></br>
                                        <li>Schedule an appointment with a healthcare provider, have a secure video consultation, and receive medical advice or prescriptions.</li><br></br>
                                    </ul>
                                <br></br>
                            </article>
                        </div>

                        <div className="grid-item">
                            <article className="article">
                                <div className="title-text">Electronic Health Records (EHR)</div>
                                    <ul>
                                        <li>Store and access your medical records securely within the platform.</li><br></br>
                                        <li>Easy access to your medical history, prescriptions, and test results during virtual consultations.</li><br></br>
                                        <li>Healthcare providers can access your records to provide more informed care.</li><br></br>
                                    </ul>
                                <br></br>
                            </article>
                        </div>

                        <div className="grid-item">
                            <article className="article">
                                <div className="title-text">Prescription Management</div>
                                    <ul>
                                        <li>Receive electronic prescriptions from healthcare providers.</li><br></br>
                                        <li>Streamlined prescription management and easy access to prescription details.</li><br></br>
                                        <li>Healthcare providers can electronically send prescriptions to your preferred pharmacy.</li><br></br>
                                    </ul>
                                <br></br>
                            </article>
                        </div>
                    </Grid>

                    <WhiteSpace height="50"/>

                    <Grid templateColumns={"repeat(2,4fr"} sideMargins={"10px"}>

                        <div className="grid-item">
                            <article className="article">
                                <div className="title-text">Real-Time Chat Support</div>
                                    <ul>
                                        <li>Get immediate assistance and answers to your questions.</li><br></br>
                                        <li>Quick responses to inquiries and support related to your virtual consultations.</li><br></br>
                                        <li>Use the chat feature within the platform to connect with support agents.</li><br></br>
                                    </ul>
                                <br></br>
                            </article>
                        </div>

                        <div className="grid-item">
                            <article className="article">
                                <div className="title-text">Healthcare Network</div>
                                    <ul>
                                        <li>Access a network of healthcare providers from various specialties.</li><br></br>
                                        <li>Choose from a range of healthcare professionals, including doctors, specialists, and mental health experts.</li><br></br>
                                        <li>Browse through the list of available healthcare providers, view their profiles, and schedule appointments.</li><br></br>
                                    </ul>
                                <br></br>
                            </article>
                        </div>

                    </Grid>
                    </section>

                    <section>
                        <article className="article-center">
                            <WhiteSpace height="50"/>
                            <ContentButton buttonText="Check our plans" pathTarget={"/plans"}/>
                            <WhiteSpace height="50"/>
                        </article>
                    </section>


                   
                </div>
            </div>
            <LineSeparator/>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Services;