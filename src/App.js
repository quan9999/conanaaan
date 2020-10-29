import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Nav/Navbar';
import Home from './component/Home/Home';
import Video from './component/Video/video';
import Profiles from './component/Profile/Profile';
import Market from './component/Market/market';
import Group from './component/Group/Group';
import Gaming from './component/Gaming/Gaming';
import { MessengerProvider } from './component/context/MessengerProvider'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <MessengerProvider>
        <Router>
          <div className="App">
              <Navbar name="Quan" />
              <div>
                <Route path="/" exact component={ Home } />
                <Route path="/video" exact component={ Video } />
                <Route path="/Store" exact component={ Market } />
                <Route path="/Group" exact component={ Group } />
                <Route path="/Gaming" exact component={ Gaming } />
                <Route path="/Personal" exact component={ Profiles } />
              </div>
            
          </div>
        </Router>
      </MessengerProvider>
      
    )
  }
}
