import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Recipe from "./recipe";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [signUpForm, setSignUpForm] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("http://localhost:3000/");

        setRecipes(data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    getRecipes();
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      setIsLoggedin(true);
    }
  }, []);

  function validateForm() {
    if (searchQuery.length == 0) {
      return false;
    }

    return true;
  }

  const updateSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearForm = () => {
    setSearchQuery("");
  };

  const signUp = () => {
    setSignUpForm(!signUpForm);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const isValidForm = validateForm();
    if (isValidForm) {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/search?query=" + searchQuery
        );
        console.log(data);
        setRecipes(data);
      } catch (error) {
        console.error(error.message);
      }
      clearForm();
    }
  };

  return (
    <>
      <nav className="bg-white border-gray-100 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DTTMf2fuJTTHCbMoh_BYhtUkcaiXFr60SIJxryzWVVg9aLIOPE49jcD1n61-qsrlvaQ&usqp=CAU"
              class="h-8"
              alt="First Logo"
              height="500px"
              weight="1000px"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-dark">
              Firsts
            </span>
          </a>
          <div class="flex md:order-3 ">
            <div class="relative hidden md:block ">
              <form className="search-form" onSubmit={handleSearch}>
                <input
                  className="search-bar"
                  type="text"
                  value={searchQuery}
                  onChange={updateSearchQuery}
                />

                <div className="absolute inset-y-0 start-40 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-dark dark:text-dark"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span class="sr-only">Search icon</span>
                </div>
                <div className="">
                  <button className="search-button " type="submit">
                    Search
                  </button>
                  {!isLoggedin ? (
                    <>
                      <Link
                        className="mx-4 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-dark dark:hover:bg-gray-700 dark:hover:text-dark md:dark:hover:bg-transparent dark:border-gray-700"
                        to="login"
                      >
                        Login
                      </Link>
                      <Link
                        className="mx-4 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-dark dark:hover:bg-gray-700 dark:hover:text-dark md:dark:hover:bg-transparent dark:border-gray-700"
                        to="SignUp"
                      >
                        SignUp
                      </Link>
                    </>
                  ) : (
                    <Link
                      className="mx-4 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-dark dark:hover:bg-gray-700 dark:hover:text-dark md:dark:hover:bg-transparent dark:border-gray-700"
                      to="Dashboard"
                    >
                      Dashboard
                    </Link>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div>
            <ul class="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  md:bg-dark ">
              {isLoggedin && (
                <li>
                  <Link
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-dark dark:hover:bg-gray-700 dark:hover:text-dark md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                    to="add-recipe"
                  >
                    Add a Recipe
                  </Link>
                </li>
              )}
              <li>
                <Link
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-dark dark:hover:bg-gray-700 dark:hover:text-dark md:dark:hover:bg-transparent dark:border-gray-700"
                  to="digestion"
                >
                  My Child
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-dark md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-dark md:dark:hover:bg-transparent dark:border-gray-700"
                  to="nutrition"
                >
                  Nutrition
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="App">
        {recipes.length === 0 && (
          <div className=" w-full h-full flex justify-center items-center flex-col my-12">
            <h1 className="text-2xl"> Recipe not Found!</h1>
            <Link
              type="button"
              className="btn  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-fit"
              to="/add-recipe"
            >
              Add a Recipe
            </Link>
          </div>
        )}
        <div
          className="recipe  gap-y-4"
          style={{ display: "grid ", gridTemplateColumns: "1fr 1fr 1fr " }}
        >
          {loading && <div>Loading</div>}

          {!loading &&
            recipes.map((recipe, id) => {
              return (
                <div
                  className="h-full w-full border border-gray-detailBorder pb-2 px-1 mt-4  mx-10 flex flex-col items-center text-center  max-w-sm rounded overflow-hidden shadow-lg "
                  style={{ backgroundColor: "rgb(196, 219, 195)" }}
                  key={id}
                >
                  <div className="mt-2 mb-2">
                    <>{recipe.title}</>
                  </div>
                  <div>
                    <img
                      className="w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                      src={recipe.recipeImageURL}
                      alt=""
                      style={{ height: "350px", width: "350px" }}
                    />
                  </div>
                  <Link className="" to={`seemore/${recipe._id}`}>
                    <button
                      type="button"
                      className="my-6 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      See More
                    </button>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>

      <footer className="bg-dark ">
        <div class="mx-auto mt-32 w-full max-w-screen-xl  p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DTTMf2fuJTTHCbMoh_BYhtUkcaiXFr60SIJxryzWVVg9aLIOPE49jcD1n61-qsrlvaQ&usqp=CAU"
                  class="h-8 me-1"
                  alt="Firsts Logo"
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                  Firsts
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-6 sm:gap-8 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                  About
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium ml-12">
                  <li class="mb-4 ">
                    <a href="/about" class="hover:underline">
                      Firsts
                    </a>
                  </li>
                  <li>
                    <a href="/nutrition" class="hover:underline">
                      Nutrition
                    </a>
                  </li>
                </ul>
              </div>
              <div className="-ml-4">
                <h2 class="mb-6 -ml-4 text-sm font-semibold text-gray-900 uppercase dark:text-black">
                  Follow us
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium ml-8">
                  <li class="mb-4">
                    <a
                      href="https://www.instagram.com/accounts/login/?hl=en"
                      class="hover:underline "
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/login"
                      class="hover:underline"
                    >
                      Tiktok
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 -ml-24  text-sm font-semibold text-gray-900 uppercase dark:text-black">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium ">
                  <li class="mb-4  ">
                    <a href="/privacy" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="">
                    <a href="/terms" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://flowbite.com/" class="hover:underline">
                Firsts™
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-black"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>

              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-black ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
