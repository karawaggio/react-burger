import { useState } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import './BurgerIngredients.css';
import Modal from "../modal/Modal";

const IngredientCard = (props: { ingredient: any; }) => {
const [isModalOpen, setIsModalOpen] = useState(false);
    const ingredient = props.ingredient;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return(
        <section>
            <div key={ingredient._id} className="pt-6 pb-8 card" onClick={openModal}>
                <img className="pl-4 pr-4" src={ingredient.image} alt={ingredient.name} />
                <div className="pb-1 pt-1 card-icon-price">
                    <span className="pr-2 text text_type_digits-default">{ingredient.price}</span><CurrencyIcon type="primary" />
                </div>
                <p className="text text_type_main-default">{ingredient.name}</p>
            </div>
            {isModalOpen && (
              <Modal onClose={closeModal}>
                <h1 className="text text_type_main-medium">Детали ингредиента</h1>
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
              </Modal>
            )}
        </section>
    )
}

export default IngredientCard;