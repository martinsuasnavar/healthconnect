import React from 'react';
import "./MyVideo.scss"

const MyVideo = ({src, width, height}) => {
    return(
        <div class="video-container">
            <video width={width} height={height} controls autoplay muted>
            <source src={src} type="video/mp4"/>
                MP4 not supported by your browser.
            </video>
        </div>
    );
}

export default MyVideo;