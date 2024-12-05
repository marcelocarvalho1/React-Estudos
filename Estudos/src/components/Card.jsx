const Card = ({
  title,
  category,
  content,
  image,
  imageWidth,
  imageHeight,
  children,
}) => {
  return (
    <div style={styles.card}>
      {image && (
        <img
          src={image}
          alt={title}
          style={{ width: imageWidth, height: imageHeight }} // Aplicando os tamanhos da imagem
        />
      )}
      <h2>{title}</h2>
      <p>
        <strong>Categoria:</strong> {category}
      </p>
      <p>{content}</p>
      {/* Renderizando o conteúdo passado como children */}
      {children}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "300px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "16px",
  },
};

export default Card;
