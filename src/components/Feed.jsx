import Post from "./post";
import Shares from "./shares";
import Posts from "../../src/components/data/Posts.json";

const Feed = () => {
  return (
    <>
      <section className="sm:max-w-[70%] ml-auto lg:max-w-[50%] lg:ml-[20%] ">
        <Shares />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </>
  );
};

export default Feed;
