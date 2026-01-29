import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import { Link } from "react-router-dom";

function RecipeList() {

  const { recipes } = useContext(RecipesContext);

  return (
  <div className="recipes-grid">
      <h2>רשימת מתכונים</h2>

      {recipes.map(recipe => (
        <div className="recipe-card" key={recipe.id}>
          <h3>{recipe.name}</h3>
          <p>זמן הכנה: {recipe.time} דקות</p>
          <p>קטגוריה: {recipe.category}</p>

<Link to={`/recipe/${recipe.id}`}>
            לצפייה במתכון
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
