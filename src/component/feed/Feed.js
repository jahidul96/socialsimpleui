import './feed.css'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ImageIcon from '@mui/icons-material/Image';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import Post from '../Post';
export default function Feed() {
    return (
        <div className='feedarea'>
            <div className='feedContainer'>
                <div className='postWrapper'>
                    <div className='profileContainerWrapper'>
                        <img src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490__340.jpg' alt='profileimg' className='ProfileImg' />
                        <div className='inputDiv'>
                            <input placeholder='Write your post....' />
                        </div>
                    </div>
                    <hr />
                    <div className='iconContainer'>
                        <div className='flexItemIcon'>
                            <span><LiveTvIcon /></span>
                            <span>Live video</span>
                        </div>
                        <div className='flexItemIcon'>
                            <span><ImageIcon /></span>
                            <span>Photo/video</span>
                        </div>
                        <div className='flexItemIcon'>
                            <span><EmojiEmotionsIcon /></span>
                            <span>Feeling/activity</span>
                        </div>
                    </div>
                </div>

                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />

            </div>
        </div>
    )
}
