import { useRecipeStore } from './recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes.find((r) => r.id === recipeId);

  const [editing, setEditing] = useState(false);

  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFav = favorites.includes(recipeId);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="p-4">
      {!editing ? (
        <>
          <h1 className="text-2xl font-bold">{recipe.title}</h1>
          <p className="mt-2">{recipe.description}</p>

          {/* Favorite / Unfavorite Button */}
          <button
            onClick={() =>
              isFav ? removeFavorite(recipeId) : addFavorite(recipeId)
            }
            className="bg-blue-600 text-white px-3 py-1 rounded mt-3 mr-2"
          >
            {isFav ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>

          {/* Edit Button */}
          <button
            onClick={() => setEditing(true)}
            className="bg-yellow-500 text-white px-3 py-1 rounded mt-3 mr-2"
          >
            Edit
          </button>

          {/* Delete Button */}
          <DeleteRecipeButton id={recipe.id} />
        </>
      ) : (
        <EditRecipeForm recipe={recipe} onClose={() => setEditing(false)} />
      )}
    </div>
  );
};

export default RecipeDetails;
