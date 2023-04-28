const Post = () => {
  return (
    <div className="max-w-[90%] mx-auto shadow-lg p-3 my-6 ">
      <div className="flex gap-2 items-center">
        <div className=" rounded-full w-8 h-8 p-1 mr-2 bg-profile bg-cover bg-center object-cover"></div>
        <h3 className="font-bold">ifey show</h3>
        <p className="text-[12px]">5 mins ago</p>
        <img
          src="/src/images/icons8-menu-24.png"
          alt=""
          className="h-4 ml-auto cursor-pointer "
        />
      </div>
      <h3 className="my-4">Hey! its my first Post ✌</h3>
      <div>
        <img src="/src/images/bead.avif" alt="" className="lg:w-full" />
      </div>
      <div className="flex mt-3 items-center gap-2">
        <button className="hover:-translate-y-[0.5px] hover:sepia active:sepia focus:sepia">
          <img
            src="/src/images/icons8-like-64.png"
            alt=""
            className="w-6 drop-shadow-lg"
          />
        </button>
        <button className="hover:-translate-y-[0.5px] hover:sepia active:sepia focus:sepia">
          <img
            src="/src/images/icons8-speech-bubble-50.png"
            alt=""
            className="w-6 drop-shadow-lg"
          />
        </button>

        <span className="text-[12px] drop-shadow-lg">32 likes</span>
        <button className="ml-auto  hover:-translate-y-[0.5px] hover:sepia active:sepia focus:sepia">
          <img
            src="/src/images/icons8-tag-64.png"
            alt=""
            className="w-6 drop-shadow-lg"
          />
        </button>
      </div>
      <button className="text-[13px] text-ash">comments</button>
    </div>
  );
};

export default Post;
