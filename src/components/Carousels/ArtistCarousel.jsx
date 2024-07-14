import React from "react";
import Slider from "react-slick";
import Arijith from "../../assets/user/artists/arijith.png";
import ArtistCard from "../Cards/ArtistCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom CSS to hide default arrows and style the custom ones
const customSliderStyles = `
  .custom-slider .slick-prev,
  .custom-slider .slick-next {
    display: none !important;
  }
  .custom-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #6366f1, #a855f7);
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
  }
  .custom-arrow:hover {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
  }
  .custom-arrow-prev {
    left: -15px;
  }
  .custom-arrow-next {
    right: -15px;
  }
  @media (min-width: 640px) {
    .custom-arrow {
      width: 40px;
      height: 40px;
    }
    .custom-arrow-prev {
      left: -20px;
    }
    .custom-arrow-next {
      right: -20px;
    }
  }
`;

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-arrow-next" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 sm:w-6 sm:h-6">
        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-arrow-prev" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 sm:w-6 sm:h-6">
        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function ArtistCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const artists = [
    { gradient: "linear-gradient(135deg, rgb(255, 168, 168) 10%, rgb(252, 255, 0) 100%)" },
    { gradient: "linear-gradient(-20deg, #d558c8 0%, #24d292 100%)" },
    { gradient: "radial-gradient(circle at 52.1% -29.6%, rgb(144, 17, 105) 0%, rgb(51, 0, 131) 100.2%)" },
    { gradient: "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)" },
    { gradient: "radial-gradient(circle at 10% 20%, rgb(255, 19, 120) 0%, rgb(0, 0, 0) 90.5%)" },
    { gradient: "linear-gradient(109.6deg, rgb(27, 27, 79) 11.2%, rgb(120, 201, 244) 100.2%)" },
  ];

  return (
    <div className="px-4 sm:px-4 md:px-5 lg:px-8 relative" style={{ width: '100%' }}>
      <style>{customSliderStyles}</style>
      <Slider {...settings} className="custom-slider">
        {artists.map((artist, index) => (
          <div key={index} className="ml-3 xs:ml-5 sm:ml-6 md:ml-4">
            <ArtistCard Img={Arijith} gradient={artist.gradient} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ArtistCarousel;
