// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard,  Navigation, Pagination } from 'swiper/modules';

import Shawarma from './shwarma/shawarma';

const ProductList = () => {
    return (
        <>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={true}
        navigation={false}
        autoHeight={true}
        modules={[Keyboard, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Shawarma /></SwiperSlide>
        {/* <SwiperSlide><Garnish /></SwiperSlide> */}
        </Swiper>
        </>
    )
}

export default ProductList