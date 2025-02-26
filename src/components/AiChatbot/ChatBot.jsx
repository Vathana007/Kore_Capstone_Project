import React from "react";

const ChatBot = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="fixed h-screen px-3 py-5 flex mt-20">
                {/* Left Sidebar Section */}
                <div className="w-48 h-145 mx-5 rounded-xl bg-rose-200 p-4">
                    <h2 className="mb-5 text-lg font-regular text-sky-500">ថ្ងៃនេះ</h2>
                    <ul className="space-y-4 font-regular">
                        <li className="cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2 transition duration-300">
                            ការផ្តល់អាហារ
                        </li>
                        <li className="cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2 transition duration-300">
                            ចលនា
                        </li>
                        <li className="cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2 transition duration-300">
                            ម៉ាក់
                        </li>
                        <div className="space-y-4 pt-4">
                            <h2 className="font-bold">7 ថ្ងៃមុន</h2>
                            <li className="cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2 transition duration-300">
                                ប្តីខ្ញុំនៅឯណា
                            </li>
                            <div className="space-y-4 pt-4">
                                <h2 className="font-bold">30 ថ្ងៃមុន</h2>
                                <li className="cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2 transition duration-300">
                                    រៀបចំសម្រាប់កូន
                                </li>
                                <li className="cursor-pointer hover:bg-gray-100 hover:rounded-lg p-2 transition duration-300">
                                    ការកំណត់
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;
