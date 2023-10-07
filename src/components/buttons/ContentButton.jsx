import "./ContentButton.css";

const ContentButton = ({buttonText}, {pathTarget}) =>{
    return(
        <a className="content-button">
            {buttonText}
        </a>
    );
}

export default ContentButton;