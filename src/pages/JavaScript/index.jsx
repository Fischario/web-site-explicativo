import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css'

export default function JavaScript() {
    return (
        <>
            <Header titulo={'JavaScript'}/>
            <main>
                <div class='divs-javascript'>
                    <h2>console.log()</h2>
                    <p>mostra alguma coisa no console (usado pra testar e debugar)</p>
                </div>

                <div class='divs-javascript'>
                    <h2>let</h2>
                    <p>cria uma variável que pode mudar depois</p>
                </div>

                <div class='divs-javascript'>
                    <h2>const</h2>
                    <p>cria uma variável que NÃO pode ser reatribuída (valor "fixo")</p>
                </div>

                <div class='divs-javascript'>
                    <h2>var</h2>
                    <p>jeito antigo de criar variável. Não use.</p>
                </div>

                <div class='divs-javascript'>
                    <h2>null</h2>
                    <p>significa "não tem nada aqui de propósito"</p>
                </div>

                <div class='divs-javascript'>
                    <h2>undefined</h2>
                    <p>significa "isso existe mas ainda não tem valor"</p>
                </div>

                <div class='divs-javascript'>
                    <h2>function</h2>
                    <p>bloco de código reutilizável. você chama quando quiser rodar aquilo</p>
                </div>

                <div class='divs-javascript'>
                    <h2>return</h2>
                    <p>fala qual valor a função devolve no final</p>
                </div>

                <div class='divs-javascript'>
                    <h2>if</h2>
                    <p>roda um bloco de código só se a condição for true</p>
                </div>

                <div class='divs-javascript'>
                    <h2>else</h2>
                    <p>roda quando o if NÃO passou</p>
                </div>

                <div class='divs-javascript'>
                    <h2>else if</h2>
                    <p>outra condição alternativa quando o primeiro if não passou</p>
                </div>

                <div class='divs-javascript'>
                    <h2>==</h2>
                    <p>comparação estrita (compara valor e tipo). exemplo: 2 == "2" dá false</p>
                </div>

                <div class='divs-javascript'>
                    <h2>!=</h2>
                    <p>diferença estrita (diz se é diferente em valor ou tipo)</p>
                </div>

                <div class='divs-javascript'>
                    <h2>&&</h2>
                    <p>"e" lógico. só dá true se as duas (ou mais) condições forem true</p>
                </div>

                <div class='divs-javascript'>
                    <h2>||</h2>
                    <p>"ou" lógico. dá true se pelo menos uma condição for true</p>
                </div>

                <div class='divs-javascript'>
                    <h2>!</h2>
                    <p>negação lógica (inverte true/false). !true vira false</p>
                </div>

                <div class='divs-javascript'>
                    <h2>for</h2>
                    <p>loop tradicional. repete um código várias vezes com contador</p>
                </div>

                <div class='divs-javascript'>
                    <h2>while</h2>
                    <p>loop que continua enquanto a condição for true</p>
                </div>

                <div class='divs-javascript'>
                    <h2>forEach()</h2>
                    <p>método de array que roda uma função pra cada item da lista</p>
                </div>

                <div class='divs-javascript'>
                    <h2>map()</h2>
                    <p>cria um novo array transformando cada item. Ex: dobra todos os números</p>
                </div>

                <div class='divs-javascript'>
                    <h2>filter()</h2>
                    <p>cria um novo array só com os itens que passam numa condição (ex: só pares)</p>
                </div>

                <div class='divs-javascript'>
                    <h2>find()</h2>
                    <p>acha o primeiro item do array que cumpre uma condição e retorna ele</p>
                </div>

                <div class='divs-javascript'>
                    <h2>push()</h2>
                    <p>coloca um item no final do array</p>
                </div>

                <div class='divs-javascript'>
                    <h2>pop()</h2>
                    <p>remove o último item do array</p>
                </div>

                <div class='divs-javascript'>
                    <h2>shift()</h2>
                    <p>remove o primeiro item do array</p>
                </div>

                <div class='divs-javascript'>
                    <h2>unshift()</h2>
                    <p>coloca um item no começo do array</p>
                </div>

                <div class='divs-javascript'>
                    <h2>DOM</h2>
                    <p>é a "árvore" da página. JS usa o DOM pra mexer no HTML via código</p>
                </div>

                <div class='divs-javascript'>
                    <h2>document.querySelector()</h2>
                    <p>pega um elemento do HTML usando um seletor CSS (ex: ".classe", "#id")</p>
                </div>

                <div class='divs-javascript'>
                    <h2>addEventListener()</h2>
                    <p>escuta eventos (ex: clique) e roda uma função quando o evento acontece</p>
                </div>

                <div class='divs-javascript'>
                    <h2>event (e)</h2>
                    <p>objeto passado pro listener com detalhes do que aconteceu (quem clicou, tecla, etc)</p>
                </div>

                <div class='divs-javascript'>
                    <h2>preventDefault()</h2>
                    <p>bloqueia o comportamento padrão do evento (ex: impedir um form de recarregar a página)</p>
                </div>

                <div class='divs-javascript'>
                    <h2>setTimeout()</h2>
                    <p>roda uma função depois de um tempo (em ms) uma vez só</p>
                </div>

                <div class='divs-javascript'>
                    <h2>setInterval()</h2>
                    <p>roda uma função repetidamente a cada X ms</p>
                </div>

                <div class='divs-javascript'>
                    <h2>JSON</h2>
                    <p>formato de texto pra mandar dados</p>
                </div>

                <div class='divs-javascript'>
                    <h2>JSON.parse()</h2>
                    <p>transforma texto JSON em objeto JS de volta</p>
                </div>

                <div class='divs-javascript'>
                    <h2>try / catch</h2>
                    <p>tenta rodar um código e captura o erro se der ruim sem quebrar o resto</p>
                </div>

                <div class='divs-javascript'>
                    <h2>throw</h2>
                    <p>lança um erro manualmente</p>
                </div>

                <div class='divs-javascript'>
                    <h2>async</h2>
                    <p>marca uma função como assíncrona (ela sempre devolve uma Promise)</p>
                </div>

                <div class='divs-javascript'>
                    <h2>await</h2>
                    <p>pausa dentro de uma função async até a Promise terminar e te dar o resultado</p>
                </div>

                <div class='divs-javascript'>
                    <h2>fetch()</h2>
                    <p>faz requisições HTTP (ex: buscar dados de uma API). retorna uma Promise</p>
                </div>

                <div class='divs-javascript'>
                    <h2>Promise</h2>
                    <p>um valor que vai chegar no futuro (pendente, resolvida ou rejeitada)</p>
                </div>
            </main>
            <Footer/>
        </>
    )
}