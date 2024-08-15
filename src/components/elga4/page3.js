import React from "react";
import Header from "../header";
import Footer from "../footer";
import Img from "../../elements/img";

function Page3() {
  return (
    <main className="w-full h-full relative">
      <section className="flex flex-col relative">
        <section className="bg-[#B7C7D7] rounded-b-[100px] w-full h-full">
        <Header />
          <div className="flex px-[50px] flex-col">
            <div className="flex flex-row justify-between px-[100px] pb-[100px]">
              <div className="flex flex-col justify-start items-start w-1/2">
                <text className="font-rubik font-medium text-[#0E467B] text-[75px]">
                  Our Services
                </text>
                <text className="font-rubik font-medium text-[35px] ">
                  To enhance the company's competitiveness in the modern era and
                  the current competition, an organization/company needs to
                  understand how IT can be strategically developed.
                </text>
              </div>

              <div className="flex justify-end items-end ">
                <Img
                  src="assets/img/img-5-page3.svg"
                  alt="main img page 3"
                  className=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-row relative px-[50px] pt-[200px]">
          <div className="px-[100px] ">
            <section className="flex flex-col -space-y-1">
              <div className="flex flex-row items-center space-x-[50px] relative">
                <section className="KIRI flex flex-col justify-center items-center">
                  <div className="w-[5px] h-20 bg-[#0E467B] rounded-md"></div>
                  <div className="border-4 p-1 border-[#0E467B] rounded-full">
                    <Img
                      src="assets/img/icon-page3-zimbra.svg"
                      alt="icon zimbra"
                      className=""
                    />
                  </div>
                  <div className="w-[5px] h-20 bg-[#0E467B] rounded-md"></div>
                </section>
                <div className="KANAN flex flex-col font-rubik max-w-[1000px] translate-y-10">
                  <text className="text-[#0E467B] text-[55px] font-medium line-clamp-1">
                    Zimbra Full Administrative Management
                  </text>
                  <text className="text-[25px]">
                    Lorem ipsum dolor sit amet consectetur. Ornare tempor
                    egestas magna lacus suspendisse id. Cursus fames amet in id
                    eget at aliquet. Nisl et nulla sem volutpat. Leo risus dui
                    justo consectetur.
                  </text>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-[50px] relative">
                <section className="KIRI flex flex-col justify-center items-center">
                  <div className="w-[5px] h-20 bg-[#0E467B] rounded-md"></div>
                  <div className="border-4 p-1 border-[#0E467B] rounded-full">
                    <Img
                      src="assets/img/icon-page3-zap.svg"
                      alt="icon zap"
                      className=""
                    />
                  </div>
                  <div className="w-[5px] h-20 bg-[#0E467B] rounded-md"></div>
                </section>
                <div className="KANAN flex flex-col font-rubik max-w-[1000px] translate-y-10">
                  <text className="text-[#0E467B] text-[55px] font-medium line-clamp-1">
                    Data Center
                  </text>
                  <text className="text-[25px]">
                    Lorem ipsum dolor sit amet consectetur. Ornare tempor
                    egestas magna lacus suspendisse id. Cursus fames amet in id
                    eget at aliquet. Nisl et nulla sem volutpat. Leo risus dui
                    justo consectetur.
                  </text>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-[50px] relative">
                <section className="KIRI flex flex-col justify-center items-center">
                  <div className="w-[5px] h-20 bg-[#0E467B] rounded-md"></div>
                  <div className="border-4 p-1 border-[#0E467B] rounded-full">
                    <Img
                      src="assets/img/icon-page3-barchart.svg"
                      alt="icon bar chart"
                      className=""
                    />
                  </div>
                  <div className="w-[5px] h-20 bg-[#0E467B] rounded-md"></div>
                </section>
                <div className="KANAN flex flex-col font-rubik max-w-[1000px] translate-y-10">
                  <text className="text-[#0E467B] text-[55px] font-medium line-clamp-1">
                    Dedicated Internet
                  </text>
                  <text className="text-[25px]">
                    Lorem ipsum dolor sit amet consectetur. Ornare tempor
                    egestas magna lacus suspendisse id. Cursus fames amet in id
                    eget at aliquet. Nisl et nulla sem volutpat. Leo risus dui
                    justo consectetur.
                  </text>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-[50px] relative">
                <section className="KIRI flex flex-col justify-center items-center">
                  <div className="w-[5px] h-20 bg-[#0E467B] rounded-md"></div>
                  <div className="border-4 p-1 border-[#0E467B] rounded-full">
                    <Img
                      src="assets/img/icon-page3-succes.svg"
                      alt="icon bar chart"
                      className=""
                    />
                  </div>
                  <div className="w-[5px] h-20 bg-[#0E467B] rounded-md"></div>
                </section>
                <div className="KANAN flex flex-col font-rubik max-w-[1000px] translate-y-10">
                  <text className="text-[#0E467B] text-[55px] font-medium line-clamp-1">
                    Internet of Building
                  </text>
                  <text className="text-[25px]">
                    Lorem ipsum dolor sit amet consectetur. Ornare tempor
                    egestas magna lacus suspendisse id. Cursus fames amet in id
                    eget at aliquet. Nisl et nulla sem volutpat. Leo risus dui
                    justo consectetur.
                  </text>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="flex flex-col justify-center px-[50px]  pt-[150px]">
          <div className="flex flex-col border-2 border-y-[#B7C7D7] border-x-transparent py-[50px]">
            <div className="px-[50px] flex flex-col space-y-[50px]">
                <div className="flex justify-center items-center">
                    <text className="text-[#0E467B] text-[75px] font-rubik font-medium">
                    One Stop IT Services
                    </text>

                </div>
              <div className="flex flex-row justify-between items-start">
                <div className="flex flex-col bg-[#0E467B] rounded-[40px]">
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
            </div>
          </div>
        </section>

        <Footer />
      </section>
    </main>
  );
}

export default Page3;
