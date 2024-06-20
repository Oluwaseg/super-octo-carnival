import { FaCheckCircle, FaLightbulb, FaMedal, FaUsers } from "react-icons/fa";

const reasonsData = [
  {
    name: "Expertise",
    icon: <FaMedal className="text-4xl text-primary" />,
    link: "#",
    description:
      "With years of experience in the tech industry, we bring a wealth of knowledge and skills to every project.",
    aosDelay: "0",
  },
  {
    name: "Quality",
    icon: <FaCheckCircle className="text-4xl text-primary" />,
    link: "#",
    description:
      "We are dedicated to delivering high-quality solutions that exceed your expectations and drive your success.",
    aosDelay: "300",
  },
  {
    name: "Innovation",
    icon: <FaLightbulb className="text-4xl text-primary" />,
    link: "#",
    description:
      "We stay ahead of the curve, using the latest technologies and best practices to provide cutting-edge solutions.",
    aosDelay: "500",
  },
  {
    name: "Client-Centric Approach",
    icon: <FaUsers className="text-4xl text-primary" />,
    link: "#",
    description:
      "Your satisfaction is our priority. We work closely with you to understand your needs and deliver customized solutions.",
    aosDelay: "700",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <span id="why-choose-us"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Why Choose Us
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              Discover the reasons that set us apart in delivering exceptional
              technology solutions.
            </p>
          </div>

          {/* reasons cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {reasonsData.map((reason) => (
              <div
                key={reason.name}
                data-aos="fade-up"
                data-aos-delay={reason.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{reason.icon}</div>
                <h1 className="text-lg font-semibold">{reason.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          {/* <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Learn More</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
