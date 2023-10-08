import "./ContentButton.css";

const ContentButton = ({buttonText}, {pathTarget}) =>{
    return(
        <a href={pathTarget} className="content-button">
            {buttonText}
        </a>
    );
}

export default ContentButton;