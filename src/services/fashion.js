import React, { useEffect, useState } from "react";
import Header from "../pages/header";
import image from '../pages/images/fashion.png'
import assets from '../pages/images/assets1.png'
import Footer from "../pages/footer";
import './fashion.css'
const Fashion = () => {
    const [tab, setTab] = useState('woman')
    return (
        <div>
            <Header />
            <div className="row">
                <div className="mainDiv">
                    <h3 className="heading1">Style is a way to say who you are</h3>
                    <h3 className="heading2">who you are</h3>
                </div>
                {/* Tabs */}
                <div className="text-center p-2 mt-4">
                    <button className="text-center p-4 underline"  onClick={() => setTab('man')}>
                        <strong >Man's</strong>
                    </button>
                    <button className="text-center p-4 underline " onClick={() => setTab('woman')}>
                        <strong >Woman's</strong>
                    </button>
                </div>
                {tab === 'man' ? 
                <div className="d-flex "> 
                    <div className="card m-4">
                        <img className="p-3" style={{width:'25rem', height:'30rem '}} src="https://images.pexels.com/photos/1760900/pexels-photo-1760900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="error "/>
                        <span>45$</span>
                    </div>
                    <div className="card m-4">
                        <img className="p-3" style={{width:'25rem', height:'30rem '}} src="https://i.pinimg.com/236x/0d/aa/66/0daa66a722115fe6628b66aa32ddbd4d.jpg" alt="error "/>
                        <span>45$</span>
                    </div>
                    <div className="card m-4">
                        <img className="p-3" style={{width:'25rem', height:'30rem '}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TT71vVSklX7K0hMwpV0nO84JqAyp1tYPHAWUHeAEcU5QqkagOBVECQ60rMJS3i8iavw&usqp=CAU" alt="error "/>
                        <span>45$</span>
                    </div>
                </div> :  <div> 
                    {/*  woman card */}
                <div className="d-flex " > 
                    <div className="card m-4">
                        <img className="p-3" style={{width:'25rem', height:'30rem '}} src="https://img.freepik.com/premium-photo/clothes-shopping-store-fashion-sale-shopping_926154-529.jpg" alt="error "/>
                        <span>45$</span>
                    </div>
                    <div className="card m-4">
                        <img className="p-3" style={{width:'25rem', height:'30rem '}} src="https://media.istockphoto.com/id/618034600/photo/beauty-in-white.jpg?s=612x612&w=0&k=20&c=Tfc9edS_-4kbLnqdOSg-q45YdrtMujfYzE7ONJZP-lI=" alt="error "/>
                        <span>75$</span>
                    </div>
                    <div className="card m-4">
                        <img className="p-3" style={{width:'25rem', height:'30rem '}} src="https://media.istockphoto.com/id/1407656268/photo/blonde-young-woman-in-elegant-white-dress.jpg?s=612x612&w=0&k=20&c=qowkq4wau0LFqqfeN9LXaItwRJTjvtpUaLmewZSA4oY=" alt="error "/>
                        <span>45$</span>
                    </div>
                    
                </div>
                    </div>}

            </div>
            <Footer/>
            
        </div>
    )

}
export default Fashion;