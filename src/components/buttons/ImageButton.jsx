import { MyImage } from "../supports";

const ImageButton = ({imgSrc}, {imgWidth}, {imgHeight}, {pathTarget}) =>{
    const defaultPathData = {
        href: "#",
    };
    
    const pathData = {
        ...defaultPathData,
        href: pathTarget !== undefined ? {pathTarget} : defaultPathData.href,
    };
    

    return(
        <MyImage width={imgWidth} height={imgHeight} href={pathData.href} className="image-button">
            {buttonText}
        </MyImage>
    );
}

export default ImageButton;