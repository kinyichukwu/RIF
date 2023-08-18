import React from "react";
import google from "../../assets/home/google.png";
import apple from "../../assets/home/apple.png";
import freeForever from "../../assets/freeForever/free-forever.png";

const FreeForever = () => {
  return (
    <section
      className="free-forever-section relative pt-16 pb-6 lg:py-24"
      data-v-d26269a2=""
    >
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAB5CAYAAACusqZTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHkSURBVHgB7ZhNSsNAGEBnxoULN24U3XkEj+C61JIj9AbiCaw38AbSG5T6t/UI3sDuhLpxLZgYC4qIDYUXQhjeW4SB4XuLkEnCC0EQ8XvxXBS7Ox/vRRWqt3Jr++lwNluEFsnVv7qBr6PBRRXi5PdADNVkb35/GVogZ39cng7GIcbr/wbLqjw/uHm4CoDc/SnGdLZuODXsbUru/lSf6eOG+aMAyd2f6suiYbxhb2MWIWN//QTG6drtkKYBkrt/9RVejob1i7b6e9an+/O7cWiBnP0//4EvxfAklmXxta5Smh3Obh9Di+gXERER6RX2QOi3B0K/PRD67YHQbw+Efnsg9NsDod8eCP32wJ74RURERDrGHgj99kDotwdCvz0Q+u2B0G8PhH57IPTbA6HfHtgTv4iIiEjH2AOh3x4I/fZA6LcHQr89EPrtgdBvD4R+eyD02wN74hcRERHpGHsg9NsDod8eCP32QOi3B0K/PRD67YHQbw+EfntgT/wiIiIiHWMPhH57IPTbA6HfHgj99kDotwdCvz0Q+u2B0G8P7IlfREREpGPsgdBvD4R+eyD02wOh3x4I/fZA6LcHQr89EPrtgT3xi4iIiHSMPRD67YHQbw+Efnsg9NsDod8eCP32QOi3B0L/J/0e9wN06zjaAAAAAElFTkSuQmCC"
        className="absolute top-0 left-6 h-16 lg:h-20"
        data-v-d26269a2=""
      />
      <div
        className="l-container lg:grid lg:grid-cols-2 lg:items-center"
        data-v-d26269a2=""
      >
        <div
          className="text-center mb-10 lg:mb-0 lg:pr-10 lg:text-left"
          data-v-d26269a2=""
        >
          <h2 className="heading level-2" data-v-d26269a2="">
            {" "}
            Free forever for your{" "}
            <span className="" data-v-d26269a2="">
              salary payments
            </span>
          </h2>
          <p className="lg:hidden text-summary mt-4" data-v-d26269a2="">
            {" "}
            Get started in 3 simple steps.{" "}
          </p>
          <div className="hidden lg:block mt-9" data-v-d26269a2="">
            <p
              className="mb-3 text-left text-xl font-medium"
              data-v-d26269a2=""
            >
              {" "}
              Subscribe to the Eazilife today{" "}
            </p>
            <div className="flex" data-v-d26269a2="">
              <div className="flex translate-x-[-2rem]">
                <img src={apple} alt="" className=" h-[99px]" />

                <img src={google} alt="" className="h-[99px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center media" data-v-d26269a2="">
          <img src={freeForever} className="inline-block" data-v-d26269a2="" />
        </div>
      </div>
    </section>
  );
};

export default FreeForever;
