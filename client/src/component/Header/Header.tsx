import React, { useState } from "react";
import { useTranslation } from "react-i18next"; 

function Header() {
   const { i18n } = useTranslation();
    const languageNames:any = {
      en: "English",
      es: "Spanish",
      hi: "Hindi",
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 const [selectedLanguageCode, setSelectedLanguageCode] = useState("en");

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLanguageSelection = (language:any) => {
       const lang = i18n.changeLanguage(language);
        setSelectedLanguageCode(language);
       setIsDropdownOpen(false); 
    };
     const selectedLanguageName = languageNames[selectedLanguageCode];
  return (
    <div className="m-auto ">
      <div className="border-b-2  p-5 flex justify-between">
        <div className="text-left font-bold text-2xl text-[#4DBD7A]">
          YoutubeSave
        </div>
        <div className="text-left">
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex bg-transparent justify-center w-full shadow-sm px-4 py-2  text-sm font-medium text-gray-70"
              onClick={toggleDropdown}
            >
              {selectedLanguageName}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div
                className="origin-top-right z-20 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => handleLanguageSelection("en")}
                  >
                    English
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => handleLanguageSelection("es")}
                  >
                    Spanish
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => handleLanguageSelection("hi")}
                  >
                    Hindi
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
