import React from "react";
import Header from "../header";
import Footer from "../footer";
import Img from "../../elements/img";
import DropCV from "../dropZone/dropcv";

function Page4() {
    
  return (
    
    <main className="w-full h-full relative ">
      <section className="flex flex-col relative">
        <section className="bg-[#B7C7D7] rounded-b-[100px] w-full h-full">
        <Header />
          <div className="flex px-[50px] flex-col">
            <div className="flex flex-row justify-between px-[100px] pb-[100px]">
              <div className="flex flex-col justify-start items-start w-1/2">
                <text className="font-rubik font-semibold text-[#0E467B] text-[75px]">
                  Join Us!
                </text>
                <text className="font-rubik font-medium text-[35px] ">
                  Lorem ipsum dolor sit amet consectetur. Consequat in congue ut
                  in. Et quam integer euismod felis. Vitae quis sit porttitor
                  interdum dignissim. Tellus nulla fringilla viverra molestie.
                </text>
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

        <section className="flex flex-col justify-center items-center px-[50px] pt-[100px]">
          <div className="flex justify-center items-center">
            <text className="font-rubik font-medium text-[#0E467B] text-[75px]">
              Open Position
            </text>
          </div>

          <section className="flex flex-row relative pt-14">
            <div className="px-[100px] ">
              <section className="flex flex-col -space-y-1">
                {/*  */}
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
                      Lorem Ipsum
                    </text>
                    <text className="text-[25px]">
                      Lorem ipsum dolor sit amet consectetur. Ornare tempor
                      egestas magna lacus suspendisse id. Cursus fames amet in
                      id eget at aliquet. Nisl et nulla sem volutpat. Leo risus
                      dui justo consectetur.
                    </text>
                  </div>
                </div>
                {/*  */}
                {/*  */}
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
                      Lorem Ipsum
                    </text>
                    <text className="text-[25px]">
                      Lorem ipsum dolor sit amet consectetur. Ornare tempor
                      egestas magna lacus suspendisse id. Cursus fames amet in
                      id eget at aliquet. Nisl et nulla sem volutpat. Leo risus
                      dui justo consectetur.
                    </text>
                  </div>
                </div>
                {/*  */}
                {/*  */}
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
                      Lorem Ipsum
                    </text>
                    <text className="text-[25px]">
                      Lorem ipsum dolor sit amet consectetur. Ornare tempor
                      egestas magna lacus suspendisse id. Cursus fames amet in
                      id eget at aliquet. Nisl et nulla sem volutpat. Leo risus
                      dui justo consectetur.
                    </text>
                  </div>
                </div>
                {/*  */}
              </section>
            </div>
          </section>
        </section>

        <section className="flex flex-col relative justify-center items-center py-16">
          <div className="font-rubik font-medium justify-center items-center">
            <text className="text-[#0E467B] text-[55px]">Upload Your CV Here!</text>
          </div>

          <div>
            <DropCV />
          </div>
        </section>

        <Footer />
      </section>
    </main>
  );
}

export default Page4;
