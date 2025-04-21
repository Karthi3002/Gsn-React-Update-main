import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import Benefits from "./components/benefits";
import About from "./components/about";
import Services from "./components/services";
import Experience from "./components/experience";
import JoinGSN from "./components/JoinGSN";
import Testimonials from "./components/testimonials";
import Blog from "./components/blog";
import Chapters from "./components/Chapters";
import Contact from "./components/contact";
import ScrollToTop from "./components/ScrollToTop";

import BlogPage from "./pages/BlogPage";
import AllBlogs from "./pages/AllBlogs";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

// 🟡 New Component: Handles section scrolling using state (from navigation)
const ScrollHandler = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash;

    // ✅ Only scroll to hash if it's a valid in-page anchor (no slashes)
    if (hash && !hash.includes("/")) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }

    // ✅ Optional: Support programmatic scroll from location.state
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [location]);

  return children;
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <ScrollHandler>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Header data={landingPageData.Header} />
                <Benefits data={landingPageData.Benefits} />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <Experience data={landingPageData.Experience} />
                <JoinGSN data={landingPageData.JoinGSN} />
                <Testimonials data={landingPageData.Testimonials} />
                <Blog />
                <Chapters data={landingPageData.Chapters} />
                <Contact data={landingPageData.Contact} />
                <ScrollToTop />
              </>
            }
          />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
        </Routes>
      </ScrollHandler>
    </Router>
  );
};

export default App;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import Benefits from "./components/benefits";
// import About from "./components/about";
// import Services from "./components/services";
// import Experience from "./components/experience";
// import JoinGSN from "./components/JoinGSN";
// import Testimonials from "./components/testimonials";
// import BlogCard from './components/blogCard';
// import AllBlogs from "./pages/AllBlogs";
// import BlogPage from "./pages/BlogPage";
// import { Contact } from "./components/contact";

// import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
// import "./App.css";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

// const App = () => {
//   const [landingPageData, setLandingPageData] = useState({});
//   useEffect(() => {
//     setLandingPageData(JsonData);
//   }, []);

//   return (
//     <Router>
//       <Navigation />
//       <Routes>
//   <Route
//     path="/"
//     element={
//       <>
//         <Header data={landingPageData.Header} />
//         <Benefits data={landingPageData.Benefits} />
//         <About data={landingPageData.About} />
//         <Services data={landingPageData.Services} />
//         <Experience data={landingPageData.Experience} />
//         <JoinGSN data={landingPageData.JoinGSN} />
//         <Testimonials data={landingPageData.Testimonials} />
//         {landingPageData.blogs?.map((blog) => (
//           <BlogCard key={blog.id} blog={blog} />
//         ))}
//         <Contact data={landingPageData.Contact} />
//       </>
//     }
//   />
//   <Route path="/blog" element={<AllBlogs />} />
//   <Route path="/blog/:slug" element={<BlogPage />} />
// </Routes>
//     </Router>
//   );
// };

// export default App;
