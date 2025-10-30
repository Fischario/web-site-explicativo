import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css'

export default function Css() {
    return (
        <>
            <Header titulo={'Css'}/>
            <main>
                <div class='divs-css'>
                    <h2>color</h2>
                    <p>cor do texto</p>
                </div>

                <div class='divs-css'>
                    <h2>background-color</h2>
                    <p>cor de fundo do elemento</p>
                </div>

                <div class='divs-css'>
                    <h2>font-size</h2>
                    <p>tamanho da fonte (ex: 16px)</p>
                </div>

                <div class='divs-css'>
                    <h2>font-weight</h2>
                    <p>grossura da fonte (ex: normal, bold, 400, 700)</p>
                </div>

                <div class='divs-css'>
                    <h2>font-family</h2>
                    <p>qual fonte usar (ex: 'Arial', system-ui, etc...)</p>
                </div>

                <div class='divs-css'>
                    <h2>text-align</h2>
                    <p>alinhamento do texto (left, center, right, justify)</p>
                </div>

                <div class='divs-css'>
                    <h2>text-decoration</h2>
                    <p>decoração de texto (ex: underline pra sublinhar, none pra tirar sublinhado de link)</p>
                </div>

                <div class='divs-css'>
                    <h2>width</h2>
                    <p>largura do elemento</p>
                </div>

                <div class='divs-css'>
                    <h2>height</h2>
                    <p>altura do elemento</p>
                </div>

                <div class='divs-css'>
                    <h2>padding</h2>
                    <p>espaço interno: distância entre o conteúdo e a borda</p>
                </div>

                <div class='divs-css'>
                    <h2>margin</h2>
                    <p>espaço externo: distância entre esse elemento e os outros</p>
                </div>

                <div class='divs-css'>
                    <h2>border</h2>
                    <p>borda do elemento (largura, tipo e cor). Ex: border: 1px solid #000;</p>
                </div>

                <div class='divs-css'>
                    <h2>border-radius</h2>
                    <p>arredonda os cantos (ex: 8px deixa com cantinhos curvos)</p>
                </div>

                <div class='divs-css'>
                    <h2>display</h2>
                    <p>define o tipo de caixa do elemento (block, inline, flex, grid, none, etc...)</p>
                </div>

                <div class='divs-css'>
                    <h2>flex</h2>
                    <p>usado junto com display: flex; controla layout flexível (caixas lado a lado, etc...)</p>
                </div>

                <div class='divs-css'>
                    <h2>justify-content</h2>
                    <p>alinhamento horizontal dos itens num container flex ou grid (start, center, space-between, etc...)</p>
                </div>

                <div class='divs-css'>
                    <h2>align-items</h2>
                    <p>alinhamento vertical dos itens num container flex (start, center, stretch, etc...)</p>
                </div>

                <div class='divs-css'>
                    <h2>gap</h2>
                    <p>espaço entre itens em flex ou grid (melhor que usar margin manual em cada filho)</p>
                </div>

                <div class='divs-css'>
                    <h2>position</h2>
                    <p>como o elemento é posicionado na página (static, relative, absolute, fixed, sticky)</p>
                </div>

                <div class='divs-css'>
                    <h2>top / right / bottom / left</h2>
                    <p>ajustam a posição quando você usa position que permite mover (ex: absolute)</p>
                </div>

                <div class='divs-css'>
                    <h2>z-index</h2>
                    <p>ordem de "camada". Número maior fica por cima dos outros</p>
                </div>

                <div class='divs-css'>
                    <h2>overflow</h2>
                    <p>o que acontece quando o conteúdo passa do tamanho da caixa (visible, hidden, scroll, auto)</p>
                </div>

                <div class='divs-css'>
                    <h2>cursor</h2>
                    <p>muda o cursor quando passa o mouse (ex: pointer pra parecer clicável)</p>
                </div>

                <div class='divs-css'>
                    <h2>opacity</h2>
                    <p>transparência (1 = opaco, 0 = invisível)</p>
                </div>

                <div class='divs-css'>
                    <h2>box-shadow</h2>
                    <p>sombra da caixa (ex: 0px 4px 10px rgba(0,0,0,0.2))</p>
                </div>

                <div class='divs-css'>
                    <h2>transition</h2>
                    <p>animação suave entre estados (ex: transition: all 0.2s ease;)</p>
                </div>

                <div class='divs-css'>
                    <h2>background-image</h2>
                    <p>coloca imagem de fundo (ex: background-image: url('foto.png');)</p>
                </div>

                <div class='divs-css'>
                    <h2>background-size</h2>
                    <p>tamanho da imagem de fundo (ex: cover pra cobrir tudo, contain pra caber inteira)</p>
                </div>

                <div class='divs-css'>
                    <h2>background-position</h2>
                    <p>onde a imagem de fundo fica (center, top, right...)</p>
                </div>
            </main>
            <Footer/>
        </>
    )
}