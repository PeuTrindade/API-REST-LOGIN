# API-REST-LOGIN
API REST de login e cadastro de usuários 


Essa é uma API REST de login e registro de usuários. Ela foi desenvolvida com NodeJS, utilizando como banco de dados o MongoDB. Quando o usuário se cadastra colocando os dados requisitados,
os dados são salvos no MongoDB. Caso o usuário ja esteja registrado, pode-se fazer o login. As informações de cadastro devem seguir requisitos mínimos, como de tamanho do nome,email e senha.
Existe uma rota para administradores, que só podem ser acessadas por usuários que estão salvos como admins no banco de dados. Então o sistema verifica se o usuário possui um token de autorização 
quando ele faz a requisição. Caso ele tenha, seu acesso é permitido,caso o contrário, é negado.
