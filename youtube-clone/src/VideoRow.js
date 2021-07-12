import React from 'react'
import { Avatar } from "@material-ui/core"
import VerifiedIcon from '@material-ui/icons/CheckCircle'
import './VideoRow.css';

function VideoRow({
    videoViews,
    channelImage,
    videoDescription,
    videoTimestamp,
    channelName,
    videoTitle,
    videoImage,
    verified
}) {
    return (
        <div className="videoRow">
            <img src={videoImage} alt="" />
            <div class="videoRow_text">
                <h3>{videoTitle}</h3>
                <p>{videoViews} views • {videoTimestamp}</p>
                <div class="videoRow_channel">
                    <Avatar 
                        className = "videoRow_logo" 
                        alt = {channelName} 
                        src = {channelImage}
                    />
                    <h5 className="videoRow_headline">{channelName} {verified && <VerifiedIcon className="videoRow_verifiedIcon"/>}</h5>
                </div>
                <p className="videoRow_description">{videoDescription}</p>
            </div>
        </div>
    )
}

export default VideoRow
