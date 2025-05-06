import React from "react";
import ballImg from "../../src/assets/ball1.webp";
// import carImg from "../../src/assets/car1.webp";
// import skateboardImg from "../../src/assets/skateboard.webp";
// import helmetImg from "../../src/assets/helmet.webp";
// import hatImg from "../../src/assets/hat.webp";
// import flowerImg from "../../src/assets/flower.webp";
// import cupImg from "../../src/assets/cup.webp";
// import musicImg from "../../src/assets/music.webp";
import { NavLink } from "react-router";

export default function HeroSection({blogs}) {
  console.log(blogs);
  return (
    <div className="mt-10 ">
      {/* 1st feed  */}


      {
        blogs.map((item, index) => (          

          <div
          key={index}
        id="hero"
        className="border-2 border-gray-100 w-11/12 mx-auto rounded-2xl border-l-amber-500 border-l-6 bg-gray-50 group mb-2"
      >
        <NavLink  to={`/blog-read/${item._id}`} className=" w-11/12 mx-auto grid lg:flex gap-8 border-b  border-dotted border-gray-400  py-12  ">
          <div>
            <img
              src={ballImg}
              alt="ball"
              className="rounded-2xl ml-6 h-40 w-40 object-cover group-hover:scale-110 duration-500"
            />
          </div>

          <div   className="space-y-4">
            <NavLink
              to={`/blog-read/${item._id}`}
              className="flex flex-col font-semibold text-2xl border-b-3 border-white hover:text-pink-600  hover:border-pink-600"
            >
              {item.title}
            </NavLink>
            <div className="flex gap-4 font-sm font-semibold opacity-70">
              <p>By Jessica Smith</p>
              <p>6 Comments</p>
            </div>
            <p className="mt-12 font-sm font-semibold opacity-70">
              {item.description}
            </p>
          </div>
        </NavLink>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center ml-20 gap-4">
            <p>#Lifestyle</p>
            <p>#Trending</p>
          </div>

          <div className="hidden sm:flex items-center gap-4 mr-20">
            <p> 291 Views </p>
            <p> {item.timeToRead} Min Read </p>
          </div>
        </div>
          </div>
        ))
      }    
      
    </div>
  );
}
