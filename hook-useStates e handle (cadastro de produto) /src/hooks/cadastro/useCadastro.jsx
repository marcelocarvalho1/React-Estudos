import { useState } from "react";
export const useCadastro = () => {
  const [nome, setNome] = useState("");

  const [valor, setValor] = useState("");
  const [imagem, setImagem] = useState("");
  const [produto, setProduto] = useState("");

  const handleInsertProduct = () => {
    if (nome && valor && imagem) {
      setProduto({ nome, valor, imagem });
    } else {
      alert("Todos os campos são obrigatórios!");
    }
  };
  return {
    nome, 
    setNome, 
    valor, 
    setValor, 
    imagem,
    setImagem,
    produto, 
    setProduto,
    handleInsertProduct};
};
