ÁFRICA SOCCER — PROTÓTIPO v1.0
================================

Esta pasta contém uma primeira interface demonstrativa do ÁFRICA SOCCER.

CONTEÚDO
- index.html: estrutura da página
- styles.css: identidade visual e adaptação a telemóveis
- app.js: navegação entre África, América, Europa e Ásia
- manifest.webmanifest: configuração da PWA
- service-worker.js: cache básico para utilização offline
- icons/: ícones SVG da aplicação

IMPORTANTE
- Os jogos e resultados são exemplos visuais, não são resultados reais.
- Esta versão ainda não está ligada a uma API de futebol.
- A lista de competições é uma proposta inicial e a cobertura de cada fornecedor
  deve ser verificada antes de apresentar dados reais.
- O futebol feminino e as categorias jovens ficam fora da versão 1.0.

PUBLICAR NO GITHUB PAGES
1. Criar um repositório público chamado africa-soccer.
2. Enviar todos os ficheiros e a pasta icons para a raiz do repositório.
3. No GitHub, abrir Settings > Pages.
4. Em Build and deployment, escolher Deploy from a branch.
5. Selecionar a branch main e a pasta /(root), depois guardar.
6. Aguardar a publicação e abrir o endereço indicado pelo GitHub Pages.

INSTALAR NO ANDROID
1. Abrir o endereço publicado no Google Chrome.
2. Abrir o menu do Chrome.
3. Escolher Instalar app ou Adicionar ao ecrã inicial, se disponível.

PRÓXIMAS ETAPAS
1. Confirmar cobertura real de Girabola, CAN e competições CAF na API.
2. Criar um backend seguro para proteger a chave da API.
3. Ligar jogos, resultados e classificações reais.
4. Testar desempenho e cache em redes móveis lentas.
