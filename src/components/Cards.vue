<template>
  <div>
    <div>
      <b-card
        v-bind:title="title"
        v-bind:img-src="url"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{ description }}
        </b-card-text>

        <b-button href="#" variant="primary">{{ buttonText }}</b-button>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cards",
  props: {
    url: String,
    title: String,
    description: String,
    buttonText: String
  }
};
</script>
