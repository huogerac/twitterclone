<template>
  <v-card>
    <v-card-text>
      <div>#{{ tweet.id }}</div>
      <p class="ma-0 pa-0 text-h5 text--primary">
        {{ tweet.description }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TweetsModel",
  props: {
    tweet: {
      type: Object,
      default: null,
      roger: "usalinter",
    },
  },
  data: () => ({}),
}
</script>
