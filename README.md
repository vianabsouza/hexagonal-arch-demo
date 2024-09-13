# Arquitetura Hexagonal

A arquitetura hexagonal, também conhecida como arquitetura de portas e adaptadores, é um padrão de design de software que visa criar uma estrutura modular e desacoplada. A ideia central é separar a lógica de negócios da aplicação das interfaces e métodos de comunicação com sistemas externos.

## Estrutura da aplicação

- `core`: módulo que contém a camada de aplicação, que é responsável por orquestrar o fluxo de dados e regras de negócio da aplicação. Aqui estão as classes que implementam os casos de uso da aplicação.

- `adapters`: módulo que contém a camada de infraestrutura, que é responsável pela comunicação com o mundo exterior. Aqui estão as classes que implementam as portas de entrada e saída da aplicação, bem como os adaptadores necessários para se comunicar com diferentes tecnologias, como bancos de dados e APIs externas.

## Portas e Adaptadores
### Portas
- `ProvedorCripto`: Interface que define os métodos de criptografia que devem ser implementados por um adaptador específico, como o InverterCripto ou RealCripto. Na camada de services, a aplicação interage apenas com a interface ProvedorCripto, garantindo que a lógica de criptografia não seja acoplada à implementação concreta.

- `ColecaoUsuario`: Interface que define as operações para manipulação de usuários, como adicionar e buscar usuários. Serve como contrato para qualquer implementação de repositório de usuários.

### Adaptadores
- `InverterCripto:`: Implementa a interface ProvedorCripto, fornecendo uma implementação específica dos métodos de criptografia. A classe concreta InverterCripto ou RealCripto é instanciada conforme necessário, mas a aplicação interage apenas com a interface ProvedorCripto.

- `ColecaoUsuarioMemoria`: Implementa a interface ColecaoUsuario e fornece uma implementação em memória para armazenar e recuperar usuários.

- `RealCripto`: Implementa a interface ProvedorCripto, fornecendo uma implementação concreta para as operações de criptografia e comparação de senhas. Utiliza a biblioteca bcrypt para gerar e verificar hashes de senhas.

## Rodando localmente
Para executar, você precisará de uma instalação recente do Deno. Em seguida, basta executar o seguinte comando na raiz do projeto:

```bash
deno task dev
```