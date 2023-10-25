import logo from "../assets/logo2.png";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className=" relative  bg-[#0E073F] ">
        <div className=" absolute w-3/5 -top-36 inset-x-80 p-10  text-center flex flex-col gap-6 bg-white rounded-lg">
          <p className="text-gray text-gray-500 text-sm">NEWSLETTER</p>
          <h1 className="font-bold text-4xl">Get new offer's on your email</h1>
          <p>Subscribe to get tips and tactics to grow the way you want.</p>
          <a href="#" className=" relative">
            <input
              className="focus:ring-2 focus:outline-none focus:ring-blue-300 border-2 border-blue-300  py-3 px-4 w-96 rounded-lg shadow-md shadow-blue-300"
              type="email"
              placeholder="Your Email Address "
            />
            <button className="absolute right-60 my-2 text-700 text-white bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2 text-center mr-3 md:mr-0 hover:bg-blue-600">
              Subscribe
            </button>
          </a>
        </div>
        <div className="flex flex-col pt-44 pb-10 gap-5 items-center text-white">
          <img className=" w-56" src={logo} alt="logo" />
          <ul className="flex gap-3 ">
            <li >CourseWhiz Business</li>
            <li>Tech on CourseWhiz</li>
            <li>About us</li>
            <li>Terms & Privacy Policy</li>
            <li>Help and Support</li>
          </ul>  
          <div className="flex gap-5 ">
            <a href="#">
              <BiLogoFacebookSquare className="w-8 h-8 border p-1 rounded-md" />
            </a>
            <a href="#">
              <BsInstagram className="w-8 h-8 border p-1 rounded-md"/>
            </a>
            <a href="#">
              <BsTwitter className="w-8 h-8 border p-1 rounded-md"/>
            </a>
            <a href="#">
              <BsLinkedin className="w-8 h-8 border p-1 rounded-md"/>
            </a>
          </div>
        </div>
        <div className="text-center text-black py-6 bg-white">
          <p>© 2023 - <span className="font-bold">Course</span>Whiz by Kryptonyte</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
