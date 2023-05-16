import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

import Feeds from "../../components/Feeds";
import { useState } from "react";
import Rightbar from "../../components/Rightbar";

const Profile = () => {
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
        <div className="sm:ml-28 lg:max-w-[50%] lg:ml-[20%] profile">
          <div className="relative">
            <img src="/src/images/bead.avif" alt="" className="w-full h-72" />

            <img
              src="/src/images/man2.avif"
              alt=""
              className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full  outline outline-white z-20 mx-auto -m-20 "
            />
          </div>
          <div className="text-center mt-24">
            <h4 className="font-bold text-xl">Marvelous Molokwu</h4>
            <a className="text-slate-500">@marvel</a>
          </div>
        </div>

        <Feeds />
        <Rightbar profile rightnav={rightnav} handleClick={handleNavClick} />
      </main>
    </>
  );
};

export default Profile;
