import React from 'react';
import "./BurgerIngredients.css"
import IngredientCard from './IngredientCard';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

interface Ingredient {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
}

interface BurgerIngredientsProps {
    ingredients: Ingredient[];
}

const BurgerIngredients: React.FC<BurgerIngredientsProps> = ({ ingredients }) => {
    
    const [current, setCurrent] = React.useState<string>('one')

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
            <section className="pb-10" style={{ display: 'flex' }}>
                <Tab value="bun" active={current === 'bun'} onClick={() => scrollToSection("bun")}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={() => scrollToSection("sauce")}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={() => scrollToSection("main")}>
                    Начинки
                </Tab>
            </section>
            <section className="burger-ingredients-container">
            {typeOrder.map((type) => (
                <div key={type}>
                    <h2 className="pt-10 pb-6 text text_type_main-medium ingredient-group-heading" id={type}>
                        {
                            type === "bun" ? "Булки" :
                            type === "sauce" ? "Соусы" :
                            type === "main" ? "Начинки" :  ""
                        }
                    </h2>
                    <section className="burger-ingredients-row">
                    {
                        groupedIngredients[type].map((ingredient: any, id: any) => (
                            <IngredientCard ingredient={ingredient} key={id} />
                        ))
                    }
                    </section>
                </div>
            ))}
            </section>
        </section>
    );
}

export default BurgerIngredients;