# GITHUB informações de usuarios

Projeto do processo seletivo, é uma aplicação React vite com componente grid do Kendo UI e utilizando a API do GitHub para exibir informações sobre um usuário, incluindo seus repositórios.

&nbsp;
&nbsp;

# 1. Como executar ?
  * Instale  as depedência
   .  npm install ou npm i

 * execute a aplicação local
   .  npm run dev
   
&nbsp;
&nbsp;


# 2. Funcionalidades

UserInfo: Exibe informações básicas do usuário, como nome, foto de perfil, bio, seguidores, e quantidade de repositórios  e compoania utilizando a API do GitHub.

GridRepository: Mostra os repositórios do usuário utilizando o Grid do Kendo UI, com filtragem e exportação ao excel.

&nbsp;
&nbsp;

# 4. Tecnologias Utilizadas
* React ( vite )
* Hooks (useState, useEffect, useRef)
* API (github)
* Kendo UI (Grid, GridColumn, GridToolbar, ExcelExport)

&nbsp;
&nbsp;

# 5. Componentes
O componente UserInfo é responsável por exibir informações básicas sobre um usuário do GitHub. Ele inclui a foto de perfil, o nome, a bio, a empresa, a localização e estatísticas como o número de repositórios, seguidores e pessoas seguidas. <br>

O componente GridRepository exibe o Grid(kendo ui) de repositórios do GitHub. Ele possui recursos de filtragem e exportação para Excel.

&nbsp;
&nbsp;

# 6. Resumo
dataUser / modificando o state irá consumir o github do usuario digitado. <br>
useRepor e useInfo (contém as informações do fetch) <br>
O uso do useEffect é realizado para realizar a ação apenas uma vez evitando um loop ocasionando em um erro na aplicação. <br>
GITURL contém o caminho da api. <br>
.env contém a key do kendo-ui. <br>
