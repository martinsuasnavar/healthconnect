const ImageButton = ({imgSrc, imgWidth, imgHeight, pathTarget}) =>{
    const defaultPathData = {
        href: "#",
    };
    
    const pathData = {
        ...defaultPathData,
        href: pathTarget !== undefined ? {pathTarget} : defaultPathData.href,
    };
    

    return(
        <img href={pathData.href} src={imgSrc} width={imgWidth} height={imgHeight} className="image-button">         
        </img>
    );
}

export default ImageButton;