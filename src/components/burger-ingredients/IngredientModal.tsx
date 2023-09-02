import React from 'react'
import "./BurgerIngredients.css"

const IngredientModal = (props: any) => {
    const { ingredient, onClose } = props;

    return (
        <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="mt-10 ml-10 mr-10 modal-header">
                <h1 className="text text_type_main-medium">Детали ингредиента</h1>
                <button className="pl-4 modal-close-button" onClick={onClose}>&#9587;</button>
            </div>
        </div>
        </div>
    );
}

export default IngredientModal;