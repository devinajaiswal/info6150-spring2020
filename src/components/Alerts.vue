<template>
  <div>
    <b-alert show>
      <font-awesome-icon icon="hammer" />
      Website developing...
      <font-awesome-icon icon="hammer" />
    </b-alert>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      🐂🍺
    </b-alert>
  </div>
</template>

<script>
export default {
  name: "Alerts",
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  }
};
</script>
