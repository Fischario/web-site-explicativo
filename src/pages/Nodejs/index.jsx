import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css'

export default function Nodejs() {
    return (
        <>
            <Header titulo={'Nodejs'}/>
            <main>
                <div class='divs-nodejs'>
                    <h2>npm</h2>
                    <p>gerenciador de pacotes que vem com o Node (instala libs)</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>npx</h2>
                    <p>roda binários de pacotes (mesmo sem instalar global)</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>package.json</h2>
                    <p>arquivo de configuração do projeto (nome, versão, deps, scripts)</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>"scripts" (package.json)</h2>
                    <p>atalhos pra comandos. ex: "start", "dev", "test"</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>package-lock.json</h2>
                    <p>trava versões exatas das dependências pra builds iguais</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>CommonJS (require)</h2>
                    <p>jeito clássico de módulos: const x = require('x'); module.exports = ...</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>ES Modules (import/export)</h2>
                    <p>jeito moderno: import x from 'x'; export default ... (use "type":"module")</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>path</h2>
                    <p>monta caminhos de forma segura (path.join, resolve, extname)</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>os</h2>
                    <p>info do sistema (CPU, memória, plataforma, diretórios)</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>Express</h2>
                    <p>framework leve pra rotas, middlewares e APIs rapidamente</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>middleware (Express)</h2>
                    <p>funções que processam req/res no meio do caminho (logs, auth, parse)</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>fetch no Node</h2>
                    <p>disponível nativo a partir do Node 18 (antes usava node-fetch/axios)</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>process</h2>
                    <p>info e controle do processo (argv, pid, exit, env, stdout)</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>process.env</h2>
                    <p>variáveis de ambiente (segredos, configs). Use dotenv pra carregar .env</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>dotenv</h2>
                    <p>carrega variáveis do arquivo .env em process.env</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>events</h2>
                    <p>EventEmitter: padrão de eventos/ouvintes (on, emit)</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>Top-level await</h2>
                    <p>no ESM dá pra usar await direto no arquivo sem função async</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>nodemon (ou node --watch)</h2>
                    <p>reinicia o servidor automaticamente quando salvar arquivos</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>CORS</h2>
                    <p>libera acesso do browser a sua API de outro domínio (use cors no Express)</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>body parsing</h2>
                    <p>no Express moderno: app.use(express.json()) pra JSON no req.body</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>erro assíncrono</h2>
                    <p>use try/catch com async-await ou .catch(); em Express, next(err)</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>nvm</h2>
                    <p>gerenciador de versões do Node (instalar/trocar versões facilmente)</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>módulos nativos vs externos</h2>
                    <p>nativos: fs, path, http... externos: instalados via npm (express, axios)</p>
                </div>

                <div class='divs-nodejs'>
                    <h2>Testes</h2>
                    <p>Node tem test runner nativo; populares: Jest, Vitest, Mocha</p>
                </div>
            </main>
            <Footer/>
        </>
    )
}