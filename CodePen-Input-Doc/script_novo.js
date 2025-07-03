// Sistema de Cadastro de Imóveis e Locadores
class SistemaCadastro {
    constructor() {
        this.imoveis = [];
        this.locadores = [];
        this.imovelSelecionado = null;
        this.proximoIdImovel = 1;
        this.proximoIdLocador = 1;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.renderTabelaImoveis();
        this.renderTabelaLocadores();
        this.updateLocadoresInfo();
    }
    
    setupEventListeners() {
        // Cadastro de imóveis
        document.getElementById('adicionarImovel').addEventListener('click', () => {
            this.adicionarImovel();
        });
        
        document.getElementById('enderecoImovel').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.adicionarImovel();
            }
        });
        
        // Cadastro de locadores
        document.getElementById('adicionarLocador').addEventListener('click', () => {
            this.adicionarLocador();
        });
        
        document.getElementById('nomeLocador').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.adicionarLocador();
            }
        });
    }
    
    adicionarImovel() {
        const enderecoInput = document.getElementById('enderecoImovel');
        const endereco = enderecoInput.value.trim();
        
        if (!endereco) {
            alert('Por favor, digite o endereço do imóvel.');
            return;
        }
        
        const novoImovel = {
            id: this.proximoIdImovel++,
            endereco: endereco,
            status: 'Ativo'
        };
        
        this.imoveis.push(novoImovel);
        enderecoInput.value = '';
        this.renderTabelaImoveis();
        
        // Se for o primeiro imóvel, seleciona automaticamente
        if (this.imoveis.length === 1) {
            this.selecionarImovel(novoImovel.id);
        }
    }
    
    adicionarLocador() {
        if (!this.imovelSelecionado) {
            alert('Por favor, selecione um imóvel primeiro.');
            return;
        }
        
        const nomeInput = document.getElementById('nomeLocador');
        const tipoSelect = document.getElementById('tipoLocador');
        
        const nome = nomeInput.value.trim();
        const tipo = tipoSelect.value;
        
        if (!nome) {
            alert('Por favor, digite o nome do locador.');
            return;
        }
        
        const novoLocador = {
            id: this.proximoIdLocador++,
            nome: nome,
            tipo: tipo,
            imovelId: this.imovelSelecionado.id,
            status: 'Ativo'
        };
        
        this.locadores.push(novoLocador);
        nomeInput.value = '';
        this.renderTabelaLocadores();
    }
    
    selecionarImovel(imovelId) {
        this.imovelSelecionado = this.imoveis.find(imovel => imovel.id === imovelId);
        this.renderTabelaImoveis();
        this.renderTabelaLocadores();
        this.updateLocadoresInfo();
    }
    
    removerImovel(imovelId) {
        if (confirm('Tem certeza que deseja remover este imóvel? Todos os locadores vinculados também serão removidos.')) {
            this.imoveis = this.imoveis.filter(imovel => imovel.id !== imovelId);
            this.locadores = this.locadores.filter(locador => locador.imovelId !== imovelId);
            
            if (this.imovelSelecionado && this.imovelSelecionado.id === imovelId) {
                this.imovelSelecionado = null;
            }
            
            this.renderTabelaImoveis();
            this.renderTabelaLocadores();
            this.updateLocadoresInfo();
        }
    }
    
    removerLocador(locadorId) {
        if (confirm('Tem certeza que deseja remover este locador?')) {
            this.locadores = this.locadores.filter(locador => locador.id !== locadorId);
            this.renderTabelaLocadores();
        }
    }
    
    renderTabelaImoveis() {
        const tbody = document.getElementById('tabelaImoveis');
        
        if (this.imoveis.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="4" style="text-align: center; color: #999; font-style: italic;">
                        Nenhum imóvel cadastrado
                    </td>
                </tr>
            `;
            return;
        }
        
        tbody.innerHTML = this.imoveis.map(imovel => `
            <tr class="${this.imovelSelecionado && this.imovelSelecionado.id === imovel.id ? 'selected-row' : ''}">
                <td>${imovel.id}</td>
                <td>${imovel.endereco}</td>
                <td>
                    <span class="status-badge ${this.imovelSelecionado && this.imovelSelecionado.id === imovel.id ? 'selecionado' : 'ativo'}">
                        ${this.imovelSelecionado && this.imovelSelecionado.id === imovel.id ? 'Selecionado' : imovel.status}
                    </span>
                </td>
                <td>
                    <div class="table-actions">
                        <button class="btn btn-primary btn-sm" onclick="sistema.selecionarImovel(${imovel.id})">
                            Selecionar
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="sistema.removerImovel(${imovel.id})">
                            Remover
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }
    
    renderTabelaLocadores() {
        const tbody = document.getElementById('tabelaLocadores');
        
        if (!this.imovelSelecionado) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="4" style="text-align: center; color: #999; font-style: italic;">
                        Selecione um imóvel para visualizar os locadores
                    </td>
                </tr>
            `;
            return;
        }
        
        const locadoresDoImovel = this.locadores.filter(locador => locador.imovelId === this.imovelSelecionado.id);
        
        if (locadoresDoImovel.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="4" style="text-align: center; color: #999; font-style: italic;">
                        Nenhum locador cadastrado para este imóvel
                    </td>
                </tr>
            `;
            return;
        }
        
        tbody.innerHTML = locadoresDoImovel.map(locador => `
            <tr>
                <td>${locador.id}</td>
                <td>${locador.nome}</td>
                <td>${locador.tipo}</td>
                <td>
                    <div class="table-actions">
                        <span class="status-badge ativo">${locador.status}</span>
                        <button class="btn btn-danger btn-sm" onclick="sistema.removerLocador(${locador.id})">
                            Remover
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }
    
    updateLocadoresInfo() {
        const locadoresInfo = document.querySelector('.locadores-info');
        
        if (!this.imovelSelecionado) {
            locadoresInfo.innerHTML = '<p>Selecione um imóvel acima para vincular locadores.</p>';
        } else {
            const qtdLocadores = this.locadores.filter(locador => locador.imovelId === this.imovelSelecionado.id).length;
            locadoresInfo.innerHTML = `
                <p><strong>Imóvel selecionado:</strong> ${this.imovelSelecionado.endereco}</p>
                <p><strong>Locadores vinculados:</strong> ${qtdLocadores}</p>
            `;
        }
    }
}

// Adicionar estilos para linha selecionada
const style = document.createElement('style');
style.textContent = `
    .selected-row {
        background-color: var(--color-bg-hover) !important;
    }
    
    .selected-row:hover {
        background-color: var(--color-bg-light) !important;
    }
`;
document.head.appendChild(style);

// Inicializar o sistema quando a página carregar
let sistema;
document.addEventListener('DOMContentLoaded', () => {
    sistema = new SistemaCadastro();
});
            "Habite-se": true,
            "Permissão Atividade Bancária": true,
            "Manifestação CILOG": true,
            "Documento de Identidade": true,
            "CND Federal": true,
            "Documento Cônjuge": false
        }
    },
    {
        id: 3,
        nome: "Imobiliária Prime LTDA",
        tipo: "Pessoa Jurídica",
        cnpj: "12.345.678/0001-90",
        documentos: {
            "Matrícula do Imóvel": true,
            "Certidão Negativa IPTU": true,
            "Habite-se": false,
            "Permissão Atividade Bancária": true,
            "Manifestação CILOG": false,
            "CNPJ": true,
            "Ato Constitutivo": true,
            "Certidão Junta Comercial": false,
            "CND Federal": true,
            "Certidão FGTS": false,
            "Procuração": true,
            "Documento Representante": true
        }
    },
    {
        id: 4,
        nome: "Carlos Eduardo Ferreira",
        tipo: "Pessoa Física",
        cpf: "456.789.123-03",
        documentos: {
            "Matrícula do Imóvel": true,
            "Certidão Negativa IPTU": false,
            "Habite-se": true,
            "Permissão Atividade Bancária": true,
            "Manifestação CILOG": false,
            "Documento de Identidade": true,
            "CND Federal": false,
            "Documento Cônjuge": false
        }
    },
    {
        id: 5,
        nome: "Ana Paula Costa",
        tipo: "Pessoa Física",
        cpf: "789.123.456-04",
        documentos: {
            "Matrícula do Imóvel": false,
            "Certidão Negativa IPTU": true,
            "Habite-se": false,
            "Permissão Atividade Bancária": false,
            "Manifestação CILOG": true,
            "Documento de Identidade": true,
            "CND Federal": true,
            "Documento Cônjuge": true
        }
    },
    {
        id: 6,
        nome: "Construtora Beta S.A.",
        tipo: "Pessoa Jurídica",
        cnpj: "98.765.432/0001-10",
        documentos: {
            "Matrícula do Imóvel": true,
            "Certidão Negativa IPTU": true,
            "Habite-se": true,
            "Permissão Atividade Bancária": true,
            "Manifestação CILOG": false,
            "CNPJ": true,
            "Ato Constitutivo": false,
            "Certidão Junta Comercial": true,
            "CND Federal": false,
            "Certidão FGTS": true,
            "Procuração": false,
            "Documento Representante": true
        }
    },
    {
        id: 7,
        nome: "Roberto Silva Machado",
        tipo: "Pessoa Física",
        cpf: "321.654.987-05",
        documentos: {
            "Matrícula do Imóvel": true,
            "Certidão Negativa IPTU": true,
            "Habite-se": true,
            "Permissão Atividade Bancária": true,
            "Manifestação CILOG": false,
            "Documento de Identidade": true,
            "CND Federal": true,
            "Documento Cônjuge": false
        }
    },
    {
        id: 8,
        nome: "Fernanda Santos Almeida",
        tipo: "Pessoa Física",
        cpf: "654.321.789-06",
        documentos: {
            "Matrícula do Imóvel": false,
            "Certidão Negativa IPTU": false,
            "Habite-se": true,
            "Permissão Atividade Bancária": true,
            "Manifestação CILOG": true,
            "Documento de Identidade": true,
            "CND Federal": false,
            "Documento Cônjuge": true
        }
    },
    {
        id: 9,
        nome: "Empreendimentos Gama LTDA",
        tipo: "Pessoa Jurídica",
        cnpj: "11.222.333/0001-44",
        documentos: {
            "Matrícula do Imóvel": true,
            "Certidão Negativa IPTU": false,
            "Habite-se": false,
            "Permissão Atividade Bancária": true,
            "Manifestação CILOG": false,
            "CNPJ": true,
            "Ato Constitutivo": true,
            "Certidão Junta Comercial": true,
            "CND Federal": true,
            "Certidão FGTS": false,
            "Procuração": true,
            "Documento Representante": false
        }
    },
    {
        id: 10,
        nome: "Luciana Pereira Nunes",
        tipo: "Pessoa Física",
        cpf: "147.258.369-07",
        documentos: {
            "Matrícula do Imóvel": true,
            "Certidão Negativa IPTU": true,
            "Habite-se": true,
            "Permissão Atividade Bancária": true,
            "Manifestação CILOG": false,
            "Documento de Identidade": true,
            "CND Federal": true,
            "Documento Cônjuge": true
        }
    }
];

let paginaAtual = 1;
let itensPorPagina = 10;

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado - iniciando aplicação...');
    console.log('Total de locadores:', locadores.length);
    
    // Configurar evento do select de itens por página
    const selectElement = document.getElementById('itensPorPaginaSelect');
    if (selectElement) {
        selectElement.addEventListener('change', (e) => {
            itensPorPagina = parseInt(e.target.value);
            paginaAtual = 1;
            atualizarTabela();
        });
    }
    
    // Atualizar informações do imóvel
    const imovelInfoElement = document.querySelector('.imovel-info');
    if (imovelInfoElement) {
        imovelInfoElement.innerHTML = 
            `<strong>Imóvel ${imovelAtual.id}:</strong> ${imovelAtual.endereco} - ${imovelAtual.tipo} (${imovelAtual.area})`;
    }
    
    // Carregar tabela inicial
    atualizarTabela();
});

function atualizarTabela() {
    console.log('Atualizando tabela...');
    
    const tbody = document.getElementById('tabelaLocadores');
    if (!tbody) {
        console.error('Elemento tabelaLocadores não encontrado!');
        return;
    }
    
    tbody.innerHTML = '';

    const totalPaginas = Math.ceil(locadores.length / itensPorPagina);
    const inicio = (paginaAtual - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;
    const paginaItens = locadores.slice(inicio, fim);
    
    console.log(`Página ${paginaAtual} de ${totalPaginas} - Mostrando ${paginaItens.length} itens`);

    paginaItens.forEach(locador => {
        const row = document.createElement('tr');
        
        // Coluna com informações do locador
        const locadorInfo = `
            <div class="locador-info">
                <div class="locador-nome">${locador.nome}</div>
                <div class="locador-tipo">${locador.tipo}</div>
                <div class="locador-documento">${locador.tipo === 'Pessoa Física' ? locador.cpf : locador.cnpj}</div>
            </div>
        `;
        
        // Documentos organizados por categoria
        let docHtml = '';
        
        // Separar documentos por categoria
        const docsImovel = [];
        const docsLocador = [];
        const docsRepresentante = [];
        
        for (let doc in locador.documentos) {
            if (doc.includes('Matrícula') || doc.includes('IPTU') || doc.includes('Habite') || 
                doc.includes('Permissão') || doc.includes('Manifestação')) {
                docsImovel.push(doc);
            } else if (doc.includes('Procuração') || doc.includes('Representante')) {
                docsRepresentante.push(doc);
            } else {
                docsLocador.push(doc);
            }
        }
        
        // Função para criar grupo de documentos
        const criarGrupoDocumentos = (titulo, documentos, cor) => {
            if (documentos.length === 0) return '';
            
            let grupoHtml = `<div class="documento-grupo">
                <div class="grupo-titulo" style="color: ${cor};">📋 ${titulo}</div>`;
            
            documentos.forEach(doc => {
                const isEntregue = locador.documentos[doc];
                const statusClass = isEntregue ? 'entregue' : 'pendente';
                const statusText = isEntregue ? 'Documento entregue' : 'Documento não entregue';
                const clickable = !isEntregue ? `onclick="uploadDocumento(${locador.id}, '${doc}')"` : '';
                const cursor = !isEntregue ? 'clickable' : 'completed';
                
                grupoHtml += `
                <div class="document-dropbox ${cursor}" ${clickable}>
                    <div class="document-header">
                        <span class="document-icon">📁</span>
                        <span class="document-name">${doc}</span>
                        <span class="status-indicator ${statusClass}">●</span>
                    </div>
                    <div class="document-status">
                        <span class="status-text ${statusClass}">${statusText}</span>
                        ${!isEntregue ? '<span class="upload-hint">(clicável para upload)</span>' : ''}
                    </div>
                </div>`;
            });
            
            grupoHtml += '</div>';
            return grupoHtml;
        };
        
        // Criar grupos de documentos
        docHtml += criarGrupoDocumentos('Documentação do Imóvel', docsImovel, '#0066cc');
        docHtml += criarGrupoDocumentos('Documentação do Locador', docsLocador, '#28a745');
        if (docsRepresentante.length > 0) {
            docHtml += criarGrupoDocumentos('Representante Legal', docsRepresentante, '#dc3545');
        }
        
        row.innerHTML = `<td>${locador.id}</td><td>${locadorInfo}</td><td class="documents-cell">${docHtml}</td>`;
        tbody.appendChild(row);
    });

    // Atualizar informações de paginação
    const paginationInfo = document.getElementById('pagination-info');
    if (paginationInfo) {
        paginationInfo.textContent = `Página ${paginaAtual} de ${totalPaginas}`;
    }
    
    const paginationButtons = document.getElementById('pagination-buttons');
    if (paginationButtons) {
        paginationButtons.innerHTML = '';

        const prevBtn = document.createElement('button');
        prevBtn.textContent = 'Anterior';
        prevBtn.className = 'pagination-button';
        prevBtn.disabled = paginaAtual === 1;
        prevBtn.onclick = () => { paginaAtual--; atualizarTabela(); };

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Próxima';
        nextBtn.className = 'pagination-button';
        nextBtn.disabled = paginaAtual === totalPaginas;
        nextBtn.onclick = () => { paginaAtual++; atualizarTabela(); };

        paginationButtons.appendChild(prevBtn);
        paginationButtons.appendChild(nextBtn);
    }
    
    console.log('Tabela atualizada com sucesso!');
}

function uploadDocumento(id, doc) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '*/*';
    input.onchange = () => {
        if (input.files.length > 0) {
            const locador = locadores.find(l => l.id === id);
            locador.documentos[doc] = true;
            atualizarTabela();
            alert(`Documento "${doc}" entregue para ${locador.nome}`);
        }
    };
    input.click();
}
