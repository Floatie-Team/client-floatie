<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Notícias da Valor sobre Tesouro Direto</h4>
            <p class="category">
              <a target="_blank" href="https://design.google.com/icons/"
                >Google</a
              >
            </p>
          </md-card-header>

          <md-card-content>
            <div class="iframe-container hidden-sm">
              <iframe src="https://valor.globo.com/busca/?q=tesouro%20direto">
                <p>Your browser does not support iframes.</p>
              </iframe>
            </div>
          </md-card-content>
        </md-card>
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Cotações</h4>
            <p class="category">
              <a target="_blank" href="https://design.google.com/icons/"
                >Google</a
              >
            </p>
          </md-card-header>

          <md-card-content>
            <div class="iframe-container hidden-sm">
              <iframe src="https://www.euqueroinvestir.com/tesouro-direto-hoje-precos-e-taxas-rentabilidade-dos-titulos-publicos/">
                <p>Your browser does not support iframes.</p>
              </iframe>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
