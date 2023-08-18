import React from "react";
import arr from "../../assets/Frame 48096049.png";
import ell from "../../assets/Ellipse 30.png";
import elle from "../../assets/Group 27110.png";

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

        <div className="mb:hidden flex items-center pt-6  border-b border-[#f0efef] ">
          <span className="mx-auto text-[1.5rem] font-bold mb-4">
            Eazipay’s Team
          </span>
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
                  Total Employee
                </span>
                <div
                  className="flex items-center pt-2 justify-between "
                  data-v-bcb85650=""
                >
                  <span
                    className="font-bold text-5xl text-white "
                    data-v-bcb85650=""
                  >
                    11264
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between space-x-6 mt-9 border p-2 rounded-3xl border-[#F2F1F1]">
              <div className=" bg-g p-[1rem] rounded-2xl w-full text-center font-medium text-lg text-white">
                All Employee
              </div>
              <div className=" bg-[#F2F1F1] p-[1rem] rounded-2xl w-full text-center font-medium text-lg text-g">
                Departments
              </div>
            </div>

            <div className=" flex items-center space-x-4">
              <div
                className=" mt-1 text-grey border border-[#E7E8E7] py-[0.7rem] px-[1rem] rounded-3xl flex items-center w-full"
                data-v-bcb85650=""
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full outline-none border-none    bg-white font-medium text-sm leading-2 focus:outline-none block appearance-none focus:border-none "
                  style={{
                    border: "none",
                    outline: "none",
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                >
                  <path
                    d="M15.7642 16.0743L20.3933 20.7279M10.6404 18.1238C6.67865 18.1238 3.46704 14.9122 3.46704 10.9505C3.46704 6.98877 6.67865 3.77716 10.6404 3.77716C14.6021 3.77716 17.8137 6.98877 17.8137 10.9505C17.8137 14.9122 14.6021 18.1238 10.6404 18.1238Z"
                    stroke="#8D8E8D"
                    stroke-width="2.04952"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <img src={arr} alt="" className="h-full" />
            </div>

            <div className="flex  items-center flex-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                className=" w-5 h-5 mr-3"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.98999 1.27498C0.98999 0.902183 1.36929 0.599976 1.83718 0.599976H14.5427C15.0106 0.599976 15.3899 0.902183 15.3899 1.27498C15.3899 1.64777 15.0106 1.94998 14.5427 1.94998H1.83718C1.36929 1.94998 0.98999 1.64777 0.98999 1.27498Z"
                  fill="#11453B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.98999 5.94722C0.98999 5.57442 1.36929 5.27222 1.83718 5.27222H14.5427C15.0106 5.27222 15.3899 5.57442 15.3899 5.94722C15.3899 6.32001 15.0106 6.62222 14.5427 6.62222H1.83718C1.36929 6.62222 0.98999 6.32001 0.98999 5.94722Z"
                  fill="#11453B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.98999 10.6194C0.98999 10.2466 1.36929 9.9444 1.83718 9.9444H14.5427C15.0106 9.9444 15.3899 10.2466 15.3899 10.6194C15.3899 10.9922 15.0106 11.2944 14.5427 11.2944H1.83718C1.36929 11.2944 0.98999 10.9922 0.98999 10.6194Z"
                  fill="#11453B"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="18"
                viewBox="0 0 2 18"
                fill="none"
                className=" w-5 h-5 mr-3"
              >
                <rect
                  x="0.189941"
                  y="18"
                  width="18"
                  height="1"
                  transform="rotate(-90 0.189941 18)"
                  fill="#E8E9EB"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className=" w-5 h-5 mr-3"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.04 10.25H10.44L10.44 13.85H14.04V10.25ZM10.44 8.89996H14.04C14.7856 8.89996 15.39 9.50438 15.39 10.25V13.85C15.39 14.5955 14.7856 15.2 14.04 15.2H10.44C9.69438 15.2 9.08997 14.5955 9.08997 13.85V10.25C9.08997 9.50438 9.69438 8.89996 10.44 8.89996Z"
                  fill="#B5B6B5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.93999 2.14999H2.33999L2.33999 5.74999H5.93999V2.14999ZM14.04 2.14999H10.44V5.74999H14.04V2.14999ZM5.93999 10.25H2.33999L2.33999 13.85H5.93999V10.25ZM5.93999 0.799988H2.33999C1.59441 0.799988 0.98999 1.4044 0.98999 2.14999V5.74999C0.98999 6.49557 1.59441 7.09999 2.33999 7.09999H5.93999C6.68558 7.09999 7.28999 6.49557 7.28999 5.74999V2.14999C7.28999 1.4044 6.68557 0.799988 5.93999 0.799988ZM14.04 0.799988H10.44C9.69441 0.799988 9.08999 1.4044 9.08999 2.14999V5.74999C9.08999 6.49557 9.69441 7.09999 10.44 7.09999H14.04C14.7856 7.09999 15.39 6.49557 15.39 5.74999V2.14999C15.39 1.4044 14.7856 0.799988 14.04 0.799988ZM2.33999 8.89999H5.93999C6.68557 8.89999 7.28999 9.5044 7.28999 10.25V13.85C7.28999 14.5956 6.68558 15.2 5.93999 15.2H2.33999C1.59441 15.2 0.98999 14.5956 0.98999 13.85V10.25C0.98999 9.5044 1.59441 8.89999 2.33999 8.89999Z"
                  fill="#B5B6B5"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="18"
                viewBox="0 0 2 18"
                fill="none"
                className=" w-5 h-5 mr-3"
              >
                <rect
                  x="0.189941"
                  y="18"
                  width="18"
                  height="1"
                  transform="rotate(-90 0.189941 18)"
                  fill="#E8E9EB"
                />
              </svg>

              <span className=" text-[0.875rem] text-t opacity-60 pr-3 mr-auto">
                Archived
              </span>

              <input
                type="checkbox"
                className="text-[0.875rem] text-t opacity-60 rounded-lg w-5 h-5 mr-3"
              />

              <span className=" text-[0.875rem] text-t opacity-60">
                Select All
              </span>
            </div>

            {/**profile */}
            <div className="flex flex-col mb-3">
              <div className="flex ">
                <img src="" alt="" />
              </div>
              <div className=""></div>
            </div>

            <div className="frame px-4">
              <div className="div">
                <img className="ellipse" alt="Ellipse" src={ell} />
                <div className="div-2">
                  <div className="div-3">
                    <div className="adebayo-salami">Caleb Nwafor</div>
                    <div className="data-analyst">Accountant</div>
                  </div>
                  <div className="male-weekly">Female | Monthly</div>
                </div>
              </div>
              <div className="div-4 ">
                <div className="div-5">
                  <img className="img" alt="Frame" src="frame.svg" />
                </div>
                <div className="text-wrapper font-bold">N250,600.78</div>
              </div>
            </div>

            <hr className="text-[#E7E8E7] mb-4" />
            <div className="frame px-4">
              <div className="div">
                <img className="ellipse" alt="Ellipse" src={ell} />
                <div className="div-2">
                  <div className="div-3">
                    <div className="adebayo-salami">Wasiu Tiamiyu</div>
                    <div className="data-analyst">Accountant</div>
                  </div>
                  <div className="male-weekly">Female | Monthly</div>
                </div>
              </div>
              <div className="div-4 ">
                <div className="div-5">
                  <img className="img" alt="Frame" src="frame.svg" />
                </div>
                <div className="text-wrapper font-bold">N550,600.78</div>
              </div>
            </div>

            <hr className="text-[#E7E8E7] " />
            <div className="frame p-4 rounded-xl bg-[#11453b3a] ">
              <div className="div">
                <img className="ellipse" alt="Ellipse" src={elle} />
                <div className="div-2">
                  <div className="div-3">
                    <div className="adebayo-salami">Toyin Faleke</div>
                    <div className="data-analyst">Accountant</div>
                  </div>
                  <div className="male-weekly">Female | Monthly</div>
                </div>
              </div>
              <div className="div-4 ">
                <div className="div-5">
                  <img className="img" alt="Frame" src="frame.svg" />
                </div>
                <div className="text-wrapper font-bold">N700,600.78</div>
              </div>
            </div>

            <hr className="text-[#E7E8E7] " />
            <div className="frame p-4 rounded-xl bg-[#11453b3a]">
              <div className="div">
                <img className="ellipse" alt="Ellipse" src={elle} />
                <div className="div-2">
                  <div className="div-3">
                    <div className="adebayo-salami">Ada Okorie</div>
                    <div className="data-analyst">Accountant</div>
                  </div>
                  <div className="male-weekly">Female | Monthly</div>
                </div>
              </div>
              <div className="div-4 ">
                <div className="div-5">
                  <img className="img" alt="Frame" src="frame.svg" />
                </div>
                <div className="text-wrapper font-bold">N150,600.78</div>
              </div>
            </div>
            <hr className="text-[#E7E8E7] mb-4" />
            <div className="frame px-4">
              <div className="div">
                <img className="ellipse" alt="Ellipse" src={ell} />
                <div className="div-2">
                  <div className="div-3">
                    <div className="adebayo-salami">Bolade Ifedayo</div>
                    <div className="data-analyst">Data Analyst</div>
                  </div>
                  <div className="male-weekly">Female | Monthly</div>
                </div>
              </div>
              <div className="div-4 ">
                <div className="div-5">
                  <img className="img" alt="Frame" src="frame.svg" />
                </div>
                <div className="text-wrapper font-bold">N250,600.78</div>
              </div>
            </div>

            <hr className="text-[#E7E8E7] mb-4" />
          </div>
        </div>
      </main>
      <footer class="block py-4"></footer>
    </div>
  );
};

export default AdminMain;
