// import "./App.css";

// const App = () => {
//   return (
//     <div>
//       <h1>Olá, React!</h1>
//       <p>Este é um simples componente React.</p>
//     </div>
//   );
// };
// const Hello = () => {
//   return <h1>Olá, Mundo!</h1>;
// };

// export {Hello};

// export default App;

// import Header from './components/Header';
// import Banner from './components/Banner';

// const Hello = () => {
//   return (
//     <h1>Hello, World!</h1>
//   );

// }
// const App = () => {
//     //Parte logica do component
//   return (
//     // Parte visivel para o usuário
//     <>
//     <Hello/>
//     <Header />
//     <Banner />
//     </>
//   );
//  }

// export default App;

// import { Componente1, Componente2, Componente3 } from './components/VariosComponetes';

// const App = () => {
//   return (
//     <div>
//       <Componente1 />
//       <Componente2 />
//       <Componente3 />
//     </div>
//   );
// };

// export default App;

// import FormaDeBolo from './components/FormaDeBolo';
// // const App = () => {
// //   return (
// //     <div>
// //       <FormaDeBolo sabor="laranja" cobertura="chocolate" />
// //       <FormaDeBolo sabor="chocolate" cobertura="chantilly" />
// //     </div>
// //   );
// // };

// // export default App;

// import Painel from './components/Painel';

// const App = () => {
//   return (
//     <div>
//       <Painel>
//         <h1>Título do Painel</h1>
//         <p>Este é o conteúdo do painel.</p>
//         <ul>
//           <li>Item 1</li>
//           <li>Item 2</li>
//           <li>Item 3</li>
//         </ul>
//       </Painel>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Card from "./components/Card";
import CardDinamico from "./components/CardDinamico";
import moto from "./assets/moto/moto.jpeg";
import alt from "./assets/alt/alt.jpeg";

import Contador from "./components/Contador";

const App = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      <Card
        title="Notícia 1"
        category="Esportes"
        content="Conteúdo da notícia 1"
        image={moto}
        imageWidth="200px" // Definindo largura da imagem
        imageHeight="150px" // Definindo altura da imagem
      />
  
      <Card
        title="Notícia 2"
        category="Tecnologia"
        content="Conteúdo da notícia 3"
        image={alt}
        imageWidth="250px"
        imageHeight="200px"
      />
      <CardDinamico>
        <h2>Card Dinâmico</h2>
        <p>Esse é um exemplo de card utilizando children.</p>
      </CardDinamico>

      <Card
        title="Notícia 4"
        category="Tecnologia"
        content="Conteúdo da notícia 3"
        image={alt}
        imageWidth="250px"
        imageHeight="200px"
      >
        <Contador />
      </Card>
    </div>
  );
};

export default App;
