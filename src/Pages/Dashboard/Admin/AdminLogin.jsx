import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function AdminLogin() {
  const initialState = useState({
    id: "",
    name: "",
    username: "",
    password: "",
  });

  const [inputData, setinputData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setinputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8081/login", {
        id: inputData.id,
        name: inputData.name,
        username: inputData.username,
        password: inputData.password,
      });

      console.log(response.data);

      const token = response.data.access_token;
      if (token) {
        localStorage.setItem("token", token);
        setinputData(initialState);
        navigate("/dashboard");
      } else {
        throw new Error("No token received");
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: "Admin Login Fail!",
        text: "Required Correct Username And Password",
        icon: "error",
      });
    }
  };

  return (
    <>
      <section class="bg-gray-70 dark:bg-gray-700">
        <div class="flex flex-col items-center justify-center px-6 py-5 mx-auto md:h-screen lg:py-0">
          <div class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-13 h-12 mr-2" src={logo} alt="logo" />
          </div>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Sign in for Admin Only
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="username"
                    id="email"
                    onChange={handleChange}
                    value={inputData.username}
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={inputData.password}
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  class="text-white bg-[#2557D6] hover:bg-[#2057D6] focus:ring-4 focus:ring-[#2557D6]/50font-medium rounded-lg text-sm px-5 py-2.5  items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2 w-full text-center dark:bg-[#2557D6] dark:hover:bg-[#2057D6] dark:focus:ring-[#2557D6]/50 mt-5"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminLogin;
