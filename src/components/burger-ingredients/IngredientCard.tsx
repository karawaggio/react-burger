import React from 'react'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

const IngredientCard = (props: { ingredient: any; }) => {
    const ingredient = props.ingredient;

    return(
        <div key={ingredient._id}>
            <img src={ingredient.image} alt={ingredient.name} />
            <div>
                <span>{ingredient.price}</span><CurrencyIcon type="primary" />
            </div>
            <h3>{ingredient.name}</h3>
        </div>
    )
}

export default IngredientCard;