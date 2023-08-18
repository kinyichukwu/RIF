import React from "react";
import inbg from "../../assets/howItWorks/howitworksb1.png";
import inbg2 from "../../assets/howItWorks/howitworksb2.png";

const Individual = () => {
  return (
    <section
      className="audience py-16 lg:py-32 relative z-2"
      data-v-9bb018f0=""
    >
      <div data-v-9bb018f0="">
        <div
          className="bg-image absolute left-0 top-0 bottom-0 right-0"
          data-v-9bb018f0=""
        >
          <img
            src={inbg}
            className="hidden lg:block w-full h-full"
            data-v-9bb018f0=""
          />
        </div>
        <div
          className="bg-pattern absolute left-0 top-0 bottom-0 right-0 py-10"
          data-v-9bb018f0=""
        >
          <img
            src={inbg2}
            alt=""
            className="w-full h-full object-cover"
            data-v-9bb018f0=""
          />
        </div>
        <div className="l-container" data-v-9bb018f0="">
          <div className="text-center mb-6 lg:mb-12" data-v-9bb018f0="">
            <h2 className="heading level-2 mb-4" data-v-9bb018f0="">
              For Individuals and Businesses
            </h2>
            <p className="text-summary" data-v-9bb018f0="">
              {" "}
              Join 200+ businesses using Eazipay's easy solution.{" "}
            </p>
          </div>
          <div className="cards grid gap-6" data-v-9bb018f0="">
            <div className="card card-1" data-v-9bb018f0="">
              <h3 data-v-9bb018f0="">Tamper-proof Payroll for LIfe</h3>
              <p data-v-9bb018f0="">
                Your staff payroll history is kept in one place forever.
              </p>
              <p data-v-9bb018f0="">No more excel sheet or manual records.</p>
              <p data-v-9bb018f0="">
                Download your payroll history anytime you need it.
              </p>
            </div>
            <div className="card card-2" data-v-9bb018f0="">
              <h3 data-v-9bb018f0="">All Payroll, Anytime Anywhere</h3>
              <p data-v-9bb018f0="">
                {" "}
                Wherever you are, Eazipay has got you covered on ALL your
                Payroll tasks.{" "}
              </p>
              <p data-v-9bb018f0="">
                {" "}
                Whether it is Taxes, Pension insurances HMOs, trustfunds,
                Eazipay handle all your compliances in one place and easily, in
                seconds!{" "}
              </p>
            </div>
            <div className="card card-3" data-v-9bb018f0="">
              <h3 data-v-9bb018f0="">Payroll in Seconds</h3>
              <p data-v-9bb018f0="">
                Never again will you spend more than 2 minutes on payroll.
              </p>
              <p data-v-9bb018f0="">
                Just click on your staff and bulk-pay them at once.
              </p>
              <p data-v-9bb018f0="">Payment is done permanently.</p>
            </div>
          </div>
          <div
            className="mt-6 lg:mt-10 max-w-md lg:max-w-xl mx-auto"
            data-v-9bb018f0=""
          >
            <p
              className="text-center reach-out section-text"
              data-v-9bb018f0=""
            >
              {" "}
              We are happy to answer your queries. Please, reach us at{" "}
              <a href="mailto:hi@myeazipay.com" data-v-9bb018f0="">
                hi@myeazipay.com
              </a>{" "}
              and expect our response shortly after.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Individual;
