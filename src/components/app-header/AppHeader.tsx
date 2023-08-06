import React from 'react';
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import {BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
    return(
    <React.Fragment>
        <BurgerIcon type="primary" /><span>Конструктор</span>
        <Logo />
        <ListIcon type="secondary" /><span>Лента заказов</span>
        <ProfileIcon type="secondary" /><span>Личный кабинет</span>
    </React.Fragment>
    );
}

export default AppHeader;