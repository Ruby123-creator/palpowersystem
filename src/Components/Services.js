import React from "react";

import rental from '../images/rental.webp'
import batteries from "../images/batteries.webp";
import repair from "../images/repair.jpg";
import ups1 from "../images/ups.png";

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            services
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.05] transition duration-1000 ease-in-out"
                  src={rental}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Rental Services
                </h2>
                <p className="text-md font-medium">
                  UPS Rental Services, a customer-centric company aim to provide
                  comprehensive and reliable rental solutions to businesses and
                  individuals worldwide.We offer a wide range of UPS that is
                  available in various power backup time and are suitable for
                  various kinds of loads.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.05] transition duration-1000 ease-in-out"
                  src={batteries}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  Selling and Purchasing Batteries
                </h2>
                <p className="text-md font-medium">
                  We offer to pick up service for all your bulk lots of
                  batteries for recycling and disposal. See all the different
                  types of batteries we purchase for scrap recycling below
                  including; Inverter batteries, lead-based batteries, solar
                  batteries, and ups batteries.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.05] transition duration-1000 ease-in-out"
                  src={ups1}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  Selling and Purchasing UPS
                </h2>
                <p className="text-md font-medium">
                  Our UPS are sourced from reputable manufacturers, ensuring
                  superior performance, reliability,cost effective and
                  longevity.We offer a diverse range of UPS units with varying
                  power capacities like Eaton, APC, Microtek, Luminous, toshiba
                  etc.
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.05] transition duration-1000 ease-in-out"
                  src={repair}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  UPS Repair and Services
                </h2>
                <p className="text-md font-medium">
                  Our knowledgeable team is here to assist you in selecting the
                  right UPS unit and battery combination for your requirements.
                  We can provide guidance on power capacity, battery runtime,
                  and connectivity options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
