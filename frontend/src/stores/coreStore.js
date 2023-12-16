import { defineStore } from "pinia"
import coreApi from "@/api/core.api.js"

export const usecoreStore = defineStore("coreStore", {
  state: () => ({
    tweets: [],
    tweetsLoading: false,
  }),
  actions: {
    async getTweets() {
      this.tweetsLoading = true
      const response = await coreApi.getTweets()
      this.tweets = response.tweets
      this.tweetsLoading = false
    },
    async addNewTweet(tarefa) {
      const newTweet = await coreApi.addNewTweet(tarefa.title)
      return newTweet
    },
  },
})
