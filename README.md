# Conceitos do Backend

## Estrutura de pastas
 > MVC (não usada nesse projeto)
 * model, view, controller

 > Controllers, Services, e 'Prisma'
 * Controller: Requisição, redirecionamento, Resposta;
 * Service: Processa a requisição e retorna resultado;
 * 'Prisma':
    * manipulador do banco de dados
    * já tem os modelos do banco, para ser acessado pelo Service;

## CRUD
  * Create: Criar
  * Read: Listar e/ou Mostrar;

## Libs
  * *Express*
    * É a lib (biblioteca/package/framework), pacote de recursos para criar e manipular um servidor (api)


# OBJETIVOS
  [*] Configurar prisma (Migrations, seed)
  [*] CRUD user
    [*] Add bcryptjs para salvar as senhas no banco;
    [*] Soft-delete
    [*] Route Index, com paginação;
  [ ] Create e Validate Session (sessão autenticada);
