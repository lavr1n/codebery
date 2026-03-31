import HeaderButton from './Button/Button.jsx'
import './Header.css'

export default function Header({ onHomeClick, onAddCardClick, onProfileClick }) {

    return (
        <header className='header'>
            <div className='headerIcon'>
                <img src='/minecraft.svg' alt='Minecraft'></img>
            </div>
            <HeaderButton label="Главная" onClick={onHomeClick} />
            <HeaderButton label="Добавить карточку" onClick={onAddCardClick} />
            <HeaderButton label="Профиль" onClick={onProfileClick} />
        </header>
    )
}