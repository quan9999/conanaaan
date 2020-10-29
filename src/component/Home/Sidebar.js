import React, { Component } from 'react';
import './Sidebar.css';
import PeopleIcon from '@material-ui/icons/People';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PanoramaIcon from '@material-ui/icons/Panorama';



export default class Sidebar extends Component {
   


   
    render() {
        return (
            <div className="sidebar">
            <div className="more">
                <div className="sidebar_option">
                    <AccountCircleIcon />
                    <h4>Name</h4>
                </div>
                <div className="sidebar_option">
                    <PeopleIcon fontSize="medium" />
                    <h4>Name</h4>
                </div>
                <div className="sidebar_option">
                    <OndemandVideoIcon fontSize="medium" />
                    <h4>Name</h4>
                </div>
                <div className="sidebar_option">
                    <StorefrontIcon fontSize="medium" />
                    <h4>Name</h4>
                </div>
                <div className="sidebar_option">
                    <SupervisedUserCircleIcon fontSize="medium" />
                    <h4>Name</h4>
                </div>
                <div className="sidebar_option">
                    <ExpandMoreIcon fontSize="medium" />
                    <h4>More</h4>
                </div>
            </div>
            <div className="your_shortcut">
                
                <div className="shortcut">
                    <PanoramaIcon />
                    <h4>name</h4>
                </div>
                
            </div>
        </div>
        )
    }
}



