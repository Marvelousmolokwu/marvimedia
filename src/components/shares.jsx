const Shares = () => {
  return (
    <div className="max-w-[90%] mx-auto shadow-md p-3 my-4 -z-10 sm:p-2 lg:p-6">
      <div className=" flex items-center my-4">
        <div className="rounded-full w-12 h-12 p-1 mr-2 bg-profile bg-cover bg-center object-cover"></div>
        <input
          type="text"
          placeholder="Explore Marv..."
          className="focus: outline-none
          "
        />
      </div>

      <hr />
      <div className="flex justify-between my-4">
        <div className="flex  font-semibold gap-1 sm:gap-1 text-[10px] lg:gap-4 lg:text-[12px]">
          <div className="flex items-center">
            <img src="/src/images/icons8-media-48.png" alt="" className="h-6" />
            <span>Photo and Videos</span>
          </div>
          <div className="flex items-center">
            <img
              src="/src/images/icons8-tag-window-50.png"
              alt=""
              className="h-6"
            />
            <span>Tag</span>
          </div>
          <div className="flex items-center">
            <img
              src="/src/images/icons8-location-50.png"
              alt=""
              className="h-6"
            />
            <span>Location</span>
          </div>
          <div className="flex items-center">
            <img
              src="/src/images/icons8-emojis-53.png"
              alt=""
              className="h-6"
            />
            <span>Feelings</span>
          </div>
        </div>
        <div>
          <img src="/src/images/icons8-share-30.png" alt="" className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default Shares;
