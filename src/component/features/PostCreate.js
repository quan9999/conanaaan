import React, { Component } from 'react';
import { unmountComponentAtNode, render } from "react-dom";
import './PostCreate.css';
import CloseIcon from '@material-ui/icons/Close';




export default class PostCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    render() {
        return (
            <div className="PostCreate" id="root">
                <div className="sfsdf">
                    <div className="asffdssd"><h4>Create</h4></div>
                    <div className="close" onClick={()=>this.props.value(false)}><CloseIcon/></div>
                    <div></div>
                    <div>
                        <div>
                            <img />
                            <h4>name</h4>
                        </div>
                        <form method="POST" action="http://localhost:8080/post">
                            <input type="text" placeholder="What do you think?" value={this.state.value} onChange={this.handleChange}/>
                        </form>
                        
                    </div>
                </div>
            </div>
        
        )
    }
}


