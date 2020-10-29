import React from 'react';
import './Group.css';
import SidebarGroup from './SidebarGroup';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

export default function Group() {
    return (
        <div className="Group">
            <SidebarGroup />
            <div className="sdfaww"></div>
            <div className="containerGroup">
            <div className="newfeed">
                <div className="newfeed_top">
                    <div className="newfeed_user">
                        <PersonIcon />
                    </div>
                    <div className="newfeed_user_name">
                        <h4>Name</h4>
                        <span>hours</span>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="newfeed_content">
                    <div className="newfeed_caption">
                        <p>Caption here</p>
                    </div>
                    <div className="newfeed_imgvdo"></div>
                </div>
                <div className="newfeed_status">

                </div>
                <div className="newfeed_interative">
                    <ThumbUpAltIcon />
                    <ChatBubbleOutlineIcon />
                    <ShareIcon />
                </div>
                <div className="comment">
                    <p>Comment here</p>
                </div>
            </div>
            </div>

        </div>
    )
}
