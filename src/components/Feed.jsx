import Post from "./post";
import Share from "./share";

const Feed = () => {
  return (
    <>
      <section className="sm:max-w-[70%] ml-auto lg:max-w-[50%] lg:ml-[20%] ">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
    </>
  );
};

export default Feed;
