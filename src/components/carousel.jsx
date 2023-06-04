import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const Carousel = () => {
  return (
    <div className="  shadow-sm h-80 rounded-lg">
      {/* <img
        src="/src/images/cheetos.avif"
        alt=""
        className="h-[100%] w-[100%] rounded-lg "
      /> */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        direction={"horizontal"}
        className="mySwiper hover:opacity-60 rounded-lg"
        speed={2000}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <a href="">
            <img
              src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685206900/cheetos_xr5qqf.avif"
              alt=""
              className="h-80 w-[100%]"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646455/coke_bhqeeq.avif"
              alt=""
              className="h-80 w-[100%] "
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646456/dress2_eng552.avif"
              alt=""
              className="h-80 w-[100%] "
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646456/fanta_xpgkrm.avif"
              alt=""
              className="h-80 w-[100%] "
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="">
            <img
              src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646454/dress_rrvptf.avif"
              alt=""
              className="h-80 w-[100%] "
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
