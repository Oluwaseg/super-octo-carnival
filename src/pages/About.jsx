import yellowCar from "../assets/website/about.svg";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const About = () => {
  const companyName = (
    <span>
      <span className="text-blue-600 dark:text-orange-400">SOS</span>
      <span className="text-orange-400 dark:text-blue-600">-TECH</span>
    </span>
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-950 dark:text-white rounded-lg shadow-lg p-8 md:p-12 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-6 mb-8 md:mb-0 " data-aos="fade-up">
            <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">
              About {companyName}
            </h1>
            <p className="leading-relaxed mb-6">
              Welcome to {companyName}, a leading freelance agency based in
              Lagos, Nigeria. We specialize in providing top-notch technological
              solutions, leveraging cutting-edge technologies and a talented
              pool of developers and designers.
            </p>
            <p className="leading-relaxed mb-6">
              At {companyName}, we are passionate about delivering high-quality
              products and services that meet our clients&apos; needs and exceed
              their expectations. Whether you&apos;re looking for web
              development, mobile app development, UI/UX design, or custom
              software solutions, we&apos;ve got you covered.
            </p>

            <p className="leading-relaxed">
              Our team consists of skilled professionals who are dedicated to
              innovation, creativity, and excellence. We believe in building
              long-term relationships with our clients by delivering exceptional
              value and ensuring satisfaction at every step of the way.
            </p>
            <div className="mt-8">
              <div className="flex items-center mb-4" data-aos="fade-right">
                <FaLaptopCode className="text-blue-500 mr-2" />
                <span>Web Development</span>
              </div>
              <div
                className="flex items-center mb-4"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <FaMobileAlt className="text-blue-500 mr-2" />
                <span>Mobile App Development</span>
              </div>
              <div
                className="flex items-center"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <FaPaintBrush className="text-blue-500 mr-2" />
                <span>UI/UX Design</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src={yellowCar}
              alt="About Us Image"
              className="rounded-lg shadow-lg absolute top-0 right-0 md:static md:rounded-none md:shadow-none md:block"
              style={{ maxWidth: "100%", height: "auto" }}
              data-aos="fade-left"
            />
          </div>
        </div>

        <div
          className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-25 rounded-lg"
          style={{ zIndex: -1 }}
        ></div>
      </div>
    </div>
  );
};

export default About;
