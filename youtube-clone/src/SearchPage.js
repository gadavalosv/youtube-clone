import React from 'react'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div class="searchPage_filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr/>

            <ChannelRow 
                channelImage = "https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
                channelName = "Clever Programmer"
                verified
                numberOfSubs = "979,000"
                numberOfVideos = {599}
                channelDescription = "You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            />

            <hr/>

            <VideoRow 
                videoViews="1.4M"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
                videoDescription="Do you want to become JavaScript Developer and make an income? I just dropped a FREE ONE hour video training
                In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS 🚀."
                videoTimestamp="10 Months ago"
                channelName="Clever Programmer"
                videoTitle="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                videoImage="https://i.ytimg.com/vi/NT299zIk2JY/0.jpg"
                verified
            />
            <VideoRow 
                videoViews="1.4M"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
                videoDescription="Do you want to become JavaScript Developer and make an income? I just dropped a FREE ONE hour video training
                In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS 🚀."
                videoTimestamp="10 Months ago"
                channelName="Clever Programmer"
                videoTitle="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                videoImage="https://i.ytimg.com/vi/NT299zIk2JY/0.jpg"
                verified
            />
            <VideoRow 
                videoViews="1.4M"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
                videoDescription="Do you want to become JavaScript Developer and make an income? I just dropped a FREE ONE hour video training
                In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS 🚀."
                videoTimestamp="10 Months ago"
                channelName="Clever Programmer"
                videoTitle="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                videoImage="https://i.ytimg.com/vi/NT299zIk2JY/0.jpg"
                verified
            />
        </div>
    )
}

export default SearchPage
