1. Quantas suítes de testes foram desenvolvidas?

Foi desenvolvida 1 suíte de testes, composta por 6 cenários.
Justificativa: Todos os casos pertencem ao mesmo contexto e à mesma API.

2. Os testes são manuais ou automatizados?

São automatizados.
Newman executa a collection sem nenhuma intervenção humana.

3. Onde os testes se localizam na pirâmide de testes?

Localizam-se no meio da pirâmide, na camada de Testes de API / Integração.
Eles validam endpoints e comportamentos, não UI ou módulos internos.

4. Os testes são funcionais ou não funcionais?

São funcionais.
Validam comportamento da API (status, corpo, erros, operações CRUD).

5. Algum dos testes é End-to-End (E2E)?

Não.
Os testes interagem apenas com a camada de API, não percorrendo todo o fluxo do sistema.

6. O que é necessário para que esses testes funcionem como regressão?

Integrá-los ao processo de CI (GitHub Actions, GitLab CI, Jenkins)

Executar a suíte automaticamente após mudanças no código

Manter a collection versionada

Garantir que as validações cubram rotas críticas da API

Isso assegura que qualquer mudança que quebre comportamento seja detectada rapidamente.