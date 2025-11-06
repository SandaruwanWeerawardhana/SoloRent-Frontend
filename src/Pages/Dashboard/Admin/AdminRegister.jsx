import React, { useState } from "react";
import Swal from "sweetalert2";

function AdminRegister() {
  const initialState = {
    name: "",
    username: "",
    password: "",
    role: "ADMIN",
    confirmPassword: "",
  };

  const [inputData, setInputData] = useState(initialState);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputData.password !== inputData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
        redirect: "follow",
      };

      const response = await fetch("http://localhost:8081/register",requestOptions);

      if (response.ok) {
        Swal.fire({
          title: "Admin Register Success",
          icon: "success",
        });
        setInputData(initialState);
      } else {
        Swal.fire({
          title: "Admin Register Fail!",
          text: "Required fill all text field",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Admin Register Fail!",
        text: "Required fill all text field",
        icon: "error",
      });
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 text-center md:text-2xl dark:text-white">
              Register New Admin
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email{' '}
                  <input
                    type="email"
                    name="username"
                    value={inputData.username}
                    onChange={handleChange}
                    className="mt-1 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Email"
                    required=""
                  />
                </label>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name{' '}
                  <input
                    type="text"
                    name="name"
                    value={inputData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </label>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password{' '}
                  <input
                    type="password"
                    name="password"
                    value={inputData.password}
                    onChange={handleChange}
                    placeholder="password"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </label>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm password{' '}
                  <input
                    type="password"
                    name="confirmPassword"
                    value={inputData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </label>
              </div>
              <div className="flex items-center justify-between mt-6">
                <button
                  type="submit"
                  className="text-white bg-[#2557D6] hover:bg-[#2057D6] focus:ring-4 focus:ring-[#2557D6]/50 font-medium rounded-lg text-sm px-5 py-2.5 items-center me-2 mb-2 w-full text-center dark:bg-[#2557D6] dark:hover:bg-[#2057D6]"
                >
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminRegister;
