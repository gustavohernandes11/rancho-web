# Aplicativo Rancho WEB

Esse repositório é o Frontend do projeto "Rancho" criado para auxiliar no gerenciamento de gado de leite. [O backend está disponível aqui](https://github.com/gustavohernandes11/rancho-api), e sua comunicação é feita por requisições HTTP.

Na sua versão inicial é possível:

-   Se autenticar no sistema;
    -   Signup: criar sua conta com email, nome e senha;
    -   Login: fazer login com email e senha;
-   Cadastrar lotes com as seguintes informações:
    -   Nome;
    -   Descrição;
-   Cadastrar animal usando as seguintes informações:
    -   Nome;
    -   Data de nascimento;
    -   Sexo;
    -   Código;
    -   Lote;
    -   Animal pai;
    -   Animal mãe;
    -   Observação;
-   Visualizar, editar e remover animais e/ou lotes.

Nas próximas versões, serão implementadas as seguintes funcionalidades:

-   Histórico de vacinas e medicamentos para os animais.
-   Cadastrar e acompanhar peso dos animais.
-   Inserir produção de leite por dia/semana/mês, com visualização por gráfico.
-   Gerar relatórios sobre os lotes.
-   Exportar dados para formato EXCEL.
