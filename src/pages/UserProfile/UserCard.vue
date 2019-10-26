<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">{{title}}</h6>
      <h4 class="card-title">{{name}}</h4>
      <p class="card-description">{{description}}</p>
      <md-button class="md-round md-success">
        <a :href="link">Veja mais</a>
      </md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    },
    name: {
      type: String,
      default: "Cinthia Katiane"
    },
    title: {
      type: String,
      default: "Desenvolvedor"
    },
    description: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default:
        "https://www.youtube.com/watch?v=O7LtqEEQv34&list=RDO7LtqEEQv34&start_radio=1"
    }
  },
  data() {
    return {};
  }
};
</script>
<style>
a {
  color: white !important;
}
</style>
