// routes/AppRoutes.js
import { Routes, Route } from 'react-router-dom';
/* import Cita from '../Pages/Cita/Cita';  */
import Confirmacion from '../Pages/Confirmacion/Confirmacion';
import MedicalHistory from '../Pages/MedicalHistory/MedicalHistory';
import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import HomeSinCita from '../Pages/Home/HomeSinCita';
import Home from '../Pages/Home/Home';
import CitaSimple from '../Pages/CitaSimple/CitaSimple';
import Profile from '../Pages/Profile/Profile';
import { AuthenticationGuard } from '../componentes/auth0/AuthenticationGuard'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<AuthenticationGuard  Component={SignUp} />} />
        <Route path='/signin'  element={<AuthenticationGuard  Component={SignIn} />} />
        <Route path='/home'  element={<AuthenticationGuard  Component={Home} />} />
        <Route path='/home1'  element={<AuthenticationGuard  Component={HomeSinCita} />} />
        <Route path='/consulta/:idPaciente' element={<CitaSimple />} /> 
        <Route path='/history' element={<MedicalHistory />} /> 
        <Route path='/confirmacion' element={<Confirmacion />} /> 
        <Route path='/perfil' element={<Profile />} /> 
      </Routes>
      {/* <BottomNavbar/> */}
    </>
  );
}

export default AppRoutes;