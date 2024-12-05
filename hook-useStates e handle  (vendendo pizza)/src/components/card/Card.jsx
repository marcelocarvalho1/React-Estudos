import { useCard } from "../../hooks/card/useCard";
import "./Card.css"

const Card = () => {
  const { quantidade, handleAcrescentar, handleRetirar, total } = useCard();

  return (
    <div className="container">
      <h1>Pizza Carbonara</h1>
      <p>R$ 35,00 a mais barata da cidade!</p>
      <button onClick={handleAcrescentar}>Adicionar</button>
      <button onClick={handleRetirar}>Retirar</button>
      <p>Quantidade: {quantidade}</p>
      <p>Valor Total: R$ {total}</p>
    </div>
  );
};

export default Card;
