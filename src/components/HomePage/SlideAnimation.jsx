import { useState, useEffect } from "react";
import P1 from "../../assets/HomePage/P1.png";
import P2 from "../../assets/HomePage/P2.png";
import P3 from "../../assets/HomePage/P3.png";

export default function Carousel({ autoSlide = true, autoSlideInterval = 3000 }) {
    const images = [P1, P2, P3]; // Array of images
    const [curr, setCurr] = useState(0);
    const totalSlides = images.length;

    // Go to the next slide with infinite loop effect
    const next = () => {
        setCurr((prev) => (prev + 1) % totalSlides); // Loop infinitely
    };

    // Go to the previous slide
    const prev = () => {
        setCurr((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval); // Cleanup interval on unmount
    }, [curr, autoSlide, autoSlideInterval]); // Depend on `curr` so it resets after each slide

    return (
        <div className="overflow-hidden relative mx-auto w-full sm:w-4/5 md:w-3/5 lg:w-screen
                        h-[50vh] sm:h-[50vh] md:h-[50vh] lg:h-screen">
            <div
                className="flex transition-transform ease-out duration-700 h-full"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 right-0 left-0">
                <div className="flex items-center justify-center gap-3">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full transition-all
                                ${curr === i ? "bg-white p-1" : "bg-white/50"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
