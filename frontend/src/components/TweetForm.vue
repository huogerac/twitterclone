<template>
  <div>
    <v-card>
      <v-card-text>
        <v-text-field
          v-model="title"
          :label="formLabel"
          required
          outlined
          append-icon="fa-pen"
          @keyup.enter="addNewTweet" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    formLabel: {
      type: String,
      default: "",
    },
  },
  emits: ["newTweet"],
  data: () => {
    return {
      title: "",
    }
  },
  methods: {
    addNewTweet() {
      this.$emit("newTweet", {
        title: this.title,
      })
      this.title = ""
    },
  },
}
</script>

<style scoped></style>
