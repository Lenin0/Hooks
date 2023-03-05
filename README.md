<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Projeto</title>
    <style>
      /* Estilo geral */
      body {
        font-family: Arial, sans-serif;
        line-height: 1.5;
        margin: 0;
        padding: 0;
      }
      h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
      }
      /* Estilo do cabeçalho */
      header {
        background-color: #3498db;
        color: #fff;
        padding: 20px;
        text-align: center;
      }
      header h1 {
        font-size: 48px;
        margin: 0;
      }
      header p {
        font-size: 24px;
        margin-top: 10px;
      }
      /* Estilo do conteúdo */
      main {
        margin: 50px auto;
        max-width: 800px;
        padding: 0 20px;
      }
      main h2 {
        font-size: 36px;
        margin-top: 50px;
      }
      main ul, main ol {
        list-style: none;
        margin: 20px 0;
        padding: 0;
      }
      main li {
        margin-bottom: 10px;
      }
      main table {
        border-collapse: collapse;
        margin: 20px 0;
        width: 100%;
      }
      main th, main td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: left;
      }
      main th {
        background-color: #f2f2f2;
        font-weight: bold;
      }
      main pre {
        background-color: #f2f2f2;
        border: 1px solid #ccc;
        padding: 10px;
        white-space: pre-wrap;
      }
      main code {
        background-color: #f2f2f2;
        border-radius: 3px;
        font-size: 14px;
        padding: 3px 6px;
      }
      /* Estilo do rodapé */
      footer {
        background-color: #ccc;
        color: #333;
        padding: 10px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Meu Projeto</h1>
      <p>Um projeto TypeScript para registro de entrada e saída de dinheiro</p>
    </header>
    <main>
      <h2>Funcionalidades</h2>
      <ul>
        <li>Adicionar novos itens de entrada ou saída</li>
        <li>Visualizar uma lista de todos os itens de entrada e saída</li>
        <li>Visualizar o saldo total de todos os itens de entrada e saída</li>
      </ul>

      <h2>Instalação</h2>
      <ol>
        <li>Clone o repositório</li>
        <li>Execute <code>npm install</code> para instalar as dependências</li>
        <li>Execute <code>npm
