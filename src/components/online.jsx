const Online = ({ user }) => {
  console.log(user);
  return (
    <div className="mt-3 hover:bg-blulish hover:py-1 px-0 hover:rounded-md hover:delay-100">
      <div className="flex items-center relative my-2">
        <div>
          <div className="h-4 w-4 rounded-full bg-green-400 border-white border-2 absolute left-[23px]  z-10"></div>
          <div className="  p-1 mr-2  ">
            <img
              src={user.profilePicture}
              alt="profile-pic"
              className="rounded-full w-8 h-8"
            />
          </div>
        </div>
        <p className="font-semibold">{user.userName}</p>
      </div>
    </div>
  );
};

export default Online;
