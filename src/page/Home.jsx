import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import CardAdvice from "../components/HomePage/CardAdvice";
import HeroSection from "../components/HomePage/HeroSection";
import LessonSection from "../components/HomePage/LessonSection";
import SlideAnimation from "../components/HomePage/SlideAnimation";


const Home = () => {
    return (
        <div>
            <Navbar />
            <SlideAnimation />
            <CardAdvice />
            <HeroSection />
            <LessonSection />
            <Footer />
        </div>
    );
}

export default Home;