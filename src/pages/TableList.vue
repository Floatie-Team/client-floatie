<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Cotação do dia</h4>
            <p class="category">Aqui está a cotação do dia de hoje.</p>
          </md-card-header>
          <md-card-content>
            <md-table v-model="users" :table-header-color="tableHeaderColor">
              <md-table-row v-for='(item,index) in info' :key='index' >
                <md-table-cell md-label="Título">{{ item.titulo_completo}}</md-table-cell>
                <md-table-cell md-label="Vencimento">{{ item.vencimento }}</md-table-cell>
                <md-table-cell md-label="Compra">{{ item.pu_compra_manha}}</md-table-cell>
                <md-table-cell md-label="Venda">{{ item.pu_venda_manha}}</md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>

     
    </div>
  </div>
</template>

<script>
import { SimpleTable, OrderedTable } from "@/components";
import axios from 'axios';

export default {
  components: {
    OrderedTable,
    SimpleTable
  },
  data () {
    return {
      info: null,
    }
  },
  created() {
    axios.get('https://titulospublicos-266cf.firebaseio.com/tesouro_dia.json')
    .then(response => {
      this.info = response.data
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>