import { useParams } from "react-router-dom";
import { RecipesContext } from "../context/RecipesContext";
import { useContext, useEffect, useState } from "react";


function RecipeDetails() {
  const { id } = useParams();
const { recipes, toggleFavorite } = useContext(RecipesContext);
  const [recipe, setRecipe] = useState(null);


  useEffect(() => {
  const foundRecipe = recipes.find(
    r => r.id === Number(id)
  );
  setRecipe(foundRecipe);
  }, [id, recipes]);

  if (!recipe) return <p>לא נמצא מתכון</p>;
  return (
  <div className="details">
      <h2>{recipe.name}</h2>
      <p>זמן הכנה: {recipe.time}</p>
      <p>קטגוריה: {recipe.category}</p>

      <h4>רכיבים:</h4>
      <ul>
        {recipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button onClick={() => toggleFavorite(recipe.id)}>
        {recipe.isFavorite ? "⭐ מועדף" : "☆ הוסף למועדפים"}
      </button>
    </div>
  );
}
export default RecipeDetails