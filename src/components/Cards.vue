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
        bg-variant="light"
      >
        <b-list-group v-for="(item, index) in description" :key="index">
          <b-list-group-item variant="success" href="#">{{
            item.text
          }}</b-list-group-item></b-list-group
        ><br />

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
    description: Array,
    buttonText: String
  }
};
</script>
