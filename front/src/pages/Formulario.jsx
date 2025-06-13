import { useState, useEffect } from "react";
import InputTitulo from "../components/InputTitulo.jsx";
import InputDiretor from "../components/InputDiretor.jsx";

function Formulario(props) {
  const [titulo, setTitulo] = useState("");
  const [erroTitulo, setErroTitulo] = useState("");
  const [diretor, setDiretor] = useState("");
  const [erroDiretor, setErroDiretor] = useState("");

  useEffect(() => {
    if (props.valores) {
      setTitulo(props.valores.titulo || "");
      setDiretor(props.valores.diretor || "");
    }
  }, [props.valores]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let valido = true;
    if (!titulo) {
      setErroTitulo("Título é obrigatório");
      valido = false;
    } else setErroTitulo("");
    if (!diretor) {
      setErroDiretor("Diretor é obrigatório");
      valido = false;
    } else setErroDiretor("");

    if (valido) {
      props.onSubmit({ titulo, diretor });
      setTitulo("");
      setDiretor("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputTitulo valor={titulo} onChange={(e) => setTitulo(e.target.value)} erro={erroTitulo} />
      <InputDiretor valor={diretor} onChange={(e) => setDiretor(e.target.value)} erro={erroDiretor} />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default Formulario;