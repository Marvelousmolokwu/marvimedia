import { useState } from "react";
import User from "../../src/components/data/User.json";

const Post = ({ post }) => {
  const [like, setLiike] = useState(post.like);
  const [islike, setIsLike] = useState(false);
  const likeHandler = () => {
    setLiike(islike ? like - 1 : like + 1);
    setIsLike(!islike);
  };
  return (
    <div className="max-w-[90%] mx-auto shadow-lg p-3 my-6 ">
      <div className="flex gap-2 items-center">
        <div className="  p-1 mr-2 flex justify-center items-center ">
          <img
            src={
              User.filter((user) => user.id === post?.userId)[0].profilePicture
            }
            alt="profile-pic"
            className="rounded-full w-8 h-8 block"
          />
        </div>
        <h3 className="font-bold">
          {User.filter((user) => user.id === post?.userId)[0].userName}
        </h3>
        <p className="text-[12px]">{post.date}</p>
        <img
          src="/src/images/icons8-menu-24.png"
          alt=""
          className="h-4 ml-auto cursor-pointer "
        />
      </div>
      <h3 className="my-4">{post?.desc}</h3>
      <div>
        <img src={post.photo} alt="" className="lg:w-full" />
      </div>
      <div className="flex mt-3 items-center gap-2">
        <button
          className="hover:-translate-y-[0.5px] hover:sepia active:sepia focus:sepia"
          onClick={likeHandler}
        >
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

        <span className="text-[12px] drop-shadow-lg">{like}</span>
        <button className="ml-auto  hover:-translate-y-[0.5px] hover:sepia active:sepia focus:sepia">
          <img
            src="/src/images/icons8-tag-64.png"
            alt=""
            className="w-6 drop-shadow-lg"
          />
        </button>
      </div>
      <button className="text-[13px] text-ash">{post.comment} comments</button>
    </div>
  );
};

export default Post;
