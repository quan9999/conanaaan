 import React, { Component } from 'react';
import './Navbar.css';
import { NavLink, Link } from "react-router-dom";
import logo from './logo.png';

import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MessengerCircle from '../features/MessengerCircle';
import Create from './Create';
import Messenger from './Messenge';
import Notification from './Notification';
import ExpandMore from './ExpandMore';
import SearchBar from './SearchBar';
import MessengeS from '../features/MessengeS';
import { MesContext } from '../context/MessengerProvider'



export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            MessengeC: []
        }
    }
    render() {
        return (
            <div className="navbar" >
            <div className="NavbarLeft" >
                <Link to="/">
                    <img src={logo} alt="logo" 
                    className="imgLogo" />
                </Link>
                <SearchBar />
            </div>
            <div className="navbar_middle">
                <NavLink exact to='/' 
                className="navbar_option" 
                activeClassName="active">
                        <HomeIcon />  
                </NavLink>
                <NavLink exact to='/Video' 
                className="navbar_option" 
                activeClassName="active">
                        <VideoLibraryIcon />
                </NavLink>
                <NavLink exact to='/Store' 
                className="navbar_option" 
                activeClassName="active">
                        <StorefrontIcon />
                </NavLink>
                <NavLink exact to='/Group' 
                className="navbar_option" 
                activeClassName="active">
                        <SupervisedUserCircleIcon />
                </NavLink>
                <NavLink exact to='/Gaming' 
                className="navbar_option" 
                activeClassName="active">
                        <SportsEsportsIcon /> 
                </NavLink>
            </div>
            <div className="navbar_right">
                <NavLink to="Personal" 
                className="navbar_avatar" 
                activeClassName="avatar_active" >
                        <AccountCircleIcon />
                        <h4>{this.props.name}</h4>
                </NavLink>
               
                <div className="navbar_more">
                    <Create />
                    <Messenger />  
                    <Notification />
                    <ExpandMore />
                </div>
            </div>
            <MessengerCircle />
            <div className="MessengeS">
                <MesContext.Consumer>
                    {({cart}) => cart.map((na)=><MessengeS value={na}/>)}
                </MesContext.Consumer>
            </div>
        </div>
        )
    }
}



