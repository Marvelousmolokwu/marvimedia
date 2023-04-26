import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Rightbar from "../../components/Rightbar";
import Feed from "../../components/Feed";

const Home = () => {
  return (
    <>
      <Topbar />
      <main className="overflow-y-hidden">
        <Sidebar />
        <Rightbar />
        <Feed />
      </main>
    </>
  );
};

export default Home;
