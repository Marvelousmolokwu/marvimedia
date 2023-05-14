const Friends = ({ user }) => {
  return (
    <a className="mt-3 cursor-pointer">
      <img
        src={user.profilePicture}
        alt="friend"
        className="h-24 w-24 rounded-sm"
      />
      <h3 className="font-semibold text-lgfont-semibold text-sm">
        {user.userName}
      </h3>
    </a>
  );
};

export default Friends;
