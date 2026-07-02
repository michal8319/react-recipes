# Recipe Management Web Application (React)

A full-featured, responsive web application for managing, filtering, and discovering recipes. Built using modern React.js patterns including Context API for state management and React Router for navigation.

##  Key Features

- **Dynamic Navigation (AppBar):** A global navigation bar providing seamless routing across the application.
- **Home Dashboard:** An inviting landing page displaying custom platform visuals.
- **Recipe Catalog (`RecipeList`):** Displays recipe cards with essential metadata such as preparation time and categories. Clicking any card navigates to its dedicated details view.
- **Detailed Recipe View (`RecipeDetails`):** Extracts structural parameters dynamically to display complete ingredients, structured instructions, and preparation properties. Includes an interactive option to toggle the recipe as a "Favorite".
- **User Authentication (`Login`):** A secure, interactive form capturing user data (Name & Email) and updating the global context state upon submission.

##  Architecture & State Management

- **Global State (Context API):** Centralized data handling using `useContext` to maintain and modify the structural list of recipes globally.
- **Recipe Schema Structure:** Each recipe object encapsulates a unique identifier, title, preparation duration, structural arrays for ingredients, categorization properties, and boolean flags for favorite states.
- **Dynamic Routing:** Implements standard route parameters handled via `useParams` and lifecycle side-effects optimized with `useEffect` for data retrieval.

##  Tech Stack

- **Frontend Framework:** React.js (Hooks, Context API)
- **Routing:** React Router DOM
- **Languages:** JavaScript (ES6+), HTML5, CSS3

##  Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/michal8319/react-recipes.git](https://github.com/michal8319/react-recipes.git)
