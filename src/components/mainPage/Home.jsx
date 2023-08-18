import hero from "../../assets/home/homepageimage.png";
import google from "../../assets/home/google.png";
import apple from "../../assets/home/apple.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero relative max-w-screen-xl w-full mx-auto">
      <div className="pt-16 pb-10 lg:py-20">
        <div className="hero-bg " style={{ backgroundImage: `url("${hero}")` }}>
          <div className="px-[18px]">
            <div className="hero-content max-w-[550px]">
              <div className="text-center flex flex-col items-center lg:block lg:text-left">
                <h1 className="heading text-[4.5rem]">
                  {" "}
                  Run your <span className="text-g">payroll</span> <br />
                  <span className="text-[#B4A572]">easily</span> in{" "}
                  <span className="text-r">seconds</span>
                </h1>
                <p className=" text-[20px] my-6">
                  {" "}
                  We’ve built an all-inclusive simple solution for individual
                  and businesses to manage staff, pay salaries, bills, and
                  relevant taxes all at once.{" "}
                </p>
                <div>
                  <a
                    href="/"
                    className="block border-g px-7
               py-[0.62rem] border rounded-3xl text-center w-fit  text-w bg-g"
                  >
                    Start Using Free, Forever
                  </a>
                </div>

                <div className="mt-8 lg:mt-12">
                  <p className="mb-4 text-black font-medium">
                    {" "}
                    Download the Eazipay App{" "}
                  </p>
                  <div className="flex translate-x-[-2rem]">
                    <img src={apple} alt="" className=" h-[99px]" />

                    <img src={google} alt="" className="h-[99px]" />
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

export default Home;
