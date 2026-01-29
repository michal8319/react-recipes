import { useState, useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";

function AddRecipe() {
  const { addRecipe } = useContext(RecipesContext);

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [category, setCategory] = useState("חלבי");

  function handleSubmit() {
    addRecipe({
      name,
      time: Number(time),
      ingredients: ingredients.split(","),
      category
    });

    setName("");
    setTime("");
    setIngredients("");
  }

  return (
    <div className="details">
      <h2>הוספת מתכון</h2>

      <input
        placeholder="שם מתכון"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="זמן הכנה"
        value={time}
        onChange={e => setTime(e.target.value)}
      />

      <input
        placeholder="רכיבים (מופרדים בפסיק)"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
      />

      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option>חלבי</option>
        <option>פרווה</option>
        <option>בשרי</option>
      </select>

      <button onClick={handleSubmit}>
        הוסף מתכון
      </button>
    </div>
  );
}

export default AddRecipe;
