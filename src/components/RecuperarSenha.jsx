import React from 'react';

const RecuperarSenha = () => {
  return (
    <div className="recuperar-senha">
      <h2>Recuperar Senha</h2>
      <form>
        <input type="email" placeholder="Digite seu email" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default RecuperarSenha;