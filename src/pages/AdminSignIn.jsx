import React, { useEffect } from "react";
import { adminLogin, isAdmin } from "../helper";
import { useNavigate } from "react-router-dom";

const AdminSignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const adminStatus = await isAdmin();
        if (adminStatus) {
          navigate("/admin-dashboard");
        }
      } catch (error) {
        console.error("An error occurred while checking admin status:", error);
      }
    };

    checkAdminStatus();
  }, [navigate]);

  const handleSignin = async (e) => {
    e.preventDefault();
    const userId = e.target["user-id"].value;
    const password = e.target["password"].value;

    const loginInfo = { userId, password };

    console.log(loginInfo);

    try {
      const isLoggedIn = await adminLogin(loginInfo);
      if (isLoggedIn) {
        navigate("/admin-dashboard");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            FACTORY SPACE AI
          </h2>
          <h3 className="mt-2 text-center text-xl text-gray-600">
            Admin Dashboard
          </h3>
        </div>
        <form
          onSubmit={handleSignin}
          className="mt-8 space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="user-id" className="sr-only">
                User ID
              </label>
              <input
                id="user-id"
                name="user-id"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="User ID"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;
