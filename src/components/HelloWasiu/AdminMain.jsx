import React from "react";
import Graph from "../../assets/admin/INFLOW.png";
import Wasiw from "../../assets/admin/Ellipse 30.png";
import bell from "../../assets/admin/Frame 27386.png";
import frame from "../../assets/Frame 48096219.png";

const AdminMain = () => {
  return (
    <div className="md:mx-auto w-full px-2 sm:px-4 md:px-10 bg-[#fff]">
      <main class="" data-v-bcb85650="">
        {/** welcome */}
        <div
          className="md:flex flex-wrap my-4 md:my-10 hidden"
          data-v-bcb85650=""
        >
          <div className="text-left text-dark-800 px-4" data-v-bcb85650="">
            <h2
              className="text-base mb-2 font-bold md:text-2xl capitalize"
              data-v-bcb85650=""
            >
              {" "}
              Welcome Abasiama
            </h2>
            <p className="text-sm" data-v-bcb85650="">
              Pay and manage your employee in minutes
            </p>
          </div>
        </div>

        <div className="mb:hidden flex items-center pt-6">
          <img src={Wasiw} alt="" className="pr-3" />
          <span className="mr-auto text-[1.5rem] font-semibold">
            Hello Wasiu
          </span>
          <img src={bell} alt="d" className="w-[3.75rem] h-[3.75rem]" />
        </div>

        {/**wallet balance */}

        <div className="flex flex-wrap my-8 md:my-10" data-v-bcb85650="">
          <div
            className="w-full lg:w-9/12 mb-12 lg:mb-0 px-2 md:px-4 flex flex-col gap-4"
            data-v-bcb85650=""
          >
            <div
              className="addWave bg-primary md:p-6 py-10 px-6 rounded-2xl flex justify-between items-center flex-col md:flex-row"
              data-v-bcb85650=""
            >
              <div className="text-left w-full " data-v-bcb85650="">
                <span className="font-medium text-white" data-v-bcb85650="">
                  Wallet Balance
                </span>
                <div
                  className="flex items-center pt-2 justify-between pb-8"
                  data-v-bcb85650=""
                >
                  <span
                    className="font-bold text-2xl sm:text-3xl text-white "
                    data-v-bcb85650=""
                  >
                    ₦ 15,067,789.00
                  </span>

                  <svg
                    width="29"
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_1242)">
                      <path
                        d="M14.4907 8.51279C17.5503 8.50211 20.1409 9.6935 22.4649 11.5521C23.3147 12.2469 24.1128 13.0003 24.8531 13.8068C25.0294 13.9946 25.0642 14.1142 24.8662 14.3266C22.2364 17.1428 19.1279 19.1157 15.1566 19.4615C12.5454 19.6889 10.1898 18.9032 8.03005 17.493C6.56121 16.5301 5.30236 15.328 4.14362 14.0245C3.94124 13.7971 3.95865 13.6616 4.15776 13.4534C6.70918 10.7696 9.72628 8.93981 13.5137 8.51706C13.839 8.49772 14.1652 8.4963 14.4907 8.51279ZM17.7679 14.047C17.7679 12.04 16.1946 10.429 14.2264 10.4258C12.2581 10.4226 10.6555 12.04 10.6609 14.032C10.6663 16.024 12.2929 17.6617 14.2416 17.6339C16.1902 17.6062 17.7679 16.0176 17.7679 14.047ZM16.6799 18.0716C16.7114 18.0812 16.7473 18.1047 16.7756 18.0983C19.3738 17.4631 21.5107 16.055 23.4256 14.2605C23.5899 14.1057 23.541 14.0032 23.4049 13.8676C21.5629 12.0325 19.5087 10.5369 16.9149 9.88352C16.8297 9.85484 16.7428 9.83096 16.6548 9.81199C16.5656 9.80025 16.4623 9.74047 16.3709 9.84082C19.4554 11.5831 19.8351 15.8885 16.6799 18.0716ZM11.7304 10.0159C11.6765 10.0041 11.6213 9.99909 11.5661 10.001C9.26387 10.6842 7.31413 11.9343 5.58199 13.5473C5.37635 13.7395 5.43293 13.8527 5.60266 14.0107C6.07378 14.4526 6.51769 14.9245 7.00513 15.3472C8.34558 16.5023 9.82529 17.4375 11.6205 17.9862C8.80037 15.8127 8.97228 11.9738 11.7304 10.0159Z"
                        fill="#D9EBCD"
                      />
                      <path
                        d="M14.6474 16.4362C13.4832 16.6401 12.4714 16.1159 11.9981 15.0932C11.5106 14.0406 11.8077 12.7521 12.6999 12.0571C13.0975 11.7445 13.5882 11.5677 14.0975 11.5535C14.6069 11.5392 15.107 11.6883 15.5222 11.9781C16.5101 12.6859 16.817 13.8997 16.2903 15.17C16.014 14.774 15.7311 14.4003 15.2089 14.3993C14.9526 14.4014 14.7064 14.4978 14.519 14.6694C14.0251 15.0985 14.0599 15.707 14.6474 16.4362Z"
                        fill="#D9EBCD"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_1242">
                        <rect
                          width="21"
                          height="11"
                          fill="white"
                          transform="translate(4 8.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <span className="relative w-full" data-v-bcb85650="">
                <main
                  data-v-e76b3c1c=""
                  data-v-bcb85650=""
                  classname="bg-white w-full"
                >
                  <button
                    className="focus:outline-none w-full relative px-6 py-3 text-base font-medium text-white bg-mint hover:bg-mint rounded-full whitespace-nowrap rounded-full"
                    data-v-e76b3c1c=""
                  >
                    <span
                      className="text-sm text-primary sm:text-sm font-bold"
                      data-v-bcb85650=""
                      data-v-e76b3c1c-s=""
                    >
                      Fund Wallet
                    </span>
                  </button>
                </main>
              </span>
            </div>

            <div
              className="w-full text-left font-medium text-dark-800"
              data-v-fb6fb0a6=""
            >
              <h2 className="text-xl text-2xl uppercase" data-v-fb6fb0a6="">
                Quick Stats
              </h2>
            </div>

            <div className="flex items-center justify-between space-x-6">
              <div className=" bg-[#F2F1F1] p-[1rem] rounded-3xl w-full">
                <h3 className=" font-medium mb-[0.26rem]">Total Payroll</h3>
                <h2 className=" font-bold">₦ 2,293,044,345.05</h2>
              </div>
              <div className=" bg-[#F2F1F1] p-[1rem] rounded-3xl w-full">
                <h3 className=" font-medium mb-[0.26rem]">Total Employee</h3>
                <h2 className=" font-bold">10,000</h2>
              </div>
            </div>

            <div
              className="w-full text-left font-medium text-dark-800"
              data-v-fb6fb0a6=""
            >
              <h2 className="text-xl text-2xl uppercase" data-v-fb6fb0a6="">
                Quick Actions
              </h2>
            </div>

            <div
              className=" mt-1 text-grey border border-[#E7E8E7] py-[2rem] px-[0.5rem] rounded-3xl"
              data-v-bcb85650=""
            >
              <img src={frame} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </main>
      <footer class="block py-4"></footer>
    </div>
  );
};

export default AdminMain;
