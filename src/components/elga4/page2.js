import React from "react";
import Header from "../header";
import Footer from "../footer";
import Img from "../../elements/img";

function Page2() {
  return (
    <main className="w-full h-full relative">
      <section className="flex flex-col relative">
        <section className="bg-[#B7C7D7] rounded-b-[100px] w-full h-full">
        <Header />
          <div className="px-[50px] flex flex-col">
            <div className="flex justify-center items-center">
              <text className="font-rubik font-medium text-[70px]">
                Foster a Culture of Innovation
              </text>
            </div>
            <div className="flex flex-row justify-between py-[30px]">
              <div className="flex justify-start items-start w-1/4">
                <text className="font-rubik font-medium text-[35px]">
                  Lorem ipsum dolor sit amet consectetur. Nunc neque ac at eget
                  commodo augue convallis tempus tincidunt. Justo iaculis in
                  aliquam magna.
                </text>
              </div>
              <div className="flex justify-center items-center">
                <Img
                  src="assets/img/img-main3.svg"
                  alt="image main"
                  className="w-[458px] h-[464px]"
                />
              </div>

              <div className="flex justify-end items-end w-1/4">
                <text className="font-rubik font-medium text-[35px] text-right">
                  Lorem ipsum dolor sit amet consectetur. Nunc neque ac at eget
                  commodo augue convallis tempus tincidunt. Justo iaculis in
                  aliquam magna.
                </text>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col px-[50px] pt-[110px] space-y-[160px]">
          <div className="flex justify-center items-center border border-b-black border-t-transparent border-r-transparent border-l-transparent pb-[10px]">
            <text className="font-rubik font-medium text-[#0E467B] text-[75px]">
              Company Value
            </text>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col font-rubik font-medium -space-y-[10px]">
              <span className="text-[95px] font-semibold text-[#B7C7D7] opacity-70 drop-shadow-lg -mb-10">
                01
              </span>
              <span className="text-[75px] text-[#0E467B]">Vision</span>
              <text className="text-left w-3/4 text-[35px]">
                Lorem ipsum dolor sit amet consectetur. Nunc neque ac at eget
                commodo augue convallis tempus tincidunt. Justo iaculis in
                aliquam magna.
              </text>
            </div>

            <div className="block bg-[#D9D9D9] max-w-[461px] h-[392px] w-full rounded-md"></div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="block bg-[#D9D9D9] max-w-[461px] h-[392px] w-full rounded-md"></div>

            <div className="flex flex-col font-rubik font-medium -space-y-[10px] justify-end items-end">
              <span className="text-[95px] font-semibold text-[#B7C7D7] opacity-70 drop-shadow-lg -mb-10">
                02
              </span>
              <span className="text-[75px] text-[#0E467B]">Vision</span>
              <text className="text-right w-3/4 text-[35px]">
                Lorem ipsum dolor sit amet consectetur. Nunc neque ac at eget
                commodo augue convallis tempus tincidunt. Justo iaculis in
                aliquam magna.
              </text>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col font-rubik font-medium -space-y-[10px]">
              <span className="text-[95px] font-semibold text-[#B7C7D7] opacity-70 drop-shadow-lg -mb-10">
                03
              </span>
              <span className="text-[75px] text-[#0E467B]">Vision</span>
              <text className="text-left w-3/4 text-[35px]">
                Lorem ipsum dolor sit amet consectetur. Nunc neque ac at eget
                commodo augue convallis tempus tincidunt. Justo iaculis in
                aliquam magna.
              </text>
            </div>

            <div className="block bg-[#D9D9D9] max-w-[461px] h-[392px] w-full rounded-md"></div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="block bg-[#D9D9D9] max-w-[461px] h-[392px] w-full rounded-md"></div>

            <div className="flex flex-col font-rubik font-medium -space-y-[10px] justify-end items-end">
              <span className="text-[95px] font-semibold text-[#B7C7D7] opacity-70 drop-shadow-lg -mb-10">
                04
              </span>
              <span className="text-[75px] text-[#0E467B]">Vision</span>
              <text className="text-right w-3/4 text-[35px]">
                Lorem ipsum dolor sit amet consectetur. Nunc neque ac at eget
                commodo augue convallis tempus tincidunt. Justo iaculis in
                aliquam magna.
              </text>
            </div>
          </div>

          <div className="flex flex-row justify-between items-start">

            <div className="flex flex-col bg-[#0E467B] rounded-[40px] mt-[100px] INI">
              <button className="flex flex-row items-center p-5 justify-between ">
                <text className="font-rubik font-medium text-[35px] text-white">
                  Medco Group Company
                </text>
                <Img
                  src="assets/img/vector-kananatas.svg"
                  alt="vector kanan atas"
                  className="w-[27px] h-[27px]"
                />
              </button>

              <div className="">
                <Img
                  src="assets/img/img-4-page2.svg"
                  alt="img what we do? page 2"
                  className="w-[500px] h-[476px] z-10 rounded-b-xl"
                />
              </div>
            </div>

            <div className="flex flex-col bg-[#0E467B] rounded-[40px] ">
              <button className="flex flex-row items-center p-5 justify-between">
                <text className="font-rubik font-medium text-[35px] text-white">
                What We Do?
                </text>
                <Img
                  src="assets/img/vector-kananatas.svg"
                  alt="vector kanan atas"
                  className="w-[27px] h-[27px]"
                />
              </button>

              <div className="">
                <Img
                  src="assets/img/img-4-page2.svg"
                  alt="img what we do? page 2"
                  className="w-[500px] h-[476px] z-10 rounded-b-xl"
                />
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </section>
    </main>
  );
}

export default Page2;
