import React from "react";
import { FiUsers } from "react-icons/fi";
import { BiBookContent } from "react-icons/bi";
import Courses from "./Courses";

const Instructor = () => {
  return (
    <>
      <div className="bg-[#f7f7ff] relative pt-16 pb-64 px-44 flex gap-5">
        <p className="absolute top-2">
          Home / <span className="font-bold">Instructor</span>
        </p>
        <div className="flex flex-col gap-4 w-4/5">
          <div className="p-3 bg-white rounded-lg flex flex-col gap-4">
            <img
            className="rounded-lg"
              src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?size=626&ext=jpg&ga=GA1.1.1416182974.1698257367&semt=sph"
              alt=""
            />
            <div className="flex flex-col p-1">

            <p className="font-bold text-xl">Henry S. Miller</p>
            <p>
              Pro Photographer, Videographer, Award <br /> Winning Youtuber
            </p>
            <p>4.5 ⭐ ⭐ ⭐ ⭐ ⭐</p>
            </div>
          </div>
          <div className="flex justify-between p-4 bg-white rounded-lg">
            <div className="flex gap-2">
              <FiUsers className="w-9 h-9 p-2 text-white rounded-full bg-orange-400" />
              <p>
                Total Students <br /> <span className="font-bold">115,144</span>
              </p>
            </div>
            <div className="flex gap-2">
              <BiBookContent className="w-9 h-9 p-2 text-white rounded-full bg-orange-400" />
              <p>
                Courses
                <br />
                <span className="font-bold">18</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="text-4xl font-semibold mb-4">About me</h1>
          <p>
            What is design thinking, and what part does it play in the wider
            scheme of user experience design?
          </p>
          <p>
            This short design thinking course will teach you the basics you need
            to kickstart your career as a digital designer in UX. You'll develop
            the knowledge and skills needed to successfully implement design
            thinking practices grounded in solid UX fundamentals in the
            workplace.
          </p>
          <p className=" mb-4">
            By getting to grips with the design thinking framework, you'll be
            able to tackle large, complex and even unknown issues within product
            development. It will give you the tools, skills and mindset to seek
            out practical and logical innovation, and to take a solution-based
            view to solving problems as a UX designer.
          </p>

          <h1 className="font-semibold text-2xl">My Courses</h1>
          <div className="grid grid-cols-3 grid-rows-4 gap-4">
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />
            <Courses />
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
