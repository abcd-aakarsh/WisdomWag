import React from 'react'
import './PlayCourse.css'


const PlayCourse = () => {
    return (
        <div className='play-video'>
            <video src='' controls autoPlay muted></video>
            <h3>Build your first react app</h3>
            <div className='play-video-info'>
                <p>1500 views &bull; 2 days ago</p>
                <div>
                    <span><img src='' alt=''></img>125</span>
                    <span><img src='' alt=''></img>125</span>
                    <span><img src='' alt=''></img>125</span>
                </div>
            </div>
            <hr/>
            <div  className='publisher'>
                <img src='' alt=''></img>
                <div>
                    <p>Ayush Mittal</p>
                    <span>1M Followers</span>
                </div>
                <button>Follow</button>
            </div>
            <div className='vid-description'>
                <p>This video explains the fundamentals of react web app.</p>
                <hr/>
            </div>
        </div>
    )
}

export default PlayCourse;