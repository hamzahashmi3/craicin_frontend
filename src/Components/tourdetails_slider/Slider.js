import React, {useState} from 'react'
import './Slider.css'
import dataSlider from './dataslider'
import BtnSlider from './BtnSlider'

function Slider() {

    const [slideIndex, setslideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setslideIndex(slideIndex + 1)
        }else if(slideIndex === dataSlider.length){
            setslideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1){
            setslideIndex(slideIndex - 1)
        }else if(slideIndex === 1){
            setslideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setslideIndex(index)
    }

    return (
        <div className='container-slider'>
            {dataSlider.map((obj, index) => {
                return(
                    <div 
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"} key={obj.id} >
                        <img src={process.env.PUBLIC_URL + `/imgs/img${index + 1}.jpg`} />
                        <BtnSlider moveSlide={nextSlide} direction={"next"} />
                        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
                        <div className="container-dots">
                            {Array.from({length:5}).map((item, index) => (
                                <div
                                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                                    onClick={() => moveDot(index + 1)}>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Slider
