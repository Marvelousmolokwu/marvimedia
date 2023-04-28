import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Rightbar from "../../components/Rightbar";
import Feed from "../../components/Feed";
import { useState } from "react";

const Home = () => {
  const [sidenav, setSideNav] = useState(false);
  const [rightnav, setRightNav] = useState(false);

  function handleNavClick() {
    setSideNav(false);
    setRightNav(!rightnav);
  }

  function handleSideClick() {
    setRightNav(false);
    setSideNav(!sidenav);
  }

  return (
    <>
      <Topbar />
      <main className="overflow-hidden ">
        <Sidebar sidenav={sidenav} handleClick={handleSideClick} />
        <Feed />
        <Rightbar rightnav={rightnav} handleClick={handleNavClick} />
      </main>
    </>
  );
};

export default Home;
