import React from "react";
import slider_pasta from '../../images/slider_img/slider-pasta.jpg'
import slider_burger from '../../images/slider_img/slider-burger.jpg'
import slider_dessert from '../../images/slider_img/slider-dessert.jpg'

const MenuFirstSlider = () => {
    return (
        <div>
            <div className='slider_section'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={slider_pasta} className="d-block w-100" alt="slider_pasta" />
                            <div className="carousel_item_content pasta_carousel">
                                <h4>New Product</h4>
                                <h1>Boscaiola Pasta</h1>
                                <div className="slider_item_button d-flex align-items-center">
                                    <button className="slider_item_btn"><span>ADD TO CART</span></button>
                                    <span>FROM $9.98</span>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slider_burger} className="d-block w-100" alt="slider_burger" />
                            <div className="carousel_item_content burger_carousel">
                                <h4>Get 10% off <br /> coupon</h4>
                                <h1>and use it with your next order!</h1>
                                <div className="slider_item_button d-flex align-items-center">
                                    <button className="slider_item_btn"><span>GET IT NOW</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={slider_dessert} className="d-block w-100" alt="slider_dessert" />
                            <div className="carousel_item_content dessert_carousel">
                                <h4>Delicious Desserts</h4>
                                <h1>Order it online even now!</h1>
                                <div className="slider_item_button d-flex align-items-center">
                                    <button className="slider_item_btn"><span>GET IT NOW</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default MenuFirstSlider