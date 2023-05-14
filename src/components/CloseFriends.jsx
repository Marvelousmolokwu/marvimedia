const CloseFriends = ({ user }) => {
  return (
    <div className="flex gap-3 my-2 items-center px-4 hover:bg-blulish hover:py-1 sm:gap-1 lg:px-10">
      <div className=" py-1  mr-2 ">
        <img
          src={user.profilePicture}
          alt=""
          className="rounded-full w-8 h-8 "
        />
      </div>
      <p className="font-semibold sm:text-[14px] lg:text-[18px]">
        {user.userName}
      </p>
    </div>
  );
};

export default CloseFriends;
