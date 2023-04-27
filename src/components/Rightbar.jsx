import { useState } from "react";
import Carousel from "./carousel";
import Online from "./online";

const Rightbar = () => {
  const [state, Setstate] = useState(false);
  function handleClick() {
    Setstate((prev) => !prev);
  }
  return (
    <>
      <div></div>
      <button
        onClick={handleClick}
        className=" z-10 top-[50%] right-0 bg-lightBlue p-2 rounded-l-full  rounded-b-full fixed hover:brightness-125 hover:translate-x-1  active:brightness-125 focus:brightness-125"
      >
        {state ? (
          <img
            src="/src/images/icons8-right-48 (1).png"
            alt=""
            className="w-10"
          />
        ) : (
          <img src="/src/images/icons8-left-48.png" alt="" className="w-10" />
        )}
      </button>
      <section
        className={`max-w-[70%]   py-2 pr-6  px-4 ml-auto bg-white z-2 shadow-lg top-[10rem] right-0 fixed overflow-y-scroll  h-5/6 scrollbar ${
          state
            ? "translate-x-0 duration-100 ease-in-out"
            : "translate-x-full duration-100 ease-in-out"
        } `}
      >
        <article className="flex items-center">
          <img src="/src/images/icons8-confetti-94.png" alt="" className="" />
          <span>
            <b>kola</b>and<b>3 other friends</b> have birthday a today. join
            them and celebrate!
          </span>
        </article>
        <Carousel />
        <h4 className="font-bold mt-4 ">Online Friends</h4>
        <Online />
        <Online />
        <Online />
        <Online />
        <Online />
        <Online />
        <Online />
        <Online />
      </section>
    </>
  );
};

export default Rightbar;
