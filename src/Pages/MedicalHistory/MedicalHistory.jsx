import BottomNavbar from '../shared/BottomNavbar/BottomNavbar'
import Header from '../shared/header/Header'
import addDate from '../../assets/icons/AddDate.png'
import MedicalHistoryImg from '../../assets/img/MedicalHistoryImg.png'
import './MedicalHistoryStyles.css'
import MedicalHistoryDate from '../../componentes/MedicalHistoryDate/MedicalHistoryDate'
import { NavLink } from 'react-router-dom'

const MedicalHistory = () => {
  return (
    <div className="vh-100 d-flex flex-column position-relative">
      <Header/>
      <div className=" flex-grow-1 overflow-auto">
        <div className='d-flex medicalHistoryPanel rounded-3 m-3 mt-0 py-1 px-3'>
            <div className='d-flex flex-column justify-content-center '>
                <p className='headline-2'>Historial De Consultas</p>
            </div>
            <div>
                <img className='medicalHistoryImg' src={MedicalHistoryImg} alt="" />
            </div>
        </div>
        <div className='flex-grow-1 overflow-auto bg-main p-3 vh-100'>
            <MedicalHistoryDate/>
            <MedicalHistoryDate/>
            <MedicalHistoryDate/>
            <MedicalHistoryDate/>
            <MedicalHistoryDate/>
        </div>
        <NavLink to='/consulta/:pacienteId'>
          <img src={addDate} alt="Add Date Button" className='fixed-bottom-right'/>
        </NavLink>
      </div>
      <BottomNavbar className='position-fixed bottom-0 w-100'/>
        
    </div>
  )
}

export default MedicalHistory;