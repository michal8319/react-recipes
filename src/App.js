  import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from './components/AppBar';
import Home from "./pages/home";
import Recipes from "./pages/RecipeList";
import RecipeDetails from "./pages/recipeDetails";
import Login from "./pages/login";
import { RecipesProvider } from "./context/RecipesContext";
import { UserProvider } from './context/UserContext';



function App() {
  return (
    <UserProvider>
<BrowserRouter>
   <AppBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes/>} />
        <Route path="/recipe/:id" element={<RecipeDetails/>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
        </UserProvider>
    )
  }
export default App;
