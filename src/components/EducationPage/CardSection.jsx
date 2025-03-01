import React from "react";
import P1 from "../../assets/HomePage/P1.png";
import P2 from "../../assets/HomePage/P2.png";
import P3 from "../../assets/HomePage/P3.png";

const CardSection = () => {
  // Card Data
  const cards = [
    {
      id: 1,
      image: P1,
      title: "របបអាហារ",
      description:
        "ផ្តល់ការពិគ្រោះយោបល់អំពីរបបអាហារដែលសមស្របសម្រាប់សុខភាពរបស់ម្តាយនិងទារករបស់លោកអ្នក។",
    },
    {
      id: 2,
      image: P2,
      title: "ការរៀបចំចិត្ត",
      description:
        "ផ្តល់ការពិគ្រោះអំពីការរៀបចំចិត្តនិងការងារទាក់ទងផ្សេងៗដែលត្រូវត្រៀមរៀបចំ។",
    },
    {
      id: 3,
      image: P3,
      title: "ការពិភាក្សា",
      description:
        "ចូលរួមការពិភាក្សានិងបណ្ដុះបណ្ដាលទាក់ទងសុខភាពនិងការផ្តល់សេវាកម្មសំខាន់ៗ។",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-white mt-5 pt-14 pb-4">
      {/* Title Section */}
      <div className="text-center mb-12 sm:mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">អត្ថបទ​ និង វីដេអូសុខភាព</h1>
      </div>

      {/* Responsive Card Grid */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
          {cards.map((card) => (
            <div
              key={card.id}
              // 'group' allows child elements to respond to the parent's hover state
              className="group bg-gray-100 shadow-md rounded-xl overflow-hidden 
                         transition-transform transform hover:scale-105 hover:bg-blue-300 
                         w-[90%] sm:w-full sm:max-w-xs md:max-w-sm lg:max-w-md h-auto mx-auto p-4 sm:p-6 
                         cursor-pointer"
            >
              {/* Image Wrapper for Centering */}
              <div className="w-full flex justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[180px] sm:w-[220px] md:w-[240px] lg:w-[260px] h-auto mt-4 object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-3 sm:p-6 text-center">
                {/* Base color is text-gray-800; turns white on hover */}
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 group-hover:text-white">
                  {card.title}
                </h3>
                {/* Base color is text-gray-600; turns white on hover */}
                <p className="font-regular text-gray-600 text-sm mb-4 group-hover:text-white">
                  {card.description}
                </p>
                <div className="text-center">
                  {/* Base color is text-blue-500; turns white on hover */}
                  <a
                    href="#"
                    className="font-regular text-blue-500 inline-flex items-center group-hover:text-white"
                  >
                    <span className="lg:mt-5">ស្វែងយល់បន្ថែម</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fillOpacity="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 ml-2 lg:mt-5 group-hover:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
