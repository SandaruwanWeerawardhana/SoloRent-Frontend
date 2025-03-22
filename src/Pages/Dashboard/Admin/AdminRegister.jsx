import React, { useState } from "react";

function AdminRegister() {
  const [inputData, setinputData] = useState({
    name: "",
    nic: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setinputData({ ...inputData, [e.target.name]: e.target.value });
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
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData),
        redirect: "follow",
      };
  
      const response = await fetch("http://localhost:8080/api/solorent/admin/add", requestOptions);
      
      if (response.ok) {
        alert("Admin registered successfully!");
      } else {
        const errorText = await response.text();
        console.error("Server error:", errorText);
        alert("Failed to register admin.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error registering admin.");
    }
  };

  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 text-center md:text-2xl dark:text-white">
                Register New Admin
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
                    name="email"
                    value={inputData.email}
                    onChange={handleChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Email"
                    required=""
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={inputData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="text"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    NIC
                  </label>
                  <input
                    type="text"
                    name="nic"
                    value={inputData.nic}
                    onChange={handleChange}
                    placeholder="NIC"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    value={inputData.password}
                    onChange={handleChange}
                    placeholder="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={inputData.confirmPassword}
                    onChange={handleChange}
                    placeholder="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="flex items-center justify-between mt-6">
                  <button
                    type="submit"
                    class="text-white bg-[#2557D6] hover:bg-[#2057D6] focus:ring-4 focus:ring-[#2557D6]/50font-medium rounded-lg text-4sm px-5 py-2.5  items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2 w-full text-center dark:bg-[#2557D6] dark:hover:bg-[#2057D6] dark:focus:ring-[#2557D6]/50"

                  >
                    ADD
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminRegister;
