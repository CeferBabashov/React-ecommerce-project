import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './main.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header/header'
import Home from './Component/Home/home'
import { BrowserRouter  as Router , Routes , Route } from 'react-router-dom'
import Order from './Component/Order/order'
import Footer from './Component/Footer/footer'
import AboutUs from './Component/AboutUs/AboutUs'
import Offers from './Component/Offers/offers'
import Contact from './Component/Contact/contact'
import $ from 'jquery'

const Index = () => {
  $(function(){
    let btn = $('#top_btn');

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        }
        else {
            btn.removeClass('show');
        }
    })
    $('#top_btn').click(()=>{
        $('body').scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})

    return (
        <div>
          {/* Top Button */} <button id="top_btn"><i className="bi bi-chevron-up"></i></button>
          <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about'   element={<AboutUs/>} />
                <Route path='/order'   element={<Order/>} />
                <Route path='/offers'  element={<Offers/>} />
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
             <Footer/>
          </Router>
        </div>
    )
}
let id_root = document.querySelector('#root');
let root = createRoot(id_root);
root.render(<Index />)