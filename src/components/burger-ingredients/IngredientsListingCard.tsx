import { useState } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import './BurgerIngredients.css';
import Modal from "../modal/Modal";
import IngredientsDetailCard from './IngredientsDetailCard';

const IngredientsListingCard = (props: { ingredient: any; }) => {
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
                <IngredientsDetailCard singleIngredient={ingredient} />
              </Modal>
            )}
        </section>
    )
}

export default IngredientsListingCard;