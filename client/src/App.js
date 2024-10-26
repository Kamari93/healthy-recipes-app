import logo from './logo.svg';
import './App.css';

// client/src/App.js
import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

// The App component will manage the recipes state and render the RecipeForm and RecipeList components.

const App = () => {
    const [recipes, setRecipes] = useState([]);

    return (
        <div className="container">
            <section className="section">
                <h1 className="title">Healthy Recipe Search</h1>
                <RecipeForm setRecipes={setRecipes} />
                <RecipeList recipes={recipes} />
            </section>
        </div>
    );
};

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
