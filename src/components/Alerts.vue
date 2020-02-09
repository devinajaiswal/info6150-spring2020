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

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert = true" variant="info" class="m-1">
      Group name ({{ showDismissibleAlert ? "visible" : "hidden" }})
    </b-button>
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
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>
