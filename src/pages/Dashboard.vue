<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-chart md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-75">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Gráfico de rendimento</h4>
            <p class="category">Insira suas informações no campo ao lado e veja o rendimento dos seu investimentos</p>
          </md-card-header>
          <!--<md-card-content>
            <template >
              <vue-plotly :data="data" :layout="layout" :options="options"/>
            </template>
          </md-card-content>
          -->
          <md-card-content>
            <div class="iframe-container hidden-sm">
              <iframe src="http://tdcharts.info/titulos">
                <p>Your browser does not support iframes.</p>
              </iframe>
            </div>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-100">
          <stats-card data-background-color="green">
            <template slot="header">
              <md-icon>date_range</md-icon>
            </template>

            <template slot="content">
              <p class="category">Data de compra</p>
              <md-field>
                <md-input type='date' class="title"></md-input>
              </md-field>            
            </template>
          </stats-card>
        </div>

        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-100">
          <stats-card data-background-color="orange">
            <template slot="header">
              <md-icon>attach_money</md-icon>
            </template>

            <template slot="content">
              <p class="category">Valor investido</p>
              <md-field>
                <md-input type='number' class="title"></md-input>
              </md-field>
            </template>

          </stats-card>
        </div>

        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-100">
          <stats-card data-background-color="red">
            <template slot="header">
              <md-icon>collections_bookmark</md-icon>
            </template>

            <template slot="content">
              <p class="category">Tipo do título</p>
              <md-field>
                <md-input type='text' class="title"></md-input>
              </md-field>
            </template>

          </stats-card>
        </div>
      </div>
      <!--<div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Employees Stats</h4>
            <p class="category">New employees on 15th September, 2016</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="orange"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
        <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">Tasks:</span>
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="Bugs" md-icon="bug_report">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-pages" md-label="Website" md-icon="code">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-posts" md-label="server" md-icon="cloud">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div> -->
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from "@/components";
import VuePlotly from '@statnett/vue-plotly'
import axios from 'axios';


export default {
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable,
    VuePlotly
  },
  created() {
    axios.get('https://titulospublicos-266cf.firebaseio.com/tesouro_direto.json')
    .then(response => {
      this.info = response.data['LFT 010321']
      for (var i in this.info) {
        var dia = this.info[i].dia.toString()
        this.data.push({dia, venda: this.info[i].pu_venda_manha})
      }
    })
    .catch(error => {
      console.log(error)
    })
    
  },
  data() {
    return {
      info: null,
      data: [],
      layout: {},
      options: {},

      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      }
    };
  }
};
</script>
