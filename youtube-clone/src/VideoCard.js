import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import VerifiedIcon from '@material-ui/icons/CheckCircle'
import './VideoCard.css'

function VideoCard({ 
    videoImage, 
    videoTitle, 
    channelName, 
    views, 
    timeStamp, 
    channelImage, 
    verified
}) {
    return (
        <div className="videoCard">
            <img  className="videoCard_thumbnail" src={videoImage} alt=""/>
            <div class="videoCard_info">
                <Avatar className="videoCard_avatar" alt={channelName} src={channelImage} />
                <div class="videoCard_text">
                    <h4>{videoTitle}</h4>
                    <p>{channelName} {verified && <VerifiedIcon className="videoCard_verifiedIcon"/>}</p>
                    <p>
                        {views} • {timeStamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
