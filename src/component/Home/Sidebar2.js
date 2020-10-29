import React, { Component } from 'react';
import './Sidebar2.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { MesContext } from '../context/MessengerProvider'


export default class Sidebar2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/messengeisonline')
        .then(res => res.json())
        .then(data => this.setState({
                name: data.name
            })
        )
    }
    render() {
        return (
            <div className="sidebar2">
            <div className="nav_contact">
                <h4>Contact</h4>
                <VideoCallIcon />
                <SearchIcon />
                <MoreHorizIcon />
            </div>
            <div className="contacts">
            {this.state.name.map(name =>
                    <MesContext.Consumer>
                        {({ onClickMessenge }) => (
                        <div className="contact" onClick={()=>onClickMessenge(name)}>
                        <PersonIcon />
                        <h4>{name}</h4>
                    </div>)}
                    </MesContext.Consumer>
                    
            )}
            </div>
        </div>
        )
    }
}


