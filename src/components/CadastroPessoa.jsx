import React from 'react';

const CadastroPessoa = () => {
  return (
    <div className="cadastro-pessoa">
      <h2>Cadastro de Pessoa</h2>
      <form>
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="CPF" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroPessoa;