# <img id='start' width='38px' src='./src/assets/img/logoiconwbg.png'> SpreadsheetReader 

## ![Vercel](https://vercelbadge.vercel.app/api/holiv/SpreadsheetReader-Angular) [Accessar aplicação](https://spreadsheet-reader.vercel.app/)

<i>Este repositório é referente ao Frontend desta aplicação. Para visualizar os dados referente ao Backend acessar o respectivo repositoriório clicando [aqui](https://github.com/Holiv/SpreadsheetReader-ASP.NETCoreWebAPI)</i>
### Aplicação desenvolvida como desafio da empresa Astéria.

- <a href="#intro">Introdução</a>
- <a href="#desafio">O Desafio</a>
- <a href="#tech">Tecnologias</a>
- <a href="#apli">A Aplicação</a>
  - <a href="#inicio">Inicio</a>
  - <a href="#env">Enviando Arquivos</a>
  - <a href="#carr">Carregando a Planilha</a>
  - <a href='#filtro'>Filtros</a>
- <a href="#emp">A Empresa</a>

---
## <p id="#intro">Introdução</p>

O SpreadsheetReader, como decidi nomea-lo, tem o objetivo de importar um arquivo em Excel contendo uma listagem de pedidos, extrair esses dados, importa-los para o banco de dados para que então esses dados possam ser consumidos e manipulados pelo usuário através de uma interface.

![spreadgif](https://user-images.githubusercontent.com/97141987/218546270-14577d20-4550-46dc-92cf-4a943c90714e.gif)

## <p id="#desafio">O Desafio</p>

1. Importação dos dados no banco de dados. [Utilize esta planilha para testar a aplicação](https://github.com/Holiv/SpreadsheetReader-Angular/files/10725477/sheet_dummy_data.xlsx)

2. Listagem paginada mostrando os campos das planilhas (soma).
3. Filtros por mês, código cliente, e categoria.
4. Mostrar as informações agrupadas por trimestre (se possível um gráfico).
## <p id="#tech">Tecnologias</p>
1. Angular
2. Bootstrap

## <p id="#apli">A Aplicação</p>
### <p id="#inicio">Inicio</p>
A Aplicação é iniciada com uma interface simples, que solicita ao usuário o upload da planilha a ser utilizada para a extração dos dados

### <p id="#env">Enviando Arquivos</p>
O arquivo é enviado através de uma requisição Http do tipo POST, onde será tratado pela API.
Foram utilizados componentes do Angular para a criação dos elementos utilizados, como Input e Botões e a estilização ficou a cargo do Bootstrap.

### <p id="#carr">Carregando a Planilha</p>
Uma vez que a planilha é enviada ao banco de dados, podemos solicitar o carregamento dos dados na pagina.
Foram utilizados componentes e serviços do Angular para criar uma requisição Http do tipo GET e carregar os dados na pagina. 
Através da utilização de rotas os elementos são alterados sem a necessidade de um Reload na página.

### <p id="#filtro">Filtros</p>
A Aplicação possui filtragem de dados por Codigo do Cliente, Categoria do Produto, Mês da operação e Trimestre, sendo o trimestre mostrado em forma de gráfico.

Os filtros podem ser selecionados através de lista de opcões pré-carregadas com valores existentes. Por exemplo, se em um determinado mês nenhuma operação ocorreu, esse mês não estará disponível na listagem de filtragem por mês.

O mesmo ocorre para a incluão de novos dados. Se um novo pedido for feito com um novo código de cliente, o devido código será carregado automaticamente como opção de seleção para filtragem do usuário.

## <p id="#carr">A Empresa</p>
Desde 2005 no mercado, a Astéria se destaca por ser uma empresa diferenciada, com a capacidade de compreender as exigências e particularidades de cada projeto, e oferecer soluções exclusivas e inovadoras.

Dirigida por profissionais multidisciplinares e com larga experiência no universo digital, acreditamos que a tecnologia deve servir e auxiliar pessoas a alcançarem melhores resultados.

Ao longo dos 17 anos de atuação, a Astéria desenvolveu importantes projetos para grandes empresas de diversos segmentos. Os projetos voltados para Trade Marketing ganharam destaque em alguns clientes devido aos excelentes resultados. Passamos então a nos identificar cada vez mais com estes projetos e assim agregar ainda mais valor aos nossos clientes.
#### <a href="#start">Voltar ao Inicio</a>
---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
