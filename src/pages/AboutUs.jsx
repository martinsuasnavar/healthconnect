import { WhiteSpace, LineSeparator } from "../components/supports";
import Footer from "../components/containers/Footer";
import ContentButton from "../components/buttons/ContentButton";

const AboutUs = ()=>{
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
                            <div className="big-title-text">About us</div>
                            At HealthConnect Innovations, we believe that healthcare should be accessible to all, no matter where you are. We're on a mission to transform the healthcare landscape, making it convenient, high-quality, and within reach for individuals and communities worldwide. Our platform, built with innovation and care, is dedicated to connecting care worldwide.
                        </article>
                    </section>

                    <section> 
                        <article className="article-center">
                            <div className="title-text">Our Journey</div>
                            HealthConnect Innovations has a rich history of innovation and dedication to healthcare. Founded by Dr. Emily Turner, a seasoned healthcare professional with a deep commitment to patient care, we've grown from a vision into a global force in telemedicine. Our journey is marked by key milestones, awards, and recognition for our unwavering dedication to making a difference.
                        </article>

                        <article className="article-center">
                            <div className="title-text">Our Values</div>
                            <ul>
                                <il>
                                    <div className="small-title-text">Integrity</div>
                                    <p>We uphold the highest ethical standards in all our interactions, ensuring trust and transparency in our services.</p>
                                </il>
                                <il>
                                    <div className="small-title-text">Innovation</div>
                                    <p>Our commitment to innovation drives us to continually improve the telemedicine experience and explore new ways to deliver healthcare.</p>
                                </il>
                                <il>
                                    <div className="small-title-text">Empathy</div>
                                    <p>We understand that each patient is unique. Our empathetic approach ensures that we provide personalized care to every individual.</p>
                                </il>
                                <il>
                                    <div className="small-title-text">Collaboration</div>
                                    <p>We work in close collaboration with healthcare organizations, ensuring a comprehensive healthcare ecosystem for our users.</p>
                                </il>
                                <il>
                                    <div className="small-title-text">Collaboration</div>
                                    <p>We work in close collaboration with healthcare organizations, ensuring a comprehensive healthcare ecosystem for our users.</p>
                                </il>
                            </ul>
                        </article>

                        <article className="article-center">
                            <div className="title-text">Meet Our Team</div>
                            Dr. Emily Turner leads a dedicated team of healthcare professionals and tech enthusiasts. Together, we're working to make the world a healthier place. Learn more about the faces behind HealthConnect Innovations.
                        </article>

                        <article className="article-center">
                            <div className="title-text">Customer-Centric Focus</div>
                            We're proud to have served thousands of individuals and families, connecting them with the care they need. Our customers' stories are a testament to the impact we've had on their lives. Read their experiences, and discover how HealthConnect Innovations is making a difference.
                        </article>

                        <article className="article-center">
                            <div className="title-text">Join Our Network</div>
                            HealthConnect Innovations is built on a foundation of excellence. We're proud to partner with healthcare providers, organizations, and insurance providers to expand our network. If you're interested in becoming a part of our global healthcare community, get in touch.
                        </article>

                        <article className="article-center">
                            <div className="title-text">Contact Us</div>
                            Ready to connect with us? We're here to answer your questions, provide support, and explore collaboration opportunities. 
                            <br></br>
                            <WhiteSpace height="50"/>
                            <ContentButton buttonText="Our contact methods" pathTarget="/contact"/>
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

export default AboutUs;