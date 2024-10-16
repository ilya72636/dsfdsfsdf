import React from 'react'
import './styles/header.scss'
import viteLogo from '/vite.svg'

function Header() {
  return (
    <header className="header">
    <div className="header__logo">
        <img src={viteLogo} className="logo__image" alt="Vite logo" />
    </div>
    <nav className="header__nav">
        <ul className="nav__list">
            <li className="nav__item"><a href="#" className="nav__link">Главная</a></li>
            <li className="nav__item"><a href="#" className="nav__link">О нас</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Услуги</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Контакты</a></li>
            <li className="nav__item"><a href="#" className="nav__link">Блог</a></li>
        </ul>
    </nav>
    <div className="header__buttons">
        <button className="button button--login">Войти</button>
        <button className="button button--signup">Регистрация</button>
    </div>
</header>

  )
}

export default Header