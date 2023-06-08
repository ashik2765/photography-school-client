
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
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-center">
                            <div className="bg-gradient-to-b from-transparent via-transparent to-black p-2">
                                Text on Image 6
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={Silder2} alt="" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-center">
                            <div className="bg-gradient-to-b from-transparent via-transparent to-black p-2">
                                Text on Image 2
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={Silder3} alt="" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-center">
                            <div className="bg-gradient-to-b from-transparent via-transparent to-black p-2">
                                Text on Image 3
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={Silder1} alt="" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-center">
                            <div className="bg-gradient-to-b from-transparent via-transparent to-black p-2">
                                Text on Image 1
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={Silder5} alt="" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-center">
                            <div className="bg-gradient-to-b from-transparent via-transparent to-black p-2">
                                Text on Image 5
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={Silder3} alt="" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-center">
                            <div className="bg-gradient-to-b from-transparent via-transparent to-black p-2">
                                Text on Image 4
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;