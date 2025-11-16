import { useRecipeStore } from '../store/recipeStore';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recommended for You</h2>

      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded mb-2">
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-blue-600 hover:underline"
            >
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
