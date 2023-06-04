import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Rightbar from "../../components/Rightbar";
import Feeds from "../../components/Feeds";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [sidenav, setSideNav] = useState(false);
  const [rightnav, setRightNav] = useState(false);
  const menuRef = useRef();

  function handleNavClick() {
    setSideNav(false);
    setRightNav(!rightnav);
  }

  function handleSideClick() {
    setRightNav(false);
    setSideNav(!sidenav);
  }

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setRightNav(false);
        setSideNav(false);
        console.log(e.target);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <Topbar />
      <main className="overflow-hidden">
        <Sidebar
          sidenav={sidenav}
          handleClick={handleSideClick}
          menuRef={menuRef}
        />
        <Feeds />
        <Rightbar
          rightnav={rightnav}
          handleClick={handleNavClick}
          menuRef={menuRef}
        />
      </main>
    </>
  );
};

export default Home;
