function InputTitulo(props) {
    return (
      <>
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={props.valor}
          onChange={props.onChange}
        />
        {props.erro && <p>{props.erro}</p>}
      </>
    );
  }
  
  export default InputTitulo;