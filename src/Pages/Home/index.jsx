/* import { Link } from 'react-router-dom'; */
import Agendar from '../../componentes/Agendar/index';
import BottomNavbar from './shared/BottomNavbar/BottomNavbar';
/* import Cita from '../../componentes/Cita/index'; */

const Home = () => {
  return (
    <section className="Home-container">
      <Agendar />
      {/* <Cita />
      <Link to="/cita">Ir a Cita</Link>  */}

    </section>
  );
}

export default Home;
