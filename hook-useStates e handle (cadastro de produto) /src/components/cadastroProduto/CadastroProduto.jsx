import { useCadastro } from "../../hooks/cadastro/useCadastro";
import "./CadastroProduto.css";
const CadastroProduto = () => {
  const {
    nome,
    setNome,
    valor,
    setValor,
    imagem,
    setImagem,
    produto,
    handleInsertProduct,
  } = useCadastro();

  return (
    <>
      <div className="centralizado">
        <h1>Cadastro de produto</h1>

        <div>
          <label htmlFor="">
            <span>Nome do produto: </span>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite o nome do produto"
            />
          </label>
        </div>

        <div>
          <label htmlFor="">
            <span>Valor do produto: </span>
            <input
              type="number"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              placeholder="Digite o valor do produto"
            />
          </label>
        </div>

        <div>
          <label htmlFor="">
            <span> URL da imagem: </span>
            <input
              type="text"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
              placeholder="Insira uma URL de imagem"
            />
          </label>
        </div>

        <button onClick={handleInsertProduct}>Cadastrar Produto</button>

        {produto && (
          <div>
            <h2>Dados do produto</h2>
            <p>Nome: {produto.nome}</p>
            <p>Valor: {produto.valor}</p>
            <span>
              <img src={produto.imagem} alt={produto.nome} />
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default CadastroProduto;
