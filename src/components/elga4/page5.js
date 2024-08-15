import React from "react";
import Header from "../header";
import Footer from "../footer";
import Img from "../../elements/img";
import Card from "./card";
import Maps from "../googleMaps/googleMaps";

function Page5() {
  return (
    <main className="w-full h-full relative">
      <section className="flex flex-col relative">
        <section className="bg-[#B7C7D7] rounded-b-[100px] w-full h-full">
            <Header />
          <div className="flex px-[50px] flex-col">
            <div className="flex flex-row justify-between px-[100px] pb-[100px]">
              <div className="flex flex-col justify-start items-start w-3/4">
                <text className="font-rubik font-semibold text-[#252525] text-[75px]">
                  Have a Question?
                </text>
                <text className="font-rubik font-medium text-[45px] text-[#252525] pb-5">
                  Don’t hesitate to reach us trough our Contacts and Customer
                  Services
                </text>

                <button className="uppercase font-rubik font-medium text-[#FFFFFF] text-[25px] bg-[#0E467B] py-3 px-5 rounded-full">
                  contact us
                </button>
              </div>

              <div className="flex justify-end items-end ">
                <Img
                  src="assets/img/img-6-page4.svg"
                  alt="main img page 4"
                  className=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center px-[50px] pt-[100px] space-y-6 z-10">
          <div className="flex justify-center items-center">
            <text className="font-rubik font-medium text-[#0E467B] text-[75px]">
              Frequently Asked Questions
            </text>
          </div>

          <div className="pb-16">
            <Card />
          </div>

          <section className="flex flex-col justify-center items-center w-full max-w-[1000px] h-[700px] space-y-6 drop-shadow-md bg-[#FFFFFF] rounded-2xl">
            <div className="font-rubik font-medium">
              <text className="text-[75px] text-[#0E467B]">Our Office</text>
            </div>
            <Maps />
          </section>

          <div className="flex flex-col justify-center font-rubik font-medium text-[30px] items-center pt-10 space-y-3">
            <a href=" #" className="text-[#0E467B]">
              Medco Building
            </a>
            <text className="">
              Medco Building III, 3rd Floor, Jl. Ampera Raya No. 18-20, 12560,
              Jakarta, Indonesia
            </text>
            <a href=" #" className="text-[#0E467B]">
              info[at]elga.net.id
            </a>
          </div>
        </section>
        <Footer />
      </section>
    </main>
  );
}

export default Page5;
