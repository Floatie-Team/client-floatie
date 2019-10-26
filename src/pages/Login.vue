<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <form>
          <md-card>
            <md-card-header data-background-color="green">
              <h4 class="title">Login</h4>
              <p class="category">Login</p>
            </md-card-header>

            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>Email</label>
                    <md-input v-model="email" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-100">
                  <md-field>
                    <label>Senha</label>
                    <md-input v-model="password" type="password"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-right">
                  <md-button class="md-raised md-success">Entrar</md-button>
                </div>
              </div>
              Você não tem conta?  
              <router-link to="registrar"> Crie uma conta.</router-link>
            </md-card-content>
          </md-card>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:'login',
  data(){
    return {
      email: null,
      password: null,
    };
  },
  methods:{
    login: function(){
      this.$router.replace("home");
    }
  }
};
</script>