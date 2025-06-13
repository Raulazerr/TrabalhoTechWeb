import { useContext, useEffect, useState } from "react";
import { buscarPorId, modificar } from "../services/FilmeService";
import { RotaContext } from "../contexts/RotaContext.jsx";
import Formulario from "./Formulario.jsx";

function Editar() {
  const { rota, setRota } = useContext(RotaContext);
  const [filme, setFilme] = useState({});
  const [erro, setErro] = useState("");
  const id = rota.replace("/editar/", "");

  useEffect(() => {
    const carregar = async () => {
      const resposta = await buscarPorId(id);
      if (resposta.sucesso) {
        setFilme(resposta.dados);
        setErro("");
      } else {
        setErro(resposta.mensagem);
      }
    };
    carregar();
  }, [id]);

  const handleSalvar = async (dados) => {
    const resposta = await modificar(id, dados);
    if (resposta.sucesso) {
      setErro("");
      setRota("/listar");
    } else {
      setErro(resposta.mensagem);
    }
  };

  return (
    <>
      <h2>Editar Filme</h2>
      <Formulario onSubmit={handleSalvar} valores={filme} />
      {erro && <p>{erro}</p>}
    </>
  );
}

export default Editar;