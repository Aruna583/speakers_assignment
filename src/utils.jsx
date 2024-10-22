
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
        >
          <MdOutlineKeyboardArrowRight 
          color="#DADADA" 
          style={{ ...style,
          width: '22px',
          height: '22px', 
          display: "block", 
          border: "1px solid #DADADA", 
          color: '#DADADA !important',
          borderRadius: '100%', 
          boxShadow:'4px 10px 24px 0px #0000001A',
        }}/>
        </button>
    );
  }

export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
        >
          <MdOutlineKeyboardArrowLeft 
          color="#DADADA" 
          style={{ ...style,
          width: '22px',
          height: '22px', 
          display: "block", 
          border: "1px solid #DADADA", 
          color: '#DADADA !important',
          borderRadius: '100%', 
          boxShadow:'4px 10px 24px 0px #0000001A',
        }}/>
        </button>
    );
  }

  
 

export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    height: '400px',
    margin: '24px',
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
  };
