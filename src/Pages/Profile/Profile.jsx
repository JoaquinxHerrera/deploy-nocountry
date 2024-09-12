
import BottomNavbar from '../shared/BottomNavbar/BottomNavbar'
import Header from '../shared/header/Header'
import profileImg from '../../assets/img/profileImg.png'
import './ProfileStyle.css'


const Profile = () => {
  return (
    <div className="vh-100 d-flex flex-column position-relative">
      <Header/>
      <div className="flex-grow-1 overflow-auto profileContent">
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <img className='profileImg' src={profileImg} alt="Profile picture" />
            <p className='profileName'>Julia Navarro</p>      
        </div>
        <p><b>Información Personal</b></p>
        
        <label htmlFor="">Nombre completo</label><input className='personalInfo' type="text" name="" id="" value='Julia Navarro' disabled/>
        <label htmlFor="">Fecha de nacimiento</label><input className='personalInfo' type="text" name="" id="" value='18/04/95' disabled/>
        <label htmlFor="">Número de documento</label><input className='personalInfo' type="text" name="" id="" value='40.423.423' disabled/>
        <label htmlFor="">Número de teléfono</label><input className='personalInfo' type="text" name="" id="" value='+54 9 11 4242 4242' disabled/>
      </div>
      <BottomNavbar className='position-fixed bottom-0 w-100'/>
    </div>
  )
}

export default Profile
