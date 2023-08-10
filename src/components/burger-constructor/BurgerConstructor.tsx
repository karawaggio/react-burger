import React from 'react';
import "./BurgerConstructor.css"
import { ConstructorElement }  from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = (props: { ingredients: any; }) => {
    
    const ingredients = props.ingredients;

    return(
        <section className="pt-25 burger-constructor-wrap">
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "10px" }}>
                {ingredients.map((ingredient: any, id: any) => (
                  <ConstructorElement key={id} type={ingredient.type} isLocked={true} text={ingredient.name} price={ingredient.price} thumbnail={ingredient.image} />  
                ))}
           </div>
        </section>
    );
}

export default BurgerConstructor;