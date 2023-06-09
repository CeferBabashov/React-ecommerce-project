import React from 'react'
import './offers.css'
export default function Offers() {
    return (
        <div className='offers'>
            <div className='offers_section mt-2 container'>
                <div className="offers_top_content text-center">
                    <h1 style={{ fontSize: '50px' , color : ' #383C40' }}>Special Offers</h1>
                    <h4 style={{ fontWeight: '200' }}>Some informations about our restaurant</h4>
                </div>
                <div className='offers_main'>
                    <div className="offers_item">
                        <div className="offers_items_img">
                            <img src="http://assets.suelo.pl/soup/img/photos/special-burger.jpg" alt="free burger" />
                        </div>
                        <div className="offers_item_content">
                            <h1 className='offers_item_content_h1'>Free Burger</h1>
                            <span className='offers_item_content_span'>Get free burger from orders higher that $40</span>
                            <div className="offers_item_bottom">
                                <div>
                                    <i className="bi bi-check2 offers_check_icon"></i>
                                    <p>Only on Tuesdays</p>
                                </div>
                                <div>
                                    <i className="bi bi-x offers_x_icon"></i>
                                    <p>Order higher that $40</p>
                                </div>
                                <div>
                                    <i className="bi bi-check2 offers_check_icon"></i>
                                    <p>Unless one burger ordered</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="offers_item">
                        <div className="offers_items_img">
                            <img src="http://assets.suelo.pl/soup/img/photos/special-pizza.jpg" alt="free burger" />
                        </div>
                        <div  className="offers_item_content">
                            <h1 className='offers_item_content_h1'>Free Small Pizza</h1>
                            <span className='offers_item_content_span'>Get free burger from orders higher that $40</span>
                            <div className="offers_item_bottom">
                                <div>
                                    <i className="bi bi-check2 offers_check_icon"></i>
                                    <p>Only on Weekends</p>
                                </div>
                                <div>
                                    <i className="bi bi-x offers_x_icon"></i>
                                    <p>Order higher that $40</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="offers_item">
                        <div className="offers_items_img">
                            <img src="http://assets.suelo.pl/soup/img/photos/special-dish.jpg" alt="free burger" />
                        </div>
                        <div className="offers_item_content">
                            <h1 className='offers_item_content_h1'>Chip Friday</h1>
                            <span className='offers_item_content_span'>10% Off for all dishes</span>
                            <div className="offers_item_bottom">
                                <div>
                                    <i className="bi bi-check2 offers_check_icon"></i>
                                    <p>Only on Friday</p>
                                </div>
                                <div>
                                    <i className="bi bi-check2 offers_check_icon"></i>
                                    <p>All Products</p>
                                </div>
                                <div>
                                    <i className="bi bi-check2 offers_check_icon"></i>
                                    <p>Online order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
