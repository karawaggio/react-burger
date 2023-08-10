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

    // Скролл до айди типа ингредиента при нажатии вкладок
    const scrollToSection = (type: string) => {
        const typeOfIngredients = document.getElementById(type);
        if (typeOfIngredients) {
            setCurrent(type);
            typeOfIngredients.scrollIntoView();
        }
    };

    // Отсортируем все элементы по типу
    const groupedIngredients = ingredients.reduce((element: any, ingredient: any) => {
        if (element[ingredient.type] === undefined) {
            element[ingredient.type] = [];
        }
        element[ingredient.type].push(ingredient);
        return element;
    }, {});

    // Очередность ингредиентов соответствует порядку элементов в массиве typeOrder
    const typeOrder = ['bun', 'sauce', 'main'];

    return(
        <section className="burger-ingredients-wrap">
            <h1 className="pt-10 pb-5 text text_type_main-medium">Cоберите конструктор</h1>
            <div className="pb-10" style={{ display: 'flex' }}>
                <Tab value="bun" active={current === 'bun'} onClick={() => scrollToSection("bun")}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={() => scrollToSection("sauce")}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={() => scrollToSection("main")}>
                    Начинки
                </Tab>
            </div>
            {typeOrder.map((type) => (
                <div key={type}>
                    <h2 className="pt-10 pb-6 text text_type_main-medium ingredient-group-heading" id={type}>
                        {
                            type === "bun" ? "Булки" :
                            type === "sauce" ? "Соусы" :
                            type === "main" ? "Начинки" :  ""
                        }
                    </h2>
                    <section className="burger-ingredients-container">
                    {
                        groupedIngredients[type].map((ingredient: any, id: any) => (
                            <IngredientCard ingredient={ingredient} key={id} />
                        ))
                    }
                    </section>
                </div>
            ))}
        </section>
    );
}

export default BurgerIngredients;