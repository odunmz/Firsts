import React, { useEffect, useState } from "react";
import DashboardTile from "./DashboardTile";
import SideBar from "./Sidebar";
import { BiFoodMenu } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import axios from "axios";
import { Card } from "flowbite-react";

const Dashboard = () => {
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [statistics, setStatistics] = useState({
    allRecipeCount: 0,
    allUsersRecipeCount: 0,
  });
  const [lastRecipes, setLastRecipes] = useState([]);
  const logout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      setUserInfo(user);

      const getRecipes = async () => {
        const stats = await axios.get(
          `http://localhost:3000/stats/dashboard?userId=${user._id}`
        );
        if (stats.data && stats.status === 200) {
          setStatistics(stats.data);
        }
      };
      getRecipes();
    }
  }, []);

  useEffect(() => {
    const statRecipes = async () => {
      const statLastRecipe = await axios.get(
        `http://localhost:3000/stats/lastrecipes`
      );
      if (statLastRecipe.data && statLastRecipe.status === 200) {
        setLastRecipes(statLastRecipe.data.lastRecipes);
        console.log(statLastRecipe.data);
      }
    };
    statRecipes();
  }, []);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span class="sr-only">Open sidebar</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" class="flex ms-2 md:me-24">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DTTMf2fuJTTHCbMoh_BYhtUkcaiXFr60SIJxryzWVVg9aLIOPE49jcD1n61-qsrlvaQ&usqp=CAU"
                  class="h-8"
                  alt="First Logo"
                  height="500px"
                  weight="1000px"
                />
                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Firsts
                </span>
              </a>
            </div>
            <div class="flex items-center">
              <div class="flex items-center ms-3">
                <div onClick={() => setShowDropDownMenu(!showDropDownMenu)}>
                  <button
                    type="button"
                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://img.freepik.com/free-vector/nice-people-user-avatar-flat-style_23-2147544491.jpg?ga=GA1.1.907657128.1721151575&semt=ais_hybrid"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  class={`z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-1 top-8 ${
                    showDropDownMenu ? "" : "hidden"
                  }`}
                  id="dropdown-user"
                >
                  <div class="px-4 py-3" role="none">
                    <p
                      class="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      {userInfo.userName}
                    </p>
                    <p
                      class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      {userInfo.email}
                    </p>
                  </div>
                  <ul class="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Recipes
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                        onClick={logout}
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <SideBar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/*Starts Here */}
            <DashboardTile>
              <div class="flex items-center w-full min-h-full">
                <div class="p-4 bg-green-400 h-full">
                  <BiFoodMenu className="h-12 w-12 text-white" />
                </div>
                <div class="px-4 text-gray-700 flex items-center flex-col">
                  <h3 class="text-sm tracking-wider">All Recipes</h3>
                  <p class="text-3xl">{statistics.allRecipeCount}</p>
                </div>
              </div>
            </DashboardTile>
            <DashboardTile>
              <div class="flex items-center w-full min-h-full">
                <div class="p-4 bg-green-400 h-full">
                  <IoFastFood className="h-12 w-12 text-white" />
                </div>
                <div class="px-4 text-gray-700 flex items-center flex-col">
                  <h3 class="text-sm tracking-wider">User's Recipes</h3>
                  <p class="text-3xl">{statistics.allUsersRecipeCount}</p>
                </div>
              </div>
            </DashboardTile>
          </div>

          <div className="flex justify-start mt-10 mb-4">
            <h2 className="text-2xl">Recent Recipes</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {lastRecipes.map((recipe, id) => {
              return (
                <DashboardTile>
                  <div class="flex items-center w-full min-h-full">
                    <div class=" h-full">
                      <img
                        className="w-full transition-all duration-300 rounded-lg  "
                        src={recipe.recipeImageURL}
                        alt=""
                        style={{ height: "100px", width: "100px" }}
                      />
                    </div>
                    <div class="px-4 text-gray-700 flex  flex-col">
                      <h3 class="text-lg tracking-wider">{recipe.title}</h3>
                      <p class="text-sm">{recipe.prepTime}</p>
                    </div>
                  </div>
                </DashboardTile>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
