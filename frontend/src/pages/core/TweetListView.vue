<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-card>
          <v-card-title class="headline"> Tweets </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="12">
        <tweet-form :form-label="'New Tweet'" @new-tweet="addNewTweet" />
      </v-col>

      <v-col v-for="item in tweets" :key="item.id" cols="12">
        <tweet :tweet="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "pinia"
import { useBaseStore } from "@/stores/baseStore"
import { usecoreStore } from "@/stores/coreStore"
import Tweet from "@/components/Tweet.vue"
import TweetForm from "@/components/TweetForm.vue"

export default {
  name: "TweetsList",
  components: { Tweet, TweetForm },
  setup() {
    const baseStore = useBaseStore()
    const coreStore = usecoreStore()
    return { baseStore, coreStore }
  },
  computed: {
    ...mapState(usecoreStore, ["tweets", "tweetsLoading"]),
  },
  mounted() {
    this.getTweets()
  },
  methods: {
    getTweets() {
      this.coreStore.getTweets()
    },
    async addNewTweet(tweet) {
      const newTweet = await this.coreStore.addNewTweet(tweet)
      this.baseStore.showSnackbar(`New tweet added #${ newTweet.id }`)
      this.getTweets()
    },
  },
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
