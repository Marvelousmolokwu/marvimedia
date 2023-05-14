const Login = () => {
  return (
    <>
      <section className="bg-blulish h-screen flex items-center">
        <div className=" max-w-[80%] mx-auto flex justify-between items-center">
          <div className="w-1/2">
            <h1 className="font-bold text-5xl text-blue leading-10">
              MarviMedia
            </h1>
            <p className="font-semibold text-2xl leading-10 mt-2">
              Connect with friends all around the world.
            </p>
          </div>
          <form className="flex flex-col w-1/2 gap-2 border-2 border-blue p-4 rounded-lg text-blue ml-4">
            <h2 className="font-bold text-xl text-blue">Log in</h2>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="p-2 w-full rounded-lg"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="p-2  w-full rounded-lg"
            />

            <input
              type="submit"
              className="p-2 bg-blue  w-full cursor-pointer rounded-lg text-white"
            />
            <label htmlFor="">Forgot password?</label>
            <div className="flex justify-center">
              <button className="bg-lightBlue p-2 mt-3 w-1/2 rounded-lg text-white">
                Create an Account
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
