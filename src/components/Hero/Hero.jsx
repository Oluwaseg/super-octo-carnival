import React from "react";
import { Tilt } from "react-tilt";
import yellowCar from "../../assets/website/team.jpg";

const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <Tilt className="Tilt" options={{ max: 10, scale: 1.01 }}>
              <img
                src={yellowCar}
                alt=""
                className="w-full sm:max-w-[280px] md:max-w-[430px] rounded-md"
              />
              <div
                data-aos="slide-right"
                className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
              >
                <p className="text-gray-500 text-sm">⭐Projects</p>
                <h1 className="font-bold">
                  100+ <span className="font-normal">Done</span>
                </h1>
              </div>
            </Tilt>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Welcome to{" "}
              <span className="text-primary">
                SOS <span className="text-orange-400">TECH</span>{" "}
              </span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Your go-to for web and mobile app development. We transform your
              ideas into reality with quality and innovation.
            </p>
            <div className="block">
              <a
                href="#contact"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0"
                className="primary-btn"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
