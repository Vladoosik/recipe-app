import Link from "next/link";

export default async function RecipeDetail({ params }: { params: { id: string } }) {
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`;

    const res = await fetch(apiUrl);
    const recipeData = await res.json();

    if (!recipeData) {
        return <div className="text-center text-gray-500">No recipe found.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-extrabold text-gray-200">{recipeData.title}</h1>
            <div className="mt-4 shadow-lg rounded-xl overflow-hidden">
                <img
                    src={recipeData.image}
                    alt={recipeData.title}
                    className="w-full h-72 object-cover"
                />
            </div>
            <div className="flex flex-wrap gap-4 mt-4 text-gray-400 text-lg">
                <p><strong>⏱ Сooking time:</strong> {recipeData.readyInMinutes} min</p>
                <p><strong>👥 Number of servings:</strong> {recipeData.servings}</p>
            </div>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                {recipeData.summary.replace(/<[^>]*>/g, "")}
            </p>
            <h2 className="text-2xl font-semibold mt-8">🛒 Ingredients</h2>
            <ul className="mt-4 list-disc pl-6 text-gray-400 text-lg">
                {recipeData.extendedIngredients.map((ingredient: any) => (
                    <li key={ingredient.id} className="border-b py-2">{ingredient.original}</li>
                ))}
            </ul>
            <h2 className="text-2xl font-semibold mt-8">👨‍🍳 Instructions</h2>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                {recipeData.instructions ? recipeData.instructions.replace(/<[^>]*>/g, "") : "No instructions."}
            </p>
        </div>
    );
}
