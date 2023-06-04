// import { useState } from "react";
import Carousel from "./carousel";
import Online from "./online";
import User from "../../src/components/data/User.json";
import Friends from "../Pages/profile/Components/Friends";
const Rightbar = ({ handleClick, rightnav, profile, menuRef }) => {
  const HomeRightBar = () => {
    return (
      <>
        <section>
          <article>
            <img
              src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646460/icons8-confetti-94_cvavb7.png"
              alt=""
              className="w-8 h-8 inline-block"
            />
            <span className="leading-tight">
              <b>kola</b>and<b>3 other friends</b> have birthday a today. join
              them and celebrate!
            </span>
          </article>
          <Carousel />
          <h4 className="font-bold mt-4 ">Online Friends</h4>
          {User.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </section>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h1 className="font-bold text-xl">User Infomation</h1>
        <div className="mb-4">
          <h3 className="font-semibold text-lg">
            City:<span className="font-light"> New york</span>
          </h3>
          <h3 className="font-semibold text-lg">
            From:<span className="font-light"> Nigeria</span>
          </h3>
          <h3 className="font-semibold text-lg">
            Relationship:<span className="font-light"> Single</span>
          </h3>
        </div>
        <h2 className="font-bold text-lg">User Friends</h2>
        <div className="flex flex-wrap justify-between mt-4 ">
          {User.map((user) => (
            <Friends key={user.id} user={user} />
          ))}
        </div>
      </>
    );
  };
  return (
    <section>
      <nav
        className={`w-[80%]   py-2 pr-6  px-4 ml-auto bg-white z-2 shadow-lg top-[10rem] lg:top-[7rem] right-0 fixed overflow-y-scroll  h-5/6 scrollbar sm:max-w-[70%] sm:h-screen lg:w-[30%] lg:block lg:translate-x-0 lg:h-screen lg:shadow-0  ${
          rightnav
            ? "translate-x-0 duration-100 ease-in-out"
            : "translate-x-full duration-100 ease-in-out"
        } `}
        ref={menuRef}
      >
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </nav>
      <button
        onClick={handleClick}
        className=" z-10 top-[50%] right-0 bg-blue p-2 rounded-l-full  rounded-b-full fixed hover:brightness-125 hover:translate-x-1  active:brightness-125 focus:brightness-125 lg:hidden"
      >
        {rightnav ? (
          <img
            src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646467/icons8-right-48_1_wegrs1.png"
            alt=""
            className="w-8"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646460/icons8-left-48_aiwjkp.png"
            alt=""
            className="w-8"
          />
        )}
      </button>
    </section>
  );
};

export default Rightbar;
