import HeroImg2 from "../../../components/HeroImg2";
import NavBar from "../../../components/NavBar";
import IntroImg from "/service.webp";
import ServicesProps from "../servicesProps/ServicesProps";
import event from "../../../assets/event.png";
import eventDecoration from "../../../assets/event-deco.png";
import wedding from "../../../assets/wedding.png";
import homeEvent from "../../../assets/home-event.png";
import schEvent from "../../../assets/sch-event.png";
import conference from "../../../assets/conference.png";
import lightnings from "../../../assets/lightnings.png";
import videoBooth from "../../../assets/video-booth.png";
import marquees from "../../../assets/marquees.png";
import photography from "../../../assets/photography.png";
import simply from "../../../assets/simply-social.png";
import selfie from "../../../assets/selfie-booth.png";
import china from "../../../assets/china.png";
import paris from "../../../assets/paris.png";
import beachTour from "../../../assets/beach-tour.png";
import zoo from "../../../assets/zoo.png";
import townTour from "../../../assets/town-tour.png";
import lady from "../../../assets/lady.png";
import "../servicesComponents/Services.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Reviews from "../reviews/Reviews";
import ReviewMobile from "../reviewMobile/ReviewMobile";

const Services = () => {
  const Title = "Event Decoration.";
  const Description = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title1 = "Wedding.";
  const Description1 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title2 = "Event Decoration.";
  const Description2 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title3 = "Home Events.";
  const Description3 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title4 = "School Events.";
  const Description4 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title5 = "Conference Events.";
  const Description5 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title6 = "Marquees Lightings.";
  const Description6 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title7 = "Video Booth.";
  const Description7 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title8 = "Marquees Lightings.";
  const Description8 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title9 = "Photography.";
  const Description9 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title10 = "Wedding.";
  const Description10 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title11 = "Selfie Booth.";
  const Description11 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title12 = "Travel to China.";
  const Description12 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title13 = "Travel to Paris.";
  const Description13 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title14 = "Beach Tour.";
  const Description14 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title15 = "Tour to zoo.";
  const Description15 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title16 = "Town Tour.";
  const Description16 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  const Title17 = "Travels & Tour.";
  const Description17 = `'We crafting timeless moments, weaving love stories into unforgettable 
  celebrations'`;

  return (
    <>
      <NavBar />
      <main className="main_container">
        <HeroImg2 heading="Our Services" image={IntroImg} />
        {/* Desktop Design */}
        <div className="props_container">
          {/* CONTAINER ONE JSX */}
          <div className="sub_container_one">
            <h1>Events Management</h1>
            <div className="container_row">
              <ServicesProps
                title={Title}
                description={Description}
                img={event}
              />
              <ServicesProps
                title={Title1}
                description={Description1}
                img={wedding}
              />
              <ServicesProps
                title={Title2}
                description={Description2}
                img={eventDecoration}
              />
              <ServicesProps
                title={Title3}
                description={Description3}
                img={homeEvent}
              />
              <ServicesProps
                title={Title4}
                description={Description4}
                img={schEvent}
              />
              <ServicesProps
                title={Title5}
                description={Description5}
                img={conference}
              />
            </div>
          </div>

          {/* CONTAINER TWO JSX*/}
          <div className="sub_container_two">
            <h1>Events Rentals</h1>
            <div className="container_row">
              <ServicesProps
                title={Title6}
                description={Description6}
                img={lightnings}
              />
              <ServicesProps
                title={Title7}
                description={Description7}
                img={videoBooth}
              />
              <ServicesProps
                title={Title8}
                description={Description8}
                img={marquees}
              />
              <ServicesProps
                title={Title9}
                description={Description9}
                img={photography}
              />
              <ServicesProps
                title={Title10}
                description={Description10}
                img={simply}
              />
              <ServicesProps
                title={Title11}
                description={Description11}
                img={selfie}
              />
            </div>
          </div>

          {/* CONTAINER TWO JSX*/}
          <div className="sub_container_three">
            <h1>Events Planning</h1>
            <div className="container_row">
              <ServicesProps
                title={Title12}
                description={Description12}
                img={china}
              />
              <ServicesProps
                title={Title13}
                description={Description13}
                img={paris}
              />
              <ServicesProps
                title={Title14}
                description={Description14}
                img={beachTour}
              />
              <ServicesProps
                title={Title15}
                description={Description15}
                img={zoo}
              />
              <ServicesProps
                title={Title16}
                description={Description16}
                img={townTour}
              />
              <ServicesProps
                title={Title17}
                description={Description17}
                img={lady}
              />
            </div>
          </div>
        </div>

        <div className="reviews_container_desktop">
          <Reviews />
        </div>
      </main>

      {/* Mobile Design*/}
      <div>
        <div className="swiper_mobile">
          <h1 className="swiper_title">Events Management</h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="swiper_parent">
              <SwiperSlide>
                <ServicesProps
                  title={Title}
                  description={Description}
                  img={event}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title1}
                  description={Description1}
                  img={wedding}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title2}
                  description={Description2}
                  img={eventDecoration}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title3}
                  description={Description3}
                  img={homeEvent}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title4}
                  description={Description4}
                  img={schEvent}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title5}
                  description={Description5}
                  img={conference}
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>

        <div className="swiper_mobile">
          <h1 className="swiper_title">Events Rental</h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="swiper_parent">
              <SwiperSlide>
                <ServicesProps
                  title={Title6}
                  description={Description6}
                  img={lightnings}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title7}
                  description={Description7}
                  img={videoBooth}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title8}
                  description={Description8}
                  img={marquees}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title9}
                  description={Description9}
                  img={photography}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title10}
                  description={Description10}
                  img={simply}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title11}
                  description={Description11}
                  img={selfie}
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>

        <div className="swiper_mobile">
          <h1 className="swiper_title">Events Planning</h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="swiper_parent">
              <SwiperSlide>
                <ServicesProps
                  title={Title12}
                  description={Description12}
                  img={china}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title13}
                  description={Description13}
                  img={paris}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title14}
                  description={Description14}
                  img={beachTour}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title15}
                  description={Description15}
                  img={zoo}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title16}
                  description={Description16}
                  img={townTour}
                />
              </SwiperSlide>
              <SwiperSlide>
                <ServicesProps
                  title={Title17}
                  description={Description17}
                  img={lady}
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="reviews_container_desktop1">
          <ReviewMobile />
        </div>
      </div>
    </>
  );
};

export default Services;
