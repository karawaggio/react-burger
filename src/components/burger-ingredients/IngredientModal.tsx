import React from 'react'
import "./BurgerIngredients.css"

const IngredientModal = (props: any) => {
    const { ingredient, onClose } = props;

    return (
        <section className="modal-overlay" onClick={onClose}>
            <div className="pt-10 pl-10 pr-10 modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h1 className="text text_type_main-medium">Детали ингредиента</h1>
                    <button className="pl-4 modal-close-button" onClick={onClose}>&#9587;</button>
                </div>
                <img className="pl-6 pr-6 pt-6" src={ingredient.image} alt={ingredient.name} />
                <h2 className="pt-4 text text_type_main-medium">{ingredient.name}</h2>
                <section className="pt-8 pb-15 ingredient-info">
                    <div>
                        <p className="text text_type_main-small">Калории, ккал</p>
                        <p className="text text_type_digits-default">{ingredient.calories}</p>
                    </div>
                    <div>
                        <p className="text text_type_main-small">Белки, г</p>
                        <p className="text text_type_digits-default">{ingredient.proteins}</p>
                    </div>
                    <div>
                        <p className="text text_type_main-small">Жиры, г</p>
                        <p className="text text_type_digits-default">{ingredient.fat}</p>
                    </div>
                    <div>
                        <p className="text text_type_main-small">Углеводы, г</p>
                        <p className="text text_type_digits-default">{ingredient.carbohydrates}</p>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default IngredientModal;