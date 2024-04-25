"use client";
import React, { useState, useEffect } from "react";
import "./section.css";
import Image from "next/image";
import section1 from "../../../public/images/section1.jpg";
import section2 from "../../../public/images/section2.jpg";
import section3 from "../../../public/images/section3.jpg";

const Section = () => {
  const [paseos, setPaseos] = useState([]);

  useEffect(() => {
    const fetchPaseos = async () => {
      const csv = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQk4X1rTKPx0p8konOHOSAnfHlqzCDjPQjo9C80UFYYcjHgrdyRUmVPzXk5EfsjgxDfKPfHbJMhxzAv/pub?output=csv"
      ).then((res) => res.text());
      const paseosData = csv
        .split("\n")
        .slice(1)
        .map((row) => {
          const [paseo, description, price] = row.split(",");
          const formattedPrice = price.trim().replace(/[^0-9,.]/g, "");

          return { paseo, description, formattedPrice };
        });
      setPaseos(paseosData);
    };

    fetchPaseos();
  }, []);

  const cardColors = [
    "bg-gradient-to-r from-indigo-50 to-blue-50",
    "bg-gradient-to-r from-pink-50 to-red-50",
    "bg-gradient-to-r from-fuchsia-50 to-pink-50",
  ];

  const buttonColors = [
    "bg-gradient-to-r from-cyan-400 to-blue-400",
    "bg-gradient-to-r from-orange-300 to-amber-400",
    "bg-gradient-to-r from-fuchsia-300 to-pink-400",
  ];

  return (
    <>
      <section className="text-gray-600 body-font" id="paseos" >
        <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center">
          {paseos.map(
            (
              item,
              index // Iterar sobre paseos y usar index para asignar colores
            ) => (
                  <div className="p-4 md:w-1/3"  key={item.paseo}>
                    <div
                      className={`h-full rounded-xl shadow-card ${cardColors[index]} overflow-hidden`}
                    >
                      <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                        src={
                          index === 0
                            ? section1
                            : index === 1
                            ? section2
                            : section3
                        }
                        alt="blog"
                        width={600}
                        height={400}
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          {`PROMO ${index + 1}`}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                          {`${index + 1} vez por semana`}
                        </h1>
                        <p className="leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center flex-wrap">
                          <button
                            className={`${buttonColors[index]} hover:scale-105 drop-shadow-md  shadow-cla-blue px-6 py-2 rounded-lg font-bold`}
                          >
                            ${item.formattedPrice}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Section;
