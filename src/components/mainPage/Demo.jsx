import React from "react";
import circle from "../../assets/circle.png";

const Demo = () => {
  return (
    <section
      className="request-demo-section py-16 lg:py-20 relative "
      data-v-c42ec926=""
    >
    <img
    src={circle}
    alt=""
    className=" absolute right-[-3.5rem] top-[-5.8rem] -z-50 opacity-500"

  />
      <div data-v-c42ec926="">
      
        <div
          className="hidden lg:block absolute left-0 top-0"
          data-v-c42ec926=""
        >
          <img
            className="w-32 lg:w-44"
            src="data:image/png;base64,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"
            data-v-c42ec926=""
          />
        </div>
        <div
          className="l-container lg:grid lg:grid-cols-2 lg:items-center"
          data-v-c42ec926=""
        >
          <div
            className="text-center mb-10 lg:mb-0 lg:text-left lg:pr-12"
            data-v-c42ec926=""
          >
            <div className="texts-left" data-v-c42ec926="">
              <h2 className="heading level-2 mb-6" data-v-c42ec926="">
                {" "}
                Get an Exclusive
                <br data-v-c42ec926="" /> Demo of Eazipay{" "}
              </h2>
              <p className="text-summary hidden lg:block" data-v-c42ec926="">
                {" "}
                Our greatest priority is to put you and your business first.
                Let’s show you how we can help.{" "}
              </p>
            </div>
          </div>
          <div className="" data-v-c42ec926="">
            <div
              className="max-w-lg mx-auto lg:max-w-none form"
              data-v-c42ec926=""
            >
              <form data-v-c42ec926="">
                <div className="text-center" data-v-c42ec926="">
                  <p className="text-2xl font-bold mb-4" data-v-c42ec926="">
                    First things first
                  </p>
                  <p className="text-base mb-4" data-v-c42ec926="">
                    {" "}
                    We want to serve you better. Tell us a bit about yourself or
                    company{" "}
                  </p>
                </div>
                <div
                  className="radio-btns mb-4"
                  data-v-740883d0=""
                  data-v-c42ec926=""
                >
                  <div className="radio-btn " data-v-740883d0="">
                    <label data-v-740883d0="">
                      <input
                        type="radio"
                        defaultValue="individual"
                        data-v-740883d0=""
                        checked
                      />
                      <span data-v-740883d0="" className="bg-g ">
                        Individual
                      </span>
                    </label>
                  </div>
                  <div className="radio-btn" data-v-740883d0="">
                    <label data-v-740883d0="">
                      <input
                        type="radio"
                        defaultValue="company"
                        data-v-740883d0=""
                      />
                      <span data-v-740883d0="">Company</span>
                    </label>
                  </div>
                </div>
                <div className="grid gap-2 mb-4" data-v-c42ec926="">
                  <div
                    className="input-wrapper relative my-2"
                    data-v-1f0246f5=""
                    data-v-c42ec926=""
                  >
                    <input
                      className="input"
                      type="text"
                      placeholder="First Name"
                      required=""
                      data-v-1f0246f5=""
                    />
                    <label data-v-1f0246f5="">First name</label>
                  </div>
                  <div
                    className="input-wrapper relative my-2"
                    data-v-1f0246f5=""
                    data-v-c42ec926=""
                  >
                    <input
                      className="input"
                      type="text"
                      placeholder="Last Name"
                      required=""
                      data-v-1f0246f5=""
                    />
                    <label data-v-1f0246f5="">Last Name</label>
                  </div>
                  <div
                    className="input-wrapper relative my-2"
                    data-v-1f0246f5=""
                    data-v-c42ec926=""
                  >
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      required=""
                      data-v-1f0246f5=""
                    />
                    <label data-v-1f0246f5="">Email</label>
                  </div>

                  <div
                    className="input-wrapper relative my-2"
                    data-v-1f0246f5=""
                    data-v-c42ec926=""
                  >
                    <input
                      className="input"
                      type="text"
                      placeholder="Job Title"
                      required=""
                      data-v-1f0246f5=""
                    />
                    <label data-v-1f0246f5="">Job Title</label>
                  </div>
                  <div
                    className="input-wrapper relative my-2"
                    data-v-1f0246f5=""
                    data-v-c42ec926=""
                  >
                    <input
                      className="input"
                      type="text"
                      placeholder="Company Name"
                      required=""
                      data-v-1f0246f5=""
                    />
                    <label data-v-1f0246f5="">Company Size</label>
                  </div>
                </div>
                <button
                  className="btn primary w-full"
                  data-v-853a8326=""
                  data-v-c42ec926=""
                >
                  <div className="flex items-center gap-2" data-v-853a8326="">
                    {/**/}
                    <div data-v-853a8326="">Request Demo</div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
