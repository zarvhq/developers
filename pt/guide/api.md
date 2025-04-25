# Guia da API

Bem-vindo ao Guia da API Zarv! Este documento fornece uma visão geral de como integrar-se à plataforma Zarv usando nossas APIs. Siga as instruções abaixo para começar.

## Introdução

1. **Cadastre-se para acesso à API**  
  [Registre-se para obter uma chave de API](../request-token.md).

1. **URL Base**  
  Todas as solicitações à API são feitas para a seguinte URL base:  

  ```
  https://api.zarv.com/v1
  ```

3. **Autenticação**  
  Use sua chave de API no cabeçalho `Authorization`:  

  ```
  Authorization: Bearer SUA_CHAVE_DE_API
  ```

## Limites de Taxa

Você pode verificar seus limites de taxa atuais fazendo uma solicitação ao endpoint `/rate-limits`. A resposta incluirá seu uso atual e limites. Mais detalhes sobre limites de taxa podem ser encontrados na [seção de Limites de Taxa](../reference/rate-limits.md).

## Suporte

Se você encontrar algum problema ou tiver dúvidas, entre em contato com nosso [Suporte ao Desenvolvedor](mailto:developers@zarv.com).

Boa codificação!
