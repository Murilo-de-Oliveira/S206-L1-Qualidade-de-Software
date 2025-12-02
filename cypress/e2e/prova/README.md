# Testes de UI com Cypress – Prova

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

### Rodar apenas os testes da pasta "prova"

```bash
npm run test:prova
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

O relatório correto se encontra em: S206-L1-Qualidade-de-Software/reports/index_008.html