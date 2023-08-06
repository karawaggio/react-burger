import React from 'react';
import './AppHeaderStyles.css'
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import {BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
    return(
    <header>
        <nav className="nav-container">

            <ul className="nav">
                <li className="pl-5 pr-5 pb-4 pt-4 menu-item">
                    <BurgerIcon type="primary" />
                    <span className="pl-2 text text_type_main-default">Конструктор</span>
                </li>
                <li className="pl-5 pr-5 pb-4 pt-4 menu-item">
                    <ListIcon type="secondary" />
                    <span className="pl-2 text text_type_main-default">Лента заказов</span>
                </li>
            </ul>
            
            <div className="pb-4 pt-4 logo">
                <Logo />
            </div>

            <ul className="nav">
                <li className="pl-5 pr-5 pb-4 pt-4 menu-item">
                    <ProfileIcon type="secondary" />
                    <span className="pl-2 text text_type_main-default pl-2 pr-2">Личный кабинет</span> 
                </li>
            </ul>

        </nav>
    </header>
    );
}

export default AppHeader;