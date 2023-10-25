import React from "react";
import AllCourses from "./AllCourses";
import Recommended from "./Recommended";

const MyCourses = () => {
  return (
    <>
      <div className="bg-[#f7f7ff] relative pt-16 pb-64 px-44 flex gap-5">
        <p className="absolute top-2">
          Home / My Profile / <span className="font-bold">My Courses</span>
        </p>

        <div>
          <h1 className="text-6xl font-semibold ">My Courses</h1>

          <div className="flex gap-3 text-center mt-10 cursor-pointer">
            <p className="text-blue-600 font-bold pb-2 w-36 border-b-4 border-blue-600">
              All Courses
            </p>
            <p className="w-36 hover:border-blue-600 hover:text-blue-600 hover:border-b-4 hover:pb-2 hover:font-bold">In Progress</p>
            <p className="w-36 hover:border-blue-600 hover:text-blue-600 hover:border-b-4 hover:pb-2 hover:font-bold">Completed</p>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <AllCourses />
            <AllCourses />
            <AllCourses />
            <AllCourses />
            <AllCourses />
            <AllCourses />
          </div>

          <div className="my-16 text-center">
            <h1 className="text-4xl font-bold my-16">Recommended for you</h1>
            <div className="flex gap-4">
              <Recommended />
              <Recommended />
              <Recommended />
              <Recommended />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourses;
