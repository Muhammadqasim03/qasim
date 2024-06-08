import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './mainpage.css'
import image from '../pages/images/style.png'
import img from '../pages/images/style.png'
import Header from "./header";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import ReactCardSlider from 'react-card-slider-component';
import Footer from './footer'
function MainPage() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login')
        } else {
            axios.get('http://localhost:3000/services/list', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(response => {
                    // Handle successful response
                    console.log(response.data);
                    const array = []
                    response.data.data.map((obj, index) =>
                        array.push({
                            image: obj.imageUrl
                            , title: obj.title,
                            description: ''
                            , clickEvent: index == 0 ? sliderForHr : index == 1 ? sliderForLeagel : index == 2 ? sliderForLaw : sliderForFasion
                        })

                    )
                    setData(array)
                })
                .catch(error => {
                    // Handle error
                    console.error('Error fetching data:', error);
                });
        }
    }, [])
    const sliderForFasion = () => {
        navigate('/fashion')
    }
    const sliderForHr = () => {
        navigate('/hr')
    }
    const sliderForLeagel = () => {
        navigate('/consultancy')
    }
    const sliderForLaw = () => {
        navigate('/law')
    }

    return (
        <div>
            <Header />
            <Carousel style={{
                background: "rgba(38, 50, 56, 0.3)",
                height: "30rem",
                padding: "4rem"
            }}>
                <Carousel.Item>
                    <img src={image} style={{ width: "35%", position: "relative", left: '60%' }} alt="image is not comming" />
                    <Carousel.Caption style={{ position: "relative", left: '-25%', top: '-40%' }}>
                        <div style={{ position: "relative", top: '-8rem' }}>
                            <h3>Fashion Designing</h3>
                            <p>Fashion design is the art of applying design</p>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img} style={{ width: "35%", position: "relative", left: '60%' }} alt="image is not comming" />
                    <Carousel.Caption style={{ position: "relative", left: '-25%', top: '-40%' }}>
                        <div style={{ position: "relative", top: '-8rem' }}>
                            <h3>HR Mangement</h3>
                            <p></p>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={image} style={{ width: "35%", position: "relative", left: '60%' }} alt="image is not comming" />
                    <Carousel.Caption style={{ position: "relative", left: '-25%', top: '-40%' }}>
                        <div style={{ position: "relative", top: '-8rem' }}>
                            <h3>Legal Consistancy</h3>
                            <p></p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* // Our Services */}
            <div style={{ marginBottom: "10rem", marginTop: '10rem' }}>
                <div className="mt-5 mb-5" > <h1> <strong>The Services That We Provide You</strong></h1>  </div>
                <div className="mt-4 mb-4 ">
                    <ReactCardSlider slides={data} style={{ background: 'red' }} /></div>
            </div>
            <Footer />
        </div>


    )
};
export default MainPage;