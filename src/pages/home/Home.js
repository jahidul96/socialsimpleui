import Feed from '../../component/feed/Feed'
import Nav from '../../component/navbar/Nav'
import RightBar from '../../component/rightbar/RightBar'
import Sidebar from '../../component/sidebar/Sidebar'
import './home.css'

export default function Home() {
    return (
        <>
            <Nav />
            <div className='barContainer'>
                <Sidebar />
                <Feed />
                <RightBar />
            </div>
        </>
    )
}
