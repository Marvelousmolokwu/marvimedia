const CloseFriends = ({ user }) => {
  return (
    <div className="flex gap-3 my-2 items-center px-2 hover:bg-blulish hover:py-2 lg:px-8 mx-2 hover:rounded-md hover:delay-100 sm:gap-1 ">
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
