# 🔢 Contador em React

Uma aplicação de contador interativa, dinâmica e moderna desenvolvida em **React** utilizando **Vite**. Este projeto foi criado como parte de uma atividade prática proposta pelo professor de Front-end no **SENAI**, com o objetivo de avaliar habilidades técnicas em componentização, gerenciamento de estados e estilização isolada no ecossistema React.

---

## 🚀 Sobre o Projeto

O objetivo principal desta aplicação é aplicar os conceitos fundamentais do React para construir uma interface de contador que reage instantaneamente às ações do usuário. Graças ao modelo de renderização do React, as atualizações na tela acontecem em tempo real, manipulando o DOM de forma eficiente sem a necessidade de recarregar a página inteira.

## 🎮 Funcionalidades

O projeto conta com controles intuitivos e manipulação de exibição inteligente:  
* **Incremento e Decremento:** Soma ou subtrai o valor do contador por unidade (+1 -1).  
* **Sorteador Aleatório:** Sorteia instantaneamente um número de 1 a 10 e define como o valor atual.  
* **Reset Completo:** Zera o contador, retornando o valor para 0.  
* **Formatação Dinâmica (Zero à Esquerda):** Uso do método `padStart` para garantir uma interface elegante, adicionando automaticamente um `0` à esquerda para números entre 1 e 9 (ex: `01`, `02`... `09`).

## 🛠️ Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção de interfaces.  
* **Vite:** Ferramenta de build de última geração que oferece um ambiente de desenvolvimento ultra rápido com *Fast Refresh*.  
* **JavaScript (ES6+) & JSX:** Sintaxe moderna para a lógica e estrutura dos componentes.  
* **CSS Modules:** Técnica de estilização escopada e isolada por componente (`.module.css`), garantindo que os estilos do contador não conflitem com outras partes da aplicação.

## 📁 Estrutura de Arquivos

Abaixo está a organização das pastas do projeto:

```text  
- index.html  
- src/  
  - componentes/  
    - Contador/  
      - Contador.jsx  
      - Contador.module.css  
  - App.css  
  - App.jsx  
  - index.css  
  - main.jsx
````

## ⚙️ Como Executar o Projeto

Este projeto foi inicializado utilizando o comando npm create vite@latest selecionando o template React + JavaScript.

Para rodar o projeto localmente, siga os passos abaixo:

* **Acesse a pasta do projeto:**
  ```text
  Bash
  
    cd "nome-do-projeto"
  ```

* **Instale as dependências (caso a pasta node_modules não esteja presente):**
  ```text
  Bash
  
    npm install
  ```

* **Inicie o servidor de desenvolvimento:**
    ```text
  Bash
  
    npm run dev
  ```

* **Acesse a aplicação:**

  O terminal exibirá o endereço local (geralmente http://localhost:5173). Abra este link no seu navegador para ver e interagir com o contador.

## 💡 Aprendizados e Competências Testadas

Durante o desenvolvimento desta atividade no SENAI, foram consolidadas as seguintes competências:

* **Uso do useState:** Gerenciamento do estado local do componente para refletir mudanças na interface sem recarregamento de página.

* **Componentização:** Divisão da interface em partes menores, isoladas e independentes (criação do componente Contador).

* **Estilização Segura:** Implementação do CSS Modules para assegurar que cada componente tenha seus estilos encapsulados de forma única.

* **Lógica e Manipulação de Dados:** Aplicação de lógica matemática para o sorteador e métodos de string (padStart) para formatação visual.

## 👤 Autor  
Fernanda Gaspar
