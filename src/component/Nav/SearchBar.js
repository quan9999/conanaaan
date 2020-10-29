import React, { useState, useRef, Component } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.css';


class SearchBar22 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nnn: '',
            img: '',
            name: ''
        }
    }
    render() {
        return (
                <div className="SearchBar">
                    <div className="bottom_search">
                    <SearchIcon />
                    <p>{this.props.value}</p>
                    </div>
                <div className="center_search">
                    <h4>Looking for close</h4>
                    <div className="fix">
                        <span>Fix</span>
                    </div>
                
                </div>
                
                <div className="bottom_search">
                    {/* <img src={this.state.img} className="imgSearch" />
                    <h4>{this.state.name}</h4>
                
                    <CloseIcon /> */}
                </div>
                </div>
        )
    }
}




function SearchBar(props) {


    const [ignore, setIgnore] = useState('1');
    const [value, setValue] = useState('');
    const inputEl = useRef(null);
    const onButtonClick = () => {
            inputEl.current.focus();
            return setIgnore('2');
     
    };
    function snnas() {
        if(ignore === '2'){
            return <SearchBar22 value={value} />
        }
    }

    function djshfksd(po, op) {
        if(ignore === '2'){
            return po
        }else{
            return op
        }
    }

    function kjsnsan(e){
        setValue(e.target.value)
    }



   return (
       
        <div className={djshfksd('sfsfgsgActive', 'sfsfgsg')}>
            <div className={djshfksd('IconbackActive', 'Iconback')} 
            onClick={()=>setIgnore('1')}>
                    <ArrowBackIcon />
            </div>
            <div className='navbar_input' onClick={onButtonClick}>
            <SearchIcon />
                <div className={djshfksd('navbar_input1', 'navbar_input')}>
                    <input ref={inputEl} type="text" placeholder="Search on facebook" value={value} onChange={kjsnsan}/>
                </div>
            </div>
            {snnas(value)}
        </div>
       
        
      
        
    
   );
}

export default SearchBar;