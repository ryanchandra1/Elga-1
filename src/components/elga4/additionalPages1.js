import React from "react";
import Header from "../header";
import Footer from "../footer";

function App() {
  return (
    <main className="w-full h-full relative">
      <section className="flex flex-col relative">
        <Header />
        <section className="flex flex-col px-[100px] space-y-10">
          <div className="flex justify-center items-center">
            <text className="font-rubik font-medium text-[#0E467B] text-[75px]">
              Lorem Ipsum
            </text>
          </div>

          <div className="flex justify-center items-center bg-gray-400 w-full h-[200px]"></div>
          <div className="items-center text-justify">
            <text className="items-center font-rubik font-medium text-[#252525] text-[30px] text-justify">
            Lorem ipsum dolor sit amet consectetur. In at velit non malesuada sit. Sollicitudin a odio cursus scelerisque tortor est platea. Ullamcorper vulputate fermentum non magna bibendum sed. Adipiscing aliquam eu platea quisque nulla neque. Quisque neque sit viverra massa odio viverra. Vel risus feugiat netus nunc laoreet id risus sed ipsum.
            </text>
          </div>
        </section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
