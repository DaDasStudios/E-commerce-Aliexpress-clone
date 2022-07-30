import { useState } from "react";

// UI
import Icon from "../icon/Icon";

// Icons
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

// Interfaces
import { PNG, SVG, JPG } from "../../../interfaces/Images";

// Styles
import "../../../styles/carousel.css";

// Util
//import { moveArray } from '../../../util/moveArray'

interface Props {
  images: Array<PNG | SVG | JPG>;
}

export const Carousel = ({ images }: Props) => {
  //const [items, setItems] = useState(images);
  const [indexActive, setIndexActive] = useState(0);

  function changeImage(increment: 1 | -1) {
    if (indexActive + increment === images.length) {
      setIndexActive(0);
      //setItems(images)
    } else if (indexActive + increment === images.length * -1) {
      setIndexActive(0);
      //setItems(images)
    } else {
      setIndexActive(indexActive + increment);
      // Re-sort the array for showing
      //moveArray(items, increment)
    }
  }

  return (
    <div className="overflow-hidden carousel">
      <div className="carousel-content">
        <img
          className={`rounded`}
          src={images.at(indexActive)}
          alt={`Offert image`}
        />
      </div>
      <button
        className="carousel-btn carousel-left-btn"
        onClick={() => changeImage(-1)}
      >
        <Icon
          className="has-text-light is-size-5"
          Icon={MdArrowBackIosNew}
        ></Icon>
      </button>
      <button
        className="carousel-btn carousel-right-btn"
        onClick={() => changeImage(1)}
      >
        <Icon
          className="has-text-light is-size-5"
          Icon={MdArrowForwardIos}
        ></Icon>
      </button>

      <div className="carousel-indicators">
        {images.map((image, index) => (
          <span
            key={image} className={`carousel-sign ${index === indexActive || indexActive + images.length === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};