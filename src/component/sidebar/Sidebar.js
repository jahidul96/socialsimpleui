import { groupData, listItemData } from '../../assets/data'
import './sidebar.css'

export default function Sidebar() {

    return (
        <div className='sidebar'>
            <div className='sideContainer'>
                <div className='sideBarProfileDiv'>
                    <img className='sidebarProfileImg' src="https://i.pinimg.com/550x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg" alt='profile img' />
                    <span className='pName'>Jahidul islam</span>
                </div>
                <div>
                    {
                        listItemData.map(data => (
                            <li className='flatItems' key={data.id}>
                                <span>{data.icon}</span>
                                <span className='textSpan'>{data.text}</span>
                            </li>
                        ))
                    }
                </div>
                <hr style={{ border: ".5px solid #bbbb" }} />
                <div style={{ marginTop: "20px" }}>
                    <h4>Your Shortcarts</h4>
                    <div>
                        {
                            groupData.map(data => (
                                <div className='groupContainer'>
                                    <img src={data.imgurl} className='sidebarProfileImg' />
                                    <p style={{ marginLeft: "10px" }}>{data.groupName}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
