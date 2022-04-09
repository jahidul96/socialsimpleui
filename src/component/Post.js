import React from 'react'
import './feed/feed.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';

export default function Post() {
    return (
        <div className='postmainWrapper'>
            <div className='pSection'>
                <div className='pTextWrapper'>
                    <img className='ProfileImg' src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490__340.jpg' />
                    <span>Jahidul islam</span>
                </div>
                <h3>...</h3>
            </div>
            <p style={{ margin: "10px 0", fontWeight: 300 }}>this why we are always doing this...</p>

            <div className='imgWrapper'>
                <img src='https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80' />
            </div>
            <hr />
            <div className='iconContainer'>
                <div className='flexItemIcon'>
                    <ThumbUpIcon />
                    <span>Like</span>
                </div>
                <div className='flexItemIcon'>
                    <ModeCommentIcon />
                    <span>comment</span>
                </div>
                <div className='flexItemIcon'>
                    <ShareIcon />
                    <span>share</span>
                </div>
            </div>
        </div>
    )
}
