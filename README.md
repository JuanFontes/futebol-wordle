
# Futebol Wordle - [![CircleCI](https://circleci.com/gh/JuanFontes/futebol-wordle/tree/main.svg?style=svg)](https://circleci.com/gh/JuanFontes/futebol-wordle/tree/main)

[Futebol Wordle](https://juanfontes.github.io/futebol-wordle/) é um projeto _forkado_ do [react-wordle](https://github.com/cwackerfuss/react-wordle). Thanks [cwackerfuss](https://github.com/cwackerfuss).

## Resumo

Assim como no [Wordle](https://www.nytimes.com/games/wordle/index.html), um novo nome de time é sorteado diariamente para que você tente adivinhar, as tentativas dependem do tamanho do nome. São mais de [680](https://github.com/JuanFontes/futebol-wordle/blob/main/src/constants/wordlist.ts) times disponíveis atualmente, todos em português.

Quer contribuir com algum nome ou melhoria? Sinta-se livre para abrir um [pull request](https://github.com/JuanFontes/futebol-wordle/pulls). Esse é um projeto livre e toda ajuda é bem-vinda. :)
  
## Deploy

### Localmente:

Você só precisa clonar o repositório e executar alguns comandos.
  
#### Método #1

```bash
$ git clone https://github.com/JuanFontes/futebol-wordle.git
$ cd futebol-wordle
$ npm ci
$ npm run start
```
E então você conseguirá acessar http://localhost:3000.

#### Método #2
O projeto possui um [Dockerfile](https://github.com/JuanFontes/futebol-wordle/blob/main/Dockerfile) e também um [docker-compose](https://github.com/JuanFontes/futebol-wordle/blob/main/docker-compose.yaml), caso você não tenha node/npm instalados, essa é a melhor opção.

```bash
$ git clone https://github.com/JuanFontes/futebol-wordle.git
$ cd futebol-wordle
$ docker compose up -d
```
Ele irá usar um `nginx` e só a pasta  `build` será copiada, com isso a imagem terá aproximadamente **30MB**. **Caso a sua porta 80 esteja em uso, será preciso alterar nesses dois arquivos mencionados acima.**

E após isso, basta acessar: http://localhost

PS: Esse setup funciona em "produção".

### GitHub Pages, AWS, Heroku..

Veja a documentação oficial do React: https://create-react-app.dev/docs/deployment
