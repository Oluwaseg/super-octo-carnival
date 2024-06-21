import React from "react";
import { Tilt } from "react-tilt";
import Typed from "typed.js";
import yellowCar from "../../assets/website/team.jpg";

const Hero = () => {
  React.useEffect(() => {
    const options = {
      strings: [
        "Your go-to for web development.",
        "Your mobile app experts.",
        "Innovators at heart.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(".typed-element", options);

    return () => {
      typed.destroy();
    };
  }, []);

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
              <span className="text-primary dark:text-orange-400">
                SOS{" "}
                <span className="text-orange-400 dark:text-primary">TECH</span>{" "}
              </span>
              <span className="typed-element"></span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              <span className="typed-element"></span>
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
