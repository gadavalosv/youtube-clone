import React from 'react'
import { Avatar } from "@material-ui/core"
import VerifiedIcon from '@material-ui/icons/CheckCircle'
import './ChannelRow.css';

function ChannelRow({ 
    channelImage,
    channelName,
    verified,
    numberOfSubs,
    numberOfVideos,
    channelDescription
}) {
    return (
        <div className="channelRow">
            <Avatar 
                className = "channelRow_logo" 
                alt = {channelName} 
                src = {channelImage}
            />
            <div className="channelRow_text">
                <h3>{channelName} {verified && <VerifiedIcon className="chanelRow_verifiedIcon"/>}</h3>
                <p>
                    {numberOfSubs} subscribers • {numberOfVideos} videos
                </p>
                <p>{channelDescription}</p>
            </div>
        </div>
    )
}

export default ChannelRow
