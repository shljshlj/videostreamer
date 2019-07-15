import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    
    const renderedList = videos.map(video => {
        const { id, snippet } = video;
        const { videoId } = id;
        const { title, thumbnails } = snippet;
        const { medium } = thumbnails;

        return (
            <VideoItem
                key={videoId}
                onVideoSelect={onVideoSelect}
                title={title}
                thumbnail={medium}
                video={video}
            />
        );
    });

    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    );
}

export default VideoList;