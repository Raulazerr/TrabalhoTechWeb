function Listagem(props) {
    return (
      <ul>
        <li>
          <span>Título</span>
          <span>Diretor</span>
          <span>Ações</span>
        </li>
        {props.itens.map((filme) => (
          <li key={filme.id}>
            <span>{filme.titulo}</span>
            <span>{filme.diretor}</span>
            <span>
              <button onClick={() => props.onModificar(filme.id)}>Modificar</button>
              <button onClick={() => props.onRemover(filme.id)}>Remover</button>
            </span>
          </li>
        ))}
      </ul>
    );
  }
  
  export default Listagem;