import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { videoService } from '../services/videoService';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    onTermSubmit = async term => {
        const videos = await videoService.fetchVideos(term);

        this.setState({
            videos,
            selectedVideo: videos[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    componentDidMount() {
        this.onTermSubmit('');
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
