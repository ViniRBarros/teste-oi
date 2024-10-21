import React from 'react';

const CadastroEmpresa = () => {
  return (
    <div className="cadastro-empresa">
      <h2>Cadastro de Empresa</h2>
      <form>
        <input type="text" placeholder="Nome da Empresa" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="CNPJ" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroEmpresa;