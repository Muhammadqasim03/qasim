import React from "react";
import './card.css'
const GenericCard = ({ image, title, discription }) => {
     console.log(image,"image")
    return (

        <div className="text-center overflow-hidden rounded  shadow  ">

            <div style={{
        background: `url(${image})`,
        width:"128%",/* The image used */
        height: "20rem", /* You must set a specified height */
        backgroundPosition: "center", /* Center the image */
        backgroundRepeat: "no-repeat",/* Do not repeat the image */
        backgroundSize: "cover",
        position:'relative',
        left:'-60px'
    }}>
                <h5 className="cardcss text-center" >{title}</h5>
            </div>
            <p className="p-2 text-center">{discription}</p>

        </div>

    )
}
export default GenericCard;