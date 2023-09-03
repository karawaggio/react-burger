import { useState, useEffect } from 'react';
import AppHeader from '../app-header/AppHeader';
import { BurgerIngredients } from '../burger-ingredients/BurgerIngredients';
import BurgerConstructor from '../burger-constructor/BurgerConstructor';
import { getIngredients } from '../../api/ingredients/getIngredients';
import type { Ingredients } from '../burger-ingredients/BurgerIngredients';
import './App.css';

const App = () => {
  const [ingredients, setIngredients] = useState<Array<Ingredients>>(
    [] as Array<Ingredients>
  );
  const [err, setErr] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const request = async () => {
        let data: any;
        data = await getIngredients();

        if (!data.success) {
          setErr("there was an error");
          return;
        } else {
          setIngredients(data.data);
        }
      };

      setLoading(true);
      request();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <AppHeader />
      {err}
      <main className="mb-10 ml-10 mr-10">
        {loading ? (
          <div>is Loading</div>
        ) : (
          <section>
            <BurgerIngredients ingredients={ingredients.length > 0 ? ingredients : []} />
            <BurgerConstructor ingredients={ingredients.length > 0 ? ingredients : []} />
          </section>
        )}
      </main>
    </div>
  )
}

export default App;
