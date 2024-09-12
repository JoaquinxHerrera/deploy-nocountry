import Logo from '../../assets/img/Corazón.png'
import './SignUpStayles.css'; 


const SignUp = () => {
  return (
    <div className="full-screen-container ">
      <div className="row justify-content-center">
        <div className="col-12">
          <h1>Welcome to</h1>
          <div className="logo">
            <img src={Logo} alt="corazon" />
          </div>
          <h2>Salud Vital</h2>
          <button className="btn btn-outline-primary m-2">Sign Up</button>
          <button className="btn btn-outline-secondary m-2">Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp