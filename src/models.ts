export enum TipoUsuario {
    DEFAULT = 'DEFAULT',
    EMPRESA = 'EMPRESA',
    ADMIN = 'ADMIN',
    USER = 'USER',
  }
  
  export class Endereco {
    logradouro: string;
    numeroResidencial: string;
    complemento: string;
    bairro: string;
    cidade: string;
    cep: string;
    uf: string;
  
    constructor(logradouro: string, numeroResidencial: string, complemento: string, bairro: string, cidade: string, cep: string, uf: string) {
      this.logradouro = logradouro;
      this.numeroResidencial = numeroResidencial;
      this.complemento = complemento;
      this.bairro = bairro;
      this.cidade = cidade;
      this.cep = cep;
      this.uf = uf;
    }
  }
  
  export class Usuario {
    identificacao: string;
    nome: string;
    email: string;
    usuario: string;
    senha: string;
    tipoUsuario: TipoUsuario;
    endereco: Endereco;
  
    constructor(identificacao: string, nome: string, email: string, usuario: string, senha: string, tipoUsuario: TipoUsuario, endereco: Endereco) {
      this.identificacao = identificacao;
      this.nome = nome;
      this.email = email;
      this.usuario = usuario;
      this.senha = senha;
      this.tipoUsuario = tipoUsuario;
      this.endereco = endereco;
    }
  }
  
  export class Empresa {
    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    email: string;
    senha: string;
    endereco: Endereco;
  
    constructor(nomeFantasia: string, razaoSocial: string, cnpj: string, email: string, senha: string, endereco: Endereco) {
      this.nomeFantasia = nomeFantasia;
      this.razaoSocial = razaoSocial;
      this.cnpj = cnpj;
      this.email = email;
      this.senha = senha;
      this.endereco = endereco;
    }
  }
    