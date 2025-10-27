import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import './style.css'

export default function Home() {
    return (
        <>
            <header id='header-home'>
                <h1>Bem-vindo</h1>
            </header>
            <div id='button-box'>
                <Link to='/Html'>
                    <button class='home-buttons'>Html</button>
                </Link>
                <Link to='/Css'>
                    <button class='home-buttons'>Css</button>
                </Link>
                <Link to='/JavaScript'>
                    <button class='home-buttons'>JavaScript</button>
                </Link>
                <Link to='/React'>
                    <button class='home-buttons'>React</button>
                </Link>
                <Link to='/Nodejs'>
                    <button class='home-buttons'>Nodejs</button>
                </Link>
            </div>
            <Footer/>
        </>
    )
}