import React, { Component, useState } from 'react';
import './create.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default function ExpandMore() {
    const [isComplete, setIscomplte] = useState({isComplete: false})
    function handleButton(){
        setIscomplte(
            {isComplete: !isComplete.isComplete}
        )
    }

    function renderComp(){
        if(isComplete.isComplete===true){
            return <ExpandMore1 />
        }
    }
    return (
        <div className={isComplete.isComplete===true?classname + " active2":classname} onClick={handleButton}>
                <ExpandMoreIcon />
                {renderComp()}
            </div>
        
    )
}


const classname = "navbar_option_2";
class ExpandMore1 extends Component {
    constructor(props){
        super(props)
       this.state = {
           Post: "",
           Share: ""
       }
    }

    componentDidMount(){
        this.setState({
            Port: "ffff",
            Share: "asasda"
        })
    }
    

    render() {
        return (
            <div className="sdfsd">
                <div className="Create">
                    <div className="toplevel">
                        <h2>Setting</h2>
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
