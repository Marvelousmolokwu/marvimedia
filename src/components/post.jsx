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
          src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646465/icons8-menu-24_yiadu6.png"
          alt=""
          className="h-4 ml-auto cursor-pointer "
        />
      </div>
      <h3 className="my-4">{post?.desc}</h3>
      <div className="h-[40vh] lg:h-[60vh]">
        <img src={post.photo} alt="" className="h-full w-full" />
      </div>
      <div className="flex mt-3 items-center gap-2">
        <button
          className="hover:-translate-y-[0.5px] hover:sepia active:sepia focus:sepia"
          onClick={likeHandler}
        >
          <img
            src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646461/icons8-like-64_jehqlj.png"
            alt=""
            className="w-6 drop-shadow-lg"
          />
        </button>
        <button className="hover:-translate-y-[0.5px] hover:sepia active:sepia focus:sepia">
          <img
            src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646474/icons8-speech-bubble-50_b7xble.png"
            alt=""
            className="w-6 drop-shadow-lg"
          />
        </button>

        <span className="text-[12px] drop-shadow-lg">{like}</span>
        <button className="ml-auto  hover:-translate-y-[0.5px] hover:sepia active:sepia focus:sepia">
          <img
            src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646468/icons8-tag-64_dcohno.png"
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
