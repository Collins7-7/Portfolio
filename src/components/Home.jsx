import HeroImage from "../assets/portfolio/IMG_6239.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-teal-800 text-white "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-7xl font-bold text-white">
            I am a full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            I have 2 years of experience with building software. Currently, I
            love to work on web applications using technologies like Springboot,
            React, Nodejs, Tailwind and GraphQL.
          </p>
          <div>
            <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center cursor-pointer rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
        <div className="">
          <img
            src={HeroImage}
            alt="portfolio pic"
            className="rounded-2xl w-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
