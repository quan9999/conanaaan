import React, { Component } from 'react';
import './MessengeS.css';
import RemoveIcon from '@material-ui/icons/Remove';
import CloseIcon from '@material-ui/icons/Close';
import { MesContext } from '../context/MessengerProvider';


export default class MessengeS extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    render() {
        return (    
            <div className="mes">
                <div className="topM">
                    <h4>{this.state.value}</h4>
                    <MesContext.Consumer>
                        {({ unmountMes }) => <div className="remove" onClick={()=>unmountMes(this.props.value)}>
                    <RemoveIcon />
                    </div>}
                    </MesContext.Consumer>
                    <MesContext.Consumer>
                        {({ removeMes }) => <div className="remove" onClick={()=>removeMes(this.props.value)}>
                    <CloseIcon />
                    </div>}
                    </MesContext.Consumer>
                    
                </div>
                <div className="bottomM">

                </div>
            </div>
            
        );
    }
}
