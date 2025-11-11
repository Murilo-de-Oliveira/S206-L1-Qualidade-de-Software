# Testes de UI com Cypress – Projeto Lista 1

Esta atividade implementa testes para o site [https://www.saucedemo.com/](https://www.saucedemo.com/).

## Instalação

```bash
npm install
```

## Como Executar

### Modo Interativo

```bash
npx cypress open
```

### Modo Headless

```bash
npm test
```

### Rodar apenas os testes da pasta "lista-1"

```bash
npm run test:lista1
```

## Relatórios

Este projeto utiliza o pacote `cypress-mochawesome-reporter`.

Gerar relatório:

```bash
npm run report
```

Saída:

```
reports/
```