import React from 'react';
// import Swiper core and required modules
import './Slider.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// images
import img1 from "./../../assets/images/1.jpg"
import img2 from "./../../assets/images/2.jpg"
import img3 from "./../../assets/images/3.jpg"
import img4 from "./../../assets/images/4.jpg"

const Slider = () => {
    return (
        <div className='container'>
            <Swiper
                // install Swiper modules
                // modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                Autoplay
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                
            >
                <SwiperSlide>
                    <img src={img1} alt={img1} className='slider-img-size'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt={img2} className='slider-img-size'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt={img3} className='slider-img-size'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt={img4} className='slider-img-size'/>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Slider;