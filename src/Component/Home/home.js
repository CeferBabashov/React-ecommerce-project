import React, { useRef, useState } from 'react'
import '../Home/home.css'
import $ from 'jquery'
import 'animate.css'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import MenuSlider from '../../Pages/MenuSlider/MenuSlider'
import OfferSlider from '../../Pages/OffersSlider/OffersSlider'
import MenuFirstSlider from '../../Pages/HomeFirstSlider/HomeFirstSldier'

export default function Home() {

    $(function () {
        // Open Modal
        $('.modal-open').click(function () {
            $('.modal').fadeIn();
        });

        // Close Modal
        $('.modal .close').click(function () {
            $('.modal').css('display', 'none');
        });
        $('.background').click(function(){
            $('.modal').css('display', 'none');
            // $('.modal').fadeOut();
        })
    })
    return (
        <div className='' >
            {/* MenuFirstSlider */}
            <MenuFirstSlider />
            {/* best food section */}
            <div className="best_food_section">
                <div className='container'>
                    <div className="back_shadow"></div>
                    <div className="best_food_section d-flex">
                        <div className="section_left_side">
                            <div className="food_rate">
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                            </div>
                            <div className="food_content">
                                <h1>The best food in London!</h1>
                                <p>Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper condimentum. Cras sollicitudin varius condimentum. Praesent a dolor sem....</p>
                            </div>
                            <div className="blockquote_part first_blockquote_part animate__animated animate__backInLeft ">
                                <div className="blockquote-content">
                                    <div className="blockquote_rate">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <div className="blockquote_comment">
                                        <p>It’ was amazing feeling for my belly!</p>
                                    </div>
                                </div>
                                <div className="blockquote_footer">
                                    <div className="blockquote_footer_img">
                                        <img src="http://assets.suelo.pl/soup/img/avatars/avatar02.jpg" alt="blockquote_footer_img" />
                                    </div>
                                    <div className="blockquote_span">
                                        <p>Mark Johnson,<span> Google</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="blockquote_part second_blockquote_part animate__animated animate__backInRight ">
                                <div className="blockquote-content second_blockquote_content">
                                    <div className="blockquote_rate">
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <div className="blockquote_comment">
                                        <p>Great food and great atmosphere!</p>
                                    </div>
                                </div>
                                <div className="blockquote_footer">
                                    <div className="blockquote_footer_img">
                                        <img src="http://assets.suelo.pl/soup/img/avatars/avatar01.jpg" alt="blockquote_footer_img" />
                                    </div>
                                    <div className="blockquote_span">
                                        <p>Kate Hudson,<span> LinkedIn</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* dark section */}
            <div id="dark_section">
                <div className="container">
                    <div className="dark_section">
                        <div className="feature">
                            <div className="feature_icon"><i className="bi bi-cart4"></i></div>
                            <div className="feature_content">
                                <a href="">Pick a dish</a>
                                <p>Vivamus volutpat leo dictum risus ullamcorper condimentum.</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature_icon"><i className="bi bi-wallet"></i></div>
                            <div className="feature_content">
                                <span>Make a payment</span>
                                <p>Vivamus volutpat leo dictum risus ullamcorper condimentum.</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature_icon"><i className="bi bi-box"></i></div>
                            <div className="feature_content">
                                <span>Recieve your food!</span>
                                <p>Vivamus volutpat leo dictum risus ullamcorper condimentum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu Slider */}
            <MenuSlider />
            {/* Offers Slider */}
            <OfferSlider />

            {/* modal video section */}
          <div id="footer_top">
            <div className="container">
            <div className="footer_top ">
                <h2>Check our promo video!</h2>
                <h5>Book a table even right now or make an online order!</h5>
                <div className="footer_top_button text-center">
                    <button className='pure-button modal-open' href="#play-video" data-youtube-id="ze_ie8Ctp60" ><i className="fa-solid fa-play"></i></button>
                </div>
                <div className="modal">
                    <div className="background"><div className="close"><i className="bi bi-x"></i></div>
                    </div>
                    <div className="box">
                        <div className="content">
                            <div className="responsive-video">
                                <iframe id='video' width="768" height="500" src="https://www.youtube.com/embed/uVju5--RqtY" title="Envato - Bringing Ideas to Life" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>


    )
}
