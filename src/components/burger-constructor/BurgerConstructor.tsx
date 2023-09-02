import React, { useState } from 'react';
import './BurgerConstructor.css';
import { ConstructorElement }  from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter }  from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorModal from './ConstructorModal';

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
        <section className="pl-10 pt-25 burger-constructor-wrap">
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
                {isModalOpen && (
                    <ConstructorModal onClose={closeModal} />
                )}
            </div>
        </section>
    );
}

export default BurgerConstructor;