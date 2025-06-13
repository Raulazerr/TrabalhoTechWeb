import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function buscarTodos() {
  return axios.get(url)
    .then((response) => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Ocorreu um erro!" }));
}

function buscarPorId(id) {
  return axios.get(`${url}/${id}`)
    .then((response) => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Ocorreu um erro!" }));
}

function adicionar(filme) {
  return axios.post(url, filme)
    .then((response) => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Ocorreu um erro!" }));
}

function modificar(id, filme) {
  return axios.put(`${url}/${id}`, filme)
    .then((response) => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Ocorreu um erro!" }));
}

function remover(id) {
  return axios.delete(`${url}/${id}`)
    .then((response) => ({ sucesso: true, dados: response.data }))
    .catch(() => ({ sucesso: false, mensagem: "Ocorreu um erro!" }));
}

export { buscarTodos, buscarPorId, adicionar, modificar, remover };