import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css'

export default function Html() {
    return (
        <>
            <Header titulo={'Html'}/>
            <main>
                <div class='divs-html'>
                    <h2>div</h2>
                    <p>são "divisões" no html pra organizar as coisas</p>
                </div>

                <div class='divs-html'>
                    <h2>p</h2>
                    <p>são parágrafos</p>
                </div>

                <div class='divs-html'>
                    <h2>h1</h2>
                    <p>são cabeçalhos, vão de h1 até h6 (quanto maior o número menor o tamanho)</p>
                </div>

                <div class='divs-html'>
                    <h2>a</h2>
                    <p>é tipo um link. Usa o atributo href pra dizer pra onde vai</p>
                </div>

                <div class='divs-html'>
                    <h2>img</h2>
                    <p>mostra uma imagem. Usa src pra dizer o arquivo da imagem e alt pro substituto da imagem se ela não estiver disponível</p>
                </div>

                <div class='divs-html'>
                    <h2>ul</h2>
                    <p>lista não ordenada (com bolinhas)</p>
                </div>

                <div class='divs-html'>
                    <h2>ol</h2>
                    <p>lista ordenada (com números)</p>
                </div>

                <div class='divs-html'>
                    <h2>li</h2>
                    <p>cada item dentro de uma lista (ul ou ol)</p>
                </div>

                <div class='divs-html'>
                    <h2>span</h2>
                    <p>parecido com div mas inline (usado pra marcar/estilizar só um pedacinho do texto sem quebrar linha)</p>
                </div>

                <div class='divs-html'>
                    <h2>strong</h2>
                    <p>deixa o texto importante (visualmente fica em negrito e também diz pro navegador/leitor de tela que é importante)</p>
                </div>

                <div class='divs-html'>
                    <h2>em</h2>
                    <p>dá ênfase (visualmente fica em itálico e também marca significado de ênfase)</p>
                </div>

                <div class='divs-html'>
                    <h2>br</h2>
                    <p>quebra de linha. Não tem fechamento</p>
                </div>

                <div class='divs-html'>
                    <h2>hr</h2>
                    <p>linha horizontal pra separar seções</p>
                </div>

                <div class='divs-html'>
                    <h2>header</h2>
                    <p>cabeçalho de uma página ou seção (geralmente logo, menu, título)</p>
                </div>

                <div class='divs-html'>
                    <h2>nav</h2>
                    <p>área de navegação (links de menu)</p>
                </div>

                <div class='divs-html'>
                    <h2>main</h2>
                    <p>o conteúdo principal da página (o que é único daquela página)</p>
                </div>

                <div class='divs-html'>
                    <h2>section</h2>
                    <p>uma seção temática do site (ex: "serviços", "sobre", "contato")</p>
                </div>

                <div class='divs-html'>
                    <h2>article</h2>
                    <p>um conteúdo independente que faz sentido sozinho (post de blog, notícia, comentário)</p>
                </div>

                <div class='divs-html'>
                    <h2>aside</h2>
                    <p>coisa lateral/extra (ex: barra lateral, box de "leia também")</p>
                </div>

                <div class='divs-html'>
                    <h2>footer</h2>
                    <p>rodapé da página ou seção (creditos, contatos, direitos autorais)</p>
                </div>

                <div class='divs-html'>
                    <h2>button</h2>
                    <p>um botão clicável</p>
                </div>

                <div class='divs-html'>
                    <h2>input</h2>
                    <p>campo de formulário (texto, senha, checkbox, etc). O tipo muda com o atributo type</p>
                </div>

                <div class='divs-html'>
                    <h2>form</h2>
                    <p>formulário: agrupa inputs, botões etc pra enviar dados</p>
                </div>
            </main>
            <Footer/>
        </>
    )
}