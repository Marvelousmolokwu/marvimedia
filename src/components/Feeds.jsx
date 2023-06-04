import Post from "./post";
import Shares from "./shares";
import Posts from "../../src/components/data/Posts.json";

const Feeds = ({ profile }) => {
  return (
    <>
      <section
        className={`sm:max-w-[70%] ${profile ? "mt-0" : "mt-32"} p-4 ${
          profile ? "lg:mt-0" : "lg:mt-28"
        } ml-auto lg:max-w-[50%] lg:ml-[20%] bg-white `}
      >
        <Shares />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </>
  );
};

export default Feeds;
