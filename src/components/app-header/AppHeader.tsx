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
                    <a href="#ingredients" className="pl-2 text text_type_main-default">
                      <BurgerIcon type="primary" />
                      <span className="pl-2">Конструктор</span>
                    </a>
                </li>
                <li className="pl-5 pr-5 pb-4 pt-4 menu-item">
                    <a href="#orders-constructor" className="pl-2 text text_type_main-default">
                      <ListIcon type="secondary" />
                      <span className="pl-2">Лента заказов</span>
                    </a>
                </li>
            </ul>
            
            <span className="pb-4 pt-4 logo">
                <Logo />
            </span>

            <ul className="nav">
                <li className="pl-5 pr-5 pb-4 pt-4 menu-item">
                    <a href="#" className="pl-2 text text_type_main-default pl-2 pr-2">
                      <ProfileIcon type="secondary" />
                      <span className="pl-2">Личный кабинет</span>
                    </a>
                </li>
            </ul>

        </nav>
    </header>
    );
}

export default AppHeader;