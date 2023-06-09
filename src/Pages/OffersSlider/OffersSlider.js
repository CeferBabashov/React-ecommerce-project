import React from 'react'
import './OfferSlider.css'

const OfferSlider = () => {
    return (
        <div className='container'>
            <div className='special_offers_slider_section mt-5'>
                <div className="special_offers_top_content">
                    <h1>Special offers</h1>
                </div>
                <div id="carouselExampleControls2" className="carousel slide mt-5" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel_item_img">
                                <img src="http://assets.suelo.pl/soup/img/photos/special-burger.jpg" alt="free burger" />
                            </div>
                            <div className="special_offers_carousel_item_content">
                                <h1 className='carousel_item_content_h1'>Free Burger</h1>
                                <span className='carousel_item_content_span'>Get free burger from orders higher that $40</span>
                                <div className="carousel_item_bottom">
                                    <div>
                                        <i className="bi bi-check2 carousel_check_icon"></i>
                                        <p>Only on Tuesdays</p>
                                    </div>
                                    <div>
                                        <i className="bi bi-x carousel_x_icon"></i>
                                        <p>Order higher that $40</p>
                                    </div>
                                    <div>
                                        <i className="bi bi-check2 carousel_check_icon"></i>
                                        <p>Unless one burger ordered</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="carousel_item_img">
                                <img src="http://assets.suelo.pl/soup/img/photos/special-pizza.jpg" alt="free burger" />
                            </div>
                            <div className="special_offers_carousel_item_content">
                                <h1 className='carousel_item_content_h1'>Free Small Pizza</h1>
                                <span className='carousel_item_content_span'>Get free burger from orders higher that $40</span>
                                <div className="carousel_item_bottom">
                                    <div>
                                        <i className="bi bi-check2 carousel_check_icon"></i>
                                        <p>Only on Weekends</p>
                                    </div>
                                    <div>
                                        <i className="bi bi-x"></i>
                                        <p>Order higher that $40</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="carousel_item_img">
                                <img src="http://assets.suelo.pl/soup/img/photos/special-dish.jpg" alt="free burger" />
                            </div>
                            <div className="special_offers_carousel_item_content">
                                <h1 className='carousel_item_content_h1'>Chip Friday</h1>
                                <span className='carousel_item_content_span'>10% Off for all dishes</span>
                                <div className="carousel_item_bottom">
                                    <div>
                                        <i className="bi bi-check2 carousel_check_icon"></i>
                                        <p>Only on Friday</p>
                                    </div>
                                    <div>
                                        <i className="bi bi-check2 carousel_check_icon"></i>
                                        <p>All Products</p>
                                    </div>
                                    <div>
                                        <i className="bi bi-check2 carousel_check_icon"></i>
                                        <p>Online order</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default OfferSlider