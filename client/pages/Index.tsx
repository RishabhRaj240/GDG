import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full h-[100px] bg-white shadow-lg fixed top-0 z-50">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 lg:px-6">
          {/* Google Logo */}
          <div className="flex items-center">
            <svg
              width="75"
              height="35"
              viewBox="0 0 75 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-6 sm:w-16 sm:h-8 lg:w-[75px] lg:h-[35px]"
            >
              <path
                d="M17.8554 18.2161L30.0433 11.1834C30.7247 10.7893 31.3218 10.2648 31.8006 9.63993C32.2793 9.01504 32.6303 8.30196 32.8334 7.54143C33.0366 6.7809 33.0879 5.9878 32.9846 5.20741C32.8812 4.42703 32.6252 3.67464 32.2311 2.99321C31.8369 2.31178 31.3124 1.71465 30.6875 1.23592C30.0626 0.757187 29.3496 0.406225 28.589 0.203072C27.0531 -0.207216 25.417 0.00946137 24.0408 0.805437L2.9944 12.9536L17.8554 18.2161Z"
                fill="#EA4335"
              />
              <path
                d="M27.0329 34.6358C28.3523 34.6372 29.6353 34.2033 30.683 33.4013C31.7306 32.5993 32.4845 31.4741 32.8275 30.2001C33.1706 28.9261 33.0838 27.5745 32.5806 26.3548C32.0773 25.1352 31.1857 24.1156 30.0441 23.4543L8.98971 11.3022C7.6135 10.5072 5.97787 10.2916 4.44265 10.7026C2.90743 11.1136 1.59837 12.1177 0.803447 13.4939C0.00852585 14.8701 -0.20714 16.5058 0.203894 18.041C0.614927 19.5762 1.61899 20.8853 2.9952 21.6802L24.0376 33.8283C24.9474 34.3568 25.9807 34.6354 27.0329 34.6358V34.6358Z"
                fill="#4285F4"
              />
              <path
                d="M47.9669 34.6358C49.0166 34.6383 50.0485 34.3639 50.9582 33.8402L72.0006 21.6921L57.3306 16.3141L44.9637 23.4543C43.8207 24.1144 42.9275 25.1334 42.4227 26.353C41.918 27.5727 41.8299 28.9248 42.1722 30.1997C42.5145 31.4745 43.2679 32.6007 44.3157 33.4035C45.3635 34.2064 46.6469 34.6409 47.9669 34.6398V34.6358Z"
                fill="#FBBC04"
              />
              <path
                d="M68.9961 24.135C70.3164 24.1379 71.6008 23.7045 72.6494 22.9022C73.6981 22.0999 74.4523 20.9736 74.7948 19.6984C75.1373 18.4232 75.0489 17.0706 74.5434 15.8508C74.0378 14.631 73.1434 13.6125 71.9993 12.9535L50.9568 0.805338C49.5806 0.0104174 47.945 -0.205247 46.4098 0.205786C44.8746 0.616819 43.5655 1.62088 42.7706 2.99709C41.9757 4.3733 41.76 6.00893 42.171 7.54415C42.5821 9.07937 43.5861 10.3884 44.9623 11.1833L66.0048 23.3315C66.9137 23.8579 67.9456 24.1351 68.9961 24.135V24.135Z"
                fill="#0F9D58"
              />
            </svg>
            <span
              className="ml-2 lg:ml-4 text-sm sm:text-lg lg:text-[22px] font-normal text-[#868686] tracking-[0.656px] hidden sm:block"
              style={{ fontFamily: "Product Sans" }}
            >
              GDG RCOEM
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a
              href="#"
              className="text-xl xl:text-[25px] font-normal text-[#868686] tracking-[0.75px]"
              style={{ fontFamily: "Product Sans" }}
            >
              Home
            </a>
            <a
              href="#"
              className="text-xl xl:text-[25px] font-normal text-[#868686] tracking-[0.75px]"
              style={{ fontFamily: "Product Sans" }}
            >
              Events
            </a>
            <a
              href="#"
              className="text-xl xl:text-[25px] font-normal text-[#868686] tracking-[0.75px]"
              style={{ fontFamily: "Product Sans" }}
            >
              Team
            </a>
            <a
              href="#"
              className="text-xl xl:text-[25px] font-normal text-[#868686] tracking-[0.75px]"
              style={{ fontFamily: "Product Sans" }}
            >
              Alumni
            </a>
            <a
              href="#"
              className="text-xl xl:text-[25px] font-normal text-[#868686] tracking-[0.75px]"
              style={{ fontFamily: "Product Sans" }}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button & Toggle Switch */}
          <div className="flex items-center space-x-3">
            <button className="lg:hidden p-2">
              <div className="w-6 h-0.5 bg-[#868686] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#868686] mb-1"></div>
              <div className="w-6 h-0.5 bg-[#868686]"></div>
            </button>
            <div className="w-16 h-7 lg:w-[90px] lg:h-[36px] rounded-full bg-[#7A7A7A] relative">
              <div className="w-5 h-5 lg:w-[27px] lg:h-[27px] bg-white rounded-full absolute left-1 top-1 lg:left-[6px] lg:top-[5px]"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-[120px] sm:pt-[140px] pb-8 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          {/* Main Title */}
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px] font-bold leading-none mb-2 sm:mb-4"
            style={{ fontFamily: "Product Sans" }}
          >
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#DB4437]">o</span>
            <span className="text-[#FCB912]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#0F9D56]">l</span>
            <span className="text-[#EA4335]">e</span>
            <span className="text-black"> Developer Groups</span>
          </h1>

          {/* Subtitle */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-bold text-[#646464] mb-6 sm:mb-12"
            style={{ fontFamily: "Product Sans" }}
          >
            RBU Chapter
          </h2>

          {/* Hero Image */}
          <div className="mb-6 sm:mb-12">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/972070776cf934b63ae746596f17998bd2b405c2?width=1226"
              alt="Google Developer Groups Illustration"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[613px] h-auto mx-auto"
            />
          </div>

          {/* Description */}
          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[35px] font-normal text-[#5F5F5F] max-w-[935px] mx-auto mb-8 sm:mb-12 leading-normal px-4"
            style={{ fontFamily: "Product Sans" }}
          >
            Google Developer Groups are community groups for college and
            university students interested in Google developer technologies.
          </p>

          {/* Join Button */}
          <button
            className="bg-[#3686F7] text-white text-xl sm:text-2xl lg:text-[30px] font-bold px-8 sm:px-12 lg:px-14 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-[#2563eb] transition-colors"
            style={{ fontFamily: "Open Sans" }}
          >
            JOIN US
          </button>

          {/* Scroll Indicators */}
          <div className="flex flex-col items-center mt-8 sm:mt-12 space-y-1">
            <ChevronDown className="w-8 sm:w-10 h-5 sm:h-6 text-[#5F5F5F] opacity-20" />
            <ChevronDown className="w-8 sm:w-10 h-5 sm:h-6 text-[#5F5F5F] opacity-60" />
            <ChevronDown className="w-8 sm:w-10 h-5 sm:h-6 text-[#5F5F5F]" />
          </div>
        </div>
      </section>

      {/* Get To Know Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-[#5F5F5F] text-center mb-8 sm:mb-12 lg:mb-16 tracking-[-1.32px] leading-[150%]"
            style={{ fontFamily: "Product Sans" }}
          >
            Get To Know Us!
          </h2>

          {/* Our Mission */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="lg:w-1/2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/20467d69f0df05a625ffcd48c2ea365ed212410a?width=1066"
                  alt="Community Illustration"
                  className="w-full max-w-[400px] lg:max-w-[533px] h-auto mx-auto lg:mx-0"
                />
              </div>
              <div className="lg:w-1/2">
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-medium text-[#5F5F5F] mb-4 lg:mb-6 tracking-[-1.1px] leading-[150%]"
                  style={{ fontFamily: "Product Sans Medium" }}
                >
                  Our Mission
                </h3>
                <div className="w-32 sm:w-40 lg:w-[206px] h-1 lg:h-[6px] bg-[#4285F4] mb-6 lg:mb-8"></div>
                <p
                  className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-medium text-[#5F5F5F] leading-[150%] tracking-[-0.66px]"
                  style={{ fontFamily: "Product Sans Medium" }}
                >
                  Our mission involves community engagement, leadership
                  development, building strong tech foundation, while enabling
                  all tech enthusiasts to contribute to the global society.
                </p>
              </div>
            </div>
          </div>

          {/* Our Perspective */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
              <div className="lg:w-1/2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2b31381f085187fb50fcf64bc5f9f8b480a3ad4e?width=1158"
                  alt="Perspective Illustration"
                  className="w-full max-w-[579px] h-auto"
                />
              </div>
              <div className="lg:w-1/2">
                <h3
                  className="text-[50px] font-medium text-[#5F5F5F] mb-6 tracking-[-1.1px] leading-[150%]"
                  style={{ fontFamily: "Product Sans Medium" }}
                >
                  Our Perspective
                </h3>
                <div className="w-[206px] h-[6px] bg-[#0F9D56] mb-8"></div>
                <p
                  className="text-[30px] font-medium text-[#5F5F5F] leading-[150%] tracking-[-0.66px]"
                  style={{ fontFamily: "Product Sans Medium" }}
                >
                  We're a community-driven initiative aiming to bridge the gap
                  between research and practice , develop evolutionary thinking
                  and network throughout the process. We believe in connecting
                  fellow developers , spreading stimulative ideas and working
                  for a solution driven team.
                </p>
              </div>
            </div>
          </div>

          {/* What Keeps Us Going */}
          <div>
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="lg:w-1/2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9597cfaa08e7d7eeeb52577ff007dd27e92560ba?width=1164"
                  alt="What Keeps Us Going Illustration"
                  className="w-full max-w-[582px] h-auto"
                />
              </div>
              <div className="lg:w-1/2">
                <h3
                  className="text-[50px] font-normal text-[#353535] mb-6"
                  style={{ fontFamily: "Product Sans" }}
                >
                  What Keeps Us Going?
                </h3>
                <div className="w-[206px] h-[6px] bg-[#FFC727] mb-8"></div>
                <p
                  className="text-[30px] font-medium text-[#5F5F5F] leading-[150%] tracking-[-0.66px]"
                  style={{ fontFamily: "Product Sans Medium" }}
                >
                  Our club helps students to connect, learn, empower and grow.
                  Teamwork, innovative thinking, communication, and leading with
                  solutions is what helps us achieve new heights.
                  <br />
                  <br />
                  The entire team works in coordination, to inspire and motivate
                  the upcoming coding community to evolve their skills and
                  broaden their horizons of knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-[210px] lg:h-[210px] mx-auto mb-4 relative flex items-center justify-center">
                <svg
                  width="218"
                  height="218"
                  viewBox="0 0 218 218"
                  className="absolute inset-0 w-full h-full"
                >
                  <g filter="url(#filter0_d_1_166)">
                    <path
                      d="M109 0V210C51.0025 210 4 162.997 4 105C4 47.0026 51.0025 0 109 0Z"
                      fill="#EA4435"
                    />
                    <path
                      d="M214 105C214 162.997 166.997 210 109 210V0C166.997 0 214 47.0026 214 105Z"
                      fill="#547DBF"
                    />
                    <path
                      d="M214 105C214 162.997 166.997 210 109 210C51.0025 210 4 162.997 4 105H214Z"
                      fill="#33A852"
                    />
                    <path
                      d="M214 105C214 162.997 166.998 210 109 210V105H214Z"
                      fill="#F9BC15"
                    />
                  </g>
                  <ellipse
                    cx="108.525"
                    cy="104.525"
                    rx="89.0835"
                    ry="89.0836"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_d_1_166"
                      x="0"
                      y="0"
                      width="218"
                      height="218"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_166"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_166"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div className="relative z-10 text-center">
                  <div
                    className="text-2xl sm:text-3xl lg:text-[60px] font-bold text-[#5F5F5F] leading-none"
                    style={{ fontFamily: "Product Sans" }}
                  >
                    03+
                  </div>
                  <div
                    className="text-sm sm:text-base lg:text-[20px] font-normal text-[#353535] mt-1"
                    style={{ fontFamily: "Product Sans" }}
                  >
                    Years
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-[210px] h-[210px] mx-auto mb-4 relative flex items-center justify-center">
                <svg
                  width="218"
                  height="218"
                  viewBox="0 0 218 218"
                  className="absolute inset-0"
                >
                  <g filter="url(#filter0_d_1_174)">
                    <path
                      d="M109 0V210C51.0026 210 4 162.997 4 105C4 47.0026 51.0026 0 109 0Z"
                      fill="#EA4435"
                    />
                    <path
                      d="M214 105C214 162.997 166.998 210 109 210V0C166.998 0 214 47.0026 214 105Z"
                      fill="#547DBF"
                    />
                    <path
                      d="M214 105C214 162.997 166.997 210 109 210C51.0026 210 4 162.997 4 105H214Z"
                      fill="#33A852"
                    />
                    <path
                      d="M214 105C214 162.997 166.998 210 109 210V105H214Z"
                      fill="#F9BC15"
                    />
                  </g>
                  <ellipse
                    cx="108.525"
                    cy="104.525"
                    rx="89.0837"
                    ry="89.0836"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_d_1_174"
                      x="0"
                      y="0"
                      width="218"
                      height="218"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_174"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_174"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div className="relative z-10 text-center">
                  <div
                    className="text-[60px] font-bold text-[#5F5F5F] leading-none"
                    style={{ fontFamily: "Product Sans" }}
                  >
                    10+
                  </div>
                  <div
                    className="text-[20px] font-normal text-[#353535] mt-1"
                    style={{ fontFamily: "Product Sans" }}
                  >
                    Events
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-[210px] h-[210px] mx-auto mb-4 relative flex items-center justify-center">
                <svg
                  width="218"
                  height="218"
                  viewBox="0 0 218 218"
                  className="absolute inset-0"
                >
                  <g filter="url(#filter0_d_1_182)">
                    <path
                      d="M109 0V210C51.0026 210 4 162.997 4 105C4 47.0026 51.0026 0 109 0Z"
                      fill="#EA4435"
                    />
                    <path
                      d="M214 105C214 162.997 166.998 210 109 210V0C166.998 0 214 47.0026 214 105Z"
                      fill="#547DBF"
                    />
                    <path
                      d="M214 105C214 162.997 166.997 210 109 210C51.0026 210 4 162.997 4 105H214Z"
                      fill="#33A852"
                    />
                    <path
                      d="M214 105C214 162.997 166.998 210 109 210V105H214Z"
                      fill="#F9BC15"
                    />
                  </g>
                  <ellipse
                    cx="108.525"
                    cy="104.525"
                    rx="89.0837"
                    ry="89.0836"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_d_1_182"
                      x="0"
                      y="0"
                      width="218"
                      height="218"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_182"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_182"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div className="relative z-10 text-center">
                  <div
                    className="text-[60px] font-bold text-[#5F5F5F] leading-none"
                    style={{ fontFamily: "Product Sans" }}
                  >
                    1K+
                  </div>
                  <div
                    className="text-[18px] font-normal text-[#353535] mt-1 leading-tight"
                    style={{ fontFamily: "Product Sans" }}
                  >
                    Community
                    <br />
                    Members
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-[210px] h-[210px] mx-auto mb-4 relative flex items-center justify-center">
                <svg
                  width="218"
                  height="218"
                  viewBox="0 0 218 218"
                  className="absolute inset-0"
                >
                  <g filter="url(#filter0_d_1_190)">
                    <path
                      d="M109 0V210C51.0026 210 4 162.997 4 105C4 47.0026 51.0026 0 109 0Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M214 105C214 162.997 166.998 210 109 210V0C166.998 0 214 47.0026 214 105Z"
                      fill="#547DBF"
                    />
                    <path
                      d="M214 105C214 162.997 166.997 210 109 210C51.0026 210 4 162.997 4 105H214Z"
                      fill="#33A852"
                    />
                    <path
                      d="M214 105C214 162.997 166.998 210 109 210V105H214Z"
                      fill="#F9BC15"
                    />
                  </g>
                  <ellipse
                    cx="108.525"
                    cy="104.525"
                    rx="89.0837"
                    ry="89.0836"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_d_1_190"
                      x="0"
                      y="0"
                      width="218"
                      height="218"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_190"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_190"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div className="relative z-10 text-center">
                  <div
                    className="text-[60px] font-bold text-[#5F5F5F] leading-none"
                    style={{ fontFamily: "Product Sans" }}
                  >
                    200+
                  </div>
                  <div
                    className="text-[20px] font-normal text-[#353535] mt-1"
                    style={{ fontFamily: "Product Sans" }}
                  >
                    Attendees
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-bold text-[#5F5F5F] mb-2 sm:mb-4 tracking-[-1.54px] leading-[150%]"
            style={{ fontFamily: "Product Sans" }}
          >
            Technologies
          </h2>
          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-normal text-[#5F5F5F] mb-8 sm:mb-12 lg:mb-16 tracking-[-0.352px] leading-[150%] px-4"
            style={{ fontFamily: "Product Sans" }}
          >
            Domains That Excite Us to Collaborate and Teach!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Android */}
            <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-lg border border-[#E1E1E1]">
              <div className="h-2 lg:h-[11px] w-full bg-[#EA4335] rounded-full mb-6 lg:mb-8"></div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/009e2470da36421ebd5272d6d0f0a910a64f8e8b?width=454"
                alt="Android"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-[227px] lg:h-[227px] mx-auto mb-4 lg:mb-6"
              />
              <h3
                className="text-2xl sm:text-3xl lg:text-[48px] font-normal text-[#5F5F5F]"
                style={{ fontFamily: "Product Sans" }}
              >
                Android
              </h3>
              <ChevronDown className="w-4 h-6 text-[#5F5F5F] mx-auto mt-2 lg:mt-4" />
            </div>

            {/* Flutter */}
            <div className="bg-white rounded-[32px] p-8 shadow-lg border border-[#E1E1E1]">
              <div className="h-[11px] w-full bg-[#4285F4] rounded-full mb-8"></div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/27a2dfbf561bcddcf03876027ec660492f3c54cb?width=245"
                alt="Flutter"
                className="w-[122px] h-[123px] mx-auto mb-6"
              />
              <h3
                className="text-[48px] font-normal text-[#5F5F5F]"
                style={{ fontFamily: "Product Sans" }}
              >
                Flutter
              </h3>
              <ChevronDown className="w-4 h-6 text-[#5F5F5F] mx-auto mt-4" />
            </div>

            {/* Cloud */}
            <div className="bg-white rounded-[32px] p-8 shadow-lg border border-[#E1E1E1]">
              <div className="h-[11px] w-full bg-[#34A853] rounded-full mb-8"></div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/30b23f68d1064f82977b089411ccc16a6e831890?width=342"
                alt="Cloud"
                className="w-[171px] h-[171px] mx-auto mb-6"
              />
              <h3
                className="text-[48px] font-normal text-[#5F5F5F] text-center"
                style={{ fontFamily: "Product Sans" }}
              >
                Cloud
              </h3>
              <ChevronDown className="w-4 h-6 text-[#5F5F5F] mx-auto mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-[#5F5F5F] text-center mb-8 sm:mb-12 lg:mb-16 tracking-[-0.66px] leading-[150%]"
            style={{ fontFamily: "Product Sans" }}
          >
            FAQs
          </h2>

          <div className="max-w-4xl mx-auto space-y-4 lg:space-y-6">
            {/* FAQ Items */}
            {[
              {
                question: "What is GDG?",
                answer:
                  "Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.",
                color: "#DB4437",
              },
              {
                question: "How can you become a part of GDG ?",
                answer:
                  "We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It's a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.",
                color: "#0F9D56",
              },
              {
                question: "What does a GDG Lead do?",
                answer:
                  "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
                color: "#4285F4",
              },
              {
                question: "How is DSC related to Google?",
                answer:
                  "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.",
                color: "#F4B400",
              },
              {
                question: "How to reach us?",
                answer: 'Mail us at "dsc.rknec@gmail.com "',
                color: "#DB4437",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-[#E1E1E1] rounded-[54px] overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between bg-white rounded-[39px] mx-3 sm:mx-5 my-2 sm:my-3"
                >
                  <span
                    className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-bold text-[#5F5F5F] text-center flex-1 tracking-[-0.352px] leading-[150%] px-2"
                    style={{ fontFamily: "Product Sans" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="w-4 h-6 ml-2 sm:ml-4 transition-transform flex-shrink-0"
                    style={{
                      color: faq.color,
                      transform:
                        openFaq === index ? "rotate(0deg)" : "rotate(-90deg)",
                    }}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-3 sm:px-5 pb-3 sm:pb-5">
                    <div className="bg-white rounded-[32px] p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row">
                      <div
                        className="w-full h-[14px] sm:w-[28px] sm:h-full rounded-full mb-4 sm:mb-0 sm:mr-6 lg:mr-8 flex-shrink-0"
                        style={{ backgroundColor: faq.color }}
                      ></div>
                      <p
                        className="text-base sm:text-lg md:text-xl lg:text-[25px] font-normal text-[#5F5F5F] leading-[150%] tracking-[-0.275px]"
                        style={{
                          fontFamily: faq.answer.includes("Mail")
                            ? "Inter"
                            : "Product Sans",
                        }}
                      >
                        {faq.answer.includes("Mail") ? (
                          <span>
                            Mail us at{" "}
                            <span className="underline">
                              "dsc.rknec@gmail.com "
                            </span>
                          </span>
                        ) : (
                          faq.answer
                        )}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3a453da3849fc4d342d2e20022b1adfaf7c0a183?width=2950"
            alt="Footer decoration"
            className="w-full h-auto"
          />
        </div>
      </footer>
    </div>
  );
}
