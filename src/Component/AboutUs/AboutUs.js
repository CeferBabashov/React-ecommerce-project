import React from 'react'
import './AboutUs.css'
import sign from '../../images/About/sign.svg';

export default function AboutUs() {
    
    return (
        <div className='about_page'>
            <div className="container">
                <div className="page_title text-center">
                    <h1 className='page_title_h1'>About Us</h1>
                    <p className='page_title_p'>Some informations about our restaurant</p>
                </div>
                <section className="about_main">
                    <div className="about_content offset-5">
                        <div className="about_rate mb-4">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <div className="about_title">
                            <h2>The best food in London!</h2>
                        </div>
                        <div className="about_paragraph">
                            <p>Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper condimentum. Cras sollicitudin varius condimentum. Praesent a dolor sem....</p>
                            <p>Nam eleifend elementum sapien et bibendum. Nunc ac diam efficitur, ultrices lorem quis, consectetur odio. Nullam vulputate, eros quis accumsan cursus, elit lectus bibendum nulla, sed dapibus ligula tellus at purus. Fusce id eros id mi cursus semper. Quisque efficitur bibendum nunc a consectetur. Maecenas vitae quam iaculis, scelerisque purus nec, varius purus. Nullam eget varius elit. Donec eget facilisis nunc, non rutrum lorem.
                            </p>
                        </div>
                        <div className="about_chef">
                            <h6 className='mb-4'>Mark Johnson, Chef</h6>
                        </div>
                        <div className="about_sign">
                            <img className='mb-5' src={sign} alt="about_chef" />
                            <h4 className='mb-4'>What people say about Us?</h4>
                        </div>
                        <div className='about_button'>
                            <button className='about_btn' ><span>CHECK OUR REVIEWS</span></button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
