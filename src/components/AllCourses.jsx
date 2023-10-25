import React from "react";
import { BiBookContent } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";

const AllCourses = () => {
  return (
    <>
      <div className="flex flex-col gap-3 py-3 border-b-2 cursor-pointer">
        <img
        className=" rounded-md"
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1416182974.1698257367&semt=sph"
          alt=""
        />
        <p className="py-0.5 px-3 w-fit rounded-md text-blue-900 bg-blue-400">
          Design
        </p>
        <div>
          <p>The Complete Graphic Design Theory for Beginners Course</p>
          <p>4.5 ⭐ ⭐ ⭐ ⭐ ⭐ (24)</p>
        </div>
        <div className="flex justify-between">
          <p className="flex gap-1">
            <BiBookContent className="text-l my-1 text-orange-300" /> 24 Lessons
          </p>
          <p className="flex gap-1">
            <AiOutlineClockCircle className="text-l my-1 text-orange-300" />{" "}
            12hr 30mins
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Porttitor massa nisi id
          praesent ante phasellus nunc sit. Est semper ornare auctor ac. Viverra
          amet tincidunt mi orci. Et morbi fames lorem elit nunc orci imperdiet
          laoreet. Praesent egestas dolor tellus adipiscing consequat ut at.
        </p>
        <p>by John Doe</p>
      </div>
    </>
  );
};

export default AllCourses;
