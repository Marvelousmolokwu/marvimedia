import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <header className="bg-blue font-roboto h-40  w-full fixed right-0 left-0 top-0 z-10 lg:h-28 m-0">
      <div className=" max-w-[90%] mx-auto py-4 flex flex-col gap-4 lg:flex lg:max-w-[95%]">
        <div className="flex flex-col gap-3 lg:flex lg:flex-row lg:items-center lg:pt-6 lg:gap-20 xl:gap-28 ">
          <h1 className="text-2xl text-blulish font-black tracking-wide lg:mr-4 xl:mr-20">
            MarviMedia
          </h1>
          <div className="flex justify-between items-center gap-4 lg:w-[50%] ">
            <div className="searchbar bg-ash flex  h-8 p-1   rounded-lg w-[90%] ">
              <img
                src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646467/icons8-search_biutbt.svg"
                alt=""
              />
              <input
                type="search"
                className="focus:outline-none w-full bg-ash indent-3"
              />
            </div>
            <Link to="/profile">
              <div className="  cursor-pointer rounded-full w-8 h-8 p-1 mr-2 bg-profile bg-cover bg-center object-cover lg:hidden"></div>
            </Link>
          </div>
          <div className="flex justify-between items-center lg:gap-8">
            <p className="text-blulish cursor-pointer">Homepage timeline</p>
            <div className="flex gap-2">
              <div className="w-6 relative cursor-pointer">
                <div className="notification  ">
                  <span className="text-[10px] font-bold">1</span>
                </div>
                <img
                  src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646471/icons8-person-64_1_mbv5kt.png"
                  alt=""
                />
              </div>
              <div className="w-8  relative cursor-pointer">
                <div className="notification">
                  <span className="text-[10px] font-bold">1</span>
                </div>
                <img
                  src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646465/icons8-notification-24_3_xvagko.png"
                  alt=""
                />
              </div>
              <div className="w-8  relative cursor-pointer">
                <div className="notification">
                  <span className="text-[10px] font-bold">1</span>
                </div>
                <img
                  src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646455/icons8-chat-message-24_1_psleae.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <Link to="/profile">
            <div className=" rounded-full w-8 h-8 p-1 mr-2 bg-profile bg-cover bg-center object-cover hidden lg:block lg:ml-auto "></div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
