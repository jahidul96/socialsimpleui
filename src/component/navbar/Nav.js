import './nav.css'
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

export default function Nav() {
    return (
        <div className='navContainer'>
            <h2>Social</h2>
            <input className='inputNav' placeholder='Search...' />
            <div className='rightDiv'>
                <div>
                    <img className='profileImg' src="https://i.pinimg.com/550x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg" alt='profile img' />
                    <span className='profileName'>Jahidul islam</span>
                </div>
            </div>
        </div>
    )
}
