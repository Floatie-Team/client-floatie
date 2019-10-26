<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Edite seu perfil</h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nome completo</label>
              <md-input v-model="firstname" type="text" placeholder='Cinthia Katiane'></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Usuário</label>
              <md-input v-model="username" type="text" placeholder='cinthiakatiane'></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Email</label>
              <md-input v-model="emailadress" type="email" placeholder="cinthia.cka@gmail.com"></md-input>
            </md-field>
          </div>
          
          <div class="md-layout-item md-size-50">
            <md-field maxlength="5">
              <label mb-5>Meus títulos</label>
              <md-input v-model="aboutme" type='file' placeholder="titulos.txt"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Atualizar Perfil</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      aboutme:null
    };
  }
};
</script>
<style></style>
