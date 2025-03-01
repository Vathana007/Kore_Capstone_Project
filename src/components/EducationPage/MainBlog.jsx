import React from "react";
import P1 from "../../assets/HomePage/P1.png";

const MainBlog = () => {
    return (
        <div className="relative">
            {/* First Section */}
            <div className="bg-gray-100">
                <svg width="100%" height="337px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L60,90.7C120,117,240,171,360,165.3C480,160,600,96,720,85.3C840,75,960,117,1080,133.3C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </div>
            <div className="relative bg-gray-100 pb-22">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

                    {/* Left Section - Image with Small Title */}
                    <div className="relative flex justify-center lg:justify-start">
                        {/* Small title positioned above the image */}
                        <h2 className="absolute top-[-4rem] md:top-[-6rem] left-0 lg:text-3xl text-2xl font-bold text-blue-300">
                            អត្ថបទ
                        </h2>
                        <img
                            src={P1}
                            alt="Hero Illustration"
                            className="w-full max-w-xl shadow-lg hover:shadow-xl"
                        />
                    </div>

                    {/* Right Section - Main Heading & Content */}
                    <div className="text-left">
                        <h1 className="font-bold text-2xl md:text-3xl text-gray-900 mb-2 leading-tight">
                            អារម្មណ៍បន្ទាប់ពីដឹងថាមានផ្ទៃពោះ: ត្រូវធ្វើអ្វី?
                        </h1>
                        <p className="font-bold text-lg text-gray-900 mb-2">
                            ដំណើរការសម្រេចចិត្តដំបូង
                        </p>
                        <p className="font-regular text-gray-700 text-lg mb-6 leading-relaxed">
                            ផ្សាយពានិច្ចប្រជុំអ្នកទាំងអស់គ្នាសម្រាប់អាហារូបត្ថម្ភសុខភាពផ្លូវចិត្ត
                            និងអារម្មណ៍ដំបូងបន្ទាប់ពីរកឃើញការមានផ្ទៃពោះ។
                        </p>
                        <a href="#" className="text-rose-300 text-lg font-bold inline-flex transition duration-300 hover:text-blue-300">
                            ស្វែងយល់បន្ថែម →
                        </a>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="relative bg-white mt-10 pt-28 pb-34">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

                    {/* Right Section - Image with Small Title */}
                    <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                        {/* Small title positioned above the image */}
                        <h2 className="absolute top-[-4rem] md:top-[-6rem] text-xl sm:text-3xl font-bold text-rose-300 sm:text-right w-full">
                            វីដេអូ
                        </h2>
                        <img
                            src={P1}
                            alt="Hero Illustration"
                            className="w-full max-w-xl shadow-lg hover:shadow-xl rounded-lg"
                        />
                    </div>

                    {/* Left Section - Main Heading & Content */}
                    <div className="text-left order-2 lg:order-1">
                        <h1 className="font-bold text-2xl md:text-3xl text-gray-900 mb-2 leading-tight">
                            អារម្មណ៍បន្ទាប់ពីដឹងថាមានផ្ទៃពោះ: ត្រូវធ្វើអ្វី?
                        </h1>
                        <p className="font-bold text-lg text-gray-900 mb-2">
                            ដំណើរការសម្រេចចិត្តដំបូង
                        </p>
                        <p className="font-regular text-gray-700 text-lg mb-6 leading-relaxed">
                            ផ្សាយពានិច្ចប្រជុំអ្នកទាំងអស់គ្នាសម្រាប់អាហារូបត្ថម្ភសុខភាពផ្លូវចិត្ត
                            និងអារម្មណ៍ដំបូងបន្ទាប់ពីរកឃើញការមានផ្ទៃពោះ។
                        </p>
                        <a href="#" className="text-rose-300 text-lg font-bold inline-flex transition duration-300 hover:text-blue-300">
                            ស្វែងយល់បន្ថែម →
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainBlog;
