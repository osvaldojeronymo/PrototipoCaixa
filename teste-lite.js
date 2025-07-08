// Teste mínimo de carregamento
console.log('=== TESTE MÍNIMO ===');

try {
    console.log('Carregando classe...');
    
    class SistemaSILICTeste {
        constructor() {
            console.log('Construtor executado');
            this.imoveis = [];
            this.locadores = [];
            console.log('Dados inicializados');
        }
        
        teste() {
            console.log('Método teste funcionando');
            return true;
        }
    }
    
    console.log('Classe definida, criando instância...');
    const sistema = new SistemaSILICTeste();
    console.log('Instância criada:', sistema);
    console.log('Teste de método:', sistema.teste());
    
    window.sistemaLite = sistema;
    console.log('✅ Sistema lite funcionando');
    
} catch (error) {
    console.error('❌ Erro no teste:', error);
    console.error('Stack:', error.stack);
}
