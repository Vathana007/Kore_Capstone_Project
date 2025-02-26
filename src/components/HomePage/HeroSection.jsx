import React from "react";
import P1 from "../../assets/HomePage/P1.png";

const HeroSection = () => {
    return (
        <div className="relative">
            {/* First Hero Section */}
            <div className="relative bg-gradient-to-b from-blue-300 to-white pb-28">
                <div className="container mx-auto px-6 py-40 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

                    {/* Left Section - Text Content */}
                    <div className="text-center sm:text-left lg:justify-start">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
                            ចំណេះដឹងអប់រំសុខភាពផ្ទាល់ខ្លួន
                        </h1>
                        <p className="font-regular text-lg sm:text-xl text-gray-900 mb-6">
                            រៀនអំពីការថែទាំសុខភាពអាហារូបត្ថម្ភ និងសុខភាពផ្លូវចិត្ត ក្នុងអំឡុងពេលមានផ្ទៃពោះ
                        </p>
                        <a href="#" className="text-rose-300 text-lg font-bold inline-flex transition duration-300 hover:text-white">
                            ស្វែងយល់បន្ថែម →
                        </a>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={P1}
                            alt="Hero Illustration"
                            className="w-full max-w-lg rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        />
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b to-rose-100 ">
                    <svg width="100%" height="337.5px" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ffe4e6" fillOpacity="1" d="M0,160L60,170C120,180,240,220,360,230C480,240,600,220,720,200C840,180,960,160,1080,170C1200,180,1320,210,1440,220V320H0Z"></path>
                    </svg>
                </div>
            </div>

            {/* Second Hero Section */}
            <div className="relative bg-rose-100 pb-52">
                <div className="container mx-auto px-6 py-15 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

                    {/* Left Section - Image */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src={P1}
                            alt="Hero Illustration"
                            className="w-full max-w-lg rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        />
                    </div>

                    {/* Right Section - Text Content */}
                    <div className="text-center sm:text-left lg:ml-10">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
                            ចែករំលែក
                        </h1>
                        <p className="font-regular text-lg sm:text-xl text-gray-900 mb-6">
                            ភ្ជាប់ជាមួយស្រ្តីមានផ្ទៃពោះដទៃទៀត ដើម្បីចែករំលែកបទពិសោធន៍ និងទទួលបានការគាំទ្រ
                        </p>
                        <a href="#" className="text-rose-300 text-lg font-bold inline-flex transition duration-300 hover:text-white">
                            ស្វែងយល់បន្ថែម →
                        </a>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b to-blue-100">
                    <svg width="100%" height="337.5px" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#dbeafe" fillOpacity="1" d="M0,160L60,170C120,180,240,220,360,230C480,240,600,220,720,200C840,180,960,160,1080,170C1200,180,1320,210,1440,220V320H0Z"></path>
                    </svg>
                </div>
            </div>

            {/* Third Hero Section */}
            <div className="relative bg-gradient-to-b from-blue-100 to-blue-200 pb-32">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

                    {/* Left Section - Text Content */}
                    <div className="text-center sm:text-left lg:justify-start">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">
                            ពិភាក្សាជាមួយ AI
                        </h1>
                        <p className="font-regular text-lg sm:text-xl text-gray-900 mb-6">
                            ឆ្លើយសំណួរអំពីសុខភាពការមានផ្ទៃពោះរបស់អ្នកតាមរយៈ AI ជាភាសាខ្មែរ
                        </p>
                        <a href="#" className="text-rose-300 text-lg font-bold inline-flex transition duration-300 hover:text-white">
                            ស្វែងយល់បន្ថែម →
                        </a>
                    </div>

                    {/* Right Section - Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={P1}
                            alt="Hero Illustration"
                            className="w-full max-w-lg rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
