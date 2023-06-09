import React from 'react'
import './order.css'
import $ from 'jquery'
import { RingLoader } from 'react-spinners'
import { useState  , useEffect} from 'react'


export default function Order() {

   const [loading , setLoading] = useState(false);

   useEffect(()=>{
      setLoading(true);
      setTimeout(() => {
         setLoading(false);
      }, 500);
   },[])

   $(function () {
      $('.menu_item_cart_btn').click(function () {
         $('.cart_modal').addClass('active');
      })
      $('.add_cart_close_btn').click(function () {
         $('.cart_modal').removeClass('active');
      })
      $('.cart_modal .background').click(function () {
         $('.cart_modal').removeClass('active');
      });

      // modal_body
      $('.panel_details_main').click(function(){
         let panel_details_main = $('.panel_details_main');

         if ($(this).parent().find('.sub-content').hasClass('active')) {
            $(this).parent().find('.sub-content').removeClass('active');
          }
          else {
            panel_details_main.each((index, item) => {
              $(item).parent().find('.sub-content').removeClass('active')
            });
            // setTimeout(() => {
              
            // }, 300);

            if ($(this).parent().find('.sub-content').hasClass('active')) {
               $(this).parent().find('.sub-content').removeClass('active')
             }
             else {
               $(this).parent().find('.sub-content').toggleClass('active')
             }
         }
      })


   })
    
   
   return (
      <div>
         {
            loading ?
            <div>
               <div className="ring_loader">
               <RingLoader
                        color={'#d69136'}
                        loading={loading}
                        size={80}
                        />
               </div>
            </div>
            :
            <div>
               {/* add_cart_modal */}
         <div className="cart_modal">
            <div className="background"></div>
            <div id="add_cart">
               <div className="add_cart_img">
                  <h4 className='cart_modal_title'>Specify your dish</h4>
                  <div className='add_cart_close_btn'><i className="bi bi-x" style={{ color: '#AAADA7', fontSize: '30px', cursor: 'pointer' }} ></i></div>
               </div>
               <div className="add_cart_content">
                  <div className="modal_product_details">
                     <div className="d-flex align-items-center justify-content-between">
                        <div className=" modal_product_details_title">
                           <h6 style={{ marginBottom: '5px' }}>Beef Burger</h6>
                           <span>Beef, Cheese, Potato, Onion, Fries</span>
                        </div>
                        <div className=" modal_product_details_price">
                           <span>$</span><span className="product-modal-price">9.00</span>
                        </div>
                     </div>
                  </div>
                  <div className="modal_body">
                     <div className="panel_details panel_details_size">
                        <div className="panel_details_main has_sub">
                           <input type="radio" name="" id="panel_size" />
                           <label style={{ marginLeft: '5px' }} htmlFor="panel_size" > <span>Size</span> </label>
                        </div>
                        <div className="panel-details-content sub-content">
                           <input type="radio" name="" id="panel_size2" />
                           <label style={{ marginLeft: '5px' }} htmlFor="panel_size2"> <span>Normal - 200g($9.00)</span> </label> <br />
                           <input type="radio" name="" id="panel_size3" />
                           <label style={{ marginLeft: '5px' }} htmlFor="panel_size3"> <span>Double - 400g($12.00)</span> </label>
                        </div>
                     </div>
                     <div className="panel_details panel_details_addition">
                        <div className="panel_details_main has_sub">
                           <input type="radio" name="" id="panel_addition" />
                           <label style={{ marginLeft: '5px' }} htmlFor="panel_addition"><span>Additions</span></label>
                        </div>
                        <div className="panel-details-content d-flex justify-content-around sub-content">
                           <div className="panel_details_content_left">
                              <div className='d-flex'>
                                 <input type="checkbox" name="" id="" />
                                 <label htmlFor=""><span className='ms-2'>Chicken</span><span>($2.00)</span></label>
                              </div>
                              <div className='d-flex'>
                                 <input type="checkbox" name="" id="" />
                                 <label htmlFor=""><span className='ms-2'>Beef</span><span>($3.00)</span></label>
                              </div>
                              <div className='d-flex'>
                                 <input type="checkbox" name="" id="" />
                                 <label htmlFor=""><span className='ms-2'>Paprika</span><span>($2.00)</span></label>
                              </div>
                              <div className='d-flex'>
                                 <input type="checkbox" name="" id="" />
                                 <label htmlFor=""><span className='ms-2'>Cheese</span><span>($2.00)</span></label>
                              </div>
                              <div className='d-flex'>
                                 <input type="checkbox" name="" id="" />
                                 <label htmlFor=""><span className='ms-2'>Pickle</span><span>($2.00)</span></label>
                              </div>
                           </div>
                           <div className="panel_details_content_right">
                              <div className='d-flex'>
                                 <input type="checkbox" name="" id="" />
                                 <label htmlFor=""><span className='ms-2'>Angus Beef</span><span>($5.00)</span></label>
                              </div>
                              <div className='d-flex'>
                                 <input type="checkbox" name="" id="" />
                                 <label htmlFor=""><span className='ms-2'>Potato</span><span>($2.00)</span></label>
                              </div>
                              <div className='d-flex'>
                                 <input type="checkbox" name="" id="" />
                                 <label htmlFor=""><span className='ms-2'>Brocolli</span><span>($2.00)</span></label>
                              </div>
                              <div className='d-flex'>
                                 <input type="checkbox" name="" id="" />
                                 <label htmlFor=""><span className='ms-2'>Onion</span><span>($2.00)</span></label>
                              </div>
                              <div className='d-flex'>
                                 <input type="checkbox" name="" id="" />
                                 <label htmlFor=""><span className='ms-2'>Fries</span><span>($2.00)</span></label>
                              </div>
                           </div>

                        </div>
                     </div>
                     <div className="panel_details_textarea has_sub">
                        <input type="checkbox" name="" id="other" /><label className='ms-2' htmlFor="other">Other</label>
                        <div className='sub-content'>
                           <textarea className="form-control" id="other_textarea" name="other_textarea" rows="5" placeholder="Put this any other informations" />
                        </div>
                     </div>
                  </div>
                  <div className="modal_button">
                     <button className='modal_btn' style={{ width: '100%' }}> <span>ADD TO CART</span> </button>
                  </div>
               </div>
            </div>
         </div>

        
         {/* order_menu_list */}
         <div className="order_menu_list">
            <div className="container">
               <div className="order_menu_list_item_title">
                  <h1 className="order_menu_list_item_title_h1 m-0">
                     Menu List
                  </h1>
                  <span className="order_menu_list_item_title_span">
                     Some informations about our restaurant
                  </span>
               </div>
            </div>
         </div>
         <div id="page_content">
            <div className="container">
               <div className="row">
                  <div className="col-12 col-md-3">
                     <nav className='bg-dark nav_navigation'>
                        <ul style={{ padding: 0 }}>
                           <li><a href='#burgers_menu_category'>BURGERS</a></li>
                           <li><a href="#pasta_menu_category">PASTA</a></li>
                           <li><a href="#pizza_menu_category">PIZZA</a></li>
                           <li><a href="#sushi_menu_category">SUSHI</a></li>
                           <li><a href="#dessert_menu_category">DESSERTS</a></li>
                           <li><a href="#drinks_menu_category">DRINKS</a></li>
                        </ul>
                     </nav>
                  </div>

                  <div className="col-9">
                     {/* Menu Category Burger Category */}
                     <div id='burgers_menu_category' className="menu_category">
                        <div className="menu_category_bg_image">
                           <h2 className=''>Burgers</h2>
                        </div>
                        <div className="menu_category_content">
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Beef Burger</h6>
                                 <span>Beef, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$9.00</span>
                                 <button id='1' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Broccoli</h6>
                                 <span>Chicken, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$9.00</span>
                                 <button id='2' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Chicken Burger</h6>
                                 <span>Chicken, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$14.00</span>
                                 <button id='3' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Creste di Galli</h6>
                                 <span>Pasta, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$13.00</span>
                                 <button id='4' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* pasta menu_category */}
                     <div id='pasta_menu_category' className=" menu_category">
                        <div className="pasta_menu menu_category_bg_image">
                           <h2 className=''>Pasta</h2>
                        </div>
                        <div className="menu_category_content">
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Beef Burger</h6>
                                 <span>Beef, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$9.00</span>
                                 <button id='5' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Broccoli</h6>
                                 <span>Chicken, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$9.00</span>
                                 <button id='6' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Chicken Burger</h6>
                                 <span>Chicken, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$14.00</span>
                                 <button id='7' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Creste di Galli</h6>
                                 <span>Pasta, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$13.00</span>
                                 <button id='8' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* pizza content category */}
                     <div id='pizza_menu_category' className="menu_category">
                        <div className="pizza_menu menu_category_bg_image">
                           <h2 className=''>Pizza</h2>
                        </div>
                        <div className="menu_category_content">
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Beef Burger</h6>
                                 <span>Beef, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$9.00</span>
                                 <button id='9' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Broccoli</h6>
                                 <span>Chicken, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$9.00</span>
                                 <button id='10' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Chicken Burger</h6>
                                 <span>Chicken, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$14.00</span>
                                 <button id='11' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Creste di Galli</h6>
                                 <span>Pasta, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$13.00</span>
                                 <button id='12' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* sushi content category */}
                     <div id='sushi_menu_category' className="menu_category">
                        <div className="sushi_menu menu_category_bg_image">
                           <h2 className=''>Sushi</h2>
                        </div>
                        <div className="menu_category_content">
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Beef Burger</h6>
                                 <span>Beef, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$9.00</span>
                                 <button id='13' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Broccoli</h6>
                                 <span>Chicken, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$9.00</span>
                                 <button id='14' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Chicken Burger</h6>
                                 <span>Chicken, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$14.00</span>
                                 <button id='15' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Creste di Galli</h6>
                                 <span>Pasta, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$13.00</span>
                                 <button id='16' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* desset content category */}
                     <div id='dessert_menu_category' className="menu_category">
                        <div className="desserts_menu menu_category_bg_image">
                           <h2 className=''>Desserts</h2>
                        </div>
                        <div className="menu_category_content">
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Beef Burger</h6>
                                 <span>Beef, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$9.00</span>
                                 <button id='17' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Broccoli</h6>
                                 <span>Chicken, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$9.00</span>
                                 <button id='18' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Chicken Burger</h6>
                                 <span>Chicken, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$14.00</span>
                                 <button id='19' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Creste di Galli</h6>
                                 <span>Pasta, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$13.00</span>
                                 <button id='20' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* drinks content category */}
                     <div id='drinks_menu_category' className="menu_category">
                        <div className="drinks_menu menu_category_bg_image">
                           <h2 className=''>Drinks</h2>
                        </div>
                        <div className="menu_category_content">
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Beef Burger</h6>
                                 <span>Beef, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$9.00</span>
                                 <button id='21' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Broccoli</h6>
                                 <span>Chicken, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$9.00</span>
                                 <button id='22' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Chicken Burger</h6>
                                 <span>Chicken, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$14.00</span>
                                 <button id='23' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                           <div className=" menu_item">
                              <div className="menu_item_title">
                                 <h6 className='m-0'>Creste di Galli</h6>
                                 <span>Pasta, cheese, potato, onion, fries</span>
                              </div>
                              <div className="menu_item_price">
                                 <span>from </span><span className='menu_item_price_number me-3'>$13.00</span>
                                 <button id='24' className='menu_item_cart_btn'><span>ADD TO CART</span></button>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>

            </div>
         </div>

            </div>
         }



      </div>
   )
}
