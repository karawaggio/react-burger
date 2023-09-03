import React, { useState } from 'react';
import './BurgerConstructor.css';
import { ConstructorElement }  from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon, CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter }  from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../modal/Modal";

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return(
        <section className="pl-10 pt-25 burger-constructor-wrap" id="orders-constructor">
            <div className="pr-5 burger-constructor-container">
                {ingredients.map((ingredient: any, id: any) => (
                    <ConstructorElement key={id} type={ingredient.type} isLocked={true} text={ingredient.name} price={ingredient.price} thumbnail={ingredient.image} />
                ))}
            </div>
            <div className="mt-10 mr-6 burger-constructor-actions">
                <Counter count={0} size="default" extraClass="mr-1" />
                <CurrencyIcon type="primary" />
                <Button htmlType="button" type="primary" size="medium" extraClass="ml-10" onClick={openModal}>
                    Оформить заказ
                </Button>
            </div>
            {isModalOpen && (
              <Modal onClose={closeModal}>
                <h1 className="text text_type_digits-large">034536</h1>
                <h2 className="pt-8 pb-5 text text_type_main-medium">идентификатор заказа</h2>
                <div className="pt-5 pb-5 modal-icon-wrap">
                    <CheckMarkIcon type="primary" />
                </div>
                <p className="pt-5 pb-2 text text_type_main-default">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
              </Modal>
            )}
        </section>
    );
}

export default BurgerConstructor;