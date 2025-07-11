
# História de Usuário: Módulo Solicitar Contratação - Locação

## Sumário
- [1. Cenário](#1-cenário)
- [2. Fluxo resumido](#2-fluxo-resumido)
- [3. Nova aba "Contratação de Imóveis"](#3-nova-aba-contratação-de-imóveis)
- [4. Detalhamento por tipo de locação](#4-detalhamento-por-tipo-de-locação)
- [5. Detalhes de cada etapa](#5-detalhes-de-cada-etapa)
- [6. Regras gerais](#6-regras-gerais)

## 1. Cenário
Inclusão da jornada de **Contratação de Imóveis** no Módulo **Solicitar Contratação**, opção "Locação".

## 2. Fluxo resumido
- **Seleção inicial:** Tipo "Contratação de Imóveis" -> opção "Locação".
- **Abas da tela "Solicitação":**
  - Dados Iniciais (sem alterações)
  - Contratação de Imóveis (detalhada nesta HU)
  - Pesquisa de Mercado e Dados Orçamentários
  - Detalhamento
  - Informações Adicionais

As demais abas não serão utilizadas nesta HU.

## 3. Nova aba "Contratação de Imóveis"
Exibe select:
- "Especifique a modalidade de contratação de imóvel?"
  - Locação
  - Cessão
  - Comodato

Se "Locação" for selecionada, exibe:
- "Especifique o tipo de locação"
  - Nova unidade
  - Mudança de endereço
  - Regularização

Conforme tipo selecionado, exibirá etapas específicas de stepper.

## 4. Detalhamento por tipo de locação
### 4.1 Nova unidade
- Botão "Locação precedida de licitação" (default: desabilitado).
- Exibe etapas conforme habilitação.
- Geração de relatório consolidado (PDF/A-1).

### 4.2 Mudança de endereço
Exibe etapas:
- Consulta pública e escolha do imóvel
- Laudo de avaliação
- Justificativas e negociação
- Autorizações
- Financeiro
- Documentação
- Contratação e publicação

### 4.3 Regularização
Semelhante à mudança de endereço.

## 5. Detalhes de cada etapa

### 5.1 Processo Licitatório
- Seleção Rede Varejo/Demais unidades
- Uploads e campos conforme normas

### 5.2 Documentação
- Segue protótipo: [link](https://osvaldojeronymo.github.io/show-input-doc/)

### 5.3 Compliance
- Histórico e autorizações

### 5.4 Análise jurídica e riscos
- Registros de pedidos/impugnações

### 5.5 Financeiro
- ERP/SAP e valores adjudicados

### 5.6 Consulta pública e escolha do imóvel
- Integrado ao SICVE/SILIC 2.0

### 5.7 Laudo de Avaliação
- Data, número, empresa, valores

### 5.8 Justificativas e negociação
- Banco de Prompts, uploads

### 5.9 Autorizações
- Técnicas e Estratégicas

### 5.10 Contratação e publicação
- Modelos online e upload

## 6. Regras gerais
✅ Etapas concluídas apenas quando todos os itens estão em conformidade ou justificados.  
✅ Relatórios exportáveis em PDF/A-1.  
✅ Integrações automatizadas com sistemas CAIXA.

---

_Arquivo gerado para controle, versionamento e leitura clara no GitHub, facilitando colaboração com a fábrica de software e gestão do projeto._
