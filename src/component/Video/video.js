import React from 'react';
import SidebarVideo from './SidebarVideo';
import ContentVideo from './ContentVideo';
import './video.css'

function video() {
    return (
        <div className="middle">
            <SidebarVideo />
            <ContentVideo />
        </div>
    )
}

export default video
