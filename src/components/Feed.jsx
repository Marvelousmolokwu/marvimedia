import Post from "./post";
import Shares from "./shares";

const Feed = () => {
  return (
    <>
      <section className="sm:max-w-[70%] ml-auto lg:max-w-[50%] lg:ml-[20%] ">
        <Shares />
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
    </>
  );
};

export default Feed;
