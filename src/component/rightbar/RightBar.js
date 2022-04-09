import './rightbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { friendlistData } from '../../assets/friendlistdata';


export default function RightBar() {
    return (
        <div className='rightbar'>
            <div className='rightWrapper'>
                <div className='contactTextWrapper'>
                    <h4>Contacts</h4>
                    <span><SearchIcon /></span>

                </div>
                <div>
                    {
                        friendlistData.map(data => (
                            <div className='groupContainer' key={data.id}>
                                <img src={data.img} className='sidebarProfileImg' />
                                <p style={{ marginLeft: "10px" }}>{data.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
