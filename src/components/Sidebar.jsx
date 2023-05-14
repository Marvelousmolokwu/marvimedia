// import { useState } from "react";

import CloseFriends from "./CloseFriends";
import User from "../../src/components/data/User.json";

const Sidebar = ({ handleClick, sidenav }) => {
  return (
    <section className=" relative">
      <button
        onClick={handleClick}
        className="bg-blue ml-auto px-4 pt-2 pb-2  left-1 fixed  z-20 rounded-b-full hover:brightness-150   active:brightness-125 focus:brightness-125 hover:py-3 sm:hidden"
      >
        {sidenav ? (
          <img src="/src/images/icons8-close-24.png " alt="" className="w-6" />
        ) : (
          <img
            src="/src/images/icons8-menu-rounded-50.png "
            alt=""
            className="w-6"
          />
        )}
      </button>
      <nav
        className={`sidebar py-5  w-[50%] overflow-y-scroll scrollbar bg-white shadow-lg z-10 fixed sm:visible sm:-translate-x-0  sm:inline sm:w-[30%] lg:w-[20%] ${
          sidenav
            ? "-translate-x-0 duration-100 ease-in-out"
            : "-translate-x-full duration-100 ease-in-out"
        } `}
      >
        <ul className="flex flex-col gap-1 text-left mt-1 sm:mt-0">
          <li className="flex items-end justify-start py-2 px-4 mt-4 hover:bg-blulish hover:py-3 sm:mt-0 lg:px-10">
            <img src="/src/images/icons8-feed-64.png" className="h-6" alt="" />
            <span className="text-lightBlue font-semibold ml-2">Feed</span>
          </li>
          <li className="flex items-end justify-start py-2  px-4 hover:bg-blulish hover:py-3 lg:px-10">
            <img
              src="/src/images/icons8-chat-message-50.png"
              className="h-6"
              alt=""
            />
            <span className="text-lightBlue font-semibold ml-2">Chats</span>
          </li>
          <li className="flex items-end justify-start py-2  px-4 hover:bg-blulish hover:py-3 lg:px-10">
            <img src="/src/images/icons8-video-24.png" className="h-6" alt="" />
            <span className="text-lightBlue font-semibold ml-2">Video</span>
          </li>
          <li className="flex items-end justify-start py-2  px-4 hover:bg-blulish hover:py-3 lg:px-10">
            <img
              src="/src/images/icons8-user-groups-50.png"
              className="h-6"
              alt=""
            />
            <span className="text-lightBlue font-semibold ml-2">Groups</span>
          </li>
          <li className="flex items-end justify-start py-2  px-4 hover:bg-blulish hover:py-3 lg:px-10">
            <img
              src="/src/images/icons8-bookmarks-64.png"
              className="h-6"
              alt=""
            />
            <span className="text-lightBlue font-semibold ml-2">Bookmarks</span>
          </li>
          <li className="flex items-end justify-start py-2  px-4 hover:bg-blulish hover:py-3 lg:px-10">
            <img
              src="/src/images/icons8-question-mark-30.png"
              className="h-6"
              alt=""
            />
            <span className="text-lightBlue font-semibold ml-2">Questions</span>
          </li>
          <li className="flex items-end justify-start py-2  px-4 hover:bg-blulish hover:py-3 lg:px-10">
            <img
              src="/src/images/icons8-permanent-job-50.png"
              className="h-6"
              alt=""
            />
            <span className="text-lightBlue font-semibold ml-2">jobs</span>
          </li>
          <li className="flex items-end justify-start py-2  px-4 hover:bg-blulish hover:py-3 lg:px-10">
            <img
              src="/src/images/icons8-events-64.png"
              className="h-8"
              alt=""
            />
            <span className="text-lightBlue font-semibold ml-2">Events</span>
          </li>
          <li className="flex items-center justify-start py-2  px-4  hover:bg-blulish hover:py-3 lg:px-10">
            <img
              src="/src/images/icons8-graduation-cap-50.png"
              className="h-6"
              alt=""
            />
            <span className="text-lightBlue font-semibold ml-2">courses</span>
          </li>
        </ul>

        <button className="bg-blulish rounded-md py-2 px-6 my-3 mx-4 font-bold text-lightBlue sm:px-2 lg:px-6 lg:ml-10">
          Show more
        </button>
        <hr />
        {User.map((user) => (
          <CloseFriends key={User.id} user={user} />
        ))}
      </nav>
    </section>
  );
};

export default Sidebar;
