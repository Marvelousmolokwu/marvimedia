const Topbar = () => {
  return (
    <header className="bg-blue font-roboto h-40  w-full sticky top-0 z-10 lg:h-28">
      <div className=" max-w-[90%] mx-auto py-4 flex flex-col gap-4 lg:flex lg:max-w-[95%]">
        <div className="flex flex-col gap-3 lg:flex lg:flex-row lg:items-center lg:pt-6 lg:gap-20 xl:gap-28 ">
          <h1 className="text-2xl text-blulish font-black tracking-wide lg:mr-4 xl:mr-20">
            MarviMedia
          </h1>
          <div className="flex justify-between items-center gap-4 lg:w-[50%] ">
            <div className="searchbar bg-ash flex  h-8 p-1   rounded-lg w-[90%] ">
              <img src="/src/images/icons8-search.svg" alt="" />
              <input
                type="search"
                className="focus:outline-none w-full bg-ash indent-3"
              />
            </div>
            <div className=" rounded-full w-8 h-8 p-1 mr-2 bg-profile bg-cover bg-center object-cover lg:hidden"></div>
          </div>
          <div className="flex justify-between items-center lg:gap-8">
            <p className="text-blulish cursor-pointer">Homepage timeline</p>
            <div className="flex gap-2">
              <div className="w-6 relative cursor-pointer">
                <div className="notification  ">
                  <span className="text-[10px] font-bold">1</span>
                </div>
                <img src="/src/images/icons8-person-64 (1).png" alt="" />
              </div>
              <div className="w-8  relative cursor-pointer">
                <div className="notification">
                  <span className="text-[10px] font-bold">1</span>
                </div>
                <img src="/src/images/icons8-notification-24 (3).png" alt="" />
              </div>
              <div className="w-8  relative cursor-pointer">
                <div className="notification">
                  <span className="text-[10px] font-bold">1</span>
                </div>
                <img src="/src/images/icons8-chat-message-24 (1).png" alt="" />
              </div>
            </div>
          </div>
          <div className=" rounded-full w-8 h-8 p-1 mr-2 bg-profile bg-cover bg-center object-cover hidden lg:block lg:ml-auto "></div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
