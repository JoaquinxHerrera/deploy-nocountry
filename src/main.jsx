import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import './index.css'
import { Auth0ProviderWithNavigate } from '@auth0/auth0-react'
/* import BottomNavbar from './Pages/Home/shared/BottomNavbar/BottomNavbar'; */
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE; 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Auth0ProviderWithNavigate
     domain={domain}
     clientId={clientId}
     authorizationParams={{
       audience: audience,
       redirect_uri: window.location.origin,
     }}
     >
       <AppRoutes />
     </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </StrictMode>,
)     
