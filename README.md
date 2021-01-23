<h1 align="center">
    <img alt="Soft Skills" src=".github/logo.png" />
    <br>
    e.learning - Aplicação Educacional
</h1>

<h4 align="center">
    Versão 1.0 🚀
</h4>

<p align="center">
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas-do-backend">Rotas Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/carlosmfreitas2409/elearning?color=15c3d6">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/carlosmfreitas2409/elearning?color=15c3d6">

  <img alt="Project license" src="https://img.shields.io/github/license/carlosmfreitas2409/elearning?color=15c3d6">

  <a href="https://github.com/carlosmfreitas2409/elearning/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/carlosmfreitas2409/elearning?color=15c3d6">
  </a>
</p>


<p align="center">
  <img src=".github/resultado.gif" alt="e.learning Preview" width="30%" style="border-radius: 33px">
</p>

## 💡 Sobre

O e.learning é uma aplicação voltada para educação, que oferece cursos de diversas áreas de conhecimento com um conteúdo em formato de videoaulas.

Este projeto foi um desafio, proposto pela Rocketseat, após a conclusão do Bootcamp GoStack. Esse projeto foi desenvolvido em duas partes, sendo eles o back-end e mobile.

## 🎨 Layout

No link abaixo, você encontra o layout do projeto mobile em que desenvolvi para esta aplicação. Lembrando que você precisa ter uma conta no Figma para acessá-lo.

- [Layout Mobile](https://www.figma.com/file/C3WxXEO7lQXDtqOef2gsO6/e-learning?node-id=0%3A1)

## :rocket: Tecnologias

Esse projeto foi desenvolvido usando as seguintes tecnologias:

- [VS Code][vscode] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

#### Mobile
- [React Native](https://reactnative.dev/)
- [Typescript][ts]
- [React Navigation](https://reactnavigation.org/)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [styled-components](https://www.styled-components.com/)
- [Axios](https://reactnavigation.org/)

#### Backend
- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](ts)
- [TypeORM](https://typeorm.io#/)
- [PostgreSQL](https://www.postgresql.org/)
- [Multer](https://www.npmjs.com/package/multer)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)


## 🍃 Rotas do Backend

#### Usuários
Resource URI          | Método HTTP | Finalidade
--------------------- | ----------- | -------
/users                | POST        | Registro de usuário
/sessions             | POST        | Autenticação do usuário

#### Cursos
Resource URI                  | Método HTTP | Finalidade
----------------------------- | ----------- | -------
/courses                      | GET         | Listagem de cursos
/courses/:course_id           | GET         | Listagem de um curso específico
/courses                      | POST        | Criação de cursos
/courses/:course_id           | PUT         | Atualização de um curso
/courses/:course_id/lessons   | GET         | Listagem de aulas em um curso

#### Aulas
Resource URI          | Método HTTP | Finalidade
--------------------- | ----------- | -------
/lessons/:lesson_id   | GET         | Listagem de uma aula específica
/lessons              | POST        | Criação de aulas
/lessons/:lesson_id   | PUT         | Atualização de uma aula

## ⚙️ Como contribuir

- Faça um fork desse repositório;
- Crie uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`;

Após o merge da sua pull request for realizado, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/carlosmfreitas2409/expansion-week-desafio/blob/master/LICENSE) para mais informações.

---

Feito com 💜 por Carlos Eduardo :wave:

[ts]: https://www.typescriptlang.org
[vscode]: https://code.visualstudio.com/
[yarn]: https://yarnpkg.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint