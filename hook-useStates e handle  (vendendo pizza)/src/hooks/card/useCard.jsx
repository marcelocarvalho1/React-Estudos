import { useState } from "react";

export const useCard = () => {
  const [quantidade, setQuantidade] = useState(0);
  const precoUn = 35;
  const total = quantidade * precoUn;

  const handleAcrescentar = () => {
    setQuantidade(quantidade + 1);
  };
  const handleRetirar = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  };
  return { quantidade, handleAcrescentar, handleRetirar, total };
};
