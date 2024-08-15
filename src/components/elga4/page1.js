import React from "react";
import Header from "../header";
import Footer from "../footer";
import Img from "../../elements/img";
import Card from "./card";

function Page1() {
  return (
    <main className="w-full h-full relative">
        
          <section className="MAIN flex flex-col">
            <section className="flex -mx-[50px] bg-main bg-cover bg-center">
              <div className="bg-[#F9AC4E]/50 w-full h-[1004PX]">
                <div className="mx-[50px]">
                  <Header />
                  <div className="flex flex-row justify-center items-start ">
                    <text className="font-rubik text-[20px] font-medium text-[#252525] w-1/6 text-pretty leading-tight translate-y-[20px]">
                      Lorem ipsum dolor sit amet consectetur. Vestibulum
                      sagittis pharetra pharetra tortor velit vel tristique
                      accumsan.
                    </text>
                    <text className="font-rubik font-medium text-[200px] leading-[190px]">
                      Elga <br />
                      Networks.
                    </text>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-[#DAAF7B] h-[500px] -mx-[50px]">
              <div className="flex flex-col justify-center font-rubik text-white mx-[50px] space-y-[30px] mt-[30px] px-[50px]">
                <text className="text-[70px] font-medium">
                  Why Work With Us?
                </text>
                <text className="text-[25px] font-normal">
                  Lorem ipsum dolor sit amet consectetur. Nullam in eu lorem
                  nullam sed. Vestibulum quis pharetra eget auctor pharetra
                  varius id egestas ut. Vel tellus posuere aliquam
                </text>
                <div className="flex flex-row space-x-[40px]">
                  <div className="flex flex-col -space-y-[25px]">
                    <text className="text-[90px]">90+</text>
                    <text className="text-[25px]">Partner</text>
                  </div>
                  <div className="flex flex-col -space-y-[25px]">
                    <text className="text-[90px]">200+</text>
                    <text className="text-[25px]">Project</text>
                  </div>
                  <div className="flex flex-col -space-y-[25px]">
                    <text className="text-[90px]">200+</text>
                    <text className="text-[25px]">Partner</text>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex flex-col justify-center items-center mt-[110px]">
              <text className="font-rubik font-medium text-[90px] text-[#252525] pb-10">
                One Stop IT Solution
              </text>

              <div className="flex flex-row justify-between space-x-[80px]">
                <section className="w-full h-full relative rounded-xl bg-main1 bg-cover">
                  <div className="bg-[#0E467B]/20 rounded-xl">
                    <div className="w-[618px] h-[550px] flex justify-center items-start relative">
                      <div className="w-[471px] h-full flex flex-col z-10 justify-center items-start">
                        <div className="bg-[#DADBDC] rounded-full w-[75px] h-[75px] flex justify-center items-center mb-[40px]">
                          <Img
                            src="assets/img/vector-4.svg"
                            alt="vector 4"
                            className=""
                          />
                        </div>
                        <text className="font-roboto font-semibold text-[30px] text-[#FFF] mb-[20px]">
                          IT Manage Service
                        </text>
                        <text className="font-rubik font-normal text-[20px] text-left text-[#FFF]">
                          Technology, network infrastructure and application
                          systems are things that can't be separated again to
                          conduct business in today's modern era
                        </text>
                        <div className="absolute bottom-[20px] right-[20px]">
                          <Img
                            src="assets/img/vector-kananbawah.svg"
                            alt="vector kanan bawah"
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="w-full h-full relative rounded-xl bg-main2 bg-cover">
                  <div className="bg-[#0E467B]/20 rounded-xl">
                    <div className="w-[618px] h-[550px] flex justify-center items-start relative">
                      <div className="w-[471px] h-full flex flex-col z-10 justify-center items-start ">
                        <div className="bg-[#DADBDC] rounded-full w-[75px] h-[75px] flex justify-center items-center mb-[40px]">
                          <Img
                            src="assets/img/vector-4.svg"
                            alt="vector 4"
                            className=""
                          />
                        </div>
                        <text className="font-roboto font-semibold text-[30px] text-[#FFF] mb-[20px]">
                          IT Consulting
                        </text>
                        <text className="font-rubik font-normal text-[20px] text-left text-[#FFF]">
                          To enhance the company’s competitiveness in the modern
                          era and the current competition
                        </text>
                        <div className="absolute bottom-[20px] right-[20px]">
                          <Img
                            src="assets/img/vector-kananbawah.svg"
                            alt="vector kanan bawah"
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>

            <section className="flex flex-col bg-[#FBC38B] h-full mt-[250px] -mx-[50px] relative px-[50px] pt-10">
              <div className="flex flex-col font-rubik mx-[50px] space-y-[60px] justify-center items-center">
                <text className="text-[90px] font-medium">What We Do?</text>
                <Card />
              </div>

              <div className="flex flex-col mt-[200px] relative w-full h-full ">
                <div className="absolute inset-0 bg-main4 bg-cover bg-center"></div>
                <div className="mx-[50px] flex flex-col space-y-[20px] z-10">
                  <text className="font-rubik text-[90px] mb-[40px]">
                    Hear from Us
                  </text>
                  <div className="flex flex-col mb-[50px] pb-10">
                    <label
                      className="font-rubik text-[35px] font-medium "
                      for="name"
                    >
                      Your Name*
                    </label>
                    <input
                      type="text"
                      className="h-[84px] w-[900px] rounded-xl"
                      id="name"
                    />

                    <label
                      className="font-rubik text-[35px] font-medium "
                      for="email"
                    >
                      Email*
                    </label>
                    <input
                      type="text"
                      className="h-[84px] w-[900px] rounded-xl"
                      id="email"
                    />
                  </div>

                  <button className="flex justify-center items-center border-[#0E467B] rounded-xl border w-[195px] h-[62px] font-roboto text-[30px]">
                    Send
                  </button>
                </div>
              </div>

              <Footer />
            </section>

            {/* <section className="flex -mx-[50px] bg-main4 bg-cover bg-center z-0">
              <div className="bg-[#FBC38B]/90 w-full  h-[1000px]">
              asdasdasd
              </div>
            </section> */}
      </section>
    </main>
  );
}

export default Page1;
