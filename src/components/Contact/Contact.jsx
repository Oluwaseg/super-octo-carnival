import { useState } from "react";
import {
  AiFillMail,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formUrl = "https://formspree.io/f/mpzvnglv";
    fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submission successful:", data);
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div id="contact" className="py-4 px-4 dark:bg-gray-900">
      <ToastContainer /> {/* ToastContainer for notifications */}
      <div
        data-aos="fade-up"
        className="grid sm:grid-cols-2 items-center gap-16 p-8 py-6 mx-auto my-6 max-w-4xl bg-gray-100 dark:bg-slate-950 dark:text-white shadow-md rounded-md text-gray-700"
      >
        <div>
          <h1 className="text-3xl font-bold">Let&apos;s Talk</h1>
          <p className="text-sm text-gray-400 dark:text-white mt-3">
            Have some big idea or brand to develop and need help? Then reach out
            we&apos;d love to hear about your project and provide help.
          </p>
          <div className="mt-12">
            <h2 className="text-lg font-bold">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-white dark:bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <AiFillMail size={20} className="text-primary " />
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:sostech24@gmail.com"
                  className="text-primary dark:text-gray-100 text-sm ml-3"
                >
                  <small className="block">Mail</small>
                  <strong>Samuel Oluwasegun</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-bold">Socials</h2>
            <ul className="flex mt-3 space-x-4">
              <li className="bg-white dark:bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterSquare size={20} className="text-primary" />
                </a>
              </li>
              <li className="bg-white dark:bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin size={20} className="text-primary" />
                </a>
              </li>
              <li className="bg-white dark:bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="tel:+2349048095407"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdOutlinePhoneInTalk size={20} className="text-primary" />
                </a>
              </li>
              <li className="bg-white dark:bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://wa.me/message/QR35DPNXBPGOB1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={20} className="text-primary" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="ml-auto space-y-4"
          autoComplete="off"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full rounded-md py-2.5 px-4 border dark:bg-off-white dark:text-gray-700 text-sm outline-none"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md py-2.5 px-4 border dark:bg-off-white dark:text-gray-700 text-sm outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full rounded-md py-2.5 px-4 border dark:bg-off-white dark:text-gray-700 text-sm outline-none"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            className="w-full rounded-md px-4 border text-sm dark:bg-off-white dark:text-gray-700 pt-2.5 outline-none"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full flex items-center justify-center"
            disabled={loading} // Disable button while loading
          >
            {loading && (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.064a4 4 0 00-4 3.831H6zm9.695-1.784a8.003 8.003 0 01-1.727 4.41A8 8 0 014.472 12h3.064a4 4 0 003.832 4h3.067z"
                ></path>
              </svg>
            )}
            <FiSend size={20} style={{ marginRight: "8px" }} />
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
