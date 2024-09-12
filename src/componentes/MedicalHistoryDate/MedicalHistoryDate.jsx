import './MedicalHistoryDateStyles.css'

const MedicalHistoryDate = ({date}) => {
  return (
    <div className='medicalHistory px-3 py-4 mb-2'>
      {/* {date} */}
      <div className='appointment'>
        <p className='historyDate mb-2'>31/08/24, 08:50 am</p>
        <p className='historyResume p-0 m-0'>
          Lugar de atención: IPS Centro de Rehabilitación Sura, Medellín. <br />
          Servicio: Terapia física miembro inferior. <br />
          EPS: Profesional Sulvarán Olaya Katherine.
        </p>
      </div>
      
      <div className='appointment'>
        <p className='historyDate mb-2'>03/09/24, 07:20 am</p>
        <p className='historyResume p-0 m-0'>
          Lugar de atención: IPS Centro de Rehabilitación Sura, Medellín. <br />
          Servicio: Terapia física miembro inferior. <br />
          EPS: Profesional Marín Vargas Clara.
        </p>
      </div>
      
      <div className='appointment'>
        <p className='historyDate mb-2'>16/09/24, 07:00 am</p>
        <p className='historyResume p-0 m-0'>
          Lugar de atención: IPS Centro de Rehabilitación Sura, Medellín. <br />
          Taller: Protección lumbar. <br />
          Profesional: Bohórquez Villamizar María Fernanda.
        </p>
      </div>
    </div>
  )
}

export default MedicalHistoryDate
