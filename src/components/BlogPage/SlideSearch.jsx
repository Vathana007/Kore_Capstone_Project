import React from "react";
import P1 from "../../assets/HomePage/P1.png";

const SlideSearch = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px]">
            {/* Image */}
            <img src={P1} alt="Pregnancy Search" className="w-full h-full object-cover" />

            {/* Text and Search Bar */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="font-regular text-3xl md:text-4xl lg:text-5xl mb-2">របបអាហារ</h1>
                <p className="font-regular text-lg md:text-xl lg:text-2xl mb-4">
                    ដែលម៉ាក់ៗគ្រប់រូបគួរយល់ដឹង
                </p>
                <div>
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="ស្វែងរកប្រធានបទ"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </div>
            </div>
        </div>
    );
}

export default SlideSearch;