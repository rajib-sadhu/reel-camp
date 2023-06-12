
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

import Lottie from 'lottie-react';
import bannerAnimation from '../../../assets/film-banner-animation.json'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="w-full md:h-[38rem] h-screen" >
            <Swiper
                effect={"fade"}
                // navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                autoplay={true}
                rewind={true}
                className="mySwiper w-full"
            >
                <SwiperSlide>
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center md:px-32 p-3" >

                        <div className="space-y-3" >
                            <h2 className="md:text-4xl text-xl uppercase flex gap-2" >Join Our Summer <img src="https://i.ibb.co/4mPr5vP/fav-icon.png" className="md:w-10 w-4 object-contain inline-block" alt="" /> <span className="text-red-600 font-bold">Reel Camp</span>!</h2>
                            <p className="md:text-xl text-lg tracking-wider">Unlock Your Creativity and Explore the World of Filmmaking</p>
                            <p className="md:text-base text-sm">Discover the world of filmmaking at our exciting summer camp! Unleash your creativity and dive into the art of storytelling through film. Our camp offers a hands-on experience where aspiring filmmakers can learn the essentials of scriptwriting, camera techniques, editing, and more. Join us for a fun-filled adventure, as industry professionals guide you in bringing your ideas to life on the big screen. </p>
                            <div className="mt-5">
                                <Link className="btn btn-error">Learn More</Link>
                            </div>
                        </div>
                        <div className="" >
                            <Lottie className="md:w-[35rem] ms-auto" animationData={bannerAnimation} />
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center bg-no-repeat bg-cover px-32  text-white" style={{ backgroundImage: `url('https://i.ibb.co/vjJnCZ2/man-filming-with-professional-camera-23-2149066324.jpg)` }} >

                        <div className="space-y-3">
                            <h2 className="text-4xl uppercase flex gap-2" >
                                Cinematography Masterclass
                            </h2>
                            <p>
                                Discover the world of filmmaking at our exciting summer camp! Unleash your creativity and dive into the art of storytelling through film. Our camp offers a hands-on experience where aspiring filmmakers can learn the essentials of scriptwriting, camera techniques, editing, and more.
                            </p>
                            <div className="mt-5">
                                <Link className="btn btn-accent">Enroll Now</Link>
                            </div>
                        </div>
                        <div className="" >
                            <Lottie className="w-[35rem] ms-auto" animationData={bannerAnimation} />
                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;