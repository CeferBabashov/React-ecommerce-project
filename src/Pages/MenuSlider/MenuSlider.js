import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import burger from '../../images/Menu img/menu-sample-burgers.jpg'
import pizza from '../../images/Menu img/menu-sample-pizza.jpg'
import sushi from '../../images/Menu img/menu-sample-sushi.jpg'
import desert from '../../images/Menu img/menu-sample-dessert.jpg'
import pasta from '../../images/Menu img/menu-sample-pasta.jpg'
import drinks from '../../images/Menu img/menu-sample-dessert.jpg'
import './MenuSlider.css'
const MenuSlider = () => {
    return (
        <div>
            {/* Menu Slider */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                navigation
                pagination={{ clickable: false }}
            // scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><div className='menu_slide'><img className='swiper_img' src={burger} alt='burger' /><h1>Burgers</h1></div></SwiperSlide>
                <SwiperSlide><div className='menu_slide'><img className='swiper_img' src={pizza} alt='pizza' /><h1>Pizza</h1></div></SwiperSlide>
                <SwiperSlide><div className='menu_slide'><img className='swiper_img' src={sushi} alt='suhsi' /><h1>Sushi</h1></div></SwiperSlide>
                <SwiperSlide><div className='menu_slide'><img className='swiper_img' src={pasta} alt='pasta' /><h1>Pasta</h1></div></SwiperSlide>
                <SwiperSlide><div className='menu_slide'><img className='swiper_img' src={desert} alt='desert' /><h1>Deserts</h1></div></SwiperSlide>
                <SwiperSlide><div className='menu_slide'><img className='swiper_img' src={drinks} alt='drinks' /><h1>Drinks</h1></div></SwiperSlide>
            </Swiper>
        </div>
    )
}
export default MenuSlider

