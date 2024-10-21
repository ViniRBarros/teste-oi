import { Usuario, Empresa, Endereco, TipoUsuario } from '../models';

const HomePage = () => {
  const enderecoUsuario = new Endereco("Rua A", "123", "Apto 1", "Bairro A", "Cidade A", "12345-678", "SP");
  const usuario = new Usuario("1", "João Silva", "joao@email.com", "joao", "senha123", TipoUsuario.USER, enderecoUsuario);

  const enderecoEmpresa = new Endereco("Rua B", "456", "", "Bairro B", "Cidade B", "87654-321", "SP");
  const empresa = new Empresa("Folia Eventos", "Folia Eventos Ltda", "12.345.678/0001-90", "empresa@email.com", "senha123", enderecoEmpresa);

  return (
    <div>
      <h1>Bem-vindo ao Folia Front</h1>

      <section>
        <h2>Informações do Usuário</h2>
        <p>Nome: {usuario.nome}</p>
        <p>Email: {usuario.email}</p>
        <p>Tipo: {usuario.tipoUsuario}</p>
        <p>Endereço: {usuario.endereco.logradouro}, {usuario.endereco.numeroResidencial} - {usuario.endereco.bairro}, {usuario.endereco.cidade} - {usuario.endereco.uf}</p>
      </section>

      <section>
        <h2>Informações da Empresa</h2>
        <p>Nome Fantasia: {empresa.nomeFantasia}</p>
        <p>Razão Social: {empresa.razaoSocial}</p>
        <p>CNPJ: {empresa.cnpj}</p>
        <p>Email: {empresa.email}</p>
        <p>Endereço: {empresa.endereco.logradouro}, {empresa.endereco.numeroResidencial} - {empresa.endereco.bairro}, {empresa.endereco.cidade} - {empresa.endereco.uf}</p>
      </section>
    </div>
  );
};

export default HomePage;
