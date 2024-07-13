# GitHub User Events Fetcher

Este projeto é uma aplicação JavaScript que obtém e exibe os últimos 10 eventos de um usuário no GitHub, filtrando apenas os eventos do tipo `CreateEvent` e `PushEvent`. Além disso, ele exibe informações detalhadas sobre os repositórios envolvidos nesses eventos, incluindo o número de forks, estrelas, watchers e a linguagem de programação.

## Funcionalidades

- Obtém os últimos 10 eventos de um usuário no GitHub.
- Filtra eventos para incluir apenas `CreateEvent` e `PushEvent`.
- Para eventos do tipo `PushEvent`, exibe a mensagem de commit.
- Exibe detalhes do repositório, como:
  - Nome do repositório
  - Link para o repositório
  - Número de forks
  - Número de estrelas
  - Número de watchers
  - Linguagem de programação

## Tecnologias Utilizadas

- JavaScript
- API do GitHub

## Como Usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/hamilton-vivas/projeto-final-fetch-github-api.git
