<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-25">
        <user-card name="Paulo Lopes" :cardUserImage="paulo"></user-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-25">
        <user-card name="Thales Gomes" title="Product Owner" :cardUserImage="thales"></user-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-25">
        <user-card name="Cinthia Katiane" :cardUserImage="cinthia"></user-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-25">
        <user-card name="Fernando Maciel" title="Desenvolvedor/product owner"></user-card>
      </div>
    </div>
  </div>
</template>

<script>
import { UserCard } from "@/pages";

export default {
  components: {
    UserCard
  },
  data() {
    return {
      cinthia: require("@/assets/img/faces/cinthia.jpg"),
      paulo: require("@/assets/img/faces/paulo.jpg"),
      thales: require("@/assets/img/faces/thales.jpeg")
    };
  }
};
</script>

<style lang="scss" scoped>
.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}

.md-card {
  margin-top: 50px;
}

.table-responsive {
  overflow: auto;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;

  thead tr th {
    font-size: 1.063rem;
    border-top-width: 0;
    font-weight: 300;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }

  & > tbody > tr > td,
  & > tbody > tr > th,
  & > tfoot > tr > td,
  & > tfoot > tr > th,
  & > thead > tr > td,
  & > thead > tr > th {
    padding: 12px 8px;
    vertical-align: middle;
  }

  & > tbody > tr {
    position: relative;
  }

  td,
  th {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
}
</style>
