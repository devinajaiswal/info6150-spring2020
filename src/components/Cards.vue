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
        <!-- <b-card-text>
          {{ description }}
        </b-card-text> -->

        <b-list-group>
          <b-list-group-item variant="success" href="#">{{
            description1
          }}</b-list-group-item>
          <b-list-group-item variant="success" href="#">{{
            description2
          }}</b-list-group-item>
          <b-list-group-item variant="success" href="#">{{
            description3
          }}</b-list-group-item>
          <b-list-group-item variant="success" href="#">{{
            description4
          }}</b-list-group-item>
          <b-list-group-item variant="success" href="#">{{
            description5
          }}</b-list-group-item> </b-list-group
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
    // description: String,
    description1: String,
    description2: String,
    description3: String,
    description4: String,
    description5: String,
    buttonText: String
  }
};
</script>
