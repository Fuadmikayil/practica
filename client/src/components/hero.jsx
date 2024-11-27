import React from "react";
import { Country } from "../data/country";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  function Funcid(item) {
    navigate(item.target.value);
  }
  return (
    <>
      <select onChange={Funcid}>
        <option>Ölkeni seç</option>
        {Country.map((item, key) => {
          return (
            <option id={item.id} key={key}>
              {item.country}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Hero;
