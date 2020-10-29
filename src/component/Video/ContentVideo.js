import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './contentVideo.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';


function ContentVideo() {
    return (
        <div className="ContentVideo">
            <div className="notification">
                <FiberManualRecordIcon />
                <h4>Notification</h4>
                <FiberManualRecordIcon />
                <p>Video</p>
                <div className="All">
                    <h4>View all</h4>
                </div>
            </div>
            <div><h2>Top video for you</h2></div>
            <div className="video">
                <div className="videoTitle">
                    <div className="imguser">
                        <FiberManualRecordIcon />
                    </div>
                    <div className="nameuser">
                        <h4>Name</h4>
                        <p>Hours</p>
                    </div>
                    <div className="follow">
                        <h4>Follow</h4>
                    </div>
                </div>
                <div className="caption">
                    <h2>NAME</h2>
                    <p>asdA</p>
                </div>
                <div className="article"></div>
                <div className="video_interative">
                    <ThumbUpAltIcon />
                    <ChatBubbleOutlineIcon />
                    <ShareIcon />
                </div>
            </div>
        </div>
    )
}

export default ContentVideo
