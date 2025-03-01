import React from "react";
import P1 from "../../assets/HomePage/P1.png";
import P2 from "../../assets/HomePage/P2.png";
import P3 from "../../assets/HomePage/P3.png";

const LessonSection = () => {
    const LessonCards = [
        {
            id: 1,
            title: "របបអាហារ",
            description: "វាជារឿងសំខាន់ក្នុងការញ៉ាំអាហារសម្បូរសារធាតុចិញ្ចឹម ដែលជួយទាំងម្តាយនិងទារកក្នុងការលូតលាស់នេះគឺជាអាហារ សំខាន់ៗមួយចំនួនដែលត្រូវរួមបញ្ចូល៖",
            bgColor: "bg-blue-400", // First Card Color
            textColor: "text-white",
        },
        {
            id: 2,
            title: "របបអាហារ",
            description: "វាជារឿងសំខាន់ក្នុងការញ៉ាំអាហារសម្បូរសារធាតុចិញ្ចឹម ដែលជួយទាំងម្តាយនិងទារកក្នុងការលូតលាស់នេះគឺជាអាហារ សំខាន់ៗមួយចំនួនដែលត្រូវរួមបញ្ចូល៖",
            bgColor: "bg-pink-300", // Second Card Color
            textColor: "text-white",
        },
    ];

    const bottomcards = [
        {
            id: 1,
            image: P1,
            description: "ផ្តល់ការពិគ្រោះយោបល់អំពីរបបអាហារដែលសមស្របសម្រាប់សុខភាពរបស់ម្តាយនិងទារករបស់លោកអ្នក។",
        },
        {
            id: 2,
            image: P2,
            description: "ផ្តល់ការពិគ្រោះអំពីការរៀបចំចិត្តនិងការងារទាក់ទងផ្សេងៗដែលត្រូវត្រៀមរៀបចំ។",
        },
        {
            id: 3,
            image: P3,
            description: "ចូលរួមការពិភាក្សានិងបណ្ដុះបណ្ដាលទាក់ទងសុខភាពនិងការផ្តល់សេវាកម្មសំខាន់ៗ។",
        },
    ];

    return (
        <div className="relative">
            {/* Lesson Cards Section */}
            <div className="bg-gray-100 py-30 px-10">
                {/* Title Section */}
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
                        Title
                    </h1>

                    {/* Lesson Cards Grid */}
                    <div className="flex justify-between gap-x-10">
                        {LessonCards.map((lessonCard) => (
                            <div
                                key={lessonCard.id}
                                className={`${lessonCard.bgColor} ${lessonCard.textColor} shadow-md rounded-xl w-[48%] p-6 flex flex-col justify-center transition-transform duration-300 hover:scale-105`}
                            >
                                <h3 className="text-xl font-bold">{lessonCard.title}</h3>
                                <p className="font-regular mt-2 text-sm sm:text-base opacity-90">
                                    {lessonCard.description}
                                </p>
                                <div className="mt-4">
                                    <a href="#" className="font-regular inline-flex items-center text-white hover:text-blue-500">
                                        ស្វែងយល់បន្ថែម →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute left-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f6" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,170.7C672,181,768,171,864,154.7C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                </div>
            </div>

            {/* Bottom Cards Section */}
            <div className="bg-white py-30 px-10 cursor-pointer">
                {/* Title Section */}
                <div className="max-w-7xl mx-auto justify-start mt-5">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
                        Title
                    </h1>

                    {/* Bottom Cards Grid - NOW GRID WITH 1 COLUMN ON PHONE, 3 ON DESKTOP */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {bottomcards.map((card) => (
                            <div
                                key={card.id}
                                className="w-full transition-transform duration-300 transform hover:scale-105"
                            >
                                {/* Image Section */}
                                <div className="w-full flex justify-center p-4">
                                    <img
                                        src={card.image}
                                        alt="Pregnancy Care"
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                </div>

                                {/* Text Section */}
                                <div className="p-4 text-center">
                                    <p className="font-regular text-gray-600 text-sm leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonSection;
