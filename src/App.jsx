import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Style
import "./index.css";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandsLogo from "./components/BrandsLogo/BrandsLogo.jsx";
import Services from "./components/Services/Services";
import Why from "./components/Services/Why";
import Testimonial from "./components/Testimonial/Testimonial";
import BlogsComp from "./components/Blogs/BlogsComp.jsx";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact.jsx";

// Scroll
import ScrollProgress from "./ScrollProgress.jsx";
import VerticalScrollProgress from "./VerticalScrollProgress.jsx";

// Pages
import Project from "./pages/Project.jsx";
import About from "./pages/About.jsx";

// Import your logo image
import Logo from "./assets/website/logo.svg";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 3 seconds before showing the page
    const preloadTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Initialize AOS (Animate on Scroll)
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();

    // Cleanup function to clear timeout if component unmounts before timeout completes
    return () => clearTimeout(preloadTimeout);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white dark:bg-black dark:text-white text-black">
        {/* Replace with your animated loading component */}
        <img
          src={Logo}
          alt="Loading..."
          className="animate-spin h-12 w-12 mb-4"
        />
        <h1 className="text-3xl font-bold animate-ellipsis">Loading...</h1>
      </div>
    );
  }

  return (
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <ScrollProgress />
        <VerticalScrollProgress />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <BrandsLogo />
                <Services />
                <Why />
                <Testimonial />
                <BlogsComp />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
