export default function InputDiretor(props) {
    return (
      <>
        <label htmlFor="diretor">Diretor</label>
        <input
          type="text"
          id="diretor"
          name="diretor"
          value={props.valor}
          onChange={props.onChange}
        />
        {props.erro && <p>{props.erro}</p>}
      </>
    );
  }