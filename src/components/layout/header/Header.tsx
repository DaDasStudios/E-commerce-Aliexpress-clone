import React, { useState, useEffect } from "react";

// Icons
import { BsPhone, BsFillCaretDownFill } from "react-icons/bs";
import { TbLanguage } from "react-icons/tb";
import { RiHeart2Line,  RiUserLine} from 'react-icons/ri'

// UI
import { Vertical } from "../../ui/separator/Vertical";
import { LightButton } from "../../ui/button/";
import Icon from "../../ui/icon/Icon";

// API
import { getAllCountries } from "../../../api/countriesRequests";
import { Country } from "../../../interfaces/Country";
import { ScrollY } from "../../util/ScrollClass";

const Header = () => {
  const [locationClass, setlocationClass] = useState("");
  const [languageClass, setLanguageClass] = useState("");
  const [currencyClass, setCurrencyClass] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);

  const toggleLocationDropdown = (
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    state ? setState("") : setState("is-active");
  };

  const loadCountries = async () => {
    const res = await getAllCountries();
    setCountries(res.data);
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <header className="navbar has-background-lighter" aria-label="main configuration header" style={{
      paddingLeft: "250px",
      paddingRight: "250px"
    }}>
      <div className="navbar-menu">
        <div className="navbar-end is-size-6_5">
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#" className="navbar-link">
              Sell on AliExpress
            </a>
            <div className="navbar-dropdown is-size-6_5">
              <a href="#" className="navbar-item">
                Seller Log In
              </a>
              <a href="#" className="navbar-item">
                中国卖家入驻
              </a>
              <a href="#" className="navbar-item">
                Non-Chinese Seller Registration
              </a>
            </div>
          </div>
          <Vertical></Vertical>
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#" className="navbar-link">
              Help
            </a>
            <div className="navbar-dropdown is-size-6_5">
              <a href="#" className="navbar-item">
                Customer Service
              </a>
              <a href="#" className="navbar-item">
                Disputes & Reports
              </a>
              <a href="#" className="navbar-item">
                Report IPR infringement
              </a>
            </div>
          </div>
          <Vertical></Vertical>
          <a href="#" className="navbar-item">
            Buyer Protection
          </a>
          <a href="#" className="navbar-item">
            <Icon Icon={BsPhone}></Icon> App
          </a>
          <Vertical></Vertical>
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#" className="navbar-link">
              <Icon Icon={TbLanguage}></Icon>/ Language / Currency
            </a>

            <div className="navbar-dropdown is-size-6_3">
              <div className="navbar-item">
                <div>
                  <h3 className="font-bold mb-2">Ship to</h3>
                  <div className={`dropdown ${locationClass}`}>
                    <div className="dropdown-trigger">
                      <button
                        className="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                        onClick={() =>
                          toggleLocationDropdown(
                            locationClass,
                            setlocationClass
                          )
                        }
                      >
                        <span className="is-size-7">Country</span>
                        <Icon
                          className="has-text-grey mt-1 ml-2 is-size-6_5"
                          Icon={BsFillCaretDownFill}
                        ></Icon>
                      </button>
                    </div>
                    <div
                      className="dropdown-menu"
                      id="dropdown-menu"
                      role="menu"
                    >
                      <div
                        className="dropdown-content"
                        style={ScrollY as React.CSSProperties}
                      >
                        {countries.map((country) => (
                          <a
                            href="#"
                            className="dropdown-item"
                            key={country.name.official + country.name.common}
                          >
                            <img className="image is-24x24 is-inline pr-2" src={country.flags[0]} alt={country.name.common} />
                            {country.name.common}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div>
                  <h3 className="font-bold mb-2">Language</h3>
                  <div className={`dropdown ${languageClass}`}>
                    <div className="dropdown-trigger">
                      <button
                        className="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                        onClick={() =>
                          toggleLocationDropdown(
                            languageClass,
                            setLanguageClass
                          )
                        }
                      >
                        <span className="is-size-7">English</span>
                        <Icon
                          className="has-text-grey mt-1 ml-2 is-size-6_5"
                          Icon={BsFillCaretDownFill}
                        ></Icon>
                      </button>
                    </div>
                    <div
                      className="dropdown-menu"
                      id="dropdown-menu"
                      role="menu"
                    >
                      <div
                        className="dropdown-content"
                        style={ScrollY as React.CSSProperties}
                      >
                        {countries.map((country) => {
                          const key = Object.keys(country.languages)[0];
                          return (
                            <a
                              key={
                                country.languages[key] + country.name.official
                              }
                              href="#"
                              className="dropdown-item"
                            >
                              {country.languages[key]}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div>
                  <h3 className="font-bold mb-2">Currency</h3>
                  <div className={`dropdown ${currencyClass}`}>
                    <div className="dropdown-trigger">
                      <button
                        className="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                        onClick={() =>
                          toggleLocationDropdown(
                            currencyClass,
                            setCurrencyClass
                          )
                        }
                      >
                        <span className="is-size-7">COP</span>
                        <Icon
                          className="has-text-grey mt-1 ml-2 is-size-6_5"
                          Icon={BsFillCaretDownFill}
                        ></Icon>
                      </button>
                    </div>
                    <div
                      className="dropdown-menu"
                      id="dropdown-menu"
                      role="menu"
                    >
                      <div
                        className="dropdown-content"
                        style={ScrollY as React.CSSProperties}
                      >
                        {countries.map((country) => {
                          const key = Object.keys(country.currencies);
                          if (country.currencies[key[0]] === undefined) {
                            return (
                              <span
                                key={
                                  country.name.official + country.name.official
                                }
                              ></span>
                            );
                          }
                          return (
                            <a
                              key={
                                country.currencies[key[0]].symbol +
                                country.name.official
                              }
                              href="#"
                              className="dropdown-item"
                            >
                              {country.currencies[key[0]].symbol}{" "}
                              {country.currencies[key[0]].name}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item">
                <LightButton
                  content="Save"
                  className="is-fullwidth is-danger is-small"
                ></LightButton>
              </div>
            </div>
          </div>
          <Vertical></Vertical>
          <a href="#" className="navbar-item">
            <Icon Icon={RiHeart2Line}></Icon> Wish List
          </a>
          <Vertical></Vertical>
          <a href="#" className="navbar-item">
            <Icon Icon={RiUserLine}></Icon> Account <Icon Icon={BsFillCaretDownFill} className="has-text-grey pl-3"></Icon>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
