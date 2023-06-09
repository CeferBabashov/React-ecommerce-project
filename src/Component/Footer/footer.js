import React from 'react'
import $ from 'jquery'
import '../Footer/footer.css'


export default function Footer() {

    return (
        <div>
            <footer className='home_footer'>
                <div className="container">
                    
                    <div className="footer_middle">
                        <div className="container">
                            <div className="footer_main_div">
                                <div className="footer_middle_logo">
                                    <a href=""><img src=" http://preview.suelo.pl/soup-html/assets/img/logo-light.svg" alt="bottom_logo" /></a>
                                </div>
                                <div className="footer_middle_news">
                                    <h5>Latest news</h5>
                                    <ul>
                                        <li>
                                            <a href="">How to create effective webdesign?</a>
                                            <span className='footer_news_span'>February 14, 2015</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </li>
                                        <li>
                                            <a href="">Awesome weekend in Polish mountains!</a>
                                            <span className='footer_news_span'>February 14, 2015</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </li>
                                        <li>
                                            <a href="">How to create effective webdesign?</a>
                                            <span className='footer_news_span'>February 14, 2015</span>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer_middle_subscribe">
                                    <div className="footer_subscribe">
                                        <h2>Subscribe Us!</h2>
                                        <div className="footer_subscribe_input">
                                            <form action="">
                                                <input type="text" placeholder='Tap your email' />
                                                <button>SUBSCRIBE</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="footer_social">
                                        <h2>Social Media</h2>
                                        <div className="footer_social_icons mobile_social">
                                            <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                                            <a href=""><i className="fa-brands fa-google"></i></a>
                                            <a href=""><i className="fa-brands fa-twitter"></i></a>
                                            <a href=""><i className="fa-brands fa-youtube"></i></a>
                                            <a href=""><i className="fa-brands fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <span>Copyright Soup 2020©. Made with love by Suelo.</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
