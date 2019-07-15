import React from 'react';
import './VideoItem.css';

const VideoItem = ({ title, thumbnail, video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" src={thumbnail.url} alt={title} />
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    );
}

export default VideoItem;