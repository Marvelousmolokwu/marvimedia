const Sidebar = () => {
  return (
    <nav className="sidebar p-5  w-[50%] overflow-y-scroll scrollbar -translate-x-full hidden ">
      <ul className="flex flex-col gap-1 text-left">
        <li className="flex items-end justify-start py-2 hover:bg-blulish hover:-translate-y-2">
          <img src="/src/images/icons8-feed-64.png" className="h-6" alt="" />
          <span className="text-lightBlue font-semibold ml-2">Feed</span>
        </li>
        <li className="flex items-end justify-start py-2 hover:bg-blulish hover:-translate-y-2">
          <img
            src="/src/images/icons8-chat-message-50.png"
            className="h-6"
            alt=""
          />
          <span className="text-lightBlue font-semibold ml-2">Chats</span>
        </li>
        <li className="flex items-end justify-start py-2 hover:bg-blulish hover:-translate-y-2">
          <img src="/src/images/icons8-video-24.png" className="h-6" alt="" />
          <span className="text-lightBlue font-semibold ml-2">Video</span>
        </li>
        <li className="flex items-end justify-start py-2 hover:bg-blulish hover:-translate-y-2">
          <img
            src="/src/images/icons8-user-groups-50.png"
            className="h-6"
            alt=""
          />
          <span className="text-lightBlue font-semibold ml-2">Groups</span>
        </li>
        <li className="flex items-end justify-start py-2 hover:bg-blulish hover:-translate-y-2">
          <img
            src="/src/images/icons8-bookmarks-64.png"
            className="h-6"
            alt=""
          />
          <span className="text-lightBlue font-semibold ml-2">Bookmarks</span>
        </li>
        <li className="flex items-end justify-start py-2 hover:bg-blulish hover:-translate-y-2">
          <img
            src="/src/images/icons8-question-mark-30.png"
            className="h-6"
            alt=""
          />
          <span className="text-lightBlue font-semibold ml-2">Questions</span>
        </li>
        <li className="flex items-end justify-start py-2 hover:bg-blulish hover:-translate-y-2">
          <img
            src="/src/images/icons8-permanent-job-50.png"
            className="h-6"
            alt=""
          />
          <span className="text-lightBlue font-semibold ml-2">jobs</span>
        </li>
        <li className="flex items-end justify-start py-2 hover:bg-blulish hover:-translate-y-2">
          <img src="/src/images/icons8-events-64.png" className="h-8" alt="" />
          <span className="text-lightBlue font-semibold ml-2">Events</span>
        </li>
        <li className="flex items-center justify-start py-2  hover:bg-blulish hover:-translate-y-2">
          <img
            src="/src/images/icons8-graduation-cap-50.png"
            className="h-6"
            alt=""
          />
          <span className="text-lightBlue font-semibold ml-2">courses</span>
        </li>
      </ul>

      <button className="bg-blulish rounded-md py-2 px-6 my-3 font-bold text-lightBlue">
        Show more
      </button>
      <hr />
      <div className="flex gap-3 my-2 items-center">
        <div className="rounded-full w-8 h-8 p-1 mr-2 bg-profile2 bg-cover bg-center object-cover"></div>
        <p className="font-semibold">Berry Cane</p>
      </div>
      <div className="flex gap-3 my-2 items-center">
        <div className="rounded-full w-8 h-8 p-1 mr-2 bg-profile2 bg-cover bg-center object-cover"></div>
        <p className="font-semibold">Berry Cane</p>
      </div>
      <div className="flex gap-3 my-2 items-center">
        <div className="rounded-full w-8 h-8 p-1 mr-2 bg-profile2 bg-cover bg-center object-cover"></div>
        <p className="font-semibold">Berry Cane</p>
      </div>
      <div className="flex gap-3 my-2 items-center">
        <div className="rounded-full w-8 h-8 p-1 mr-2 bg-profile2 bg-cover bg-center object-cover"></div>
        <p className="font-semibold">Berry Cane</p>
      </div>
      <div className="flex gap-3 my-2 items-center">
        <div className="rounded-full w-8 h-8 p-1 mr-2 bg-profile2 bg-cover bg-center object-cover"></div>
        <p className="font-semibold">Berry Cane</p>
      </div>
      <div className="flex gap-3 my-2 items-center">
        <div className="rounded-full w-8 h-8 p-1 mr-2 bg-profile2 bg-cover bg-center object-cover"></div>
        <p className="font-semibold">Berry Cane</p>
      </div>
      <div className="flex gap-3 my-2 items-center">
        <div className="rounded-full w-8 h-8 p-1 mr-2 bg-profile2 bg-cover bg-center object-cover"></div>
        <p className="font-semibold">Berry Cane</p>
      </div>
      <div className="flex gap-3 my-2 items-center">
        <div className="rounded-full w-8 h-8 p-1 mr-2 bg-profile2 bg-cover bg-center object-cover"></div>
        <p className="font-semibold">Berry Cane</p>
      </div>
    </nav>
  );
};

export default Sidebar;
