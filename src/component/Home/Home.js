import React from 'react';
import './Home.css';
import Content from './Content';
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';


function Home() {
    return (
        <div className="middle">
            <Sidebar />
            <Content />
            <Sidebar2 />
        </div>
        
        )
}

export default Home
