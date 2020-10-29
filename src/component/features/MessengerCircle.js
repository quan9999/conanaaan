import React, { Component } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import './MessengerCircle.css';

import { MesContext } from '../context/MessengerProvider';

export default class MessengerCircle extends Component {
    render() {
        return (
            <div className="messengeCicle">
                <MesContext.Consumer>
                    {({cert, remountMes, removenotMes}) => cert.map((na)=><div className="createMes" >
                    <img src={na} onClick={() => remountMes(na)}/>
                    <div className="sffd" onClick = {() => removenotMes(na)}>
                        <CloseIcon  />
                    </div>
                </div>)}
                </MesContext.Consumer>
                <div className="circle">
                <CreateIcon />
                </div>
                
               
            </div>
        )
    }
}
