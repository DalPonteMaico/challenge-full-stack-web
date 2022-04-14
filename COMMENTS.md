## Instruções para rodar o projeto
- Instalar e rodar projeto do front:
  ```
  cd front
  yarn && yarn serve
  ```
- Instalar e rodar projeto do back:
  ```
  cd back
  yarn && docker-compose up -d && yarn start
  ```
## Conforme instruções de entrega

#### Decisão da arquitetura utilizada
- Pelo requisito do desafio em utilizar express e pela natureza genérica dos requisitos, 
  foi assumido que nenhuma arquitetura era necessária, 
  mas a demonstração de conhecimentos básicos sobre construção de projetos e tecnologias;
- Nenhuma arquitetura específica foi utilizada por não haver necessidade com tão poucas funcionalidades, 
  embora para back-end os arquivos seguem a nomenclatura e organização do DDD. 
  No caso do front, foi utilizado a estrutura fornecida pelo próprio framework;
- A estrutura de pastas foi definida tentando colocar tanto 
o projeto do front quanto do back no mesmo repositório:
  ```
  back
  |   src
  |   |   controller
  |   |   migrations
  |   |   providers
  |   |   services
  front
  |   public
  |   src
  |   |   assets
  |   |   components
  |   |   plugins
  |   |   views
  ```

#### Lista de bibliotecas de terceiros utilizadas
- No backend:
  - body-parser: Facilitador para obtenção de dados contidos na secção "body" da requisição HTTP
  - express: Servidor node;
  - pg-promise: Interface para conexão com base de dados, simples e eficiente; 
  - cors: Permitir que o back-end esteja acessível para o front, que por questões de segurança
  bloqueia acesso de páginas web acessando domínio local através do navegador;
- No frontend: 
  - vue: Framework que possibilita o desenvolvimento do SPA;
  - vue-router: Permite rotas sejam utilizadas para navegação dentro do SPA sem atualização da página pelo navegador;
  - vuetify: Conjunto de componentes e utilitários visuais;  
  - axios: Facilita requisições HTTP na aplicação;  
- Outros
  - Docker: Disponibiliza base de dados postgres usando virtualização;
  - Docker-compose: Possibilita subir diferentes containers docker em conjunto 
    (embora não houve tempo para adicionar containers para front e back);
  - yarn: Gerenciador de pacotes JS
  
#### O que você melhoraria se tivesse mais tempo
- Claramente o tempo de desenvolvimento do back-end sem utilizar frameworks que fornecem 
uma arquitetura já prédefinida foi subestimado, impossibilitando maior qualidade de código.
Neste sentido, utilizaria [NestJs](https://nestjs.com) para gerar o projeto e fornecer já diversas ferramentas que 
possibilitaria mais robustez, confiabilidade e qualidade;
- Seria necessário selecionar um bom pacote para facilitar validações e sanitização de dados no back-end;
- Validações nos formulários do front precisam de mais trabalho;
- Necessário investir mais em responsividade;

#### Quais requisitos obrigatórios que não foram entregues
- Não houve tempo adequado para validações corretamente dos formulários no front;
- Não foi possível fazer o redirecionamento correto nos botões de cancelar;
- É necessário a utilização de um ORM para qualidade aceitavel na camada de persistência;
- Não foi possível fazer a sanitização adequada de dados do backend;
- Não foi possível fazer a validação adequada de dados enviados via requisição HTTP para backend;
- Pela natureza simplificada do backend não foi possível fazer tratamento de exceções adequado.
