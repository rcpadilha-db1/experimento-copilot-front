# Anotações sobre a Atividade

## Desenvolver em Angular ou ReactJS

### O que a aplicação deve fazer:
- Permitir consultar informações sobre ações;
- Consulta de ações e seus respectivos preços;
- Manter uma lista de ações favoritas;

## Tela 1 – Início
Desenvolver a mesma tela acima. **OBS.:** Não precisa ficar exatamente igual, mas deve ser parecido.

### Requisitos:

#### Seção Ações Favoritas:
- Deve se obter do local storage a lista de ações favoritas do usuário;
- **OBS.:** Ações podem ser marcadas como favoritas na Tela 3;
- Ações devem ser exibidas na forma de card com símbolo de ação e o nome;
- Ao clicar na ação, deve ser exibida na **Tela 3 – Detalhes** (detalhes da ação selecionada);
- Ao excluir um card de ação, deve excluir da lista de favoritas do local storage e atualizar a lista.

#### Seção Últimas Notícias:
- Deve consumir **API1 – Consulta de Notícias**;
- Em cada notícia, deve exibir o título, uma breve descrição, a data da notícia e um link para acesso (`title`, `snippet`, `published_at`, `url`) - obtidos da API.

#### Menu:
- Clicar em **Home** deve exibir **Tela 1**;
- Clicar em **Ações** deve exibir **Tela 2**.

## Tela 2 – Ações

### Requisitos:
- Esta tela deve ser iniciada vazia, apenas com campo de pesquisa. Ao clicar em **Pesquisar**:
  - Validar que o usuário preencheu o campo de pesquisa;
  - Executar a pesquisa, utilizando **API2 – Pesquisa de Ação**;
  - Exibir o resultado da consulta na tabela, exibindo:
    - Símbolo da ação (`symbol`),
    - Nome da empresa (`name`),
    - Tipo da ação (`type`).
  - **Obs.:** Dados obtidos da API;
  - Ao clicar no símbolo da ação, redirecionar para a **Tela 3 – Detalhes** para mostrar os detalhes da ação selecionada.

## Tela 3 – Detalhes

### Nesta tela deve mostrar os detalhes da ação selecionada.

### Requisitos:
- A tela deve receber como parâmetro o símbolo da ação selecionada, consultando a **API3 – Consulta de preço de ação**;
- Após realizar a consulta, deve exibir:
  - Símbolo (`symbol`) + Nome da Empresa (`name`);
  - % de variação no preço (`day_change`), se for positivo exibir em verde, se for negativo exibir em vermelho;
  - Deve mostrar valores:
    - Valor atual da ação (`price`),
    - Maior valor no dia (`day_high`),
    - Menor valor no dia (`day_low`),
    - Valor do último fechamento (`previous_close_price`),
    - Maior valor no último ano (`52_week_high`),
    - Menor valor no último ano (`52_week_low`).
- O botão **Marcar como Favorito** deve ser exibido se a ação não fizer parte dos favoritos do usuário;
- O botão **Marcar como Favorito** deve incluir a ação na lista de favoritos do usuário, armazenado no local storage;
- O botão **Voltar** deve voltar para a tela anterior.

## Informações sobre as APIs a serem Consumidas:

### Usar o [stockdata.org](https://www.stockdata.org/) para obter informações:
- Criar uma conta para obter uma chave de acesso às APIs;
- **Minha conta:** william.camargo@db1.com.br;
- **API Token:** ****

### API1 – Consulta de Notícias:
- **Link:** [StockData.org - API Documentation](https://www.stockdata.org/docs)
- Chamar essa API com os parâmetros:
  - `language`: enviar valor fixo `"en"`;
  - `api_token`: enviar a chave de acesso obtida.

### API2 – Pesquisa de Ação:
- **Link:** [StockData.org - API Documentation](https://www.stockdata.org/docs)
- Chamar essa API com os parâmetros:
  - `search`: enviar texto informado pelo usuário;
  - `api_token`: enviar a chave de acesso obtida.

### API3 – Pesquisa de Ação:
- **Link:** [StockData.org - API Documentation](https://www.stockdata.org/docs)
- Chamar essa API com os parâmetros:
  - `symbols`: enviar símbolo da ação sendo consultada;
  - `api_token`: enviar a chave de acesso obtida.

## Orientações Gerais

- Desenvolver em uma branch com nome e sobrenome neste link: [rcpadilha-db1/experimento-copilot-front (github.com)](https://github.com/rcpadilha-db1/experimento-copilot-front), criar uma branch a partir desse repositório, finalizando subir.
- A aplicação deve seguir uma arquitetura adequada, com separação de responsabilidades e componentização.
- Criar uma camada que encapsule o processo de comunicação com API.
- Seguir boas práticas de desenvolvimento e código limpo.
- Deve ter 100% de cobertura de testes unitários, para a camada de acesso à API e para as funções de formatação e tratamento de dados.
