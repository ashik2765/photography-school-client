
import Silder1 from '../../../assets/Banner/slider1.jpg'
import Silder2 from '../../../assets/Banner/slider2.jpg'
import Silder3 from '../../../assets/Banner/slider3.jpg'

import Silder5 from '../../../assets/Banner/slider5.jpg'
import Silder6 from '../../../assets/Banner/slider3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import "./styles.css";

const Banner = () => {
    return (
        <div>
            <Swiper
                className="mySwiper"
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className="relative">
                        <img src={Silder6} alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={Silder2} alt="" />
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={Silder3} alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={Silder1} alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={Silder5} alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={Silder3} alt="" />
                        
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;