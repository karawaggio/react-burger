import React from 'react';
import "./BurgerConstructor.css"
import { ConstructorElement }  from '@ya.praktikum/react-developer-burger-ui-components';

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

const BurgerConstructor: React.FC<BurgerIngredientsProps> = ({ ingredients }) => {
    
    return(
        <section className="pt-25 burger-constructor-wrap">
            <div className="burger-constructor-container">
                {ingredients.map((ingredient: any, id: any) => (
                  <ConstructorElement key={id} type={ingredient.type} isLocked={true} text={ingredient.name} price={ingredient.price} thumbnail={ingredient.image} />  
                ))}
           </div>
        </section>
    );
}

export default BurgerConstructor;