import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details'

const API_KEY = 'AIzaSyCDY4dYiv3Ow-PYLBCJxzg7qWNtgzo2sCw'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [], selectedVideo: null };
        // kick off search in constructor; moved into videoSearch method
        this.videoSearch('surfboards');
        // same as this.setState({ videos: videos }); only works if key and prop are same name
       
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({ videos: videos, selectedVideo: videos[0] });
    });
    }

    render() {
        // throttle search for users to every 300 milliseconds
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); // function can only be called once every 300 seconds

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail  video={this.state.selectedVideo} />
                <VideoList 
                    videos={this.state.videos} 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
            </div>
            );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))