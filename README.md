# 🏢 SILIC 2.0 - Sistema de Locação de Imóveis CAIXA

## 📁 Estrutura do Repositório

```
PrototipoCaixa/
├── README.md                    # Este arquivo
├── COMPARTILHAR.md              # Guia de compartilhamento
├── EMAIL-TEMPLATE.md            # Template de email
├── VERIFICACAO-COMPARTILHAMENTO.md # Checklist de verificação
├── show/                        # 🎯 VERSÃO PRINCIPAL
│   ├── index.html               # Sistema principal
│   ├── script.js                # Lógica completa
│   ├── style.css                # Estilos CAIXA
│   ├── logo-caixa.svg           # Logo institucional
│   ├── silic-imoveis/           # Versão alternativa 1
│   └── silic-v2.0-imoveis/      # Versão alternativa 2
└── [arquivos de desenvolvimento] # Testes e arquivos auxiliares
```

## 🚀 Como Usar

### 📱 Demonstração Rápida
**Acesse diretamente:** https://github.com/osvaldojeronymo/PrototipoCaixa/tree/master/show

### 💻 Instalação Local
```bash
# Clonar repositório
git clone https://github.com/osvaldojeronymo/PrototipoCaixa.git
cd PrototipoCaixa/show

# Executar servidor local
python -m http.server 8000

# Abrir no navegador
# http://localhost:8000
```

### 📥 Download Direto
```
https://github.com/osvaldojeronymo/PrototipoCaixa/archive/refs/heads/master.zip
```
*Extrair e abrir: `show/index.html`*

## ✨ Funcionalidades

### 🏠 Gestão de Imóveis
- ✅ **CRUD Completo:** Criar, ler, atualizar e deletar imóveis
- ✅ **Dados Realistas:** 100+ imóveis pré-cadastrados
- ✅ **Filtros Avançados:** Por status, região, código, denominação
- ✅ **Dashboard:** Métricas em tempo real
- ✅ **Validações:** Códigos SIPGE/SAP, CEPs, datas

### 👥 Gestão de Locadores
- ✅ **Pessoas Físicas:** CPF válido, documentos obrigatórios
- ✅ **Pessoas Jurídicas:** CNPJ válido, documentos empresariais
- ✅ **Vinculação:** Locadores por imóvel
- ✅ **Auditoria:** Status de documentação

### 🔍 Sistema de Auditoria
- ✅ **Validação Completa:** Regras de negócio implementadas
- ✅ **Relatórios:** Status detalhado por imóvel
- ✅ **Métricas:** Progresso de documentação
- ✅ **Alertas:** Documentos pendentes e inconsistências

### 🎨 Interface
- ✅ **Padrão CAIXA:** Visual institucional
- ✅ **Responsivo:** Funciona em desktop e mobile
- ✅ **Moderno:** Bootstrap-like, componentes customizados
- ✅ **Acessível:** Navegação clara e intuitiva

## 🔧 Tecnologias

- **Frontend:** HTML5, CSS3, JavaScript ES6+
- **Dados:** LocalStorage (simulação de banco)
- **UI/UX:** Design System CAIXA
- **Validações:** CPF/CNPJ, CEP, datas, regras de negócio

## 📊 Status do Projeto

| Funcionalidade | Status | Observações |
|---|---|---|
| Gestão de Imóveis | ✅ Completo | CRUD funcional |
| Gestão de Locadores | ✅ Completo | PF e PJ |
| Filtros e Busca | ✅ Completo | Texto e status |
| Auditoria de Dados | ✅ Completo | Validações implementadas |
| Interface CAIXA | ✅ Completo | Padrão visual |
| Integração SIPGE/SAP | 🚧 Interface | Simulado (pronto para integração) |
| Consulta Pública | 🚧 Interface | Simulado (pronto para integração) |

## 🚀 Próximos Passos

### Para Desenvolvedores:
1. **Integração Real:** Conectar com APIs SIPGE/SAP
2. **Banco de Dados:** Migrar de LocalStorage para BD real
3. **Autenticação:** Sistema de login e permissões
4. **Deploy:** Ambiente de produção

### Para Testes:
1. **Acesse:** `show/index.html` (versão principal)
2. **Teste:** Cadastro de imóveis e locadores
3. **Valide:** Filtros e sistema de auditoria
4. **Reporte:** Bugs ou sugestões via Issues

## 📞 Suporte

- **Issues:** https://github.com/osvaldojeronymo/PrototipoCaixa/issues
- **Documentação:** Ver arquivos `.md` na raiz
- **Demo:** Pasta `show/` contém versão funcional

## 📋 Para Compartilhar

Use o template em `EMAIL-TEMPLATE.md` ou envie diretamente:

**URL do Projeto:** https://github.com/osvaldojeronymo/PrototipoCaixa  
**Versão Principal:** https://github.com/osvaldojeronymo/PrototipoCaixa/tree/master/show  
**Download:** https://github.com/osvaldojeronymo/PrototipoCaixa/archive/refs/heads/master.zip

---

**📅 Última Atualização:** Janeiro 2025  
**🏷️ Versão:** 2.0  
**✅ Status:** Pronto para desenvolvimento colaborativo
