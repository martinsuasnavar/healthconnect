import { WhiteSpace, LineSeparator } from "../components/supports";
import Footer from "../components/containers/Footer";

const FAQs = ()=>{
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
                            <div className="big-title-text">Frequently asked questions</div>
                            <WhiteSpace height="100"/>
                            <details className="title-text">
                                <summary>How do I schedule a virtual consultation?</summary>
                                <p>Log in to your account, browse available healthcare providers, select a provider, and schedule an appointment based on their availability.</p>
                            </details>
                            <WhiteSpace height="50"/>
                            <details className="title-text">
                                <summary>Is my data secure?</summary>
                                <p>Yes, we prioritize data security and comply with healthcare regulations like HIPAA. Your data is protected and confidential.</p>
                            </details>
                            <WhiteSpace height="50"/>
                            <details className="title-text">
                                <summary>How can I access my electronic health records?</summary>
                                <p>Your EHR can be accessed through your account, providing insights into your medical history.</p>
                            </details>
                        </article>
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
};

export default FAQs;