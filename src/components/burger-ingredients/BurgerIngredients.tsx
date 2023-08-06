import React from 'react';
import "./BurgerIngredients.css"
import IngredientCard from './IngredientCard';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = (props: { ingredients: any; }) => {
    
    const ingredients = props.ingredients;
    const [current, setCurrent] = React.useState('one')

    // Выберем базовую вкладку в панели по умолчанию
    React.useEffect(() => {
        setCurrent("bun");
    }, [ingredients]);

    // Отсортируем элементы тип которых совпадает с названием вкладки
    const filteredIngredients = ingredients.filter(
        (ingredient: any) => ingredient.type === current
    );
    
    // Переключатель вкладок
    const setCurrentTab = (value: string) => {
        setCurrent(value);
    };

    return(
        <section className="burger-ingredients-wrap">
            <div style={{ display: 'flex' }}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrentTab }>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrentTab }>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrentTab}>
                    Начинки
                </Tab>
            </div>
            
            {filteredIngredients.map((ingredient: any) => (
                <IngredientCard ingredient={ingredient} />
            ))}

        </section>
    );
}

export default BurgerIngredients;