
import {  Nav } from 'react-bootstrap'
/* import { House} from 'react-bootstrap-icons'; */
import Home from "../../../../assets/icons/Vector-5.png"
import Setting from "../../../../assets/icons/Setting.png"
import Notifications from "../../../../assets/icons/Vector-campana.png"
import MedicHistory from "../../../../assets/icons/Vector-4.png"

const BottomNavbar = () => {
  return (
    <div className='bg-primary d-flex justify-content-around w-100'>
        <Nav>
            <Nav.Link href='home'>
                <img src={Home} alt="Home button" />
            </Nav.Link>
            <Nav.Link href='history'>
                <img src={MedicHistory} alt="Medical history button" />
            </Nav.Link>
            <Nav.Link href='notifications'>
                <img src={Notifications} alt="Home button" />
            </Nav.Link>
            <Nav.Link href='settings'>
                <img src={Setting} alt="Settings button" />
            </Nav.Link>
        </Nav>

    </div>
  
    
  )
}

export default BottomNavbar