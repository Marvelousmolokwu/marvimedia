// import { useState } from "react";

import CloseFriends from "./CloseFriends";
import User from "../../src/components/data/User.json";
import { Link } from "react-router-dom";

const Sidebar = ({ handleClick, sidenav, menuRef }) => {
  return (
    <section className=" bg-white">
      <button
        onClick={handleClick}
        className={`${
          sidenav ? "bg-transparent" : "bg-blue"
        } px-4 pt-2 pb-2 top-40  ${
          sidenav ? "ml-[45%]" : "ml-0"
        } fixed  z-20 rounded-b-full hover:brightness-150   active:brightness-125 focus:brightness-125 hover:py-3 sm:hidden`}
      >
        {sidenav ? (
          <img
            src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685797823/icons8-close-64_pzhcop.png"
            alt=""
            className="w-6"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646463/icons8-menu-rounded-50_z5jaul.png "
            alt=""
            className="w-6"
          />
        )}
      </button>
      <nav
        className={`sidebar py-5  w-[60%] overflow-y-scroll scrollbar bg-white shadow-lg z-10 fixed top-40 lg:top-32 sm:visible sm:-translate-x-0  sm:inline sm:w-[30%] lg:w-[20%] ${
          sidenav
            ? "-translate-x-0 duration-100 ease-in-out"
            : "-translate-x-full duration-100 ease-in-out"
        } `}
        ref={menuRef}
      >
        <ul className="flex flex-col gap-1 text-left mt-1 sm:mt-0">
          <li className="flex items-end justify-start py-2 px-4 mt-4 hover:bg-blulish hover:py-3 sm:mt-0 lg:px-10 hover:mx-2 hover:rounded-md delay-100 ">
            <img src="/src/images/icons8-feed-64.png" className="h-6" alt="" />
            <span className="text-lightBlue font-semibold ml-2">Feed</span>
          </li>
          <li className="flex items-end justify-start py-2  px-4 hover:bg-blulish hover:py-3 lg:px-10 hover:mx-2 hover:rounded-md delay-100 ">
            <img
              src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646456/icons8-chat-message-50_zhg3mv.png"
              className="h-6"
              alt=""
            />
            <span className="text-lightBlue font-semibold ml-2">Chats</span>
          </li>
          <li className="flex items-end justify-start py-2  px-4 hover:bg-blulish hover:py-3 lg:px-10 hover:mx-2 hover:rounded-md delay-100 ">
            <img src="/src/images/icons8-video-24.png" className="h-6" alt="" />
            <span className="text-lightBlue font-semibold ml-2">Video</span>
          </li>
          <li className="flex items-end justify-start py-2  px-4 hover:bg-blulish hover:py-3 lg:px-10 hover:mx-2 hover:rounded-md delay-100 ">
            <img
              src="/src/images/icons8-user-groups-50.png"
              className="h-6"
              alt=""
            />
            <span className="text-lightBlue font-semibold ml-2">Groups</span>
          </li>
          <li className="flex items-end justify-start py-2  px-4 hover:bg-blulish hover:py-3 lg:px-10 hover:mx-2 hover:rounded-md delay-100 ">
            <img
              src="/src/images/icons8-bookmarks-64.png"
              className="h-6"
              alt=""
            />
            <span className="text-lightBlue font-semibold ml-2">Bookmarks</span>
          </li>
          <li className="flex items-end justify-start py-2  px-4 hover:bg-blulish hover:py-3 lg:px-10 hover:mx-2 hover:rounded-md delay-100 ">
            <img
              src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646466/icons8-question-mark-30_lu5oiq.png"
              className="h-6"
              alt=""
            />
            <span className="text-lightBlue font-semibold ml-2">Questions</span>
          </li>
          <li className="flex items-end justify-start py-2  px-4 hover:bg-blulish hover:py-3 lg:px-10 hover:mx-2 hover:rounded-md hover:delay-100 ">
            <img
              src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646457/icons8-events-64_q4aksg.png"
              className="h-6"
              alt=""
            />
            <span className="text-lightBlue font-semibold ml-2">jobs</span>
          </li>
          <li className="flex items-end justify-start py-2  px-4 hover:bg-blulish hover:py-3 lg:px-10 hover:mx-2 hover:rounded-md hover:delay-100 ">
            <img
              src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646466/icons8-permanent-job-50_x8xpgi.png"
              className="h-8"
              alt=""
            />
            <span className="text-lightBlue font-semibold ml-2">Events</span>
          </li>
          <li className="flex items-center justify-start py-2  px-4  hover:bg-blulish hover:py-3 lg:px-10 hover:mx-2 hover:rounded-md hover:delay-100 ">
            <img
              src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646460/icons8-graduation-cap-50_rj8ip5.png"
              className="h-6"
              alt=""
            />
            <span className="text-lightBlue font-semibold ml-2">courses</span>
          </li>
        </ul>
        <Link to="/login">
          <button className="bg-blulish rounded-md py-2 px-6 my-3 mx-4 font-bold text-lightBlue sm:px-2 lg:px-6 lg:ml-10 hover:border-2 hover:border-lightBlue ">
            <img
              src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685902710/icons8-logout-24_fxjprh.png"
              alt=""
              className="inline h-4"
            />
            Log out
          </button>
        </Link>
        <hr />
        {User.map((user) => (
          <CloseFriends key={User.id} user={user} />
        ))}
      </nav>
    </section>
  );
};

export default Sidebar;
