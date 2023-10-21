import react from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './forgotpassword.css'
function Forgotpassword() {
    const navigate = useNavigate()
    return (

        <div style={{ height: "100vh ", width:'180vh' }} class="grid grid-cols-2" >
            <div className="bg-[#0457D2]">
                <div className='logo'>
                    <h1>LOGO</h1>
                </div>
                <div className='password'>
                    <h1>
                        FORGOT PASSWORD
                    </h1>
                </div>
            </div>
            <div class="bg-[#FFF;] " >
                <div className='content'>
                    <div>
                        <p>Enter You E-mail Address We Sent a one time security code to you email please check your E-mail account </p>
                    </div>
                    <div>
                        <input  style={{width:'15rem',height:'2.5rem',margin:'5px'}} type="email" placeholder='E-mail' />
                        </div>
                        <button style={{width:'15rem ',marginTop:'1rem'}} onClick={() => { navigate('/otp') }} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sent OTP</button>
                        <div className='goBack'>
                         <h1 onClick={()=>{
                            navigate('/login')
                         }}>Go Back To Login</h1>
                        </div>
                </div>
            </div>
        </div>



    );
}
export default Forgotpassword;