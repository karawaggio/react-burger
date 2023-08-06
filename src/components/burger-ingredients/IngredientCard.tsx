import React from 'react'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import "./BurgerIngredients.css"

const IngredientCard = (props: { ingredient: any; }) => {
    const ingredient = props.ingredient;

    return(
        <div key={ingredient._id} className="pt-6 pb-8 card">
            <img className="pl-4 pr-4" src={ingredient.image} alt={ingredient.name} />
            <div className="pb-1 pt-1 card-icon-price">
                <span className="text text_type_digits-default">{ingredient.price}</span><CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">{ingredient.name}</p>
        </div>
    )
}

export default IngredientCard;