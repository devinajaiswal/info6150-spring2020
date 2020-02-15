<template>
  <div>
    <div>
      <b-card
        overlay
        v-bind:title="title"
        v-bind:img-src="src"
        img-alt="Card Image"
        class="mb-2"
        bg-variant="light"
      >
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "DestinationCard",
  props: {
    src: String,
    title: String
  }
};
</script>
