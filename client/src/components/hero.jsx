import React from "react";
import { Country } from "../data/country";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  function Funcid(item) {
    const e = item.target
    
    const element = e.querySelector(`option[value="${item.target.value}"]`)
    console.log(element.id)
    navigate(item.target.value);
  }
  return (
    <>
      <select onChange={Funcid}>
        <option>Ölkeni seç</option>
        {Country.map((item, key) => {
          return (
            <option id={item.id} key={key} value={item.country}>
              {item.country}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Hero;
