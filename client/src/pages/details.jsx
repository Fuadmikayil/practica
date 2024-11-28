import React, { useEffect } from "react";
import { Country } from "../data/country";
import { useParams } from "react-router-dom";

const Details = () => {
  const { country } = useParams();
  const Countr1 = Country.find((item) => item.country == country);

  return (
    <>
      <div className="flex h-screen  justify-center ">
        <div className="flex justify-center     items-center flex-col gap-2">
          <p>Ölkenin Adı:{" " + Countr1.country}</p>
          <p>Ölkenin Paytaxdı: {" " + Countr1.capital}</p>
        </div>
      </div>
    </>
  );
};

export default Details;
