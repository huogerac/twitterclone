import { Response } from "miragejs"
import Cookies from "js-cookie"

const getUserFromCookies = (schema) => {
  const userId = Cookies.get("sessionid")
  if (!userId) {
    return
  }
  return schema.users.find(userId)
}

export const core = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/core/"

      this.get("/tweets/list", function (schema) {
        const loggedUser = getUserFromCookies(schema)
        if (!loggedUser) {
          return new Response(401, {}, "Header de segurança não encontrado")
        }
        return new Response(200, {}, schema.tweets.all())
      })

      this.post("/tweets/add", function (schema, request) {
        const attrs = JSON.parse(request.requestBody)
        const loggedUser = getUserFromCookies(schema)
        if (!loggedUser) {
          return new Response(401, {}, "Header de segurança não encontrado")
        }
        let newTweet = schema.tweets.create({
          description: attrs.description,
          userId: loggedUser.id,
        })
        return new Response(200, {}, newTweet.attrs)
      })
    },
  })
}
