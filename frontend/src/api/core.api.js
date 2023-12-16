import api from "./config.js"

export default {
  getTweets: async () => {
    const response = await api.get("/api/core/tweets/list")
    return response.data
  },
  addNewTweet: async (description) => {
    const json = JSON.stringify({ description })
    const response = await api.post(
      "/api/core/tweets/add",
      json
    )
    return response.data
  },
}
