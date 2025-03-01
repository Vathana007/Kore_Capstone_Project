import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import SlideSearch from "../components/BlogPage/SlideSearch";

const Blog = () => {
    return (
        <div>
            <Navbar />
            <SlideSearch />
            <Footer />
        </div>
    );
}

export default Blog;