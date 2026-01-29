import { useState, useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const { addRecipe } = useContext(RecipesContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [category, setCategory] = useState("חלבי");

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!name || !time || !ingredients) {
      alert("אנא מלאו את כל השדות");
      return;
    }

    addRecipe({
      name,
      time: Number(time),
      ingredients: ingredients.split(",").map(item => item.trim()),
      category
    });

    setName("");
    setTime("");
    setIngredients("");
    
    alert("המתכון נוסף בהצלחה!");
    navigate("/recipes");
  }

  return (
    <div className="details">
      <h2>הוספת מתכון חדש</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="שם המתכון"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="זמן הכנה (בדקות)"
          value={time}
          onChange={e => setTime(e.target.value)}
          min="1"
          required
        />

        <input
          type="text"
          placeholder="רכיבים (מופרדים בפסיק)"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
          required
        />

        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="חלבי">חלבי</option>
          <option value="פרווה">פרווה</option>
          <option value="בשרי">בשרי</option>
        </select>

        <button type="submit">
          הוסף מתכון
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;
