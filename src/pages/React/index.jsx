import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css'

export default function React() {
    return (
        <>
            <Header titulo={'React'}/>
            <main>
                <div class='divs-react'>
                    <h2>componente</h2>
                    <p>função que retorna JSX. é tipo um bloquinho reutilizável da tela</p>
                </div>

                <div class='divs-react'>
                    <h2>JSX</h2>
                    <p>HTML dentro do JavaScript (parece HTML, mas é JavaScript que vira UI)</p>
                </div>

                <div class='divs-react'>
                    <h2>props</h2>
                    <p>valores que você passa pra um componente "de fora pra dentro"</p>
                </div>

                <div class='divs-react'>
                    <h2>children</h2>
                    <p>conteúdo interno passado entre as tags de um componente</p>
                </div>

                <div class='divs-react'>
                    <h2>state</h2>
                    <p>dados internos que podem mudar e fazem o componente atualizar na tela</p>
                </div>

                <div class='divs-react'>
                    <h2>useState()</h2>
                    <p>hook pra criar e atualizar state dentro de componente funcional</p>
                </div>

                <div class='divs-react'>
                    <h2>useEffect()</h2>
                    <p>hook pra rodar efeitos colaterais (buscar dados, setar listener, etc)</p>
                </div>

                <div class='divs-react'>
                    <h2>onClick / onChange</h2>
                    <p>eventos em JSX (versão React dos eventos DOM). você passa uma função pra rodar quando acontece</p>
                </div>

                <div class='divs-react'>
                    <h2>controlled input</h2>
                    <p>campo de formulário que pega o valor do state e avisa o React a cada mudança</p>
                </div>

                <div class='divs-react'>
                    <h2>lista com .map()</h2>
                    <p>renderizar vários itens repetindo um componente dentro de um array</p>
                </div>

                <div class='divs-react'>
                    <h2>key</h2>
                    <p>prop especial em listas pra identificar cada item de forma única e evitar bugs no render</p>
                </div>

                <div class='divs-react'>
                    <h2>condicional</h2>
                    <p>mostrar ou não um pedaço da UI usando if/ternário/&& dentro do JSX</p>
                </div>

                <div class='divs-react'>
                    <h2>SPA</h2>
                    <p>Single Page Application: o app roda no browser e navega sem recarregar a página inteira</p>
                </div>

                <div class='divs-react'>
                    <h2>React Router</h2>
                    <p>biblioteca pra navegação entre páginas/componentes via URL dentro do React</p>
                </div>

                <div class='divs-react'>
                    <h2>Next.js</h2>
                    <p>framework em cima do React que cuida de rotas, server-side rendering, API routes, otimização, etc...</p>
                </div>

                <div class='divs-react'>
                    <h2>Vite / Create React App</h2>
                    <p>ferramentas pra criar um projeto React rapidamente com build, dev server etc</p>
                </div>

                <div class='divs-react'>
                    <h2>Suspense</h2>
                    <p>permite mostrar um "carregando..." enquanto um componente assíncrono ainda não está pronto</p>
                </div>
            </main>
            <Footer/>
        </>
    )
}