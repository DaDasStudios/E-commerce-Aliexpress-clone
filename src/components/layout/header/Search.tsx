import React, { useState } from "react";

// CSS
import '../../../styles/cart.css'

// UI
import Icon from "../../ui/icon/Icon";

// Icons
import { BsFillCaretDownFill } from "react-icons/bs";
import { RiSearch2Line, RiShoppingCartLine } from "react-icons/ri";

export const Search = () => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(input);
    // Later...
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="is-flex is-justify-content-between is-align-items-center has-background-white py-5"
        style={{
          paddingLeft: "350px",
          paddingRight: "350px",
          gap: "40px",
        }}
      >
        <span>
          <img
            className="image"
            style={{
              maxWidth: "150px",
            }}
            src="https://ae01.alicdn.com/kf/S46f745032e6e4f3da94f1a3df564f238K/398x92.png"
            alt="aliexpress logo  "
          />
        </span>
        <div
          className="is-flex-grow-1"
          style={{
            position: "relative",
            overflow: "hidden",
            borderBottomRightRadius: "4px",
            borderTopRightRadius: "4px",
          }}
        >
          <input
            type="text"
            style={{
              padding: "9px 14px",
              border: "2px solid #F24846",
              outlineColor: "#F24846",
              color: "#333",
              borderRadius: "4px",
              width: "100%",
            }}
            onChange={handleChange}
            value={input}
            placeholder="pokemon"
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              top: 0,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span className="is-size-6_5 mx-3 has-text-grey-light">
              All categories
              <Icon
                className="has-text-grey-light mx-2 is-size-7"
                Icon={BsFillCaretDownFill}
              ></Icon>
            </span>
            <button
              type="submit"
              style={{
                backgroundColor: "#F24846",
                color: "white",
                padding: "9px",
                paddingTop: "12px",
                fontSize: "1.3rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Icon Icon={RiSearch2Line}></Icon>
            </button>
          </div>
        </div>
        <span className="mt-2 cart-ball" style={{
          cursor: "pointer"
        }}>
          <Icon className="is-size-3 hovered" Icon={RiShoppingCartLine}></Icon>
        </span>
      </div>
    </form>
  );
};
