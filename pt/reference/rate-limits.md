# Limites de Taxa da API

Este documento descreve os limites de taxa para acessar as APIs. Seguir esses limites garante desempenho ideal e previne interrupções no serviço.

## API Collector

A API Collector é projetada para lidar com grandes volumes de ingestão de dados. Abaixo estão os limites de taxa para esta API:

- **Limite de Taxa**: 12.000 solicitações por minuto
- **Propósito**: Usada para coletar e enviar dados para a plataforma.
- **Melhores Práticas**:
  - Distribua as solicitações uniformemente ao longo do tempo para evitar picos.
  - Implemente lógica de repetição com backoff exponencial em caso de limitação.

## API de Identidade

A API Zarv ID é usada para operações relacionadas à identidade. Abaixo estão os limites de taxa para esta API:

- **Limite de Taxa**: 1.000 solicitações por minuto
- **Propósito**: Usada para gerenciar e verificar identidades de usuários.
- **Melhores Práticas**:
  - Otimize as solicitações para minimizar chamadas desnecessárias.
  - Use mecanismos de cache, quando aplicável, para reduzir a carga.

## Outras APIs

Essas APIs são usadas para várias operações, como consultar dados, gerenciar recursos e realizar tarefas administrativas. Abaixo estão os limites de taxa para essas APIs:

- **Limite de Taxa**: 2.000 solicitações por minuto
- **Propósito**: Usada para operações gerais de API.
- **Melhores Práticas**:
  - Armazene respostas em cache sempre que possível para reduzir solicitações redundantes.
  - Monitore seu uso para garantir conformidade com os limites de taxa.

## Consequências de Exceder os Limites de Taxa

Exceder os limites de taxa especificados pode resultar em:

- **Limitação**: Redução temporária na velocidade de processamento de solicitações.
- **Interrupções no Serviço**: Potencial negação de serviço para violações repetidas.

## Monitoramento e Suporte

Para ajudá-lo a permanecer dentro dos limites:

- Use as métricas de uso da API fornecidas para monitorar suas taxas de solicitação.
- Entre em contato com o suporte se precisar de limites mais altos ou encontrar problemas.

Certifique-se de que suas aplicações sigam esses limites para manter o acesso ininterrupto às APIs.
