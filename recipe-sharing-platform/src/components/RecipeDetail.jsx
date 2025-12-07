import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find recipe by ID from imported JSON
    const found = data.find((r) => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Recipe not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        {/* Ingredients Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>

        {/* Instructions Section */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}

export default RecipeDetail;