import { WhiteSpace, LineSeparator } from "../components/supports";
import Footer from "../components/containers/Footer";

const Plans = ()=>{
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
                            <div className="big-title-text">Plans and billings</div>
                        </article>
                    </section>

                    <WhiteSpace height="950"/>
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