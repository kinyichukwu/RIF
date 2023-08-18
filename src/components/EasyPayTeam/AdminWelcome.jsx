import React from "react";
import bell from "../../assets/admin/bell.png";
import otherLogo from "../../assets/admin/otherLogo.png";
import woman from "../../assets/admin/woman.png";
import AdminMain from "./AdminMain";
import RecentActivites from "./RecentActivites";

const Nav = () => {
  return (
    <>
      <nav
        className="no-printable sticky top-0 left-0 w-full z-40 bg-white flex md:flex-row md:flex-nowrap md:justify-start items-center p-2 md:shadow-lg hidden md:block"
        data-v-49aca30c=""
      >
        <div
          className="w-full mx-auto items-center flex justify-between flex-nowrap flex-wrap md:px-16 py-1 px-2 md:px-4"
          data-v-49aca30c=""
        >
          <div data-v-49aca30c="" />
          <img
            src={otherLogo}
            alt=""
            className="w-[7.3rem] h-[3.625rem] mr-auto"
          />
          <ul
            className="gap-x-4 list-none items-center flex"
            data-v-49aca30c=""
          >
            <div className="relative">
              <img
                src={bell}
                alt=""
                className="text-dark-700 block py-1 px-2 cursor-pointer text-xl"
              />

              <div
                className="flex z-10 flex-col max-h-screen md:max-h-96 bg-white absolute overflow-y-auto border-t border-dark-100 -mt-1 h-auto -right-52 md:-right-52 top-14 py-2 shadow-lg text-sm"
                style={{ width: "100vw", maxWidth: 528, display: "none" }}
              >
                <div className="pt-4 px-6 shadow-md">
                  <div className="w-full flex items-center justify-between font-medium pb-2">
                    <h4 className="text-lg sm:text-2xl">Notifications</h4>
                  </div>
                </div>
                <div className="flex flex-col py-4 text-base">
                  <div className="p-4 w-full flex items-start gap-4 border-b border-dark-200 last:border-b-0">
                    <div className="inline-block items-center gap-2 relative rounded-full">
                      <div className="bg-primary p-2 w-9 sm:h-10 h-9 sm:w-10 text-sm sm:text-base flex items-center justify-center text-white font-medium rounded-full">
                        KO
                      </div>
                      <div className="bg-success w-3 sm:w-3 h-3 sm:h-3 border-2 border-white absolute -right-1 top-0 rounded-full" />
                    </div>
                    <div className="flex flex-col items-start text-dark-700">
                      <div className="text-base">
                        <span className="text-dark-900 font-bold">
                          Kinyichukwu Oselukwue
                        </span>
                        <span className="ml-2">Added New Employee</span>
                      </div>
                      <div className="text-xs sm:text-sm">
                        <span>9:02 PM</span>
                        <i className="fas fa-circle text-xs mx-2" />
                        <span>Employee Management</span>
                      </div>
                      {/**/}
                    </div>
                  </div>
                  <div className="p-4 w-full flex items-start gap-4 border-b border-dark-200 last:border-b-0">
                    <div className="inline-block items-center gap-2 relative rounded-full">
                      <div className="bg-primary p-2 w-9 sm:h-10 h-9 sm:w-10 text-sm sm:text-base flex items-center justify-center text-white font-medium rounded-full">
                        K
                      </div>
                      <div className="bg-success w-3 sm:w-3 h-3 sm:h-3 border-2 border-white absolute -right-1 top-0 rounded-full" />
                    </div>
                    <div className="flex flex-col items-start text-dark-700">
                      <div className="text-base">
                        <span className="text-dark-900 font-bold">
                          Kinyichukwu Oselukwue
                        </span>
                        <span className="ml-2">
                          Lenco_VA_Credit: FROM KUDA MFB/ OSELUKWUE, GABRIEL
                          KINYICHUKWU-HHHH/090267230816205331701025691663,
                          sessionId: 090267230816205331701025691663, datetime:
                          2023-08-16T19:50:38.000Z
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm">
                        <span>8:53 PM</span>
                        <i className="fas fa-circle text-xs mx-2" />
                        <span>Wallet</span>
                      </div>
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none bg-transparent fixed inset-0" />
            <div className="relative">
              <div className="items-center cursor-pointer flex gap-2 md:gap-4 relative">
                <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                  <div className=" h-10 w-10  flex items-center justify-center   rounded-full">
                    <img src={woman} alt="" className="h-10 w-10" />
                  </div>
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-bold text-dark-900 capitalize">
                    Kalu Abasiama
                  </span>
                  <span className="text-xs font-medium -mt-1">Admin</span>
                </div>
                <div>
                  <i className="fas fa-angle-right" />
                </div>
              </div>
              <div
                className="flex z-10 flex-col w-52 border-t border-dark-100 bg-white absolute -left-4 mt-1 -right-4 top-14 py-2 shadow-lg text-sm"
                style={{ display: "none" }}
              >
                <div className="flex items-center gap-4 px-5 py-3 cursor-pointer relative">
                  <span className="w-4">
                    <img src="/img/user-view.1ce9bbe6.svg" alt="" />
                  </span>
                  <span className="">Profile</span>
                  <div
                    className="flex z-10 flex-col bg-white absolute -left-44 -ml-1 top-0 py-2 shadow-lg text-sm"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="flex items-center gap-4 px-5 py-3 cursor-pointer relative">
                  <span className="w-4">
                    <img src="/img/user-add.76dc6de4.svg" alt="" />
                  </span>
                  <span className="">Create New Account</span>
                  <div
                    className="flex z-10 flex-col bg-white absolute -left-44 -ml-1 top-0 py-2 shadow-lg text-sm"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="flex items-center gap-4 px-5 py-3 cursor-pointer relative">
                  <span className="w-4">
                    <img src="/img/subsidiary.faae7901.svg" alt="" />
                  </span>
                  <span className="">Add more accounts</span>
                  <div
                    className="flex z-10 flex-col bg-white absolute -left-44 -ml-1 top-0 py-2 shadow-lg text-sm"
                    style={{ display: "none" }}
                  >
                    <div className="flex items-center hover:text-secondary gap-4 px-5 py-3 cursor-pointer relative">
                      <span className="w-4">
                        <img src="/img/user-view.1ce9bbe6.svg" alt="" />
                      </span>
                      <span className="">Business Account</span>
                    </div>
                    <div className="flex items-center hover:text-secondary gap-4 px-5 py-3 cursor-pointer relative">
                      <span className="w-4">
                        <img src="/img/user-view.1ce9bbe6.svg" alt="" />
                      </span>
                      <span className="">Personal Account</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-5 py-3 cursor-pointer relative">
                  <span className="w-4">
                    <img src="/img/switch2.6da39e6d.svg" alt="" />
                  </span>
                  <span className="">Switch Account</span>
                  <div
                    className="flex z-10 flex-col bg-white absolute -left-44 -ml-1 top-0 py-2 shadow-lg text-sm"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="flex items-center gap-4 px-5 py-3 cursor-pointer relative">
                  <span className="w-4">
                    <img src="/img/active-settings.e73701d8.svg" alt="" />
                  </span>
                  <span className="text-secondary">Settings</span>
                  <div
                    className="flex z-10 flex-col bg-white absolute -left-44 -ml-1 top-0 py-2 shadow-lg text-sm"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="flex items-center gap-4 px-5 py-3 cursor-pointer relative">
                  <span className="w-4">
                    <img src="/img/logout.0ae026ff.svg" alt="" />
                  </span>
                  <span className="">Logout</span>
                  <div
                    className="flex z-10 flex-col bg-white absolute -left-44 -ml-1 top-0 py-2 shadow-lg text-sm"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            {/**/}
            <div className="pointer-events-none bg-transparent fixed inset-0" />
          </ul>
        </div>
      </nav>
    </>
  );
};

const AdminWelcome = () => {
  return (
    <div className="relative md:ml-56 bg-blueGray-100 onprint">
      <Nav />
      <AdminMain />
      <RecentActivites/>
    </div>
  );
};

export default AdminWelcome;
