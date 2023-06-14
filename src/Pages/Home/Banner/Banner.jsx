
import Silder1 from '../../../assets/Banner/banner1.jpg'
import Silder2 from '../../../assets/Banner/banner2.jpg'
import Silder3 from '../../../assets/Banner/banner3.jpg'




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
                        <img className='w-full' src={Silder1} alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className='w-full' src={Silder2} alt="" />
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className='w-full h-screen' src={Silder3} alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className='w-full h-screen' src={Silder1} alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className='w-full h-screen' src={Silder3} alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className='w-full h-screen' src={Silder3} alt="" />
                        
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;