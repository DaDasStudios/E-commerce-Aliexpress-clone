import React, { useId, useState } from "react";

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
  pages: React.ReactNode[];
  showIndicators?: boolean;
}

/*  This component is a improvement of the other carousel component which only takes images as parameters
so that is pretty limiting. So now, this component can take any ReactNode component, and it will show it 
as a page of the carousel instead a single image */

export const CustomCarousel = ({ pages, showIndicators = true }: Props) => {
  //const [items, setItems] = useState(images);
  const [indexActive, setIndexActive] = useState(0);
  const uId = useId()

  function changeImage(increment: 1 | -1) {
    if (indexActive + increment === pages.length) {
      setIndexActive(0);
      //setItems(images)
    } else if (indexActive + increment === pages.length * -1) {
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
      <div className="carousel-content">{pages.at(indexActive)}</div>
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
      {showIndicators && (
        <div className="carousel-indicators">
          {pages.map((page, index) => (
            <span
              key={`${uId}${index}`}
              className={`carousel-sign ${
                index === indexActive || indexActive + pages.length === index
                  ? "active"
                  : ""
              }`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};
