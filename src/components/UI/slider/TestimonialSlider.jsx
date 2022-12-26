import React from "react";
import Slider from "react-slick";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Tek kelimeyle harika şu zamana kadar verdiğim tüm siparişlerim hızla elime ulaştı!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Mustafa AK</h6>
        </div>
      </div>

      <div>
        <p className="review__text">
          "Yemekleri çok lezzetli bağımlısı oldum!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Ayşe KILIÇ</h6>
        </div>

      </div>

      <div>
        <p className="review__text">
          "Hiç düşünmeden sipariş vermenizi öneririm.Uygun fiyatlı, lezzetli ve bu kadar hızla ulaşan bir yer bilmiyorum!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Kıvanç KURT</h6>
        </div>
        
      </div>
    </Slider>
  );
};

export default TestimonialSlider;