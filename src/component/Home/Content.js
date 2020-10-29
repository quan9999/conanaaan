import React, {Component} from 'react';
import './Content.css';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import VideocamIcon from '@material-ui/icons/Videocam';
import ImageIcon from '@material-ui/icons/Image';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import PostCreate from '../features/PostCreate';


class Content extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.state = {
            isComplete: false
        }
        this.state = {
        storie:  [],
        meetingroom: [],
        newfeed: []
        }
        this.handle = this.handle.bind(this);
        this.updateIscomplete = this.updateIscomplete.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }
    componentDidMount(){
        fetch('http://localhost:8080/')
        .then(res => res.json())
        .then(data => this.setState({
            storie: data.stories,
            meetingroom: data.meetingroom,
            newfeed: data.newfeed

        }))
    }


    updateIscomplete() {
        this.setState({
            isComplete: true
        })
    }


    uploadFile(){
        this.myRef.current.click()
    }

    handle() {
        if(this.state.isComplete === true){
            console.log('snfk')
            return <PostCreate value={(value)=>{this.setState({isComplete: value})}} />
        }
    }
    render(){
        return (
            <div className="content">
                
                <div className="stories">
                    <div className="storie">
                        <div className="user_friend">
                            <AddIcon />
                        </div>
                        <h4>Create</h4>
                    </div>
                    {this.state.storie.map((str) => 
                        <div className="storie" key={str.name}>
                            <div className="user_friend">
                            <PersonIcon /> 
                            </div>
                            <h4>{str.name}</h4>
                        </div>
                        
                    )}

            </div>                
                <div className="create_new">
                    <div className="create_new_input">
                        <AccountCircleIcon fontSize="lagre" />
                        <div className="button" onClick={this.updateIscomplete}>
                            <h4>What are you thinking?</h4>
                        </div>
                        {this.handle()}
                    </div>
                    <div className="create_new_more">
                        <div className="create_new_option" id="red" >
                            <VideocamIcon />
                            <h4>Live</h4>
                        </div>
                        <div className="create_new_option" id="green" onClick={this.uploadFile} >
                            <ImageIcon />
                            <h4>Image/video</h4>
                            <input type="file" className="upload" ref={this.myRef} />
                           
                        </div>
                        <div className="create_new_option" id="yellow" >
                            <InsertEmoticonIcon />
                            <h4>Emotion</h4>
                        </div>
                    </div>
                </div>
                <div className="meeting_room">
                    <div className="meeting_room_top">
                        <VideoCallIcon />
                        <h4>Meeting Room</h4>
                        <p>Chat video with friends</p>
                        <AnnouncementIcon />
                        <p>Create Meeting Room</p>
                    </div>
                    <div className="meeting_room_bottom">
                        {this.state.meetingroom.map((number) => 
                        <div className="meeting_room_user" key={number.id}>
                            <PersonIcon /> 
                        </div>
                        )}
                    </div>
                </div>
                {this.state.newfeed.map((newf) => <div className="newfeed">
                    <div className="newfeed_top">
                        <div className="newfeed_user">
                            <PersonIcon />
                        </div>
                        <div className="newfeed_user_name">
                            <h4>{newf.newfeeduser}</h4>
                            <span>{newf.hours}</span>
                        </div>
                        <MoreHorizIcon />
                    </div>
                    <div className="newfeed_content">
                        <div className="newfeed_caption">
                            <p>{newf.caption}</p>
                        </div>
                        <div className="newfeed_imgvdo"></div>
                    </div>
                    <div className="newfeed_status">
    
                    </div>
                    <div className="newfeed_interative">
                        <ThumbUpAltIcon />
                        <ChatBubbleOutlineIcon />
                        <ShareIcon />
                    </div>
                    <div className="comment">
                        <p>{newf.comment}</p>
                    </div>
                        </div>)}
               
            </div>
        );
        }
    
}

export default Content