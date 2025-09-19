const clientes = require("../data/clientes.data");

const listar = (req, res) => {
  res.send(clientes);
};

const buscar = (req, res) => {
  const { cpf } = req.params;
  const cliente = clientes.find(c => c.CPF === cpf);
  if (!cliente) return res.status(404).send("Cliente não encontrado");
  res.send(cliente);
};

const cadastrar = (req, res) => {
  const novo = req.body;
  clientes.push(novo);
  res.status(201).send("Cliente cadastrado");
};

const atualizar = (req, res) => {
  const { cpf } = req.params;
  const dados = req.body;
  const index = clientes.findIndex(c => c.CPF === cpf);
  if (index === -1) return res.status(404).send("Cliente não encontrado");
  clientes[index] = { ...clientes[index], ...dados };
  res.send("Cliente atualizado");
};

const excluir = (req, res) => {
  const { cpf } = req.params;
  const index = clientes.findIndex(c => c.CPF === cpf);
  if (index === -1) return res.status(404).send("Cliente não encontrado");
  clientes.splice(index, 1);
  res.send("Cliente removido");
};

module.exports = { listar, buscar, cadastrar, atualizar, excluir };