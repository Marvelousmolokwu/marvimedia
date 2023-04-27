import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Rightbar from "../../components/Rightbar";
import Feed from "../../components/Feed";

const Home = () => {
  return (
    <>
      <Topbar />
      <main className="overflow-hidden">
        <Sidebar />
        <Feed />
        <Rightbar />
      </main>
    </>
  );
};

export default Home;
