<h1 align="center">Dashboard com Angular</h1>

## :memo: Descrição
O projeto consiste na utilização do framework Angular para o desenvolvimento de um sistema de informações de veículos com três interfaces: login, home e dashboard. As informações dos veículos são disponibilizadas por um back-end em formato de API Rest.

<img src="https://j.gifs.com/qQmD3G.gif" style="width: 70%;">

## :mag_right: Nesse projeto você encontra:
* <b>Aquisição de nome e senha</b>: O módulo de login busca dados dos usuários cadastrados no back-end e gera autenticação no sistema; 
* <b>Card de boas-vindas ao sistema</b>: O módulo de home apresenta as boas-vindas por meio da classe "card" do Bootstrap;
* <b>Comunicação com back-end</b>: O sistema implementa serviços Angular para se comunicar com o back-end;
* <b>Card com campo de busca por nome</b>: Em um card com _select_, o módulo de dashboard apresenta informações de acordo com o nome do veículo selecionado;
* <b>Tabela com campo de busca por código</b>: Em um tabela com _input_, o módulo de dashboard permite o usuário entrar com o código Vin do veículo e encontrar informações;
* <b>Interceptor</b>: O sistema intercepta solicitações HTTP para incluir token de acesso;
* <b>Guardas de rotas</b>: O sistema utiliza _route guards_ para controlar o fluxo de navegação;
  
  <img src="https://j.gifs.com/mqgGor.gif" style="width: 70%;">


## :wrench: Tecnologias utilizadas
* Framework Angular
  * Modules, components e services
  * Diretivas _ngModel_,_ngIf_,_ngFor_.
* Linguagem Typescript
* Framework Bootstrap
* Biblioteca Po Ui
* Biblioteca RxJS
  * Operadores _map_,_switchMap_,_pluck_,_tap_,_debounceTime_,_filter_,_distinctUntilChange_.

## :rocket: Rodando o projeto
Para rodar o projeto é necessário que você tenha o Angular Cli instalado. Para isso, abra uma janela no terminal e execute o seguinte comando:
~~~
npm install -g @angular/cli
~~~
[Veja aqui mais informações](https://angular.io/cli).

1. Clone o repositório
2. Vá ao diretório _api_ e execute os seguintes comandos:
~~~
npm install
npm start
~~~
  * Os dados estarão disponíveis em <http://localhost:3000/>;
  * A API deve estar rodando durante a execução da aplicação.
3. Vá ao diretório _dashboard_ do projeto, instale as dependências e execute a aplicação:
~~~
npm install
ng serve --o
~~~
  * O comando irá abrir a aplicação no seu navegador!

## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/KalineMzs">
        <img src="https://avatars.githubusercontent.com/u/53267552?v=4" width="100px;" alt="Foto de Kaline Menezes no GitHub"/><br>
        <sub>
          <b>KalineMzs</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto
![Badge Finalizado](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)
