import {React, Button} from 'react'
import { useNavigate } from "react-router-dom";


function Login() {  

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
      let path = `/main/Loan`; 
      navigate(path);
  }

  return (
    <div>
      <Button color="black" className="px-4" onClick={routeChange} >
             <h1>Login</h1>
     </Button>
    </div>
  )
}

export default Login;
