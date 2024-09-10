import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./recipe";
import { useParams } from "react-router-dom";

const SeeMore = () => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getAllIdData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`http://localhost:3000/recipes/${id}`);
        console.log({ data });
        setRecipe(data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    getAllIdData();
  }, []);

  if (loading) return null;

  return (
    <>
      <div className="flex justify-center">
        <div className=" " style={{}} key={id}>
          <div>
            <img
              className=" mx-auto my-1 transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 h-auto max-w-full"
              src={recipe.recipeImageURL}
              alt=""
              style={{
                height: "600px",
                width: "900px",
                justifyContent: "center",
              }}
            />
          </div>
          <div className="mt-2 mb-2 flex justify-center text-green-500 text-lg">
            <>
              <h2>{recipe.title}</h2>
            </>
          </div>
          <div className="container px-2 py-6  " style={{ width: "600px" }}>
            <div className=" text-green-500 italic ">
              <h4 className="float-start">Ingredients:</h4>
              <p className="text-gray-700  ml-28 text-base">
                {recipe.ingredients}
              </p>
            </div>
            <div className="py-6  text-green-500 italic">
              <h4 className="float-start">
                Nutritional <br /> Information:
              </h4>
              <p className="text-gray-700 text-base ml-28">
                {recipe.nutritionalInformation}
              </p>
            </div>
            <div className="  text-green-500 py-0 italic">
              <h4 className="float-start">Instructions:</h4>
              <p className="text-gray-700 text-base ml-28 ">
                {recipe.instructions}
              </p>
            </div>
            <div className="py-4  text-green-500 italic">
              <h4 className="float-start">Prep Time:</h4>
              <p className="text-gray-700 text-base ml-28 ">
                {recipe.prepTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SeeMore;
