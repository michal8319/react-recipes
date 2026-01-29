import { createContext, useState } from "react";

export const RecipesContext = createContext();

export function RecipesProvider({ children }) {

  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "פסטה",
      time: 30,
      ingredients: ["פסטה", "שמנת"],
      category: "חלבי",
      isFavorite: false
    },
    {
      id: 2,
      name: "עוף בתנור",
      time: 60,
      ingredients: ["עוף", "תבלינים"],
      category: "בשרי",
      isFavorite: false
    },
    {
      id: 3,
      name: "בשר בקר",
      time: 60,
      ingredients: ["עוף", "תבלינים"],
      category: "בשרי",
      isFavorite: false
    }
  ]);

  function toggleFavorite(id) {
    setRecipes(prev =>
      prev.map(recipe =>
        recipe.id === id
          ? { ...recipe, isFavorite: !recipe.isFavorite }
          : recipe
      )
    );
  }

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes, toggleFavorite }}>
      {children}
    </RecipesContext.Provider>
  );
}
