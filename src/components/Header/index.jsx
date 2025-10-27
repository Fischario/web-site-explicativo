import './style.css'
import { Link } from 'react-router-dom'

export default function Header({ titulo }) {
    return (
        <header>
            <h1>{titulo ? titulo : 'Bem-vindo'}</h1>
            {render(titulo)}
        </header>
    )
}

function render(titulo) {
    switch (titulo) {
        case ('Html'):
            return (
                <>
                    {linker('Css', 'JavaScript', 'React', 'Nodejs')}
                </>
            )
        case ('Css'):
            return (
                <>
                    {linker('Html', 'JavaScript', 'React', 'Nodejs')}
                </>
            )
        case ('JavaScript'):
            return (
                <>
                    {linker('Html', 'Css', 'React', 'Nodejs')}
                </>
            )
        case ('React'):
            return (
                <>
                    {linker('Html', 'Css', 'JavaScript', 'Nodejs')}
                </>
            )
        case ('Nodejs'):
            return (
                <>
                    {linker('Html', 'Css', 'JavaScript', 'React')}
                </>
            )
    }
}

function linker(path1, path2, path3, path4) {
    return (
        <div id='header-buttons-box'>
            <Link to={`/${path1}`}>
                <button class='header-buttons'>{path1}</button>
            </Link>
            <Link to={`/${path2}`}>
                <button class='header-buttons'>{path2}</button>
            </Link>
            <Link to={`/${path3}`}>
                <button class='header-buttons'>{path3}</button>
            </Link>
            <Link to={`/${path4}`}>
                <button class='header-buttons'>{path4}</button>
            </Link>
        </div>
    )
}