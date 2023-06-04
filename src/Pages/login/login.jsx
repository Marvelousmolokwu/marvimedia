import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [seepassword, setSeepassword] = useState(false);

  const name = useRef();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    const username = name.current.value;
    navigate(`/home?username=${username}`);
  };

  return (
    <>
      <main className="bg-blulish min-h-screen flex py-20 items-center justify-center  ">
        <div className="bg-blue h-48 w-48 absolute rounded-full top-0 right-0 -mr-12 -mt-12 lg:h-72 lg:w-72 "></div>
        <div className=" max-w-[80%] mx-auto flex-col  items-center">
          <div className="py-10 ">
            <h1 className="font-bold text-5xl text-blue leading-10">
              MarviMedia
            </h1>
            <p className="font-semibold text-2xl leading-10 mt-2">
              Connect with friends all around the world.
            </p>
          </div>
          <form
            className="flex flex-col gap-2 border-2 border-blue p-4 rounded-lg text-blue  "
            onSubmit={handleClick}
          >
            <h2 className="font-bold text-xl text-blue">Log in</h2>
            <label htmlFor="email">Username</label>
            <input
              type="text"
              name="email"
              placeholder="username"
              className="p-2 w-full rounded-lg"
              ref={name}
            />
            <label htmlFor="password">Password</label>
            <div
              className="flex items-center
               bg-white rounded-lg pr-2 hover:border-2 hover:border-black "
            >
              <input
                type={seepassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="p-2  w-full rounded-lg outline-none"
                id="password"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSeepassword(!seepassword);
                }}
              >
                {seepassword ? (
                  <img
                    src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685724252/icons8-eye-48_pg1lco.png"
                    alt="eye"
                    className="w-6 h-6 cursor-pointer"
                  />
                ) : (
                  <img
                    src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685725815/icons8-eye-64_pjw7pc.png"
                    alt="eye"
                    className="w-6 h-6 cursor-pointer"
                  />
                )}
              </button>
            </div>

            <input
              type="submit"
              className="p-2 bg-blue  w-full cursor-pointer rounded-lg text-white"
            />

            <label htmlFor="">Forgot password?</label>
            <div className="flex justify-center">
              <Link to="/">
                <button className="bg-lightBlue p-2 mt-3 w-full rounded-lg text-white">
                  Create an Account
                </button>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
