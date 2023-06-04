import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [seepassword, setSeepassword] = useState(false);
  const [seepasswordAgain, setSeepasswordAgain] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const passwordInput = useRef(null);
  const passwordAgainInput = useRef(null);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordAgainChange = (e) => {
    setPasswordAgain(e.target.value);
  };
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (password !== passwordAgain) {
      setPasswordMatch(false);
      passwordInput.current.focus();
    } else {
      setPasswordMatch(true);
      console.log("Registration success!");
      navigate("/login");
    }
  };
  return (
    <>
      <main className="overflow-hidden">
        <section className="bg-blulish flex items-center justify-center min-h-screen pt-16 lg:pt-10 pb-10 ">
          <div className="bg-blue h-40 w-40 absolute rounded-full top-0 right-0 -mr-12 -mt-12 lg:h-64 lg:w-64 "></div>
          <div className=" max-w-[80%] mx-auto flex-col  items-center">
            <div className=" py-5 lg:py-2">
              <h1 className="font-bold text-5xl text-blue leading-10">
                MarviMedia
              </h1>
              <p className="font-semibold text-2xl leading-10 mt-2">
                Connect with friends all around the world.
              </p>
            </div>

            <form
              className="flex flex-col  gap-2 border-2 border-blue p-4 rounded-lg text-blue ml-2"
              onSubmit={handlesubmit}
            >
              <h2 className="font-bold text-xl text-blue">Sign Up</h2>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="p-2 w-full rounded-lg"
              />
              <label htmlFor="email">UserName</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="p-2 w-full rounded-lg"
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
                  value={password}
                  onChange={handlePasswordChange}
                  ref={passwordInput}
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

              <label htmlFor="password">Password Again</label>
              <div
                className="flex items-center
               bg-white rounded-lg pr-2 hover:border-2 hover:border-black "
              >
                <input
                  type={seepasswordAgain ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="p-2  w-full rounded-lg outline-none "
                  id="passwordAgain"
                  value={passwordAgain}
                  onChange={handlePasswordAgainChange}
                  ref={passwordAgainInput}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setSeepasswordAgain(!seepasswordAgain);
                  }}
                >
                  {seepasswordAgain ? (
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
              {!passwordMatch && (
                <p style={{ color: "red" }}>Passwords do not match</p>
              )}
              <input
                type="submit"
                value="Sign up"
                className="p-2 bg-blue  w-full cursor-pointer rounded-lg text-white"
              />

              <div className="flex justify-center">
                <Link to="/login">
                  <button className="bg-lightBlue px-6 py-2 w-full  mt-3  rounded-lg text-white">
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
