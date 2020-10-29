import React, { Component, useState } from 'react';
import './create.css';
import MessageIcon from '@material-ui/icons/Message';


export default function Messenger() {
    const [isComplete, setIscomplte] = useState({isComplete: false})
    function handleButton(){
        setIscomplte(
            {isComplete: !isComplete.isComplete}
        )
    }

    function renderComp(){
        if(isComplete.isComplete===true){
            return <Messenger1 />
        }
    }
    return (
        <div className={isComplete.isComplete===true?classname + " active2":classname} onClick={handleButton}>
                <MessageIcon />
                {renderComp()}
            </div>
        
    )
}


const classname = "navbar_option_2";
class Messenger1 extends Component {
    constructor(props){
        super(props)
       this.state = {
           Post: "",
           Share: ""
       }
    }

    componentDidMount(){
        fetch('http://localhost:8080/messenge')
            .then(res => res.json())
            .then(data => this.setState({Port: data.name}))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="sdfsd">
                <div className="Create">
                    <div className="toplevel">
                        <h2>Messenger</h2>
                    </div>
                    <div className="bottomlevel">
                        <div className="icon"></div>
                            <div className="option">
                                <h4>{this.state.Port}</h4>
                                <p>{this.state.Share}</p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
