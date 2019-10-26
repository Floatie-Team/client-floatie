<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <form>
          <md-card>
            <md-card-header data-background-color="green">
              <h4 class="title">Registrar</h4>
              <p class="category">Registrar</p>
            </md-card-header>
            <md-card-content>
              <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>User Name</label>
                    <md-input v-model="username" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Email Address</label>
                    <md-input v-model="emailadress" type="email"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>First Name</label>
                    <md-input v-model="firstname" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-50">
                  <md-field>
                    <label>Last Name</label>
                    <md-input v-model="lastname" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100">
                  <md-field maxlength="5">
                    <label>About Me</label>
                    <md-textarea v-model="aboutme"></md-textarea>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-right">
                  <md-button class="md-raised md-success">Registrar</md-button>
                </div>
              </div>
              <div>
                ou retorne ao 
                <router-link to="login"> login. </router-link>
              </div>
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

<style scoped>
.link-text{
  color: black!important;
}
</style>