import React, { useState } from 'react';
import axios from 'axios';

const CadastroPessoa = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!nome || !email || !cpf || !senha) {
      setError('Todos os campos são obrigatórios!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }

    if (cpf.length !== 11) {
      setError('O CPF deve conter 11 dígitos.');
      return;
    }

    if (senha.length < 6) {
      setError('A senha deve conter pelo menos 6 caracteres.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('URL_DA_API/cadastro-pessoa', {
        nome,
        email,
        cpf,
        senha,
      });

      setSuccess('Cadastro realizado com sucesso!');
      console.log('Resposta da API:', response.data);

      setNome('');
      setEmail('');
      setCpf('');
      setSenha('');
    } catch (error) {
      setError('Erro ao cadastrar. Tente novamente.');
      console.error('Erro ao cadastrar:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cadastro-pessoa">
      <h2>Cadastro de Pessoa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </div>
  );
};

export default CadastroPessoa;
