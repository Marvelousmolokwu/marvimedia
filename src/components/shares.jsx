import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { format } from "timeago.js";

const Shares = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState();
  const [posts, setPosts] = useState([]);

  const [like, setLiike] = useState(0);
  const [islike, setIsLike] = useState(false);
  const likeHandler = () => {
    setLiike(islike ? like - 1 : like + 1);
    setIsLike(!islike);
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const username = queryParams.get("username");

  const handlePost = (e) => {
    e.preventDefault();
    const id = posts.length + 1;

    if (message.trim() !== "") {
      const newPost = {
        id: id,
        desc: message,
        image: file,
      };

      setPosts((prevPosts) => [...prevPosts, newPost]);
      setMessage("");
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="max-w-[90%] mx-auto shadow-md p-3 my-4 -z-10 sm:p-2 lg:p-6">
        <div className="flex items-center my-4">
          <Link to="/profile">
            <div className="cursor-pointer rounded-full w-12 h-12 p-1 mr-2 bg-profile bg-cover bg-center object-cover"></div>
          </Link>
          <input
            type="text"
            placeholder={`Post something ${username ? username : "User"}...`}
            className="focus:outline-none"
            value={message}
            onChange={handleChange}
          />
        </div>

        <hr />

        <div className="flex justify-between   my-4">
          <div className="flex font-semibold gap-6  text-[10px] lg:gap-4 lg:text-[12px]">
            <div className="flex items-center">
              <img
                src="/src/images/icons8-location-50.png"
                alt=""
                className="h-6 w-6 lg:h-10 lg:w-10"
              />
              <span>Location</span>
            </div>
            <div className="flex items-center">
              <img
                src="/src/images/icons8-emojis-53.png"
                alt=""
                className="h-6 w-6 lg:h-10 lg:w-10"
              />
              <span>Feelings</span>
            </div>
            <label htmlFor="file" className="flex items-center cursor-pointer">
              <img
                src="/src/images/icons8-media-48.png"
                alt=""
                className="h-6 w-6 lg:h-10 lg:w-10"
              />

              <h1 className="">post a Photo</h1>

              <input
                type="file"
                name="file"
                id="file"
                accept=".jpg,.png,.jpeg,.avif"
                className="hidden w-0"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>

          <div>
            <button
              onClick={handlePost}
              className="px-2 py-1  bg-lightBlue text-white font-semibold rounded-md transition hover:bg-white hover:text-lightBlue hover:border-2 hover:border-skyBlue hover:delay-200 lg:px-4"
            >
              Post
            </button>
          </div>
        </div>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div className="max-w-[90%] mx-auto shadow-lg p-3 my-6 ">
              <div className="flex gap-2 items-center">
                <div className="  p-1 mr-2 flex justify-center items-center ">
                  <img
                    src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685221470/noAvatar_shqgsk.png"
                    alt="profile-pic"
                    className="rounded-full w-8 h-8 block"
                  />
                </div>
                <h3 className="font-bold">{username ? username : "User"}</h3>
                <p className="text-[12px]">{format()}</p>
                <img
                  src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646465/icons8-menu-24_yiadu6.png"
                  alt=""
                  className="h-4 ml-auto cursor-pointer "
                />
              </div>
              <h3 className="my-4">{post.desc}</h3>
              <div className="h-[40vh] lg:h-[60vh]">
                {post.image && (
                  <img
                    src={URL.createObjectURL(post.image)}
                    alt=""
                    className="h-full w-full"
                  />
                )}
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
              <button className="text-[13px] text-ash">
                {post.comment} comments
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Shares;
