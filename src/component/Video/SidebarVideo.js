import React from 'react';
import './SidebarVideo.css';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import MovieIcon from '@material-ui/icons/Movie';
import VideocamIcon from '@material-ui/icons/Videocam';
import BookmarkIcon from '@material-ui/icons/Bookmark';

function SidebarVideo() {
    return (
        <div className="SidebarVideo">
            <h2>Watch</h2>
            <div className="SearchVideo">
                <input type="text" placeholder="Search video" />
            </div>
            <div className="top"></div>
            <div className="ListSidebar">
                <OndemandVideoIcon />
                <h4>Home</h4>
            </div>
            <div className="ListSidebar">
                <MovieIcon />
                <h4>Program</h4>
            </div>
            <div className="ListSidebar">
                <VideocamIcon />
                <h4>Live</h4>
            </div>
            <div className="ListSidebar">
                <BookmarkIcon />
                <h4>Saved video</h4>
            </div>
            <div className="under"></div>
            <div className="YourListItem">
                <h4>Your list video</h4>
                <h4 className="manage">Manage</h4>
            </div>
            <div className="ListSidebar">
                <BookmarkIcon />
                <h4>Saved video</h4>
            </div>
            <div className="ListSidebar">
                <BookmarkIcon />
                <h4>Saved video</h4>
            </div>
            <div className="ListSidebar">
                <BookmarkIcon />
                <h4>Saved video</h4>
            </div>
            <div className="ListSidebar">
                <BookmarkIcon />
                <h4>Saved video</h4>
            </div>
            <div className="ListSidebar">
                <BookmarkIcon />
                <h4>Saved video</h4>
            </div>
        </div>
    )
}
export default SidebarVideo
