 import React from 'react';
 import VideoListItem from './video_list_item';

// in class based, this.props accessible
 // in functional class; props needs to be passed in argument
 const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} />
        )
    } );

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
        );

 };

 export default VideoList;