import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breed" element={<Breed />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <body>
      <div id="root">
        <main>
          <nav class="menu">
            <div class="logoContainer">
              <img src="/images/logo.png" alt="logo do site" class="logo" />
              <img src="/images/Dogin.png" alt="Dogin" class="logoName" />
            </div>
            <div class="menuOpts">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/breed">Raças</a>
                </li>
                <li>
                  <a href="/about">Sobre nós</a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="Home">
            <div class="sliceRight">
              <div>
                <h1>Adaptação do cachorro</h1>
                <p>
                  Quando receber um novo cãozinho em sua casa, prepare um lugar
                  quentinho e confortável, que pode ser uma caixa ou uma
                  caminha. Se puder, coloque objetos com o cheiro do lugar em
                  que ele estava anteriormente, como um paninho, para que ele
                  não estranhe muito o local. E se for um filhote, coloque um
                  relógio enrolado em um tecido, pois o tic-tac vai imitar o
                  coração da mãe dele, deixando-o mais calmo. Uma garrafa com
                  água morna (MORNA, não quente !) envolta em uma toalha também
                  ajuda.
                </p>
              </div>
              <img src="/images/dog1.png" alt="cachorro" />
            </div>

            <div class="sliceLeft">
              <img src="/images/food.png" alt="comida de cachorro" />
              <div>
                <h1>Alimentação</h1>
                <p>
                  Deixe sempre água fresca para seu cachorro e longe do sol.
                  Evite dar restos de comida, pois só a ração tem os nutrientes
                  de que seu cão precisa em uma dosagem equilibrada. A ração não
                  precisa ser misturada com água, leite nem comida. Para saber a
                  quantidade certa, confira na embalagem da ração. Em todos os
                  casos, não deixe a ração disponível por mais de uma hora,
                  mesmo que o cão não tenha comido tudo. Se o cão não quiser
                  comer, retire a comida, mas leve-o ao veterinário caso ele
                  recuse três refeições seguidas.
                </p>
              </div>
            </div>

            <div class="sliceRight">
              <div>
                <h1>Higiene</h1>
                <p>
                  Escove os pelos do seu cachorro diariamente. Nos casos dos
                  cães de pelos longos, considere tosá-los, principalmente no
                  verão. Dê banhos apenas quando ele estiver sujo, pois banho em
                  excesso pode ressecar sua pele e pelagem. Use sempre produtos
                  próprios para cães, de preferência sem cheiro ou com cheiro
                  suave, pois o odor forte incomoda e prejudica o faro dos
                  peludos.
                </p>
              </div>
              <img src="/images/dog2.png" alt="cachorro" />
            </div>
          </div>
        </main>
        <footer>&#169; Guilherme Mello Florio 2022 - WebMobile</footer>
      </div>
    </body>
  );
}

function Breed() {
  return (
    <body>
      <div id="root">
        <nav class="menu">
          <div class="logoContainer">
            <img src="/images/logo.png" alt="logo do site" class="logo" />
            <img src="/images/dogin.png" alt="Dogin" class="logoName" />
          </div>
          <div class="menuOpts">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/breed">Raças</a>
              </li>
              <li>
                <a href="/about">Sobre nós</a>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <div class="Breeds">
            <h1>Raças de cachorro</h1>
            <p>
              A grande diversidade de raças de cachorro que existe hoje é
              resultado de cruzamentos feitos pelo homem. Muitas delas foram
              criadas na busca por cachorros que correspondessem a
              características físicas específicas e com uma personalidade
              adequada à função que deveriam desempenhar. Ao longo de 100 mil
              anos, quando surgiu o cachorro, descendente do lobo cinzento, as
              cruzas resultaram em mais de 400 raças de cachorro. Aqui você
              encontra um guia completo com as principais raças de cachorro.
            </p>
            <div class="breedsList">
              <img src="/images/big.png" alt="raças grandes" />
              <img src="/images/medium.png" alt="raças médias" />
              <img src="/images/small.png" alt="raças pequenas" />
            </div>
          </div>
        </main>
        <footer>&#169; Guilherme Mello Florio 2022 - WebMobile</footer>
      </div>
    </body>
  );
}
function About() {
  return (
    <body>
      <div id="root">
        <nav class="menu">
          <div class="logoContainer">
            <img src="/images/logo.png" alt="logo do site" class="logo" />
            <img src="/images/dogin.png" alt="Dogin" class="logoName" />
          </div>
          <div class="menuOpts">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/breed">Raças</a>
              </li>
              <li>
                <a href="/about">Sobre nós</a>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <div class="About">
            <h1>Sobre nós</h1>
            <p>
              Desenvolvido como exemplo de website para a disciplina de
              WebMobile do Prof. Joaquim Pessôa Filho. Os dados aqui utilizados
              foram retirados de sites diversos. Segue a relação:
            </p>
            <ul>
              <li>https://love.doghero.com.br/racas-de-cachorro/</li>
              <li>
                https://site.amigonaosecompra.com.br/dicas-cuidar-cachorro/
              </li>
            </ul>

            <img src="/images/dogs.png" alt="cachorros" />
          </div>
        </main>
        <footer>&#169; Guilherme Mello Florio 2022 - WebMobile</footer>
      </div>
    </body>
  );
}

export default App;
