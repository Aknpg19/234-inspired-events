import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import profileThree from "../../../assets/profilethree.png";
import profileOne from "../../../assets/profileone.png";
import profileTwo from "../../../assets/profiletwo.png";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import "../reviewMobile/ReviewMobile.css";

const ReviewMobile = () => {
  const description1 = `"I can't thank the team at this agency enough for crafting their perfect itinerary for our family trip. Their attention to detailed service made our vacation truly unforgettable."`;

  const description2 = `"Booking our dream vacation through this agency was a breeze! From start to finish, their team made sure every details was taken care of, and our trip exceeded all expectations."`;
  return (
    <div className="reviews_container1">
      <h1>What Customers Says</h1>
      <p className="quotes">
        Embrace life's vastness, ventures forth, and discover the wonders
        waiting beyond. The world beckons: seize its grand offerings now!
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper_slide1">
            <img src={profileThree} alt="profile-img" />
            <h4>Esther Howard</h4>
            <span>Director, Producer</span>
            <p>{description1}</p>
            <div className="ratings">
              <FaStar className="rating" />
              <FaStar className="rating" />
              <FaStar className="rating" />
              <FaStar className="rating" />
              <CiStar />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_slide1">
            <img src={profileOne} alt="profile-img" />
            <h4>Kathryn Murphy</h4>
            <span>Director, Producer</span>
            <p>{description2}</p>
            <div className="ratings">
              <FaStar className="rating" />
              <FaStar className="rating" />
              <FaStar className="rating" />
              <FaStar className="rating" />
              <CiStar />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_slide1">
            <img src={profileTwo} alt="profile-img" />
            <h4>Leslie Alexander</h4>
            <span>Director, Producer</span>
            <p>{description1}</p>
            <div className="ratings">
              <FaStar className="rating" />
              <FaStar className="rating" />
              <FaStar className="rating" />
              <FaStar className="rating" />
              <CiStar />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewMobile;
