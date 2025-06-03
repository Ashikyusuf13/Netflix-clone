import React, { useState, useEffect } from "react";
import backgroud_banner from "../assets/background_banner.jpg";
import { useNavigate } from "react-router-dom";
import { signup, login, signInWithGoogle } from "../Firebase";
import { toast } from "react-toastify";
import load_icon from "../assets/netflix_spinner.gif";
import { auth } from "../Firebase"; // Import auth from Firebase

const Login = () => {
  const [state, setState] = useState("Sign In"); // "Sign In" or "Sign Up"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const chech_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (state === "Sign In") {
        const log = await login(email, password);
        if (log) {
          toast.success("Logged in");
        }
      } else {
        const sign = await signup(name, email, password);
        if (sign) {
          toast.success("You signed up");
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    const user = await signInWithGoogle();
    setLoading(false);
    if (user) {
      navigate("/");
    } else {
      toast.error("Google sign-in failed or was cancelled");
    }
  };

  return (
    <>
      {loading ? (
        <div className="w-full h-screen bg-gray-800 flex justify-center items-center flex-col ">
          <img
            src={load_icon}
            alt=""
            className="w-35 h-30 rounded-full  mb-9"
          />
          <p className="text-2xl">Please wait.......</p>
        </div>
      ) : (
        <div className="relative w-full h-screen">
          <img
            src={backgroud_banner}
            alt=""
            className="w-full h-screen object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 w-35 h-10 top-4">
            <img src={null} alt="" />
          </div>

          <div className="relative m-auto rounded-lg w-90  bg-black bg-opacity-85 max-w-md h-auto z-10 flex justify-center items-center flex-col">
            <form onSubmit={chech_auth} className="w-full px-8 py-6">
              <h2 className="text-2xl flex justify-center items-center m-2 mt-8">
                {state === "Sign In" ? "Login" : "Sign Up"}
              </h2>
              <div className="flex justify-center flex-col">
                {state === "Sign Up" && (
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Your Name"
                    className="border px-4 italic rounded-lg mt-3 py-2 bg-gray-600 outline-none text-black"
                    required
                  />
                )}
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email"
                  className="border px-4 italic rounded-lg bg-gray-600 outline-none text-black mt-3 py-2"
                  required
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="border px-4 italic rounded-lg bg-gray-600 outline-none text-black mt-3 mb-3 py-2"
                  required
                />
              </div>
              <div>
                <input type="checkbox" id="check" />
                <label htmlFor="check"> Remember me</label>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-red-600 cursor-pointer p-3 mt-3 mb-2 hover:bg-red-800"
              >
                {state === "Sign In" ? "Login" : "Sign Up"}
              </button>
              <div className="text-sm gap-2 mb-3 ">
                {state === "Sign In" ? (
                  <p className="mb-2">
                    Don't have an account?
                    <span
                      onClick={() => setState("Sign Up")}
                      className="hover:text-red-700 cursor-pointer italic underline ml-1"
                    >
                      Sign Up
                    </span>
                  </p>
                ) : (
                  <p>
                    Already have an account?
                    <span
                      onClick={() => setState("Sign In")}
                      className="hover:text-red-700 cursor-pointer italic underline ml-1"
                    >
                      Sign In
                    </span>
                  </p>
                )}
              </div>
            </form>
          </div>

          <div className="absolute m-auto ml-7 h-20  md:ml-115 z-70">
            <button
              onClick={() => handleGoogleLogin()}
              className="flex justify-center items-center w-85  h-15 rounded-xl bg-white text-black hover:bg-blue-200 gap-3 p-3 mt-4  cursor-pointer"
            >
              <i className="bx bxl-google text-2xl"></i>
              Sign With Google
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
