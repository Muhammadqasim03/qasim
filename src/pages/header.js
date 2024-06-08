
import { useNavigate } from "react-router-dom";
const Header =()=>{
    const navigate = useNavigate()
    return(
         <div className="nav-bar" style={{ backgroundColor: 'border: 1px solid #E0E0E0', display: 'flex', border: '1px' }}>
                <h1> <span style={{ marginRight: '45rem' }}>LOGO</span> </h1>
                <div className="d-flex ">,
                    <strong style={{ color: '#2F80ED' ,position:'relative',top: '10px', fontWeight:700  }} className=" p-1 btn" onClick={() => { 
                       localStorage.removeItem('token')
                       navigate('/login') }}>
                        LOGOUT  </strong>
                    <strong  className="m-1 text-center text-white p-3"style={{background: "#2F80ED"}} onClick={() => {
                       
                    }}>Join For Free </strong>
                </div> 
            </div> 
    )
        
   
 }
 export default Header;