import React, { useState } from 'react';
import AppHeader from '../app-header/AppHeader'
import BurgerIngredients from '../burger-ingredients/BurgerIngredients'
import BurgerConstructor from '../burger-constructor/BurgerConstructor'
import ingredientsData from './ingredientsData';
import './App.css'

const App = () => {
   const [ingredients] = useState(ingredientsData);
  
   return (
   <div className="App">
      <AppHeader/>
      <main>
         <BurgerIngredients ingredients={ingredients}/>
         <BurgerConstructor ingredients={ingredients}/>
      </main>
   </div>
   );
}

export default App;
