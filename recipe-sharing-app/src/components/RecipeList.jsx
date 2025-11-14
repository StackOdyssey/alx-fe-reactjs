import { Link } from "react-router-dom";
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes.length > 0 
    ? state.filteredRecipes 
    : state.recipes
  );

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div className="space-y-4">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border p-4 rounded shadow">
          <h3 className="font-bold text-lg">
            <Link to={`/recipe/${recipe.id}`} className="text-blue-600 hover:underline">
              {recipe.title}
            </Link>
          </h3>
          <p>{recipe.description}</p>

          <div className="mt-2">
            <Link 
              to={`/edit/${recipe.id}`} 
              className="text-sm text-green-600 hover:underline"
            >
              Edit Recipe
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
