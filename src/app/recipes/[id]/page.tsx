import {fetchData} from "@/api/fetchData";
import ErrorState from "@/components/errorState";
import {Suspense} from "react";
import Loader from "@/components/loader";

async function RecipeDetail({ params }: { params: { id: string } }) {
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`;

    const recipeData = await fetchData(apiUrl);

    if (!recipeData) {
      return <ErrorState/> ;
    }

    return (
      <div className="w-full bg-gradient-to-b from-gray-900 to-black overflow-y-hidden">
        <div className="max-w-4xl mx-auto p-6 ">
          <h1 className="text-4xl font-extrabold text-gray-200">
            {recipeData.title}
          </h1>
          <div className="mt-4 shadow-lg rounded-xl overflow-hidden">
            <img
              src={recipeData.image}
              alt={recipeData.title}
              className="w-full h-72 object-cover"
            />
          </div>
          <div className="flex flex-wrap gap-4 mt-4 text-gray-400 text-lg">
            <p>
              <strong>⏱ Сooking time:</strong> {recipeData.readyInMinutes} min
            </p>
            <p>
              <strong>👥 Number of servings:</strong> {recipeData.servings}
            </p>
          </div>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            {recipeData.summary.replace(/<[^>]*>/g, "")}
          </p>
          <h2 className="text-2xl font-semibold mt-8 text-gray-200">
            🛒 Ingredients
          </h2>
          <ul className="mt-4 list-disc pl-6 text-gray-400 text-lg">
            {recipeData.extendedIngredients.map((ingredient: any) => (
              <li key={ingredient.id} className="border-b py-2">
                {ingredient.original}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mt-8 text-gray-200">
            👨‍🍳 Instructions
          </h2>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            {recipeData.instructions
              ? recipeData.instructions.replace(/<[^>]*>/g, "")
              : "No instructions."}
          </p>
        </div>
      </div>
    );
}

const SuspenseWrapper = (props: any) => {
    return (
        <Suspense fallback={<Loader/>}>
            <RecipeDetail {...props} />
        </Suspense>
    );
};

export default SuspenseWrapper;