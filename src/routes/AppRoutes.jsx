import { Routes, Route } from 'react-router-dom';
import Confirmacion from '../Pages/Confirmacion/Confirmacion';
import MedicalHistory from '../Pages/MedicalHistory/MedicalHistory';
import SignUp from '../Pages/SignUp/signUp.jsx'
import SignIn from '../Pages/SignIn/SignIn';
import HomeSinCita from '../Pages/Home/HomeSinCita';
import Home from '../Pages/Home/Home';
import CitaSimple from '../Pages/CitaSimple/CitaSimple';
import Profile from '../Pages/Profile/Profile';
import AuthenticationGuard from '../componentes/auth0/AuthenticationGuard'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/signin'  element={<SignIn/>} />
        <Route path='/home'  element={<Home/>} />
        <Route path='/home1'  element={<HomeSinCita/>} />
        <Route path='/consulta/:idPaciente' element={<CitaSimple />} /> 
        <Route path='/history' element={<MedicalHistory />} /> 
        <Route path='/confirmacion' element={<Confirmacion />} /> 
        <Route path='/perfil' element={<Profile />} /> 
      </Routes>
    </>
  );
}

export default AppRoutes;