import React from "react";
import person from "../../assets/admin/person.png";

const RecentActivites = () => {
  return (
    <div className="md:mx-auto w-full px-2 sm:px-4 md:px-10">
      <div className="flex flex-wrap mt-6" data-v-bcb85650="">
        <div className="w-full mb-12 xl:mb-0 px-2 md:px-4" data-v-bcb85650="">
          <div className="" data-v-fb6fb0a6="" data-v-bcb85650="">
            <div
              className="w-full text-left font-bold text-dark-800"
              data-v-fb6fb0a6=""
            >
              <h2 className="text-xl text-2xl" data-v-fb6fb0a6="">
                Recent Activities
              </h2>
            </div>
            <div
              className="flex items-center justify-center mt-4 mb-2 gap-4"
              data-v-fb6fb0a6=""
            >
              <div className="w-full" data-v-fb6fb0a6="">
                <div className="flex items-center relative" data-v-fb6fb0a6="">
                  <input
                    autoComplete=""
                    className="focus:border-primary border-dark-200 bg-white w-full text-info-700 font-medium text-sm leading-2 focus:outline-none border border-r-0 p-4 block appearance-none rounded-tl-2xl rounded-bl-2xl"
                    placeholder="Search by employee, activity or amount"
                  />
                  <button
                    className="rounded-tr-2xl rounded-br-2xl px-6 sm:px-8 py-[.9rem] bg-mint focus:bg-mint focus:outline-none"
                    style={{ border: "3px solid transparent" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.9473 18.6997 5.81278 16.9855 4.27664C15.2714 2.7405 13.0338 1.91951 10.7329 1.98247C8.43203 2.04543 6.24272 2.98756 4.61514 4.61514C2.98756 6.24272 2.04543 8.43203 1.98247 10.7329C1.91951 13.0338 2.7405 15.2714 4.27664 16.9855C5.81278 18.6997 7.9473 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7737 20.4936 21.8481 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5064 21.8481 21.617 21.7737 21.71 21.68C21.8902 21.4935 21.991 21.2443 21.991 20.985C21.991 20.7257 21.8902 20.4765 21.71 20.29ZM11 18C9.61553 18 8.26215 17.5895 7.111 16.8203C5.95986 16.0511 5.06265 14.9579 4.53284 13.6788C4.00303 12.3997 3.8644 10.9922 4.1345 9.63436C4.4046 8.2765 5.07128 7.02922 6.05025 6.05025C7.02922 5.07128 8.2765 4.4046 9.63436 4.1345C10.9922 3.8644 12.3997 4.00303 13.6788 4.53284C14.9579 5.06265 16.0511 5.95986 16.8203 7.111C17.5895 8.26215 18 9.61553 18 11C18 12.8565 17.2625 14.637 15.9497 15.9497C14.637 17.2625 12.8565 18 11 18Z"
                        fill="#11453B"
                      />
                    </svg>
                  </button>
                  {/**/}
                </div>
              </div>
              <div className="" data-v-fb6fb0a6="">
                <main data-v-fb6fb0a6="">
                  <div className="relative">
                    <div className="inline border border-outlineGray rounded-2xl md:py-3 py-6 md:px-4 px-6 cursor-pointer flex items-center gap-2 bg-white w-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M13.3333 5.45333V1.99999C13.3333 1.82318 13.2631 1.65361 13.1381 1.52859C13.013 1.40357 12.8435 1.33333 12.6667 1.33333C12.4898 1.33333 12.3203 1.40357 12.1952 1.52859C12.0702 1.65361 12 1.82318 12 1.99999V5.45333C11.6139 5.59346 11.2803 5.84908 11.0445 6.18544C10.8088 6.5218 10.6823 6.92258 10.6823 7.33333C10.6823 7.74407 10.8088 8.14486 11.0445 8.48122C11.2803 8.81758 11.6139 9.07319 12 9.21333V14C12 14.1768 12.0702 14.3464 12.1952 14.4714C12.3203 14.5964 12.4898 14.6667 12.6667 14.6667C12.8435 14.6667 13.013 14.5964 13.1381 14.4714C13.2631 14.3464 13.3333 14.1768 13.3333 14V9.21333C13.7194 9.07319 14.053 8.81758 14.2888 8.48122C14.5245 8.14486 14.651 7.74407 14.651 7.33333C14.651 6.92258 14.5245 6.5218 14.2888 6.18544C14.053 5.84908 13.7194 5.59346 13.3333 5.45333ZM12.6667 8C12.5348 8 12.4059 7.9609 12.2963 7.88764C12.1866 7.81439 12.1012 7.71027 12.0507 7.58845C12.0003 7.46663 11.9871 7.33259 12.0128 7.20327C12.0385 7.07395 12.102 6.95516 12.1952 6.86192C12.2885 6.76869 12.4073 6.70519 12.5366 6.67947C12.6659 6.65375 12.8 6.66695 12.9218 6.71741C13.0436 6.76787 13.1477 6.85332 13.221 6.96295C13.2942 7.07258 13.3333 7.20147 13.3333 7.33333C13.3333 7.51014 13.2631 7.67971 13.1381 7.80473C13.013 7.92976 12.8435 8 12.6667 8ZM8.66665 9.45333V1.99999C8.66665 1.82318 8.59641 1.65361 8.47139 1.52859C8.34636 1.40357 8.17679 1.33333 7.99998 1.33333C7.82317 1.33333 7.6536 1.40357 7.52858 1.52859C7.40355 1.65361 7.33332 1.82318 7.33332 1.99999V9.45333C6.94722 9.59346 6.61362 9.84908 6.37788 10.1854C6.14213 10.5218 6.01567 10.9226 6.01567 11.3333C6.01567 11.7441 6.14213 12.1449 6.37788 12.4812C6.61362 12.8176 6.94722 13.0732 7.33332 13.2133V14C7.33332 14.1768 7.40355 14.3464 7.52858 14.4714C7.6536 14.5964 7.82317 14.6667 7.99998 14.6667C8.17679 14.6667 8.34636 14.5964 8.47139 14.4714C8.59641 14.3464 8.66665 14.1768 8.66665 14V13.2133C9.05275 13.0732 9.38634 12.8176 9.62209 12.4812C9.85783 12.1449 9.9843 11.7441 9.9843 11.3333C9.9843 10.9226 9.85783 10.5218 9.62209 10.1854C9.38634 9.84908 9.05275 9.59346 8.66665 9.45333ZM7.99998 12C7.86813 12 7.73924 11.9609 7.6296 11.8876C7.51997 11.8144 7.43452 11.7103 7.38406 11.5885C7.33361 11.4666 7.3204 11.3326 7.34613 11.2033C7.37185 11.0739 7.43534 10.9552 7.52858 10.8619C7.62181 10.7687 7.7406 10.7052 7.86992 10.6795C7.99924 10.6537 8.13329 10.667 8.25511 10.7174C8.37692 10.7679 8.48104 10.8533 8.5543 10.9629C8.62755 11.0726 8.66665 11.2015 8.66665 11.3333C8.66665 11.5101 8.59641 11.6797 8.47139 11.8047C8.34636 11.9298 8.17679 12 7.99998 12ZM3.99998 4.11999V1.99999C3.99998 1.82318 3.92975 1.65361 3.80472 1.52859C3.6797 1.40357 3.51013 1.33333 3.33332 1.33333C3.15651 1.33333 2.98694 1.40357 2.86191 1.52859C2.73689 1.65361 2.66665 1.82318 2.66665 1.99999V4.11999C2.28055 4.26013 1.94696 4.51575 1.71121 4.85211C1.47547 5.18846 1.349 5.58925 1.349 6C1.349 6.41074 1.47547 6.81153 1.71121 7.14789C1.94696 7.48424 2.28055 7.73986 2.66665 7.87999V14C2.66665 14.1768 2.73689 14.3464 2.86191 14.4714C2.98694 14.5964 3.15651 14.6667 3.33332 14.6667C3.51013 14.6667 3.6797 14.5964 3.80472 14.4714C3.92975 14.3464 3.99998 14.1768 3.99998 14V7.87999C4.38609 7.73986 4.71968 7.48424 4.95542 7.14789C5.19117 6.81153 5.31763 6.41074 5.31763 6C5.31763 5.58925 5.19117 5.18846 4.95542 4.85211C4.71968 4.51575 4.38609 4.26013 3.99998 4.11999ZM3.33332 6.66666C3.20146 6.66666 3.07257 6.62756 2.96294 6.55431C2.8533 6.48105 2.76786 6.37694 2.7174 6.25512C2.66694 6.1333 2.65374 5.99926 2.67946 5.86994C2.70518 5.74061 2.76868 5.62183 2.86191 5.52859C2.95515 5.43536 3.07394 5.37186 3.20326 5.34614C3.33258 5.32041 3.46662 5.33362 3.58844 5.38408C3.71026 5.43453 3.81438 5.51998 3.88763 5.62961C3.96088 5.73925 3.99998 5.86814 3.99998 6C3.99998 6.17681 3.92975 6.34637 3.80472 6.4714C3.6797 6.59642 3.51013 6.66666 3.33332 6.66666Z"
                          fill="#8D8E8D"
                        />
                      </svg>
                      <span className="text-dark-600 text-sm hidden md:flex items-center gap-3">
                        Filter{" "}
                        <i
                          className="fas fa-angle-right"
                          style={{ display: "none" }}
                        />
                      </span>
                    </div>
                    {/**/}
                  </div>
                  <div className="pointer-events-none bg-transparent fixed inset-0" />
                </main>
              </div>
            </div>
            <div
              className="flex items-center gap-2 flex-wrap"
              data-v-fb6fb0a6=""
            />
            <div
              className="overflow-auto darkBg w-full my-8 py-4"
              data-v-fb6fb0a6=""
              style={{ maxHeight: 700 }}
            >
              <div data-v-fb6fb0a6="">
                <div
                  className="w-full text-left p-4 lg:px-6 flex flex-col gap-4"
                  data-v-fb6fb0a6=""
                >
                  <h4 className="font-medium" data-v-fb6fb0a6="">
                    Wednesday, August 16, 2023
                  </h4>

                  <div
                    className="w-full rounded-2xl border border-blueHoverColor shadow-md p-4 md:px-8 flex flex-col lg:grid grid-cols-5 gap-4 bg-white"
                    data-v-fb6fb0a6=""
                  >
                    <div data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        PAYROLL
                      </span>
                      <div
                        className="flex items-center gap-2 mt-2"
                        data-v-fb6fb0a6=""
                      >
                        <div
                          className="inline-block items-center gap-2"
                          data-v-fb6fb0a6=""
                        >
                          <div
                            className="p-2 h-9 w-9 uppercase flex items-center justify-center text-sm bg-[#01AA8C] text-white font-medium rounded-full "
                            data-v-fb6fb0a6=""
                          >
                            BM
                          </div>
                        </div>
                        <span className="font-medium" data-v-fb6fb0a6="">
                          Badmus Kemis
                        </span>
                      </div>
                    </div>
                    <div
                      className="col-span-2 flex flex-col"
                      data-v-fb6fb0a6=""
                    >
                      <span
                        className="hidden lg:block uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        Activity
                      </span>
                      <span
                        className="mt-2 font-medium break-words"
                        data-v-fb6fb0a6=""
                      >
                        Paid November 2022 salary
                      </span>
                    </div>
                    {/**/}
                    {/**/}
                    <div className="md:flex flex-col hidden" data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        EMPLOYEE
                      </span>
                      <span
                        className="mt-2 font-medium text-t"
                        data-v-fb6fb0a6=""
                      >
                        52
                      </span>
                    </div>
                    <div className="md:flex flex-col hidden" data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        TIME
                      </span>
                      <span className="mt-2 font-medium" data-v-fb6fb0a6="">
                        16:53
                      </span>
                    </div>
                    <div
                      className="md:hidden flex gap-4 items-center"
                      data-v-fb6fb0a6=""
                    >
                      {/**/}
                      {/**/}
                      <div className="flex flex-col" data-v-fb6fb0a6="">
                        <span
                          className="uppercase text-xs text-grey"
                          data-v-fb6fb0a6=""
                        >
                          Amount
                        </span>
                        <span
                          className="mt-2 font-medium text-secondary"
                          data-v-fb6fb0a6=""
                        >
                          ₦1,000.00
                        </span>
                      </div>
                      <div className="flex flex-col" data-v-fb6fb0a6="">
                        <span
                          className="uppercase text-xs text-grey"
                          data-v-fb6fb0a6=""
                        >
                          Time
                        </span>
                        <span className="mt-2 font-medium" data-v-fb6fb0a6="">
                          8:53 PM
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-full rounded-2xl border border-blueHoverColor shadow-md p-4 md:px-8 flex flex-col lg:grid grid-cols-5 gap-4 bg-white"
                    data-v-fb6fb0a6=""
                  >
                    <div data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        Employee Management
                      </span>
                      <div
                        className="flex items-center gap-2 mt-2"
                        data-v-fb6fb0a6=""
                      >
                        <div
                          className="inline-block items-center gap-2"
                          data-v-fb6fb0a6=""
                        >
                          <div
                            className="h-9 w-9 uppercase flex items-center justify-center text-sm bg-[#8B8B8B] text-white font-medium rounded-full"
                            data-v-fb6fb0a6=""
                          >
                            <img src={person} alt="" />
                          </div>
                        </div>
                        <span className="font-medium" data-v-fb6fb0a6="">
                          Kalu Abasiama
                        </span>
                      </div>
                    </div>
                    <div
                      className="col-span-2 flex flex-col"
                      data-v-fb6fb0a6=""
                    >
                      <span
                        className="hidden lg:block uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        Activity
                      </span>
                      <span
                        className="mt-2 font-medium break-words"
                        data-v-fb6fb0a6=""
                      >
                        Added New Employee
                      </span>
                    </div>
                    {/**/}
                    {/**/}
                    {/**/}
                    <div className="md:flex flex-col hidden" data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        EMPLOYEE
                      </span>
                      <span className="mt-2 font-medium" data-v-fb6fb0a6="">
                        04
                      </span>
                    </div>
                    <div
                      className="md:hidden flex gap-4 items-center"
                      data-v-fb6fb0a6=""
                    >
                      {/**/}
                      {/**/}
                      {/**/}
                      <div className="flex flex-col" data-v-fb6fb0a6="">
                        <span
                          className="uppercase text-xs text-grey"
                          data-v-fb6fb0a6=""
                        >
                          Time
                        </span>
                        <span className="mt-2 font-medium" data-v-fb6fb0a6="">
                          9:02 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full text-left p-4 lg:px-6 flex flex-col gap-4"
                  data-v-fb6fb0a6=""
                >
                  <h4 className="font-medium" data-v-fb6fb0a6="">
                    Friday, November 04, 2022
                  </h4>

                  <div
                    className="w-full rounded-2xl border border-blueHoverColor shadow-md p-4 md:px-8 flex flex-col lg:grid grid-cols-5 gap-4 bg-white"
                    data-v-fb6fb0a6=""
                  >
                    <div data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        BONUS
                      </span>
                      <div
                        className="flex items-center gap-2 mt-2"
                        data-v-fb6fb0a6=""
                      >
                        <div
                          className="inline-block items-center gap-2"
                          data-v-fb6fb0a6=""
                        >
                          <div
                            className="p-2 h-9 w-9 uppercase flex items-center justify-center text-sm bg-[#01AA8C] text-white font-medium rounded-full "
                            data-v-fb6fb0a6=""
                          >
                            BM
                          </div>
                        </div>
                        <span className="font-medium" data-v-fb6fb0a6="">
                          Badmus Kemis
                        </span>
                      </div>
                    </div>
                    <div
                      className="col-span-2 flex flex-col"
                      data-v-fb6fb0a6=""
                    >
                      <span
                        className="hidden lg:block uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        Activity
                      </span>
                      <span
                        className="mt-2 font-medium break-words"
                        data-v-fb6fb0a6=""
                      >
                        Added new bonus
                      </span>
                    </div>
                    {/**/}
                    {/**/}
                    <div className="md:flex flex-col hidden" data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        BONUS NAME
                      </span>
                      <span
                        className="mt-2 font-medium text-t"
                        data-v-fb6fb0a6=""
                      >
                        XMAS Bonus
                      </span>
                    </div>
                  </div>

                  <div
                    className="w-full rounded-2xl border border-blueHoverColor shadow-md p-4 md:px-8 flex flex-col lg:grid grid-cols-5 gap-4 bg-white"
                    data-v-fb6fb0a6=""
                  >
                    <div data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        WALLET
                      </span>
                      <div
                        className="flex items-center gap-2 mt-2"
                        data-v-fb6fb0a6=""
                      >
                        <div
                          className="inline-block items-center gap-2"
                          data-v-fb6fb0a6=""
                        >
                          <div
                            className="p-2 h-9 w-9 uppercase flex items-center justify-center text-sm bg-[#01AA8C] text-white font-medium rounded-full "
                            data-v-fb6fb0a6=""
                          >
                            BM
                          </div>
                        </div>
                        <span className="font-medium" data-v-fb6fb0a6="">
                          Kalu Abasiama
                        </span>
                      </div>
                    </div>
                    <div
                      className="col-span-2 flex flex-col"
                      data-v-fb6fb0a6=""
                    >
                      <span
                        className="hidden lg:block uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        Activity
                      </span>
                      <span
                        className="mt-2 font-medium break-words"
                        data-v-fb6fb0a6=""
                      >
                        Paid November 2022, salary
                      </span>
                    </div>
                    {/**/}
                    {/**/}
                    {/**/}
                    <div className="md:flex flex-col hidden" data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        AMOUNT
                      </span>
                      <span
                        className="mt-2 font-medium text-r"
                        data-v-fb6fb0a6=""
                      >
                        N11,1678,900.00
                      </span>
                    </div>
                    <div className="md:flex flex-col hidden" data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        TIME
                      </span>
                      <span className="mt-2 font-medium" data-v-fb6fb0a6="">
                        15:31
                      </span>
                    </div>
                    <div
                      className="md:hidden flex gap-4 items-center"
                      data-v-fb6fb0a6=""
                    >
                      {/**/}
                      {/**/}
                      {/**/}
                      <div className="flex flex-col" data-v-fb6fb0a6="">
                        <span
                          className="uppercase text-xs text-grey"
                          data-v-fb6fb0a6=""
                        >
                          Time
                        </span>
                        <span className="mt-2 font-medium" data-v-fb6fb0a6="">
                          9:02 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full text-left p-4 lg:px-6 flex flex-col gap-4"
                  data-v-fb6fb0a6=""
                >
                  <h4 className="font-medium" data-v-fb6fb0a6="">
                    Friday, November 04, 2022
                  </h4>

                  <div
                    className="w-full rounded-2xl border border-blueHoverColor shadow-md p-4 md:px-8 flex flex-col lg:grid grid-cols-5 gap-4 bg-white"
                    data-v-fb6fb0a6=""
                  >
                    <div data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        BONUS
                      </span>
                      <div
                        className="flex items-center gap-2 mt-2"
                        data-v-fb6fb0a6=""
                      >
                        <div
                          className="inline-block items-center gap-2"
                          data-v-fb6fb0a6=""
                        >
                          <div
                            className="p-2 h-9 w-9 uppercase flex items-center justify-center text-sm bg-[#01AA8C] text-white font-medium rounded-full "
                            data-v-fb6fb0a6=""
                          >
                            BM
                          </div>
                        </div>
                        <span className="font-medium" data-v-fb6fb0a6="">
                          Badmus Kemis
                        </span>
                      </div>
                    </div>
                    <div
                      className="col-span-2 flex flex-col"
                      data-v-fb6fb0a6=""
                    >
                      <span
                        className="hidden lg:block uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        Activity
                      </span>
                      <span
                        className="mt-2 font-medium break-words"
                        data-v-fb6fb0a6=""
                      >
                        Added new bonus
                      </span>
                    </div>
                    {/**/}
                    {/**/}
                    <div className="md:flex flex-col hidden" data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        BONUS NAME
                      </span>
                      <span
                        className="mt-2 font-medium text-t"
                        data-v-fb6fb0a6=""
                      >
                        XMAS Bonus
                      </span>
                    </div>
                  </div>

                  <div
                    className="w-full rounded-2xl border border-blueHoverColor shadow-md p-4 md:px-8 flex flex-col lg:grid grid-cols-5 gap-4 bg-white"
                    data-v-fb6fb0a6=""
                  >
                    <div data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        WALLET
                      </span>
                      <div
                        className="flex items-center gap-2 mt-2"
                        data-v-fb6fb0a6=""
                      >
                        <div
                          className="inline-block items-center gap-2"
                          data-v-fb6fb0a6=""
                        >
                          <div
                            className="p-2 h-9 w-9 uppercase flex items-center justify-center text-sm bg-[#01AA8C] text-white font-medium rounded-full "
                            data-v-fb6fb0a6=""
                          >
                            BM
                          </div>
                        </div>
                        <span className="font-medium" data-v-fb6fb0a6="">
                          Kalu Abasiama
                        </span>
                      </div>
                    </div>
                    <div
                      className="col-span-2 flex flex-col"
                      data-v-fb6fb0a6=""
                    >
                      <span
                        className="hidden lg:block uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        Activity
                      </span>
                      <span
                        className="mt-2 font-medium break-words"
                        data-v-fb6fb0a6=""
                      >
                        Paid November 2022, salary
                      </span>
                    </div>
                    {/**/}
                    {/**/}
                    {/**/}
                    <div className="md:flex flex-col hidden" data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        AMOUNT
                      </span>
                      <span
                        className="mt-2 font-medium text-r"
                        data-v-fb6fb0a6=""
                      >
                        N11,1678,900.00
                      </span>
                    </div>
                    <div className="md:flex flex-col hidden" data-v-fb6fb0a6="">
                      <span
                        className="uppercase text-xs text-grey"
                        data-v-fb6fb0a6=""
                      >
                        TIME
                      </span>
                      <span className="mt-2 font-medium" data-v-fb6fb0a6="">
                        15:31
                      </span>
                    </div>
                    <div
                      className="md:hidden flex gap-4 items-center"
                      data-v-fb6fb0a6=""
                    >
                      {/**/}
                      {/**/}
                      {/**/}
                      <div className="flex flex-col" data-v-fb6fb0a6="">
                        <span
                          className="uppercase text-xs text-grey"
                          data-v-fb6fb0a6=""
                        >
                          Time
                        </span>
                        <span className="mt-2 font-medium" data-v-fb6fb0a6="">
                          9:02 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivites;
