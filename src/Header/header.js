import React from 'react'
import './header.css'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import logo from '../images/slider_img/header_logo.svg'
import mobile_menu_logo from '../images/slider_img/mobile_menu_logo.svg'
import Order from '../Component/Order/order'
import { useNavigate } from 'react-router-dom'


export default function Header() {
  const navigate = useNavigate();

  $(function () {
    // navbar_li_opening
    $('.opening_li_sub_div').on("click", function () {
      let opening_li_sub_div = $('.opening_li_sub_div');

      $(this).parent().addClass('active');

      if ($(this).parent().find('.opening_menu').hasClass('active')) {
        $(this).parent().find('.opening_menu').removeClass('active');
      }
      else {
        opening_li_sub_div.each((index, item) => {
          $(item).parent().find('.opening_menu').removeClass('active')
        });
        setTimeout(() => {
          if ($(this).parent().find('.opening_menu').hasClass('active')) {
            $(this).parent().find('.opening_menu').removeClass('active')
          }
          else {
            $(this).parent().find('.opening_menu').toggleClass('active')
          }
        }, 100);
      }
    })

    // navbar_menu_
    $('.navbar_menu_opening').on("click", function () {
      let navbar_menu_opening = $('.navbar_menu_opening');

      if ($(this).find('.opening_menu_category').hasClass('active')) {
        $(this).find('.opening_menu_category').removeClass('active');
      }
      else {
        navbar_menu_opening.each((index, item) => {
          $(item).find('.opening_menu_category').removeClass('active')
        });
        setTimeout(() => {
          if ($(this).find('.opening_menu_category').hasClass('active')) {
            $(this).find('.opening_menu_category').removeClass('active')
          }
          else {
            $(this).find('.opening_menu_category').toggleClass('active')
          }
        }, 300);
      }
    })

    // mobil_menu
    $('.has_sub').on("click", function () {
      let has_sub = $('.has_sub');
      if ($(this).parent().find('.sub-menu').hasClass('active')) {
        $(this).parent().find('.sub-menu').removeClass('active');
      }
      else {
        has_sub.each((index, item) => {
          $(item).parent().find('.sub-menu').removeClass('active')
        });
        setTimeout(() => {
          if ($(this).parent().find('.sub-menu').hasClass('active')) {
            $(this).parent().find('.sub-menu').removeClass('active')
          }
          else {
            $(this).parent().find('.sub-menu').toggleClass('active')
          }
        }, 300);
      }
    })
    // mobil_menu menu>sub_menu
    $('.mobile_menu_sub_li').on("click", function () {
      let mobile_menu_sub_li = $('.mobile_menu_sub_li');
      if ($(this).parent().find('.sub_menu').hasClass('active')) {
        $(this).parent().find('.sub_menu').removeClass('active');
      }
      else {
        mobile_menu_sub_li.each((index, item) => {
          $(item).parent().find('.sub_menu').removeClass('active')
        });
        setTimeout(() => {
          if ($(this).parent().find('.sub_menu').hasClass('active')) {
            $(this).parent().find('.sub_menu').removeClass('active')
          }
          else {
            $(this).parent().find('.sub_menu').toggleClass('active')
          }
        }, 300);
      }
    })
    // mobile_menu_bars
    $('.mobile_menu_bars').on('click', function () {
      $('.mobile_menu').addClass('active');
      $('body').addClass('active_modal')
    })
    // mobile_menu_toggle
    $('.mobile_close_button').on("click", function () {
      $('.mobile_menu').removeClass('active')
      $('body').removeClass('active_modal')
    });
  })
  return (
    <div className='container'>
      <div id="soup_header">
        <div className="mobile_menu_bars">
          <i className="bi bi-list"></i>
        </div>
        <div className="mobile_menu_logo">
          <img src={mobile_menu_logo} alt="mobile_menu_logo" />
        </div>
        <div className='header_logo'>
          <div className='header_absolute_div'>
            <Link to="/">
              <img src={logo} alt="header_logo" />
            </Link>
          </div>
        </div>
        <div className='header_second_part d-flex justify-content-between align-items-baseline'>
          <div className='navbar'>
            <nav className='d-flex '>
              <ul className='d-flex align-items-baseline'>
                <li className='opening_li d-flex'>
                  <div className='opening_li_sub_div'>
                    <span>HOME</span>
                    <i className="bi bi-arrow-down"></i>
                  </div>
                  <div className='opening_menu'>
                    <ul>
                      <li><a href="">HOME BURGERS</a></li>
                      <li><a href="">HOME FULLWIDTH SLIDER</a></li>
                      <li><a href="">HOME FULLWIDTH VIEO</a></li>
                      <li><a href="">HOME FRESH</a></li>
                      <li><a href="">HOME DARK</a></li>
                    </ul>
                  </div>
                </li>
                <li className='opening_li'>
                  <div className="opening_li_sub_div">
                    <span>ABOUT</span>
                    <i className="bi bi-arrow-down"></i>
                  </div>
                  <div className='opening_menu'>
                    <ul>
                      <li><Link to={'/about'} >ABOUT US</Link></li>
                      <li><a href="">SERVICES</a></li>
                      <li><a href="">GALLERY</a></li>
                      <li><a href="">REVIEWS</a></li>
                      <li><a href="">FAQ</a></li>
                    </ul>
                  </div>
                </li>
                <li className='opening_li' >
                  <div className="opening_li_sub_div">
                    <span>MENU</span>
                    <i className="bi bi-arrow-down"></i>
                  </div>
                  <div className='opening_menu'>
                    <ul>
                      <li className='navbar_menu_opening d-flex justify-content-between'>
                        <span >LIST</span>
                        <i className="bi bi-arrow-right"></i>
                        <div className="opening_menu_category">
                          <ul>
                            <li><a href="">NAVIGATION</a></li>
                            <li><a href="">COLLAPSE</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className='navbar_menu_opening d-flex justify-content-between'>
                        <span >GRID</span>
                        <i className="bi bi-arrow-right"></i>
                        <div className="opening_menu_category">
                          <ul>
                            <li><a href="">NAVIGATION</a></li>
                            <li><a href="">COLLAPSE</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to='/offers'  className='has_no_dropdown'>OFFERS</Link>
                </li>
                <li>
                  <Link to={'/contact'} className='has_no_dropdown'>CONTACT</Link>
                </li>
                <li className='opening_li'>
                  <a href='' className='has_no_dropdown'>MORE</a>
                </li>
              </ul>
              <Link to={'/order'} className="header_button"><a className='header_btn'> <span>ORDER</span> </a></Link>
            </nav>
          </div>
          <div className="header_shopping_part d-flex align-items-baseline">
            <div className="shopping_cart"><i className="bi bi-cart4"></i></div>
            <div className="shopping_price ms-2"><span>$</span><span className='total_value'>0.00</span></div>
          </div>
        </div>
        <div className="mobile_menu_cart">
          <i className="bi bi-cart4"></i>
        </div>
      </div>
      <div className="mobile_menu">
        <div className="mobile_logo">
          <div className="mobile_close_button">
            <i className="bi bi-x"></i>
          </div>
          <img src={logo} alt="mobile_logo" />
        </div>
        <div id="mobile_nav">
          <nav>
            <ul className='nav_common_ul'>
              <li className='nav_common_li'>
                <div className='has_sub d-flex justify-content-between align-items-center'>
                  <a href=""> HOME</a>
                  <i className="bi bi-arrow-down"></i>
                </div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <a href="">HOME BASIC</a>
                    </li>
                    <li>
                      <a href="">HOEM BURGERS </a>
                    </li>
                    <li>
                      <a href="">HOME FULLWIDTH SLIDER </a>
                    </li>
                    <li>
                      <a href="">HOME VIDEO</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='nav_common_li'>
                <div className="has_sub d-flex justify-content-between align-items-center">
                  <a href="#"> ABOUT </a>
                  <i className="bi bi-arrow-down"></i>
                </div>
                <div className="sub-menu">
                  <ul>
                    <li>
                      <a href="">ABOUT US </a>
                    </li>
                    <li>
                      <a href="">SERVICES </a>
                    </li>
                    <li>
                      <a href="">GALLERY </a>
                    </li>
                    <li>
                      <a href="">REVIEWS</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='nav_common_li'>
                <div className="has_sub d-flex justify-content-between align-items-center ">
                  <a href="#"> MENU </a>
                  <i className="bi bi-arrow-down"></i>
                </div>
                <div className="sub-menu">
                  <ul>
                    <li className='sub-menu_li'>
                      <div className="mobile_menu_sub_li d-flex justify-content-between align-items-center ">
                        <a href="#">LIST </a>
                        <i className="bi bi-arrow-down"></i>
                      </div>
                      <div className="sub_menu">
                        <ul>
                          <li><a href="">NAVIGATION</a></li>
                          <li><a href="">COLLAPSE</a></li>
                        </ul>
                      </div>
                    </li>
                    <li className='sub-menu_li'>
                      <div className="mobile_menu_sub_li d-flex justify-content-between align-items-center">
                        <a href="">GRID </a>
                        <i className="bi bi-arrow-down"></i>
                      </div>
                      <div className="sub_menu">
                        <ul>
                          <li><a href="">NAVIGATION</a></li>
                          <li><a href="">COLLAPSE</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='has_no_sub'>
                <a href="#"> OFFERS </a>
              </li>
              <li className='has_no_sub'>
                <a href="#"> CONTACT </a>
              </li>
              <li className='nav_common_li'>
                <div className="has_sub d-flex justify-content-between align-items-center">
                  <a href="#"> MORE </a>
                  <i className="bi bi-arrow-down"></i>
                </div>
                <div className="sub-menu">
                  <ul>
                    <li><a href="">OFFER</a></li>
                    <li><a href="">PRODUCT</a></li>
                    <li><a href="">BOOK A TABLE</a></li>
                    <li><a href="">CHECKOUT</a></li>
                    <li><a href="">CONFIRMATION</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href="">BLOG + SIDEBAR</a></li>
                    <li><a href="">BLOG POST</a></li>
                    <li><a href="">DOCUMENTATION</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mobile_social_part">
          <span>Follow Us!</span>
          <div className="mobile_social">
            <a href=""><i className="fa-brands fa-facebook-f"></i></a>
            <a href=""><i className="fa-brands fa-google"></i></a>
            <a href=""><i className="fa-brands fa-twitter"></i></a>
            <a href=""><i className="fa-brands fa-youtube"></i></a>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}
