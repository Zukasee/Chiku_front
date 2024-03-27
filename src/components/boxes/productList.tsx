// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard,  Navigation } from 'swiper/modules';

import s from './productList.module.css'
import Shawarma from '../shwarma/shawarma';
import Garnish from '../garnish/garnish';

const ProductList = () => {
    return (
        <>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        navigation={false}
        modules={[Keyboard, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Shawarma /></SwiperSlide>
        <SwiperSlide><Garnish /></SwiperSlide>
        <SwiperSlide>Others</SwiperSlide>
        </Swiper>
        </>
    )
}

export default ProductList